import Head from "next/head";
import ContainerTool from "../ContainerTool";

const varieties = [
  { value: "determinate", label: "Determinate (bush / patio type)", size: "5–10 gal", depth: '12"', why: "Root growth stops within days of fruit-set. Past that point, extra container volume sits unused and holds water the plant isn't pulling out." },
  { value: "indeterminate", label: "Indeterminate (vining, keeps growing)", size: "15–20+ gal", depth: '18–24"', why: "Roots keep expanding alongside new growth all season. This is the variable behind most mid-summer yield drops that get blamed on watering instead." },
  { value: "cherry", label: "Cherry / dwarf micro variety", size: "2–5 gal", depth: '8–12"', why: "Bred with a root system proportioned to the fruit size — the one case where a small container is the correct call, not a compromise." },
];

export default function TomatoesPage() {
  return (
    <>
      <Head>
        <title>Tomatoes in Containers | Why Every Guide Gives You a Different Pot Size | Potbound</title>
        <meta name="description" content="Determinate, indeterminate, and cherry tomatoes each need a different container size — here's the root mechanism that explains why, with exact sizes." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Tomatoes in Containers: Why Every Guide Gives You a Different Pot Size</h1>
        <p className="intro">Search &quot;what size pot for a tomato plant&quot; and the answers range from <mark>12 inches</mark> to <mark className="g">25-gallon containers</mark>. None of them are guessing. Each one tested a different growth habit and never said so.</p>

        <div className="disagree-box">
          <strong>Four real answers to the same search, side by side:</strong>
          <ul>
            <li>12 inches wide and deep, no gallon size given</li>
            <li>5-gallon minimum, 12 inches deep</li>
            <li>18–24 inch diameter, 15–20+ gallons</li>
            <li>15–25 gallons minimum, &quot;bigger is always better&quot;</li>
          </ul>
        </div>

        <h2>Container size for tomatoes hinges on one word: determinate</h2>
        <p>Determinate and indeterminate aren&apos;t marketing labels — they describe two different root behaviors. A determinate plant sets a fixed number of fruit trusses, stops flowering, and its root system stops expanding at almost the same moment. Whatever volume the roots occupy at fruit-set is the volume they&apos;ll occupy for the rest of the season. An indeterminate plant never gets that signal. It keeps producing new growing tips until frost kills it, and the roots keep pace — which is why a container that looked generous in June is frequently root-bound by August, with no warning beyond the plant simply producing less.</p>

        <div className="diagram-box">
          <svg viewBox="0 0 400 240" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
            <defs>
              <filter id="rough1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" seed="3" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" /></filter>
              <filter id="rough2"><feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" result="noise" seed="7" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" /></filter>
              <pattern id="hatch1" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="6" stroke="#2563EB" strokeWidth="0.8" opacity="0.5" /></pattern>
              <pattern id="hatch2" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="6" stroke="#1E293B" strokeWidth="0.8" opacity="0.4" /></pattern>
            </defs>
            <path d="M62 72 L51 158 L119 158 L109 72 Z" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinejoin="round" filter="url(#rough1)" />
            <path d="M56 88 L114 88" stroke="#94A3B8" strokeWidth="1.3" strokeDasharray="3 3" filter="url(#rough1)" />
            <path d="M64 90 L106 90 L102 142 L68 142 Z" fill="url(#hatch2)" filter="url(#rough1)" />
            <text x="85" y="32" textAnchor="middle" className="sketch-font" fontSize="15" fill="#1E293B">determinate</text>
            <path d="M36 72 L36 158" stroke="#475569" strokeWidth="1.3" filter="url(#rough1)" />
            <path d="M31 72 L41 72" stroke="#475569" strokeWidth="1.3" filter="url(#rough1)" />
            <path d="M31 158 L41 158" stroke="#475569" strokeWidth="1.3" filter="url(#rough1)" />
            <text x="14" y="120" textAnchor="middle" className="sketch-font" fontSize="14" fill="#1E293B" transform="rotate(-90 14 120)">12 in</text>
            <path d="M256 42 L239 195 L343 195 L326 42 Z" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinejoin="round" filter="url(#rough2)" />
            <path d="M248 64 L334 64" stroke="#94A3B8" strokeWidth="1.3" strokeDasharray="3 3" filter="url(#rough2)" />
            <path d="M256 66 L326 66 L318 185 L264 185 Z" fill="url(#hatch1)" filter="url(#rough2)" />
            <text x="291" y="20" textAnchor="middle" className="sketch-font" fontSize="15" fill="#2563EB">indeterminate</text>
            <path d="M212 42 L212 195" stroke="#475569" strokeWidth="1.3" filter="url(#rough2)" />
            <path d="M207 42 L217 42" stroke="#475569" strokeWidth="1.3" filter="url(#rough2)" />
            <path d="M207 195 L217 195" stroke="#475569" strokeWidth="1.3" filter="url(#rough2)" />
            <text x="190" y="122" textAnchor="middle" className="sketch-font" fontSize="14" fill="#2563EB" transform="rotate(-90 190 122)">20 in</text>
            <path d="M60 205 Q200 218 340 205" stroke="#94A3B8" strokeWidth="1" fill="none" strokeDasharray="1 4" filter="url(#rough1)" />
            <text x="200" y="228" textAnchor="middle" className="sketch-font" fontSize="13" fill="#64748B">shaded = active roots, week 10</text>
          </svg>
          <div className="diagram-caption">Same starting size, same age. Determinate roots plateaued by week 6 — indeterminate roots are still spreading.</div>
        </div>

        <h2>What size pot for a tomato plant, once you know the type</h2>
        <p>10 gallons, 14 inches deep, covers a determinate plant with margin to spare. It undersizes an indeterminate plant by roughly half. There&apos;s no single number that serves both without wasting soil on one and starving roots on the other — which is the actual reason four expert sources landed on four different answers to what looked like the same question.</p>

        <h2>Try it: the best container for growing tomatoes, by type</h2>
        <ContainerTool label="Select your tomato type" varieties={varieties} />

        <div className="callout">
          <strong>Container material shifts the number.</strong> Fabric grow bags lose moisture through the walls, not just the surface. A 10-gallon fabric bag dries out on roughly the schedule of an 8-gallon plastic pot. Sizing by volume alone, without accounting for material, is how a &quot;correctly sized&quot; fabric container still leaves a plant chronically underwatered.
        </div>

        <h2>Determinate vs indeterminate tomato container size, full breakdown</h2>
        <table>
          <tbody>
            <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Plants per container</th></tr>
            <tr><td>Determinate (bush)</td><td>5–10 gal</td><td>12&quot;</td><td>1</td></tr>
            <tr><td>Indeterminate (vining)</td><td>15–20+ gal</td><td>18–24&quot;</td><td>1</td></tr>
            <tr><td>Cherry / dwarf</td><td>2–5 gal</td><td>8–12&quot;</td><td>1</td></tr>
            <tr><td>Patio / compact indeterminate</td><td>7–12 gal</td><td>14–16&quot;</td><td>1</td></tr>
          </tbody>
        </table>

        <h2>How deep should a tomato pot be, independent of variety</h2>
        <p>12 inches is the floor. Not a suggestion — below that depth, the taproot hits the container bottom before the plant has finished its early growth phase, and the stress response doesn&apos;t show up where you&apos;d expect. It shows up two to three weeks later as blossom drop, by which point the container looks fine and the actual cause is easy to miss.</p>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">What size pot for a tomato plant, if I need one number?</div><p className="faq-a">10 gallons, 14 inches deep, is the closest thing to a safe default. It fully serves determinate plants and gets an indeterminate plant through roughly the first two-thirds of the season before roots hit capacity.</p></div>
        <div className="faq-item"><div className="faq-q">Container size for tomatoes — is the difference between types really that large?</div><p className="faq-a">Yes. Determinate minimum sits at 5 gallons; full indeterminate recommendation sits at 20+ gallons. That&apos;s a fourfold range hiding inside what search results treat as one question.</p></div>
        <div className="faq-item"><div className="faq-q">Determinate vs indeterminate tomato container size — how do I know which I have?</div><p className="faq-a">Check the seed packet or plant tag for &quot;det.&quot; or &quot;indet.&quot; Without that, watch the growing tip: indeterminate plants keep producing new flower clusters at the top all season; determinate plants stop flowering once they reach their set height.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing tomatoes — plastic, fabric, or terracotta?</div><p className="faq-a">Plastic holds moisture longest with the least maintenance. Fabric dries fastest but reduces root-circling. Terracotta breathes well, dries fast, and gets heavy enough to be worth avoiding once you&apos;re moving it full.</p></div>
        <div className="faq-item"><div className="faq-q">How deep should a tomato pot be for healthy roots?</div><p className="faq-a">12 inches minimum across every variety, 18 to 24 for full indeterminate plants. Depth matters more than width here — the taproot drives down before the root system spreads laterally.</p></div>
        <div className="faq-item"><div className="faq-q">Container size for cherry tomatoes specifically?</div><p className="faq-a">2 to 5 gallons, 8 to 12 inches deep. Cherry and dwarf varieties are bred with root systems proportioned to their smaller fruit, which is the one case where &quot;a small pot is fine&quot; holds up without qualification.</p></div>
        <div className="faq-item"><div className="faq-q">Can tomatoes grow in a small pot if I&apos;m patient with them?</div><p className="faq-a">Time doesn&apos;t change root physics. An undersized container caps yield on a fixed schedule, because the plant shifts energy from fruit production into root-stress signaling as soon as it hits the container wall — regardless of how long you wait afterward.</p></div>

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">Download the Container Size Cheat Sheet (free PDF)</a>

        <div className="related">
          <div className="related-label">Related pages</div>
          <a href="/peppers-in-containers">Peppers in containers →</a>
          <a href="/cucumbers-in-containers">Cucumbers in containers →</a>
        </div>
      </main>
    </>
  );
}
