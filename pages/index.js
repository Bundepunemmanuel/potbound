import SeoHead from "../SeoHead";
import { crops } from "../data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Potbound",
  url: "https://potbound.vercel.app",
  description:
    "Container vegetable gardening sizes cited to the actual root and growth mechanism behind each number.",
};

export default function Home() {
  return (
    <>
      <SeoHead
        title="Potbound | Container Vegetable Gardening, By the Numbers"
        description="Container sizes cited to the actual reason they matter, not rounded-off averages. Start with your crop."
        path="/"
        jsonLd={jsonLd}
      />

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
          <a href="#crops" className="cta" style={{ display: "inline-block", width: "auto", padding: "13px 24px" }}>
            Find your crop&apos;s container size ↓
          </a>
        </section>

        <div className="trust-strip">
          <div className="trust-item">
            <div className="trust-k">Method</div>
            <div className="trust-v">Root behavior, not rounded averages</div>
          </div>
          <div className="trust-item">
            <div className="trust-k">Cost</div>
            <div className="trust-v">Every tool and download is free</div>
          </div>
          <div className="trust-item">
            <div className="trust-k">Sourcing</div>
            <div className="trust-v">Reasoning shown, limits disclosed</div>
          </div>
        </div>

        <h2 id="crops" style={{ marginTop: 40 }}>Pick your crop</h2>
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

        <div className="method-explainer" style={{ marginBottom: 24, background: "var(--structure)", border: "none" }}>
          <h2 style={{ color: "#fff" }}>The full planning workbook, free</h2>
          <p style={{ color: "#CBD5E1" }}>
            Crop selection, layout planning, a season-long calendar, a
            watering tracker, a budget sheet, and a harvest log — seven pages,
            no email required.
          </p>
          <a href="/downloads/container-garden-planning-workbook.pdf" className="cta" style={{ background: "var(--accent)" }}>
            Download the Planning Workbook (free PDF)
          </a>
        </div>

        <div className="method-explainer">
          <h2>Why every page here starts with a disagreement</h2>
          <p>
            Search any &quot;container size for [crop]&quot; question and you&apos;ll get
            several confident, contradictory answers. That&apos;s not because
            someone&apos;s wrong — it&apos;s because almost none of them name the one
            variable that actually determines the number: which variety, and
            what growth habit it has. We start every page by naming that
            variable, then give you a range built around it instead of one
            flat figure.
          </p>
          <p>
            Read more about how we build these numbers, and their real limits,
            on the <a href="/about">About &amp; Methodology</a> page.
          </p>
        </div>
      </main>
    </>
  );
}
