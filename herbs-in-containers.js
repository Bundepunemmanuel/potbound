import Head from "next/head";
import ContainerTool from "../ContainerTool";

const varieties = [
  { value: "mediterranean", label: "Rosemary, thyme, sage, oregano", size: "1–2 gal", depth: '8"', why: "Evolved in rocky, fast-draining soil with sparse deep roots built for drought — the failure mode here is almost always too much retained moisture, not too little room." },
  { value: "basil", label: "Basil", size: "1–2 gal", depth: '8"', why: "Fibrous, moisture-hungry roots that punish an undersized container fast — basil in too small a pot bolts and wilts within days of the first hot stretch." },
  { value: "mint", label: "Mint (any variety)", size: "1–2 gal, contained separately", depth: '8"', why: "Aggressive rhizome spread means mint's container size matters less than its isolation — shared containers get overrun within one season." },
];

export default function HerbsPage() {
  return (
    <>
      <Head>
        <title>Herbs in Containers | The One Mistake That Kills Basil Fast | Potbound</title>
        <meta name="description" content="Rosemary and basil fail for opposite reasons in the wrong container. Here's the moisture-adaptation difference that explains both." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Herbs in Containers: The One Mistake That Kills Basil Fast</h1>
        <p className="intro">Basil dies from <mark>underwatering in a pot that&apos;s too small</mark>. Rosemary dies from <mark className="g">overwatering in soil that stays too wet</mark>. Same &quot;herb container&quot; advice gets applied to both, and it&apos;s wrong for at least one of them every time.</p>

        <div className="disagree-box">
          <strong>Why generic herb advice fails roughly half the time:</strong>
          <ul>
            <li>&quot;Herbs don&apos;t need much space&quot; — true for Mediterranean herbs, misleading for basil</li>
            <li>&quot;Keep soil consistently moist&quot; — right for basil, a death sentence for rosemary</li>
            <li>Both groups get called &quot;herbs&quot; and given one shared care sheet</li>
          </ul>
        </div>

        <h2>Container size for herbs depends on where the plant is originally from</h2>
        <p>Rosemary, thyme, sage, and oregano evolved in rocky Mediterranean hillsides with fast-draining, nutrient-poor soil. Their root systems adapted to that environment by growing sparse and deep rather than dense and wide, and by tolerating long dry stretches between rainfall. Put one of these plants in a large, moisture-retentive container with rich potting mix, and the roots sit in more consistent moisture than they evolved to handle — root rot follows, and it&apos;s frequently misdiagnosed as disease rather than traced back to the container and soil choice.</p>

        <p>Basil is the opposite case. It evolved in warmer, more consistently moist conditions and developed a fibrous, moisture-hungry root system that has no drought tolerance built in. The most common way to kill basil isn&apos;t disease — it&apos;s a container too small to hold enough moisture reserve between waterings, especially once the plant is established and pulling water faster than a small root zone can supply.</p>

        <div className="diagram-box">
          <svg viewBox="0 0 400 200" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
            <defs>
              <filter id="hb1"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="31" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" /></filter>
              <filter id="hb2"><feTurbulence type="fractalNoise" baseFrequency="0.027" numOctaves="2" seed="34" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3.1" /></filter>
            </defs>
            <path d="M55 85 L47 165 L113 165 L105 85 Z" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round" filter="url(#hb1)" />
            <path d="M75 95 L80 150 M85 95 L83 155" stroke="#94A3B8" strokeWidth="1.4" filter="url(#hb1)" />
            <text x="80" y="30" textAnchor="middle" className="sketch-font" fontSize="13" fill="#1E293B">rosemary</text>
            <text x="80" y="50" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">sparse, deep roots</text>
            <text x="80" y="185" textAnchor="middle" className="sketch-font" fontSize="11" fill="#64748B">needs fast drainage</text>

            <path d="M270 85 L262 165 L338 165 L330 85 Z" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" filter="url(#hb2)" />
            <path d="M285 95 Q290 120 280 145 M295 95 Q300 130 300 155 M310 95 Q305 125 315 150" stroke="#2563EB" strokeWidth="1.4" filter="url(#hb2)" />
            <text x="300" y="30" textAnchor="middle" className="sketch-font" fontSize="13" fill="#2563EB">basil</text>
            <text x="300" y="50" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">dense, fibrous roots</text>
            <text x="300" y="185" textAnchor="middle" className="sketch-font" fontSize="11" fill="#64748B">needs moisture reserve</text>
          </svg>
          <div className="diagram-caption">Same container size in this sketch, opposite failure risk — drainage for one, water retention for the other.</div>
        </div>

        <h2>Try it: container size and care by herb type</h2>
        <ContainerTool label="Select your herb" varieties={varieties} />

        <div className="callout">
          <strong>Mint needs its own container, always.</strong> Mint spreads through underground rhizomes aggressively enough to overrun a shared container within a single growing season, choking out whatever it's planted alongside. Container size matters less here than isolation — give it its own pot regardless of how much room the rest of your setup has.
        </div>

        <h2>Best pots for planting herbs: full breakdown</h2>
        <table>
          <tbody>
            <tr><th>Herb group</th><th>Container size</th><th>Min. depth</th><th>Soil priority</th></tr>
            <tr><td>Rosemary, thyme, sage, oregano</td><td>1–2 gal</td><td>8&quot;</td><td>Fast drainage</td></tr>
            <tr><td>Basil</td><td>1–2 gal</td><td>8&quot;</td><td>Moisture retention</td></tr>
            <tr><td>Mint</td><td>1–2 gal, isolated</td><td>8&quot;</td><td>Moisture retention</td></tr>
            <tr><td>Parsley, cilantro</td><td>1–2 gal</td><td>8–10&quot;</td><td>Moisture retention</td></tr>
          </tbody>
        </table>

        <h2>Herbs in containers for beginners: the one soil swap that matters most</h2>
        <p>If you're using one bag of generic potting mix for every herb, that's the fastest route to losing either the Mediterranean group or the moisture-loving group. Mixing in extra perlite or coarse sand for rosemary, thyme, and sage — roughly a third of the total volume — replicates the fast drainage they need without buying a second bag of soil entirely.</p>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">Container size for herbs, if I'm growing several types together?</div><p className="faq-a">Group by water needs, not by container size — Mediterranean herbs together in one fast-draining container, moisture-loving herbs like basil and parsley together in another. Mixing the two groups in one pot means one side is always over- or under-watered.</p></div>
        <div className="faq-item"><div className="faq-q">Why does my basil keep wilting even though I water it?</div><p className="faq-a">Most often an undersized container that can't hold enough moisture reserve between waterings — check whether the pot is at least 1 to 2 gallons before troubleshooting watering frequency further.</p></div>
        <div className="faq-item"><div className="faq-q">Why is my rosemary turning brown and dying?</div><p className="faq-a">Root rot from soil that stays too wet is the most common cause, not underwatering. Check drainage holes and consider repotting into a mix with added perlite or sand before increasing water.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing herbs indoors on a windowsill?</div><p className="faq-a">A container with excellent drainage holes matters more indoors than outdoors, since indoor air circulation is lower and wet soil takes longer to dry between waterings.</p></div>
        <div className="faq-item"><div className="faq-q">Can mint be grown in the same pot as other herbs?</div><p className="faq-a">Not recommended — mint's spreading rhizomes will outcompete and eventually choke out neighboring plants within a season, regardless of container size.</p></div>
        <div className="faq-item"><div className="faq-q">How much sunlight do container herbs need?</div><p className="faq-a">6 or more hours for Mediterranean herbs and basil; parsley and cilantro tolerate partial shade better than most other common culinary herbs.</p></div>
        <div className="faq-item"><div className="faq-q">Do herbs need a bigger pot as they mature?</div><p className="faq-a">Most common culinary herbs stay within a 1-to-2-gallon container their whole lifecycle — repotting is rarely necessary unless you're growing a perennial like rosemary for multiple years.</p></div>

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">Download the Container Size Cheat Sheet (free PDF)</a>

        <div className="related">
          <div className="related-label">Related pages</div>
          <a href="/lettuce-and-greens-in-containers">Lettuce &amp; greens in containers →</a>
          <a href="/tomatoes-in-containers">Tomatoes in containers →</a>
        </div>
      </main>
    </>
  );
}
