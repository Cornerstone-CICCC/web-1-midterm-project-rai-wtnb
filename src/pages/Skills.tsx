import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "langs",
    question: "Which languages do you use?",
    answer: (
      <>
        <p>
          I can use only{" "}
          <a
            href="https://go.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main underline"
          >
            Go
          </a>
          .
        </p>
        <p>Most of my career, I've been using Go to create microservices.</p>
        <p>
          I like this language because it's simple that means you can keep the
          codebase clean and easy to understand if the code rules are strictly
          followed.
        </p>
        <p>
          What's more, you can wirte concurrent code easily with this language
          by using goroutines.
        </p>
      </>
    ),
  },
  {
    id: "tech-stack",
    question: "What is your tech stack?",
    answer: (
      <>
        <p>I've been using the following tech stack for most of my career:</p>
        <ul className="list-disc pl-4">
          <li>Go</li>
          <li>
            <ul>
              GoogleCloud
              <ul className="list-disc pl-4">
                <li>Kubernetes Engine</li>
                <li>Cloud Run</li>
                <li>Cloud Functions</li>
                <li>Cloud Spanner</li>
                <li>Cloud Storage</li>
                <li>Cloud Logging</li>
                <li>Cloud Monitoring</li>
                <li>Cloud Pub/Sub</li>
                <li>Cloud Tasks</li>
                <li>Cloud Bigquery</li>
                <li>Memorystore for Redis</li>
                <li> Cloud Armor</li>
              </ul>
            </ul>
          </li>
          <li>Elasticsearch</li>
          <li>gRPC</li>
          <li>Datadog</li>
          <li>OpenTelemetry</li>
          <li>Terraform</li>
          <li>PipeCD</li>
        </ul>
        <p className="mt-4">
          Since I had a experience of Technical Leadership, I have following
          soft skills:
          <ul className="list-disc pl-4">
            <li>Technical Decision-Making</li>
            <li>Project Management</li>
            <li>Code Review</li>
            <li>Technical Interviewing</li>
            <li>Hiring & Mentoring</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: "strength",
    question: "Your biggest strength?",
    answer: (
      <>
        <p>
          My biggest strength is my ability to make{" "}
          <span className="text-main">decisions strictly and efficiently</span>.
        </p>
        <p>I think decision-making is the most crucial skill</p>
      </>
    ),
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
