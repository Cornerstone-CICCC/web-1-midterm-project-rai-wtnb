import {
  useMemo,
  useState,
  useEffect,
  useRef,
  isValidElement,
  cloneElement,
} from "react";
import type { ReactNode, ReactElement } from "react";
import { Link } from "react-router-dom";

export type QAItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type QAChatProps = {
  items: QAItem[];
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "thinking";
  content: ReactNode;
};

export function QAChat({ items }: QAChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [askedIds, setAskedIds] = useState<Set<string>>(new Set());
  const endRef = useRef<HTMLDivElement | null>(null);

  // Animation speeds
  const STREAM_INTERVAL_MS = 12; // tick rate
  const CHARS_PER_TICK = 5; // how many "units" per tick
  const THINKING_DELAY_MS = 300; // initial thinking delay
  const FALLBACK_DELAY_MS = 400; // when no content to stream

  const quickMenu = useMemo(() => items, [items]);
  const allAsked = askedIds.size >= quickMenu.length && quickMenu.length > 0;

  // Measure total stream units (characters + media units)
  function measureUnits(node: ReactNode): number {
    if (node == null) return 0;
    if (typeof node === "string" || typeof node === "number") {
      return String(node).length;
    }
    if (Array.isArray(node)) {
      return node.reduce((sum, child) => sum + measureUnits(child), 0);
    }
    if (isValidElement(node)) {
      const el = node as ReactElement<{ children?: ReactNode }>;
      if (typeof el.type === "string" && el.type.toLowerCase() === "img") {
        // Treat each image as 1 unit so it appears at the right point
        return 1;
      }
      return measureUnits(el.props.children);
    }
    return 0;
  }

  // Reveal tree up to a given number of units
  function renderWithProgress(node: ReactNode, progress: number): ReactNode {
    const remaining = { value: progress };
    function reveal(n: ReactNode): ReactNode | null {
      if (remaining.value <= 0 || n == null) return null;
      if (typeof n === "string" || typeof n === "number") {
        const text = String(n);
        const take = Math.min(remaining.value, text.length);
        remaining.value -= take;
        return text.slice(0, take);
      }
      if (Array.isArray(n)) {
        const out: ReactNode[] = [];
        for (const child of n) {
          const r = reveal(child);
          if (r != null && r !== "") out.push(r);
          if (remaining.value <= 0) break;
        }
        return out.length ? out : null;
      }
      if (isValidElement(n)) {
        const el = n as ReactElement<{ children?: ReactNode }>;
        if (typeof el.type === "string" && el.type.toLowerCase() === "img") {
          if (remaining.value <= 0) return null;
          remaining.value -= 1;
          return el;
        }
        const revealedChildren = reveal(el.props.children);
        if (revealedChildren == null) return null;
        return cloneElement(el, el.props, revealedChildren);
      }
      return null;
    }
    return reveal(node);
  }

  function ask(item: QAItem) {
    if (isThinking) return;
    const userMsg: ChatMessage = {
      id: `${item.id}-q`,
      role: "user",
      content: item.question,
    };
    setMessages((prev) => [
      ...prev,
      userMsg,
      { id: `${item.id}-thinking`, role: "thinking", content: "" },
    ]);
    setIsThinking(true);
    setAskedIds((prev) => new Set(prev).add(item.id));

    const totalUnits = measureUnits(item.answer);
    if (totalUnits > 0) {
      const answerId = `${item.id}-a`;
      setTimeout(() => {
        // Replace thinking with empty assistant bubble
        setMessages((prev) =>
          prev
            .filter((m) => m.role !== "thinking")
            .concat({ id: answerId, role: "assistant", content: "" })
        );

        let progress = 0;
        const interval = setInterval(() => {
          progress += CHARS_PER_TICK;
          if (progress > totalUnits) progress = totalUnits;
          const partialNode = renderWithProgress(item.answer, progress);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === answerId ? { ...m, content: partialNode } : m
            )
          );
          if (progress >= totalUnits) {
            clearInterval(interval);
            setIsThinking(false);
          }
        }, STREAM_INTERVAL_MS);
      }, THINKING_DELAY_MS);
    } else {
      setTimeout(() => {
        setMessages((prev) =>
          prev
            .filter((m) => m.role !== "thinking")
            .concat({
              id: `${item.id}-a`,
              role: "assistant",
              content: item.answer,
            })
        );
        setIsThinking(false);
      }, FALLBACK_DELAY_MS);
    }
  }

  useEffect(() => {
    // Always scroll to the latest message
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="space-y-4">
      {/* Chat area */}
      <section className="min-h-72">
        <div className="space-y-3">
          {messages.map((m) => {
            const isAssistant = m.role !== "user"; // assistant or thinking
            return (
              <div
                key={m.id}
                className={`flex items-start gap-3 ${
                  isAssistant ? "" : "justify-end"
                }`}
              >
                {isAssistant && (
                  <img
                    src="/rai.jpg"
                    alt="Rai"
                    className="w-9 h-9 rounded ring-1 ring-main/50 mt-0.5"
                  />
                )}
                <span
                  className={
                    "inline-block px-3 py-2 bg-dark/80 text-light rounded border border-light/10"
                  }
                >
                  {m.role === "thinking" ? "Thinking..." : m.content}
                </span>
              </div>
            );
          })}
          <div ref={endRef} />
        </div>
      </section>

      {/* Question suggestions below */}
      <div className="space-y-2">
        <h2 className="text-sm uppercase tracking-wide text-light/50">
          Questions
        </h2>
        <ul className="flex flex-wrap gap-2">
          {quickMenu.map((q) => {
            const disabled = askedIds.has(q.id);
            return (
              <li key={q.id}>
                <button
                  onClick={() => ask(q)}
                  disabled={disabled}
                  className={
                    `border px-3 py-2 rounded bg-gray/60 hover:bg-gray transition-colors text-left ` +
                    (disabled ? "opacity-50 cursor-not-allowed" : "")
                  }
                >
                  {q.question}
                </button>
              </li>
            );
          })}
        </ul>
        {allAsked && (
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block border px-4 py-2 rounded bg-main text-dark font-semibold hover:opacity-90"
            >
              You'd like to know me more?
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
