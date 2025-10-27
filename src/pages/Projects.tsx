import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "featured",
    question: "What is your featured project?",
    answer: <></>,
  },
  {
    id: "stack",
    question: "Which tech do you prefer for web apps?",
    answer: <></>,
  },
  {
    id: "link",
    question: "Where can I see the code?",
    answer: <></>,
  },
];

export function Projects() {
  return (
    <section className="max-w-5xl">
      <h1 className="text-3xl font-bold text-main mb-4">Projects</h1>
      <p className="text-light/80 mb-6">
        Ask about my work through the quick questions.
      </p>
      <QAChat items={qaItems} />
    </section>
  );
}
