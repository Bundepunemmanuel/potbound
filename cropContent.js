import { useState } from "react";
import ContainerTool from "./ContainerTool";

/* ============ METADATA (one entry per crop) ============ */
export const cropMeta = [
  {
    slug: "tomatoes-in-containers",
    title: "Tomatoes in Containers: Why Every Guide Gives You a Different Pot Size",
    seoTitle: "Tomatoes in Containers | Why Every Guide Gives You a Different Pot Size | Potbound",
    seoDescription: "Determinate, indeterminate, and cherry tomatoes each need a different container size — here's the root mechanism that explains why, with exact sizes.",
    reviewDate: "August 27, 2026",
    related: [
      { href: "/peppers-in-containers", label: "Peppers in containers →" },
      { href: "/cucumbers-in-containers", label: "Cucumbers in containers →" },
    ],
  },
  {
    slug: "peppers-in-containers",
    title: "Peppers in Containers: Why Bell and Hot Peppers Need Different Pots",
    seoTitle: "Peppers in Containers | Why Bell and Hot Peppers Need Different Pots | Potbound",
    seoDescription: "A bell pepper and a jalapeño don't need the same container. Here's the root-architecture difference, with exact sizes for each type.",
    reviewDate: "August 27, 2026",
    related: [
      { href: "/tomatoes-in-containers", label: "Tomatoes in containers →" },
      { href: "/cucumbers-in-containers", label: "Cucumbers in containers →" },
    ],
  },
  {
    slug: "cucumbers-in-containers",
    title: "Cucumbers in Containers: Bush vs Vining Changes Everything",
    seoTitle: "Cucumbers in Containers | Bush vs Vining Changes Everything | Potbound",
    seoDescription: "Bush and vining cucumbers need different container sizes and different support. Here's the growth-habit difference guides skip.",
    reviewDate: "August 27, 2026",
    related: [
      { href: "/tomatoes-in-containers", label: "Tomatoes in containers →" },
      { href: "/peppers-in-containers", label: "Peppers in containers →" },
    ],
  },
  {
    slug: "lettuce-and-greens-in-containers",
    title: "Lettuce & Greens in Containers: Why Depth Matters Less Than You Think",
    seoTitle: "Lettuce & Greens in Containers | Why Depth Matters Less Than You Think | Potbound",
    seoDescription: "Lettuce container guides argue over depth, but width and spacing are the numbers that actually determine your harvest.",
    reviewDate: "August 27, 2026",
    related: [
      { href: "/herbs-in-containers", label: "Herbs in containers →" },
      { href: "/tomatoes-in-containers", label: "Tomatoes in containers →" },
    ],
  },
  {
    slug: "herbs-in-containers",
    title: "Herbs in Containers: The One Mistake That Kills Basil Fast",
    seoTitle: "Herbs in Containers | The One Mistake That Kills Basil Fast | Potbound",
    seoDescription: "Rosemary and basil fail for opposite reasons in the wrong container. Here's the moisture-adaptation difference that explains both.",
    reviewDate: "August 27, 2026",
    related: [
      { href: "/lettuce-and-greens-in-containers", label: "Lettuce & greens in containers →" },
      { href: "/tomatoes-in-containers", label: "Tomatoes in containers →" },
    ],
  },
];

/* ============ BODY CONTENT (one component per crop) ============ */

const tomatoVarieties = [
  { value: "determinate", label: "Determinate (bush / patio type)", size: "5–10 gal", depth: '12"', why: "Root growth stops within days of fruit-set. Past that point, extra container volume sits unused and holds water the plant isn't pulling out." },
  { value: "indeterminate", label: "Indeterminate (vining, keeps growing)", size: "15–20+ gal", depth: '18–24"', why: "Roots keep expanding alongside new growth all season. This is the variable behind most mid-summer yield drops that get blamed on watering instead." },
  { value: "cherry", label: "Cherry / dwarf micro variety", size: "2–5 gal", depth: '8–12"', why: "Bred with a root system proportioned to the fruit size — the one case where a small container is the correct call, not a compromise." },
];

