import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "portfolio",
    question: "Can you explain this portfolio?",
    answer: (
      <>
        <h2 className="text-xl font-bold mt-4">Tech Stack</h2>
        <p>
          This portfolio is a simple portfolio website built with React and
          Tailwind CSS. I used Vite to build the website.
        </p>
        <p>
          React is just a UI library, so I use React Router to navigate between
          pages.
        </p>
        <div className="mt-3 flex items-center gap-4">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
            className="w-8 h-8"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            className="w-8 h-8"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg"
            alt="Vite"
            className="w-8 h-8"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/reactrouter/reactrouter-original.svg"
            alt="React Router"
            className="w-8 h-8"
          />
        </div>
        <h2 className="text-xl font-bold mt-4">Design</h2>
        <p className="mt-2">It's like a chatbot, but I don't use any LLMs.</p>
        <p>It's just imitating a chatbot.</p>
        <p className="mt-2">There's a famous sentence:</p>
        <blockquote className="italic">"Fake it till you make it."</blockquote>
        <p>
          I just did it because in this time, we don't create connections with
          servers.
        </p>
        <p className="mt-2">I created the icon by using Gemini(Nano Banana)</p>
        <img src="icon.png" alt="icon" className="w-20 h-20" />
        <p>It's not sophisticated, but it's enough for now.</p>
      </>
    ),
  },
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
