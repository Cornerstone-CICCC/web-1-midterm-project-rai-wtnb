import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "recent",
    question: "What’s your most recent role?",
    answer: <></>,
  },
  {
    id: "team",
    question: "What team sizes have you worked with?",
    answer: <></>,
  },
  {
    id: "impact",
    question: "A memorable impact?",
    answer: <></>,
  },
];

export function Experiences() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold text-main mb-4">Experiences</h1>
      <p className="text-light/80 mb-6">Ask about my background and roles.</p>
      <QAChat items={qaItems} />
    </section>
  );
}