export function TomatoesBody() {
  return (
    <>
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
        <svg viewBox="0 0 400 240" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }} role="img" aria-labelledby="tomato-diagram-title tomato-diagram-desc">
          <title id="tomato-diagram-title">Determinate vs indeterminate tomato root comparison</title>
          <desc id="tomato-diagram-desc">Two pot cross-sections at the same age. The determinate pot's shaded root zone stops at 12 inches deep and stays fixed. The indeterminate pot's shaded root zone extends to 20 inches and is still expanding.</desc>
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

      <h2>Named varieties, by type</h2>
      <p>&apos;Roma&apos; and &apos;Celebrity&apos; are common determinate varieties bred for compact, self-limiting growth. &apos;Better Boy&apos; and &apos;Beefsteak&apos; are classic indeterminate varieties that keep producing until frost. &apos;Tiny Tim&apos; and &apos;Patio Princess&apos; are dwarf/cherry types bred specifically for small containers.</p>

      <h2>Try it: the best container for growing tomatoes, by type</h2>
      <ContainerTool label="Select your tomato type" varieties={tomatoVarieties} />

      <div className="callout">
        <strong>Container material shifts the number.</strong> Fabric grow bags lose moisture through the walls, not just the surface. A 10-gallon fabric bag dries out on roughly the schedule of an 8-gallon plastic pot. Sizing by volume alone, without accounting for material, is how a &quot;correctly sized&quot; fabric container still leaves a plant chronically underwatered.
      </div>

      <h2>Soil, drainage, and watering</h2>
      <p>Use a well-draining potting mix formulated for vegetables, not garden soil, which compacts in containers and drains poorly. Every container needs drainage holes — without them, excess water pools at the bottom and root rot follows regardless of correct sizing above it. Water deeply until it runs from the drainage holes, then let the top inch of soil dry before watering again; container tomatoes typically need water daily in hot weather, since containers dry faster than ground beds.</p>

      <h2>Determinate vs indeterminate tomato container size, full breakdown</h2>
      <table>
        <tbody>
          <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Plants per container</th></tr>
          <tr><td>Determinate (bush)</td><td>5–10 gal (19–38L)</td><td>12&quot; (30cm)</td><td>1</td></tr>
          <tr><td>Indeterminate (vining)</td><td>15–20+ gal (57–76+L)</td><td>18–24&quot; (46–61cm)</td><td>1</td></tr>
          <tr><td>Cherry / dwarf</td><td>2–5 gal (8–19L)</td><td>8–12&quot; (20–30cm)</td><td>1</td></tr>
          <tr><td>Patio / compact indeterminate</td><td>7–12 gal (26–45L)</td><td>14–16&quot; (36–41cm)</td><td>1</td></tr>
        </tbody>
      </table>

      <h2>How deep should a tomato pot be, independent of variety</h2>
      <p>12 inches is a reasonable floor across most varieties. Below that depth, the taproot is more likely to hit the container bottom before the plant finishes its early growth phase, and the resulting stress often doesn&apos;t show up right away — it can appear two to three weeks later as blossom drop, by which point the container looks fine and the actual cause is easy to miss.</p>

      <h2>Common problems and likely causes</h2>
      <table>
        <tbody>
          <tr><th>Symptom</th><th>Likely cause</th><th>What to check first</th></tr>
          <tr><td>Blossom drop, no fruit</td><td>Undersized container or temperature stress</td><td>Container depth vs. variety; daytime temps above 85°F</td></tr>
          <tr><td>Yellowing lower leaves</td><td>Inconsistent watering or nitrogen deficiency</td><td>Watering schedule regularity before fertilizer</td></tr>
          <tr><td>Slow growth, small plant</td><td>Root-bound in an undersized container</td><td>Check for roots circling the container bottom</td></tr>
          <tr><td>Cracking fruit</td><td>Irregular watering — dry spell then heavy watering</td><td>Watering consistency, not the variety</td></tr>
        </tbody>
      </table>

      <h2>Questions people actually ask</h2>
      <div className="faq-item"><div className="faq-q">What size pot for a tomato plant, if I need one number?</div><p className="faq-a">10 gallons, 14 inches deep, is the closest thing to a safe default. It fully serves determinate plants and gets an indeterminate plant through roughly the first two-thirds of the season before roots hit capacity.</p></div>
      <div className="faq-item"><div className="faq-q">Container size for tomatoes — is the difference between types really that large?</div><p className="faq-a">Yes. Determinate minimum sits at 5 gallons; full indeterminate recommendation sits at 20+ gallons. That&apos;s a fourfold range hiding inside what search results treat as one question.</p></div>
      <div className="faq-item"><div className="faq-q">Determinate vs indeterminate tomato container size — how do I know which I have?</div><p className="faq-a">Check the seed packet or plant tag for &quot;det.&quot; or &quot;indet.&quot; Without that, watch the growing tip: indeterminate plants keep producing new flower clusters at the top all season; determinate plants stop flowering once they reach their set height.</p></div>
      <div className="faq-item"><div className="faq-q">Best container for growing tomatoes — plastic, fabric, or terracotta?</div><p className="faq-a">Plastic holds moisture longest with the least maintenance. Fabric dries fastest but reduces root-circling. Terracotta breathes well, dries fast, and gets heavy enough to be worth avoiding once you&apos;re moving it full.</p></div>
      <div className="faq-item"><div className="faq-q">How deep should a tomato pot be for healthy roots?</div><p className="faq-a">12 inches minimum across every variety, 18 to 24 for full indeterminate plants. Depth matters more than width here — the taproot drives down before the root system spreads laterally.</p></div>
      <div className="faq-item"><div className="faq-q">Container size for cherry tomatoes specifically?</div><p className="faq-a">2 to 5 gallons, 8 to 12 inches deep. Cherry and dwarf varieties are bred with root systems proportioned to their smaller fruit, which is the one case where &quot;a small pot is fine&quot; holds up without qualification.</p></div>
      <div className="faq-item"><div className="faq-q">Can tomatoes grow in a small pot if I&apos;m patient with them?</div><p className="faq-a">Time doesn&apos;t change root physics. An undersized container caps yield on a fixed schedule, because the plant shifts energy from fruit production into root-stress signaling as soon as it hits the container wall — regardless of how long you wait afterward.</p></div>
    </>
  );
}

