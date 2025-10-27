import { QAChat } from "../components/QAChat";
import type { QAItem } from "../components/QAChat";

const qaItems: QAItem[] = [
  {
    id: "summary",
    question: "Can you summarize your past experience?",
    answer: (
      <>
        <h3 className="text-xl font-semibold mb-2">EXPERIENCE</h3>
        <p>
          Developed and maintained web and mobile applications that have been
          downloaded 5M+ times at a fast-growing startup.
        </p>
        <p className="mt-3 font-medium">Key achievements:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Drove technical decisions, design reviews, and code reviews as
            Technical Lead, ensuring systems remained scalable and durable as
            the service and team grew.
          </li>
          <li>
            Led projects end-to-end—clarified scope and priorities, articulated
            business rationale, delegated work strategically, and partnered with
            management to adjust schedules.
          </li>
          <li>
            Migrated a monolith to Go and gRPC-based microservices on GKE,
            boosting scalability, reliability, maintainability, and deployment
            frequency.
          </li>
          <li>
            Established observability culture and tooling with Datadog and
            OpenTelemetry, enabling engineers to detect incidents and respond in
            minutes to improve our customers’ experience.
          </li>
          <li>
            Built a property-data import pipeline with CronJobs, Cloud Tasks,
            Cloud Spanner, and Elasticsearch that processes 5M+ records daily.
          </li>
          <li>
            Developed a BFF microservice exposing authenticated APIs (Cloud
            Armor, HMAC signatures) and a scheduled data-export job for B2B
            integrations.
          </li>
          <li>
            Conducted technical interviews for backend roles, assessing system
            design, coding proficiency, and problem-solving skills.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "recent",
    question: "What’s your most recent role?",
    answer: (
      <>
        <p>
          I'm working as an{" "}
          <span className="text-main">Individual Contributor</span> to solve
          mainly backend problems.
        </p>
        <p>
          I'm recently dealing with a huge refactoring of entire codebase of our
          service.
        </p>
      </>
    ),
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
