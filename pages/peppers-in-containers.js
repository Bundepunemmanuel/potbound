import Head from "next/head";
import ContainerTool from "../ContainerTool";

const varieties = [
  { value: "bell", label: "Bell pepper (sweet, large fruit)", size: "3–5 gal", depth: '10–12"', why: "Bell varieties carry more fruit weight per plant, and the root system that developed alongside modern bell breeding scaled up to support it." },
  { value: "hot", label: "Hot pepper (jalapeño, cayenne, serrano)", size: "1–3 gal", depth: '8–10"', why: "Bred closer to smaller wild Capsicum ancestors, hot varieties kept a more compact root architecture even as fruit heat and yield increased." },
  { value: "habanero", label: "Habanero / superhot", size: "2–3 gal", depth: '10"', why: "Slightly larger root demand than milder hot peppers, but nowhere near bell pepper territory — still a compact, upright root system." },
];

export default function PeppersPage() {
  return (
    <>
      <Head>
        <title>Peppers in Containers | Why Bell and Hot Peppers Need Different Pots | Potbound</title>
        <meta name="description" content="A bell pepper and a jalapeño don't need the same container. Here's the root-architecture difference, with exact sizes for each type." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Peppers in Containers: Why Bell and Hot Peppers Need Different Pots</h1>
        <p className="intro">A guide will tell you &quot;peppers need a 5-gallon container.&quot; Another says <mark>1 gallon is plenty</mark>. Both are right — they&apos;re just talking about <mark className="g">different peppers</mark>, and neither one says so.</p>

        <div className="disagree-box">
          <strong>What &quot;pepper container size&quot; guides actually disagree on:</strong>
          <ul>
            <li>One source: 1-gallon pots work fine for peppers</li>
            <li>Another: 3-gallon minimum, no variety specified</li>
            <li>Another: 5-gallon buckets recommended across the board</li>
            <li>Another: &quot;bigger container, bigger yield&quot; with no ceiling given</li>
          </ul>
        </div>

        <h2>Best container for growing peppers depends on breeding history, not just size</h2>
        <p>Bell peppers were bred over generations for larger fruit and thicker walls. That selection pressure pulled the root system along with it — a mature bell plant supports several large fruits at once, and the roots scaled up to match the load. Hot peppers were bred primarily for heat and yield count, not fruit mass, so many popular varieties — jalapeño, cayenne, serrano — kept root systems much closer to their smaller wild Capsicum ancestors. Same genus, same care routine, structurally different root demand.</p>

        <div className="diagram-box">
          <svg viewBox="0 0 400 220" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
            <defs>
              <filter id="pr1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter>
              <filter id="pr2"><feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="2" seed="9" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" /></filter>
              <pattern id="ph1" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="6" stroke="#1E293B" strokeWidth="0.8" opacity="0.4" /></pattern>
              <pattern id="ph2" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="6" stroke="#2563EB" strokeWidth="0.8" opacity="0.5" /></pattern>
            </defs>
            <path d="M258 55 L244 175 L336 175 L322 55 Z" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinejoin="round" filter="url(#pr1)" />
            <path d="M251 72 L329 72" stroke="#94A3B8" strokeWidth="1.3" strokeDasharray="3 3" filter="url(#pr1)" />
            <path d="M258 75 L322 75 L316 155 L264 155 Z" fill="url(#ph1)" filter="url(#pr1)" />
            <text x="290" y="30" textAnchor="middle" className="sketch-font" fontSize="14" fill="#1E293B">bell pepper</text>
            <path d="M64 82 L54 165 L112 165 L102 82 Z" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinejoin="round" filter="url(#pr2)" />
            <path d="M58 96 L108 96" stroke="#94A3B8" strokeWidth="1.3" strokeDasharray="3 3" filter="url(#pr2)" />
            <path d="M65 99 L101 99 L97 140 L69 140 Z" fill="url(#ph2)" filter="url(#pr2)" />
            <text x="83" y="35" textAnchor="middle" className="sketch-font" fontSize="14" fill="#2563EB">hot pepper</text>
            <text x="200" y="205" textAnchor="middle" className="sketch-font" fontSize="13" fill="#64748B">root mass scales with fruit weight, not plant height</text>
          </svg>
          <div className="diagram-caption">Same pot height in this sketch, different root spread — bell pepper roots occupy roughly double the volume.</div>
        </div>

        <h2>Try it: container size for peppers, by type</h2>
        <ContainerTool label="Select your pepper type" varieties={varieties} />

        <div className="callout">
          <strong>Fruit count changes the math too.</strong> A bell plant carrying six full-size fruits at once is supporting more total weight than a jalapeño plant carrying twenty small ones — total root demand tracks fruit mass, not fruit number. If you&apos;re growing a heavy-yielding bell variety, size toward the top of its range.
        </div>

        <h2>Growing peppers in containers: full size breakdown</h2>
        <table>
          <tbody>
            <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Plants per container</th></tr>
            <tr><td>Bell pepper</td><td>3–5 gal</td><td>10–12&quot;</td><td>1</td></tr>
            <tr><td>Hot pepper (jalapeño, cayenne)</td><td>1–3 gal</td><td>8–10&quot;</td><td>1</td></tr>
            <tr><td>Habanero / superhot</td><td>2–3 gal</td><td>10&quot;</td><td>1</td></tr>
            <tr><td>Ornamental / dwarf pepper</td><td>1 gal</td><td>6–8&quot;</td><td>1–2</td></tr>
          </tbody>
        </table>

        <h2>Best pots for planting vegetables like peppers: material notes</h2>
        <p>Peppers are more heat-tolerant than tomatoes and generally more drought-tolerant than leafy crops, which makes them one of the few plants where a dark plastic pot isn&apos;t automatically a liability — the extra soil warmth can actually speed fruit set in cooler climates. In genuinely hot regions, that same warmth becomes a stress factor, and a lighter-colored or fabric container keeps root temperature more stable.</p>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">What size container for growing peppers, if I only grow one type?</div><p className="faq-a">3 gallons, 10 inches deep, works safely across most hot pepper varieties and undersizes a bell plant only slightly — a reasonable single-container default if you&apos;re not mixing types.</p></div>
        <div className="faq-item"><div className="faq-q">Container size for bell peppers specifically?</div><p className="faq-a">3 to 5 gallons, 10 to 12 inches deep. Lean toward 5 gallons for varieties bred for larger fruit or higher yield counts.</p></div>
        <div className="faq-item"><div className="faq-q">How big of a pot for jalapeño plants?</div><p className="faq-a">1 to 3 gallons is sufficient — jalapeños carry a compact root system relative to their yield, and oversizing mostly just increases the risk of waterlogged soil around an underdeveloped root ball.</p></div>
        <div className="faq-item"><div className="faq-q">Growing peppers in a 5 gallon bucket — is that too big?</div><p className="faq-a">For a hot pepper variety, yes, moderately — expect slower early growth while roots take longer to fill the available soil. For a bell pepper, 5 gallons is appropriately sized, not oversized.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing peppers — does color matter?</div><p className="faq-a">Dark containers retain more heat, which helps in cooler climates and adds stress in hot ones. Match container color to your climate, not just your aesthetic preference.</p></div>
        <div className="faq-item"><div className="faq-q">Can you grow multiple pepper plants in one container?</div><p className="faq-a">Only with dwarf or ornamental varieties in a wide container — standard bell and hot pepper varieties compete for root space badly enough in a shared container that yield drops noticeably for both plants.</p></div>
        <div className="faq-item"><div className="faq-q">How deep does a pepper container need to be, minimum?</div><p className="faq-a">8 inches for compact hot varieties, 10 to 12 inches for bell peppers — shallower than tomatoes across the board, since pepper root systems grow wider before they grow deep.</p></div>

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">Download the Container Size Cheat Sheet (free PDF)</a>

        <div className="related">
          <div className="related-label">Related pages</div>
          <a href="/tomatoes-in-containers">Tomatoes in containers →</a>
          <a href="/cucumbers-in-containers">Cucumbers in containers →</a>
        </div>
      </main>
    </>
  );
}