const pepperVarieties = [
  { value: "bell", label: "Bell pepper (sweet, large fruit)", size: "3–5 gal", depth: '10–12"', why: "Bell varieties carry more fruit weight per plant, and the root system that developed alongside modern bell breeding scaled up to support it." },
  { value: "hot", label: "Hot pepper (jalapeño, cayenne, serrano)", size: "1–3 gal", depth: '8–10"', why: "Bred closer to smaller wild Capsicum ancestors, hot varieties kept a more compact root architecture even as fruit heat and yield increased." },
  { value: "habanero", label: "Habanero / superhot", size: "2–3 gal", depth: '10"', why: "Slightly larger root demand than milder hot peppers, but nowhere near bell pepper territory — still a compact, upright root system." },
];

export function PeppersBody() {
  return (
    <>
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
        <svg viewBox="0 0 400 220" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }} role="img" aria-labelledby="pepper-diagram-title pepper-diagram-desc">
          <title id="pepper-diagram-title">Bell pepper vs hot pepper root comparison</title>
          <desc id="pepper-diagram-desc">Two pot cross-sections at the same height. The bell pepper pot's shaded root zone is roughly double the volume of the hot pepper pot's root zone.</desc>
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

      <h2>Named varieties worth knowing</h2>
      <p>&apos;California Wonder&apos; and &apos;King of the North&apos; are common bell varieties bred for large fruit. &apos;Early Jalapeño&apos; and &apos;Serrano Tampiqueño&apos; are compact hot varieties well suited to containers. For extreme heat, &apos;Carolina Reaper&apos; and other superhots stay compact but benefit from the higher end of the habanero size range.</p>

      <h2>Try it: container size for peppers, by type</h2>
      <ContainerTool label="Select your pepper type" varieties={pepperVarieties} />

      <div className="callout">
        <strong>Fruit count changes the math too.</strong> A bell plant carrying six full-size fruits at once is supporting more total weight than a jalapeño plant carrying twenty small ones — total root demand tracks fruit mass, not fruit number. If you&apos;re growing a heavy-yielding bell variety, size toward the top of its range.
      </div>

      <h2>Soil, drainage, and watering</h2>
      <p>Peppers want a loose, well-draining mix — heavy or compacted soil restricts the oxygen their roots need and slows fruit development. Let the top inch of soil dry between waterings; peppers tolerate brief dry spells better than tomatoes but still need consistent moisture once fruit is setting, or fruit can drop prematurely.</p>

      <h2>Growing peppers in containers: full size breakdown</h2>
      <table>
        <tbody>
          <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Plants per container</th></tr>
          <tr><td>Bell pepper</td><td>3–5 gal (11–19L)</td><td>10–12&quot; (25–30cm)</td><td>1</td></tr>
          <tr><td>Hot pepper (jalapeño, cayenne)</td><td>1–3 gal (4–11L)</td><td>8–10&quot; (20–25cm)</td><td>1</td></tr>
          <tr><td>Habanero / superhot</td><td>2–3 gal (8–11L)</td><td>10&quot; (25cm)</td><td>1</td></tr>
          <tr><td>Ornamental / dwarf pepper</td><td>1 gal (4L)</td><td>6–8&quot; (15–20cm)</td><td>1–2</td></tr>
        </tbody>
      </table>

      <h2>Best pots for planting vegetables like peppers: material notes</h2>
      <p>Peppers are more heat-tolerant than tomatoes and generally more drought-tolerant than leafy crops, which makes them one of the few plants where a dark plastic pot isn&apos;t automatically a liability — the extra soil warmth can actually speed fruit set in cooler climates. In genuinely hot regions, that same warmth becomes a stress factor, and a lighter-colored or fabric container keeps root temperature more stable.</p>

      <h2>Common problems and likely causes</h2>
      <table>
        <tbody>
          <tr><th>Symptom</th><th>Likely cause</th><th>What to check first</th></tr>
          <tr><td>Flowers drop, no fruit</td><td>Temperature stress or inconsistent watering</td><td>Daytime temps above 90°F or below 60°F</td></tr>
          <tr><td>Sunscald on fruit</td><td>Too little leaf cover exposing fruit directly</td><td>Recent pruning or leaf loss</td></tr>
          <tr><td>Stunted growth</td><td>Undersized container for the variety</td><td>Container size vs. bell vs. hot classification</td></tr>
        </tbody>
      </table>

      <h2>Questions people actually ask</h2>
      <div className="faq-item"><div className="faq-q">What size container for growing peppers, if I only grow one type?</div><p className="faq-a">3 gallons, 10 inches deep, works safely across most hot pepper varieties and undersizes a bell plant only slightly — a reasonable single-container default if you&apos;re not mixing types.</p></div>
      <div className="faq-item"><div className="faq-q">Container size for bell peppers specifically?</div><p className="faq-a">3 to 5 gallons, 10 to 12 inches deep. Lean toward 5 gallons for varieties bred for larger fruit or higher yield counts.</p></div>
      <div className="faq-item"><div className="faq-q">How big of a pot for jalapeño plants?</div><p className="faq-a">1 to 3 gallons is sufficient — jalapeños carry a compact root system relative to their yield, and oversizing mostly just increases the risk of waterlogged soil around an underdeveloped root ball.</p></div>
      <div className="faq-item"><div className="faq-q">Growing peppers in a 5 gallon bucket — is that too big?</div><p className="faq-a">For a hot pepper variety, yes, moderately — expect slower early growth while roots take longer to fill the available soil. For a bell pepper, 5 gallons is appropriately sized, not oversized.</p></div>
      <div className="faq-item"><div className="faq-q">Can you grow multiple pepper plants in one container?</div><p className="faq-a">Only with dwarf or ornamental varieties in a wide container — standard bell and hot pepper varieties compete for root space badly enough in a shared container that yield drops noticeably for both plants.</p></div>
      <div className="faq-item"><div className="faq-q">How deep does a pepper container need to be, minimum?</div><p className="faq-a">8 inches for compact hot varieties, 10 to 12 inches for bell peppers — shallower than tomatoes across the board, since pepper root systems grow wider before they grow deep.</p></div>
    </>
  );
}

