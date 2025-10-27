import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "who",
    question: "Who are you?",
    answer: (
      <>
        <p>
          I'm Rai Watanabe, a software engineer focused on{" "}
          <span className="text-main">backend development</span>.
        </p>
        <p>I'm from Akita, Japan 🇯🇵.</p>
        <p>became 26 years old on 2025/09/10.</p>
      </>
    ),
  },
  {
    id: "where",
    question: "Where are you based?",
    answer: <p>I'm based in Vancouver, Canada 🇨🇦 for now.</p>,
  },
  {
    id: "focus",
    question: "What problems do you like solving?",
    answer: (
      <p>
        I like solving problems that handle a large amount of data, acting as an
        architect who designs the system architecture and implements the system.
      </p>
    ),
  },
  {
    id: "essential",
    question: "What is the essential item to develop?",
    answer: <p>Delicious coffee ☕️</p>,
  },
  {
    id: "learning",
    question: "What are you learning recently?",
    answer: (
      <>
        <p>I'm mainly learning about four things recently:</p>
        <h2 className="text-xl font-bold mt-4">
          1. Refactoring code effectively
        </h2>
        <p>
          I'm learning about how to refactor code effectively. I'm reading the
          books:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <p>
              "Refactoring: Improving the Design of Existing Code" by Martin
              Fowler
            </p>
          </li>
          <li>
            <p>"Clean Code" by Robert C. Martin</p>
          </li>
          <li>
            <p>"Refactoring to Patterns" by Joshua Kerievsky</p>
          </li>
        </ul>
        {/* 2 */}
        <h2 className="text-xl font-bold mt-4">2. System design</h2>
        <p>I'm learning about how to design a system effectively.</p>
        {/* 3 */}
        <h2 className="text-xl font-bold mt-4">3. LLMs</h2>
        <p>I think this learning it is inevitable as an software engineer.</p>
        {/* 4 */}
        <h2 className="text-xl font-bold mt-4">4. English</h2>
        <p>
          I can't speak English enough to work, so I have to deal with it...🥲
        </p>
      </>
    ),
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
