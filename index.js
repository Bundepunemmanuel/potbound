import Head from "next/head";
import { crops } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Potbound | Container Vegetable Gardening, By the Numbers</title>
        <meta
          name="description"
          content="Container sizes cited to the actual reason they matter, not rounded-off averages. Start with your crop."
        />
      </Head>

      <main className="wrap">
        <section className="hero">
          <h1>
            Every container size guide gives you a <span>different number</span>.
            Here&apos;s why, and which one is actually right for your plant.
          </h1>
          <p>
            Pot size depends on one thing most guides never ask: which
            variety you&apos;re growing. Pick your crop below for the
            breakdown, cited to the actual root behavior behind the number.
          </p>
        </section>

        <div className="case-grid">
          {crops.map((c) => (
            <a key={c.slug} href={`/${c.slug}`} className="case-card">
              <div className="case-top">
                <span className="case-title">{c.title}</span>
                <span className="status-tag">{c.tag}</span>
              </div>
              <div className="case-desc">{c.desc}</div>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