const cucumberVarieties = [
  { value: "bush", label: "Bush variety (compact, no trellis)", size: "5 gal", depth: '12"', why: "Bush cucumbers are bred to stop vining early, the same genetic mechanism that caps determinate tomato roots — growth terminates, and root expansion terminates with it." },
  { value: "vining", label: "Vining variety (needs trellis)", size: "5–10 gal", depth: '12"+', why: "Vining plants keep producing new leaf nodes and lateral roots along the entire crawling stem until the season ends, not just from the base." },
];

export function CucumbersBody() {
  return (
    <>
      <p className="intro">Two guides, two answers: <mark>5-gallon pot, no trellis needed</mark>, versus <mark className="g">10-gallon container with vertical support required</mark>. Neither is wrong. They&apos;re describing two plants that share a name and little else in growth habit.</p>

      <div className="disagree-box">
        <strong>The actual variable hiding in &quot;cucumber container size&quot;:</strong>
        <ul>
          <li>Bush varieties: compact, self-limiting growth, no support structure</li>
          <li>Vining varieties: continuous growth along a stem that needs somewhere to climb</li>
          <li>Guides that don&apos;t name which type they mean produce contradictory advice by default</li>
        </ul>
      </div>

      <h2>Container size for cucumbers starts with growth habit, not fruit size</h2>
      <p>Bush cucumber varieties were bred specifically to stop producing new vine growth after reaching a compact size — the same selection pressure that shaped determinate tomatoes. Once that growth signal fires, root expansion slows down alongside it, which is why a 5-gallon container genuinely is enough for the plant&apos;s entire lifecycle. Vining varieties never receive that stop signal. They keep extending the main stem and producing roots at leaf nodes along the way if the vine touches soil, which means container volume needs to account for a root system that&apos;s still active in September, not just at transplant.</p>

      <div className="diagram-box">
        <svg viewBox="0 0 400 210" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }} role="img" aria-labelledby="cucumber-diagram-title cucumber-diagram-desc">
          <title id="cucumber-diagram-title">Bush vs vining cucumber comparison</title>
          <desc id="cucumber-diagram-desc">Two pot outlines. The bush type pot is self-contained with no support. The vining type pot has a trellis structure attached above it.</desc>
          <defs>
            <filter id="cu1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="11" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter>
            <filter id="cu2"><feTurbulence type="fractalNoise" baseFrequency="0.026" numOctaves="2" seed="14" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" /></filter>
          </defs>
          <path d="M60 90 L50 175 L120 175 L110 90 Z" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinejoin="round" filter="url(#cu1)" />
          <text x="85" y="35" textAnchor="middle" className="sketch-font" fontSize="14" fill="#1E293B">bush type</text>
          <text x="85" y="55" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">no support needed</text>
          <path d="M270 60 L258 195 L342 195 L330 60 Z" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinejoin="round" filter="url(#cu2)" />
          <path d="M300 60 L300 10" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3" filter="url(#cu2)" />
          <path d="M270 15 L330 15" stroke="#2563EB" strokeWidth="2" filter="url(#cu2)" />
          <text x="300" y="30" textAnchor="middle" className="sketch-font" fontSize="14" fill="#2563EB">vining type</text>
          <text x="300" y="145" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">trellis required</text>
        </svg>
        <div className="diagram-caption">Bush type stays self-contained. Vining type needs both more root volume and something to climb.</div>
      </div>

      <h2>Named varieties, by growth habit</h2>
      <p>&apos;Bush Champion&apos; and &apos;Salad Bush&apos; are bred specifically for compact container growth with no trellis. &apos;Marketmore 76&apos; and &apos;Straight Eight&apos; are classic vining slicers that need real vertical support in a container setup.</p>

      <h2>How many cucumber plants fit in one container</h2>
      <p>One bush plant per 5-gallon container is the reliable default. Cucumbers are heavy feeders with wide-spreading surface roots, and doubling up in the same container — even a larger one — tends to reduce total yield for both plants rather than simply splitting one plant&apos;s output between two.</p>

      <h2>Try it: growing cucumbers in containers, by growth habit</h2>
      <ContainerTool label="Select your cucumber type" varieties={cucumberVarieties} />
      <p style={{ fontSize: 13.5, color: "#64748B", marginTop: -8 }}>Training a vining variety on a trellis inside the container? Size up slightly from the number above — the support structure eats into the soil area roots would otherwise spread through.</p>

      <h2>Soil, drainage, and watering</h2>
      <p>Cucumbers are among the thirstiest common container vegetables — a fast-draining but moisture-retentive mix, watered whenever the top inch of soil dries, is the baseline. Inconsistent watering is the most common cause of bitter-tasting fruit, more often than variety choice.</p>

      <h2>Best container for growing cucumbers: full breakdown</h2>
      <table>
        <tbody>
          <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Support needed</th></tr>
          <tr><td>Bush variety</td><td>5 gal (19L)</td><td>12&quot; (30cm)</td><td>No</td></tr>
          <tr><td>Vining variety</td><td>5–10 gal (19–38L)</td><td>12&quot;+ (30cm+)</td><td>Yes — trellis or cage</td></tr>
          <tr><td>Dwarf / patio hybrid</td><td>3–5 gal (11–19L)</td><td>10–12&quot; (25–30cm)</td><td>Optional</td></tr>
        </tbody>
      </table>

      <h2>Common problems and likely causes</h2>
      <table>
        <tbody>
          <tr><th>Symptom</th><th>Likely cause</th><th>What to check first</th></tr>
          <tr><td>Bitter-tasting fruit</td><td>Inconsistent watering, not variety</td><td>Watering schedule regularity</td></tr>
          <tr><td>Powdery mildew on leaves</td><td>Poor air circulation, leaf-to-soil contact</td><td>Trellis use for vining types</td></tr>
          <tr><td>Few or no female flowers</td><td>Normal early-season pattern in many varieties</td><td>Wait — male flowers typically appear first</td></tr>
        </tbody>
      </table>

      <h2>Questions people actually ask</h2>
      <div className="faq-item"><div className="faq-q">Container size for cucumbers — does variety really change it this much?</div><p className="faq-a">Yes. Bush varieties top out around 5 gallons for their entire lifecycle; vining varieties can outgrow that same container by midsummer if left unaccounted for.</p></div>
      <div className="faq-item"><div className="faq-q">How deep does a cucumber container need to be?</div><p className="faq-a">12 inches minimum for either growth habit — cucumbers have a shallower root profile than tomatoes but spread wider, so depth matters less than diameter here.</p></div>
      <div className="faq-item"><div className="faq-q">Do vining cucumbers need a trellis in a container?</div><p className="faq-a">Functionally, yes. Without vertical support, a vining variety sprawls across the container&apos;s soil surface, which increases fungal disease risk from leaf-to-soil contact and makes harvesting considerably harder to track.</p></div>
      <div className="faq-item"><div className="faq-q">Best container for growing cucumbers — plastic or fabric?</div><p className="faq-a">Fabric grow bags suit cucumbers well since they&apos;re heavy water users and fabric&apos;s faster drainage reduces root rot risk, provided you&apos;re prepared to water more frequently than you would with plastic.</p></div>
      <div className="faq-item"><div className="faq-q">What size pot for cucumbers in a small space or balcony?</div><p className="faq-a">A dwarf or patio hybrid variety in a 3-to-5-gallon container is the best fit for limited space — these are bred specifically for compact growth without sacrificing fruit size as much as standard bush types do.</p></div>
      <div className="faq-item"><div className="faq-q">How much sunlight do container cucumbers need?</div><p className="faq-a">6 or more hours daily regardless of variety — cucumbers are consistently among the more light-demanding common container vegetables, and undersized fruit is more often a light problem than a container problem.</p></div>
    </>
  );
}

