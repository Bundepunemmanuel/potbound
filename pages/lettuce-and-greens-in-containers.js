import Head from "next/head";
import ContainerTool from "../ContainerTool";

const varieties = [
  { value: "loose", label: "Loose-leaf lettuce", size: "6\" deep, any width", depth: '6"', why: "Loose-leaf types are harvested a few outer leaves at a time and never need to form a dense core, so their root demand stays shallow and constant all season." },
  { value: "head", label: "Head lettuce (butterhead, romaine)", size: "8\" deep, 8\" spacing", depth: '8"', why: "Forming a tight head requires more sustained root support than loose-leaf types, and needs real per-plant spacing to avoid crowding the developing head." },
  { value: "greens", label: "Spinach, arugula, mustard greens", size: "6\" deep, any width", depth: '6"', why: "Fast-cycling greens are typically cut before roots ever need to support more than a few weeks of growth — depth barely matters here." },
];

export default function LettucePage() {
  return (
    <>
      <Head>
        <title>Lettuce & Greens in Containers | Why Depth Matters Less Than You Think | Potbound</title>
        <meta name="description" content="Lettuce container guides argue over depth, but width and spacing are the numbers that actually determine your harvest." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Lettuce &amp; Greens in Containers: Why Depth Matters Less Than You Think</h1>
        <p className="intro">One guide says a <mark>6-inch pot is enough</mark>. Another insists you need a <mark className="g">large planter box</mark>. Both are talking about depth, and depth was never the number that mattered most for this crop.</p>

        <div className="disagree-box">
          <strong>Where the &quot;lettuce container size&quot; disagreement actually comes from:</strong>
          <ul>
            <li>Lettuce and greens have genuinely shallow roots — 6 inches covers almost every type</li>
            <li>The &quot;needs a large planter&quot; advice is really about width and per-plant spacing, mislabeled as a depth requirement</li>
            <li>Guides that don&apos;t separate these two measurements end up contradicting each other over a distinction they never named</li>
          </ul>
        </div>

        <h2>Container size for lettuce: the depth question is mostly already answered</h2>
        <p>Lettuce and most leafy greens have fibrous, shallow root systems that rarely extend past 6 to 8 inches regardless of variety. That part is genuinely simple and doesn&apos;t vary much crop to crop. What varies — and what actually drives the &quot;you need a bigger container&quot; advice — is how many plants you&apos;re trying to fit side by side. A single 6-inch pot growing one lettuce plant is correctly sized. That same 6-inch pot growing four crowded seedlings is undersized, not because it&apos;s too shallow, but because it&apos;s too narrow for four root systems competing at once.</p>

        <div className="diagram-box">
          <svg viewBox="0 0 400 190" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
            <defs>
              <filter id="lt1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="21" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter>
            </defs>
            <path d="M40 90 L34 150 L110 150 L104 90 Z" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round" filter="url(#lt1)" />
            <ellipse cx="72" cy="80" rx="26" ry="14" fill="none" stroke="#16A34A" strokeWidth="1.6" filter="url(#lt1)" />
            <text x="72" y="30" textAnchor="middle" className="sketch-font" fontSize="13" fill="#1E293B">1 plant</text>
            <text x="72" y="50" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">correctly sized</text>

            <path d="M180 90 L172 150 L328 150 L320 90 Z" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" filter="url(#lt1)" />
            <ellipse cx="215" cy="78" rx="22" ry="12" fill="none" stroke="#16A34A" strokeWidth="1.4" filter="url(#lt1)" />
            <ellipse cx="255" cy="78" rx="22" ry="12" fill="none" stroke="#16A34A" strokeWidth="1.4" filter="url(#lt1)" />
            <ellipse cx="295" cy="78" rx="22" ry="12" fill="none" stroke="#16A34A" strokeWidth="1.4" filter="url(#lt1)" />
            <text x="250" y="30" textAnchor="middle" className="sketch-font" fontSize="13" fill="#2563EB">3 plants</text>
            <text x="250" y="50" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">needs width, not depth</text>

            <text x="200" y="175" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">same 6&quot; depth works for both</text>
          </svg>
          <div className="diagram-caption">Both containers are the correct depth. Only the wider one has the correct width for the number of plants inside it.</div>
        </div>

        <h2>Try it: container depth and spacing, by lettuce type</h2>
        <ContainerTool label="Select your lettuce or green type" varieties={varieties} />

        <div className="callout">
          <strong>Spacing is the number to actually plan around.</strong> Give loose-leaf and baby greens roughly 4 to 6 inches between plants, and head-forming types 8 inches or more. A window box or long planter almost always solves lettuce spacing better than a single deep pot, because it adds width without adding unnecessary depth.
        </div>

        <h2>Best container for growing lettuce and greens: breakdown</h2>
        <table>
          <tbody>
            <tr><th>Type</th><th>Min. depth</th><th>Spacing per plant</th><th>Best container shape</th></tr>
            <tr><td>Loose-leaf lettuce</td><td>6&quot;</td><td>4–6&quot;</td><td>Wide, shallow</td></tr>
            <tr><td>Head lettuce (butterhead, romaine)</td><td>8&quot;</td><td>8&quot;</td><td>Wide, medium depth</td></tr>
            <tr><td>Spinach, arugula, mustard greens</td><td>6&quot;</td><td>3–4&quot;</td><td>Wide, shallow</td></tr>
          </tbody>
        </table>

        <h2>How much sunlight do container greens need</h2>
        <p>4 to 6 hours daily, noticeably less than fruiting crops like tomatoes or peppers. This is also why lettuce and greens tend to be the most forgiving starting crop for a shaded balcony or an east-facing window that never gets a full afternoon of direct sun.</p>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">What size pot for lettuce, if I'm only growing one plant?</div><p className="faq-a">A 6-inch deep container of almost any width comfortably supports a single lettuce plant — depth beyond 6 inches adds no benefit for this crop specifically.</p></div>
        <div className="faq-item"><div className="faq-q">Container size for growing multiple lettuce plants together?</div><p className="faq-a">Keep depth at 6 to 8 inches and add width instead — a 24-inch-wide planter at 6 inches deep fits roughly four to six loose-leaf plants with proper spacing.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing lettuce — window box or deep pot?</div><p className="faq-a">A window box or shallow rectangular planter almost always outperforms a single deep pot for this crop, since it matches lettuce's actual root profile instead of paying for unused depth.</p></div>
        <div className="faq-item"><div className="faq-q">How deep does a container need to be for spinach and arugula?</div><p className="faq-a">6 inches is sufficient for both — these are fast-cycling crops typically harvested within weeks, well before roots would need more room even if it were available.</p></div>
        <div className="faq-item"><div className="faq-q">Can lettuce and herbs share the same container?</div><p className="faq-a">Yes, more successfully than most crop pairings — lettuce's shallow roots and moderate water needs overlap well with many common herbs, provided the herb isn't a spreading variety like mint.</p></div>
        <div className="faq-item"><div className="faq-q">How many lettuce plants fit in a 12 inch pot?</div><p className="faq-a">Two to three loose-leaf plants at proper spacing, or a single head lettuce plant — head-forming varieties need more individual space than the pot's diameter comfortably allows for multiples.</p></div>
        <div className="faq-item"><div className="faq-q">Does container material matter for lettuce specifically?</div><p className="faq-a">More than for most crops — lettuce's shallow roots dry out faster in any material, so fast-draining containers like unglazed terracotta need noticeably more frequent watering than plastic for this crop.</p></div>

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">Download the Container Size Cheat Sheet (free PDF)</a>

        <div className="related">
          <div className="related-label">Related pages</div>
          <a href="/herbs-in-containers">Herbs in containers →</a>
          <a href="/tomatoes-in-containers">Tomatoes in containers →</a>
        </div>
      </main>
    </>
  );
}
