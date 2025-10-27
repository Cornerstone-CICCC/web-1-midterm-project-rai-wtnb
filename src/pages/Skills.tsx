import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "langs",
    question: "Which languages do you use?",
    answer: <></>,
  },
  {
    id: "tools",
    question: "What tools do you like?",
    answer: <></>,
  },
  {
    id: "strength",
    question: "Your biggest strength?",
    answer: <></>,
  },
];

export function Skills() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold text-main mb-4">Skills</h1>
      <p className="text-light/80 mb-6">
        Pick a question to learn about my toolset.
      </p>
      <QAChat items={qaItems} />
    </section>
  );
}