export function LettuceBody() {
  const [plants, setPlants] = useState(3);
  const [width, setWidth] = useState(18);
  const needed = plants * 5;
  const fits = width >= needed;

  return (
    <>
      <p className="intro">Every lettuce container question gets answered in inches of depth. That&apos;s the wrong axis. Lettuce roots rarely pass 6 inches regardless of variety — the number that actually determines your harvest is one almost nobody asks about.</p>

      <h2>Try it first: will your plants actually fit?</h2>
      <div className="tool">
        <div className="tool-label" id="lettuce-tool-label">How many plants, and how wide is your container?</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="lettuce-plants" style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700, display: "block" }}>PLANTS</label>
            <input id="lettuce-plants" type="number" min="1" max="12" value={plants} onChange={(e) => setPlants(Number(e.target.value) || 1)}
              aria-describedby="lettuce-tool-result"
              style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "2px solid transparent", fontSize: 15, fontWeight: 700, marginTop: 4 }} />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="lettuce-width" style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700, display: "block" }}>CONTAINER WIDTH (in)</label>
            <input id="lettuce-width" type="number" min="4" max="60" value={width} onChange={(e) => setWidth(Number(e.target.value) || 4)}
              aria-describedby="lettuce-tool-result"
              style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "2px solid transparent", fontSize: 15, fontWeight: 700, marginTop: 4 }} />
          </div>
        </div>
        <div className="tool-result" id="lettuce-tool-result" role="status" aria-live="polite">
          <div className="tool-metric">
            <div className="k">Width needed</div>
            <div className="v">{needed}&quot;</div>
          </div>
          <div className="tool-metric">
            <div className="k">Verdict</div>
            <div className="v" style={{ color: fits ? "#4ADE80" : "#F87171" }}>
              {fits ? "✓ Fits" : "✗ Too tight"}
            </div>
          </div>
        </div>
        <div className="tool-why">Based on 5 inches of spacing per loose-leaf plant. Head lettuce needs 8 inches per plant instead of 5 — recalculate with fewer plants if you&apos;re growing head varieties.</div>
      </div>

      <div className="diagram-box">
        <svg viewBox="0 0 400 150" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }} role="img" aria-labelledby="lettuce-diagram-title lettuce-diagram-desc">
          <title id="lettuce-diagram-title">Lettuce spacing diagram</title>
          <desc id="lettuce-diagram-desc">A wide, shallow container holding six evenly spaced lettuce plants, all at the same 6-inch depth.</desc>
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
      <p>Lettuce and most leafy greens have fibrous, shallow root systems that rarely extend past 6 to 8 inches no matter the variety. That part of the question was solved before you asked it. What actually varies is how many root systems you&apos;re trying to fit side by side without them competing for the same shallow band of soil — and that&apos;s a width and spacing question, not a depth question, even though most guides phrase it as the latter.</p>

      <h2>Named varieties by type</h2>
      <p>&apos;Black Seeded Simpson&apos; and &apos;Salad Bowl&apos; are common loose-leaf varieties suited to cut-and-come-again harvest. &apos;Buttercrunch&apos; and &apos;Little Gem&apos; are compact head varieties that fit containers well. For quick greens, &apos;Bloomsdale&apos; spinach and &apos;Astro&apos; arugula both cycle fast.</p>

      <table>
        <tbody>
          <tr><th>Type</th><th>Min. depth</th><th>Spacing per plant</th></tr>
          <tr><td>Loose-leaf lettuce</td><td>6&quot; (15cm)</td><td>4–6&quot; (10–15cm)</td></tr>
          <tr><td>Head lettuce (butterhead, romaine)</td><td>8&quot; (20cm)</td><td>8&quot; (20cm)</td></tr>
          <tr><td>Spinach, arugula, mustard greens</td><td>6&quot; (15cm)</td><td>3–4&quot; (8–10cm)</td></tr>
        </tbody>
      </table>

      <div className="callout">
        <strong>A window box beats a deep pot for this crop.</strong> A 24-inch-wide planter at 6 inches deep fits more loose-leaf plants at correct spacing than a single 12-inch-deep pot ever will — you&apos;re paying for depth this crop doesn&apos;t use instead of the width it does.
      </div>

      <h2>Soil, drainage, and sunlight</h2>
      <p>Lettuce and greens prefer a light, moisture-retentive mix and dry out faster than deeper-rooted crops given their shallow root zone — check soil moisture daily in warm weather. 4 to 6 hours of sunlight daily is enough, noticeably less than fruiting crops, which makes this the most forgiving starting crop for a shaded balcony or an east-facing window.</p>

      <h2>Common problems and likely causes</h2>
      <table>
        <tbody>
          <tr><th>Symptom</th><th>Likely cause</th><th>What to check first</th></tr>
          <tr><td>Bolting (flowering, bitter leaves)</td><td>Heat stress, typically above 75–80°F</td><td>Recent temperature spike; consider shade in summer</td></tr>
          <tr><td>Wilting despite moist soil</td><td>Root competition from overcrowding</td><td>Spacing versus container width</td></tr>
          <tr><td>Slow, leggy growth</td><td>Insufficient light</td><td>Hours of direct sun the container receives</td></tr>
        </tbody>
      </table>

      <h2>Questions people actually ask</h2>
      <div className="faq-item"><div className="faq-q">What size pot for lettuce, if I&apos;m only growing one plant?</div><p className="faq-a">A 6-inch deep container of almost any width comfortably supports a single lettuce plant — depth beyond 6 inches adds no benefit for this crop specifically.</p></div>
      <div className="faq-item"><div className="faq-q">Best container for growing lettuce — window box or deep pot?</div><p className="faq-a">A window box or shallow rectangular planter almost always outperforms a single deep pot for this crop, since it matches lettuce&apos;s actual root profile instead of paying for unused depth.</p></div>
      <div className="faq-item"><div className="faq-q">How deep does a container need to be for spinach and arugula?</div><p className="faq-a">6 inches is sufficient for both — these are fast-cycling crops typically harvested within weeks, well before roots would need more room even if it were available.</p></div>
      <div className="faq-item"><div className="faq-q">How many lettuce plants fit in a 12 inch pot?</div><p className="faq-a">Two to three loose-leaf plants at proper spacing, or a single head lettuce plant — head-forming varieties need more individual space than the pot&apos;s diameter comfortably allows for multiples.</p></div>
      <div className="faq-item"><div className="faq-q">Does container material matter for lettuce specifically?</div><p className="faq-a">More than for most crops — lettuce&apos;s shallow roots dry out faster in any material, so fast-draining containers like unglazed terracotta need noticeably more frequent watering than plastic for this crop.</p></div>
    </>
  );
}

