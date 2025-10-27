import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="grid md:grid-cols-[auto,1fr] items-start gap-6">
      <img
        src={"rai.jpg"}
        alt="rai's avatar"
        className="w-40 h-40 md:w-48 md:h-48 rounded-xl ring-2 ring-main"
      />
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-3">
          Hi, I'm <span className="text-main">Rai</span>.
        </h1>
        <p className="text-light/80 mb-6">
          I'm a software engineer with 4+ years of backend engineering and
          technical leadership experience in real-estate tech.
        </p>
        <Link
          to="/about"
          className="inline-block px-5 py-2 rounded bg-main text-dark font-semibold hover:opacity-90"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
