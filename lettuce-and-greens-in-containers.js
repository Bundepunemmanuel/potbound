import Head from "next/head";
import { useState } from "react";

export default function LettucePage() {
  const [plants, setPlants] = useState(3);
  const [width, setWidth] = useState(18);
  const needed = plants * 5;
  const fits = width >= needed;

  return (
    <>
      <Head>
        <title>Lettuce & Greens in Containers | Why Depth Matters Less Than You Think | Potbound</title>
        <meta name="description" content="Lettuce container guides argue over depth, but width and spacing are the numbers that actually determine your harvest." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Lettuce &amp; Greens in Containers: Why Depth Matters Less Than You Think</h1>
        <p className="intro">Every lettuce container question gets answered in inches of depth. That&apos;s the wrong axis. Lettuce roots rarely pass 6 inches regardless of variety — the number that actually determines your harvest is one almost nobody asks about.</p>

        <h2>Try it first: will your plants actually fit?</h2>
        <div className="tool">
          <div className="tool-label">How many plants, and how wide is your container?</div>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>PLANTS</label>
              <input type="number" min="1" max="12" value={plants} onChange={(e) => setPlants(Number(e.target.value) || 1)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "none", fontSize: 15, fontWeight: 700, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>CONTAINER WIDTH (in)</label>
              <input type="number" min="4" max="60" value={width} onChange={(e) => setWidth(Number(e.target.value) || 4)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "none", fontSize: 15, fontWeight: 700, marginTop: 4 }} />
            </div>
          </div>
          <div className="tool-result">
            <div className="tool-metric">
              <div className="k">Width needed</div>
              <div className="v">{needed}&quot;</div>
            </div>
            <div className="tool-metric">
              <div className="k">Verdict</div>
              <div className="v" style={{ color: fits ? "#4ADE80" : "#F87171" }}>{fits ? "Fits" : "Too tight"}</div>
            </div>
          </div>
          <div className="tool-why">Based on 5 inches of spacing per loose-leaf plant. Head lettuce needs 8 inches per plant instead of 5 — recalculate with fewer plants if you're growing head varieties.</div>
        </div>

        <div className="diagram-box">
          <svg viewBox="0 0 400 150" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
            <defs><filter id="lt1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="21" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter></defs>
            <path d="M30 60 L24 120 L376 120 L370 60 Z" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round" filter="url(#lt1)" />
            {[70, 130, 190, 250, 310, 370].map((x, i) => (
              <ellipse key={i} cx={x - 30} cy="55" rx="18" ry="10" fill="none" stroke="#16A34A" strokeWidth="1.4" filter="url(#lt1)" />
            ))}
            <path d="M55 62 L55 118 M115 62 L115 118 M175 62 L175 118 M235 62 L235 118 M295 62 L295 118" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 3" filter="url(#lt1)" />
            <text x="200" y="140" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">6 plants, evenly spaced — depth stays 6 inches the whole row</text>
          </svg>
          <div className="diagram-caption">Depth is fixed at 6 inches regardless of how many plants you add. Width is the variable that scales.</div>
        </div>

        <h2>Why the depth number barely changes</h2>
        <p>Lettuce and most leafy greens have fibrous, shallow root systems that rarely extend past 6 to 8 inches no matter the variety. That part of the question was solved before you asked it. What actually varies is how many root systems you're trying to fit side by side without them competing for the same shallow band of soil — and that's a width and spacing question, not a depth question, even though most guides phrase it as the latter.</p>

        <table>
          <tbody>
            <tr><th>Type</th><th>Min. depth</th><th>Spacing per plant</th></tr>
            <tr><td>Loose-leaf lettuce</td><td>6&quot;</td><td>4–6&quot;</td></tr>
            <tr><td>Head lettuce (butterhead, romaine)</td><td>8&quot;</td><td>8&quot;</td></tr>
            <tr><td>Spinach, arugula, mustard greens</td><td>6&quot;</td><td>3–4&quot;</td></tr>
          </tbody>
        </table>

        <div className="callout">
          <strong>A window box beats a deep pot for this crop.</strong> A 24-inch-wide planter at 6 inches deep fits more loose-leaf plants at correct spacing than a single 12-inch-deep pot ever will — you're paying for depth this crop doesn't use instead of the width it does.
        </div>

        <h2>How much sunlight do container greens need</h2>
        <p>4 to 6 hours daily — noticeably less than fruiting crops. This makes lettuce and greens the most forgiving starting crop for a shaded balcony or an east-facing window that never gets a full afternoon of direct sun.</p>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">What size pot for lettuce, if I'm only growing one plant?</div><p className="faq-a">A 6-inch deep container of almost any width comfortably supports a single lettuce plant — depth beyond 6 inches adds no benefit for this crop specifically.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing lettuce — window box or deep pot?</div><p className="faq-a">A window box or shallow rectangular planter almost always outperforms a single deep pot for this crop, since it matches lettuce's actual root profile instead of paying for unused depth.</p></div>
        <div className="faq-item"><div className="faq-q">How deep does a container need to be for spinach and arugula?</div><p className="faq-a">6 inches is sufficient for both — these are fast-cycling crops typically harvested within weeks, well before roots would need more room even if it were available.</p></div>
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