const herbGroups = {
  mediterranean: {
    label: "Rosemary, thyme, sage, oregano",
    risk: "Overwatering",
    riskColor: "#F87171",
    soil: "2 parts potting mix, 1 part perlite or coarse sand",
    watering: "Let soil dry fully between waterings",
    signal: "Yellowing, blackened lower stems, musty smell at soil line",
  },
  basil: {
    label: "Basil",
    risk: "Underwatering",
    riskColor: "#60A5FA",
    soil: "Standard potting mix, no amendment needed",
    watering: "Keep soil consistently moist, never fully dry",
    signal: "Wilting by afternoon even in cool weather, crispy leaf edges",
  },
  mint: {
    label: "Mint (any variety)",
    risk: "Overcrowding by its own roots",
    riskColor: "#FBBF24",
    soil: "Standard potting mix, no amendment needed",
    watering: "Keep soil consistently moist",
    signal: "Vigorous growth choking out any neighboring plant within weeks",
  },
};

export function HerbsBody() {
  const [group, setGroup] = useState("mediterranean");
  const g = herbGroups[group];

  return (
    <>
      <p className="intro">Basil dies from <mark>underwatering in a pot that&apos;s too small</mark>. Rosemary dies from <mark className="g">overwatering in soil that stays too wet</mark>. Same &quot;herb container&quot; advice gets applied to both, and it&apos;s wrong for at least one of them every time.</p>

      <h2>Container size isn&apos;t the variable that kills herbs. This is.</h2>
      <p>Rosemary, thyme, sage, and oregano evolved in rocky Mediterranean hillsides with fast-draining, nutrient-poor soil — sparse, deep roots built to tolerate long dry stretches. Basil evolved somewhere warmer and wetter, with a fibrous root system that has no drought tolerance at all. Put them in identical containers with identical care and you&apos;ll lose one of them. The container size barely matters next to this.</p>

      <h2>Named varieties by group</h2>
      <p>&apos;Tuscan Blue&apos; rosemary and &apos;Berggarten&apos; sage are hardy Mediterranean perennials well suited to containers. &apos;Genovese&apos; basil is the standard culinary variety with the underwatering risk described above. &apos;Chocolate Mint&apos; and &apos;Spearmint&apos; both spread aggressively regardless of variety — the isolation rule applies to all of them.</p>

      <h2>Check your care regimen by herb group</h2>
      <div className="tool">
        <label htmlFor="herb-group-select" className="tool-label">Select your herb group</label>
        <select id="herb-group-select" value={group} onChange={(e) => setGroup(e.target.value)} aria-describedby="herb-tool-result">
          <option value="mediterranean">Rosemary, thyme, sage, oregano</option>
          <option value="basil">Basil</option>
          <option value="mint">Mint (any variety)</option>
        </select>
        <div className="tool-result" id="herb-tool-result" role="status" aria-live="polite">
          <div className="tool-metric">
            <div className="k">Real risk</div>
            <div className="v" style={{ color: g.riskColor }}>{g.risk}</div>
          </div>
        </div>
        <div className="tool-why"><strong style={{ color: "#fff" }}>Watering:</strong> {g.watering}<br /><strong style={{ color: "#fff" }}>Watch for:</strong> {g.signal}</div>
      </div>

      <div className="disagree-box">
        <strong>Soil mix by group — the one swap that matters most:</strong>
        <ul>
          <li><strong>Mediterranean herbs:</strong> {herbGroups.mediterranean.soil}</li>
          <li><strong>Basil, mint, parsley, cilantro:</strong> {herbGroups.basil.soil}</li>
        </ul>
      </div>

      <div className="diagram-box">
        <svg viewBox="0 0 400 170" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }} role="img" aria-labelledby="herb-diagram-title herb-diagram-desc">
          <title id="herb-diagram-title">Rosemary vs basil root and soil comparison</title>
          <desc id="herb-diagram-desc">Two pots of the same size. The rosemary pot shows sparse deep roots needing fast-draining mix. The basil pot shows dense fibrous roots needing moisture-retentive mix.</desc>
          <defs>
            <filter id="hb1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="31" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter>
            <filter id="hb2"><feTurbulence type="fractalNoise" baseFrequency="0.027" numOctaves="2" seed="34" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3.1" /></filter>
          </defs>
          <path d="M55 60 L47 140 L113 140 L105 60 Z" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round" filter="url(#hb1)" />
          <path d="M75 70 L80 125 M85 70 L83 130" stroke="#94A3B8" strokeWidth="1.4" filter="url(#hb1)" />
          <circle cx="65" cy="145" r="2.5" fill="#94A3B8" /><circle cx="80" cy="150" r="2.5" fill="#94A3B8" /><circle cx="95" cy="145" r="2.5" fill="#94A3B8" />
          <text x="80" y="25" textAnchor="middle" className="sketch-font" fontSize="13" fill="#1E293B">rosemary</text>
          <text x="80" y="160" textAnchor="middle" className="sketch-font" fontSize="11" fill="#64748B">gritty, fast-draining mix</text>

          <path d="M270 60 L262 140 L338 140 L330 60 Z" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" filter="url(#hb2)" />
          <path d="M285 70 Q290 95 280 120 M295 70 Q300 100 300 125 M310 70 Q305 95 315 120" stroke="#2563EB" strokeWidth="1.4" filter="url(#hb2)" />
          <text x="300" y="25" textAnchor="middle" className="sketch-font" fontSize="13" fill="#2563EB">basil</text>
          <text x="300" y="160" textAnchor="middle" className="sketch-font" fontSize="11" fill="#64748B">standard, moisture-retentive mix</text>
        </svg>
        <div className="diagram-caption">Same container size, opposite soil recipe — the mix matters more than the pot here.</div>
      </div>

      <h2>Mint needs its own container, always</h2>
      <p>Mint spreads through underground rhizomes aggressively enough to overrun a shared container within a single growing season, choking out whatever it&apos;s planted alongside. Container size matters less here than isolation — give it its own pot regardless of how much room the rest of your setup has.</p>

      <table>
        <tbody>
          <tr><th>Herb group</th><th>Container size</th><th>Min. depth</th></tr>
          <tr><td>Rosemary, thyme, sage, oregano</td><td>1–2 gal (4–8L)</td><td>8&quot; (20cm)</td></tr>
          <tr><td>Basil</td><td>1–2 gal (4–8L)</td><td>8&quot; (20cm)</td></tr>
          <tr><td>Mint</td><td>1–2 gal, isolated</td><td>8&quot; (20cm)</td></tr>
          <tr><td>Parsley, cilantro</td><td>1–2 gal (4–8L)</td><td>8–10&quot; (20–25cm)</td></tr>
        </tbody>
      </table>

      <h2>Common problems and likely causes</h2>
      <table>
        <tbody>
          <tr><th>Symptom</th><th>Likely cause</th><th>What to check first</th></tr>
          <tr><td>Rosemary browning, dying</td><td>Root rot from consistently wet soil</td><td>Drainage holes, soil mix, watering frequency</td></tr>
          <tr><td>Basil wilting despite watering</td><td>Undersized container, insufficient moisture reserve</td><td>Container volume vs. plant maturity</td></tr>
          <tr><td>Leggy, sparse growth</td><td>Insufficient light, especially indoors</td><td>Hours of direct light received</td></tr>
        </tbody>
      </table>

      <h2>Questions people actually ask</h2>
      <div className="faq-item"><div className="faq-q">Why does my basil keep wilting even though I water it?</div><p className="faq-a">Most often an undersized container that can&apos;t hold enough moisture reserve between waterings — check whether the pot is at least 1 to 2 gallons before troubleshooting watering frequency further.</p></div>
      <div className="faq-item"><div className="faq-q">Why is my rosemary turning brown and dying?</div><p className="faq-a">Root rot from soil that stays too wet is the most common cause, not underwatering. Check drainage holes and consider repotting into a mix with added perlite or sand before increasing water.</p></div>
      <div className="faq-item"><div className="faq-q">Container size for herbs, if I&apos;m growing several types together?</div><p className="faq-a">Group by water needs, not by container size — Mediterranean herbs together in one fast-draining container, moisture-loving herbs like basil and parsley together in another.</p></div>
      <div className="faq-item"><div className="faq-q">Can mint be grown in the same pot as other herbs?</div><p className="faq-a">Not recommended — mint&apos;s spreading rhizomes will outcompete and eventually choke out neighboring plants within a season, regardless of container size.</p></div>
      <div className="faq-item"><div className="faq-q">Best container for growing herbs indoors on a windowsill?</div><p className="faq-a">A container with excellent drainage holes matters more indoors than outdoors, since indoor air circulation is lower and wet soil takes longer to dry between waterings.</p></div>
      <div className="faq-item"><div className="faq-q">Do herbs need a bigger pot as they mature?</div><p className="faq-a">Most common culinary herbs stay within a 1-to-2-gallon container their whole lifecycle — repotting is rarely necessary unless you&apos;re growing a perennial like rosemary for multiple years.</p></div>
    </>
  );
}

export const cropBodies = {
  "tomatoes-in-containers": TomatoesBody,
  "peppers-in-containers": PeppersBody,
  "cucumbers-in-containers": CucumbersBody,
  "lettuce-and-greens-in-containers": LettuceBody,
  "herbs-in-containers": HerbsBody,
};
