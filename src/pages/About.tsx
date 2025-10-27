import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "who",
    question: "Who are you?",
    answer: <></>,
  },
  {
    id: "where",
    question: "Where are you based?",
    answer: <></>,
  },
  {
    id: "stack",
    question: "What is your main stack?",
    answer: <></>,
  },
  {
    id: "focus",
    question: "What problems do you like solving?",
    answer: <></>,
  },
];

export function About() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold text-main mb-4">About</h1>
      <p className="text-light/80 mb-6">
        Chat with the quick questions below to learn about me.
      </p>
      <QAChat items={qaItems} />
    </section>
  );
}
