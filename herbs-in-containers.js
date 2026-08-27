import Head from "next/head";
import { useState } from "react";

const groups = {
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

export default function HerbsPage() {
  const [group, setGroup] = useState("mediterranean");
  const g = groups[group];

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

        <h2>Container size isn&apos;t the variable that kills herbs. This is.</h2>
        <p>Rosemary, thyme, sage, and oregano evolved in rocky Mediterranean hillsides with fast-draining, nutrient-poor soil — sparse, deep roots built to tolerate long dry stretches. Basil evolved somewhere warmer and wetter, with a fibrous root system that has no drought tolerance at all. Put them in identical containers with identical care and you&apos;ll lose one of them. The container size barely matters next to this.</p>

        <h2>Check your care regimen by herb group</h2>
        <div className="tool">
          <div className="tool-label">Select your herb group</div>
          <select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="mediterranean">Rosemary, thyme, sage, oregano</option>
            <option value="basil">Basil</option>
            <option value="mint">Mint (any variety)</option>
          </select>
          <div className="tool-result">
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
            <li><strong>Mediterranean herbs:</strong> {groups.mediterranean.soil}</li>
            <li><strong>Basil, mint, parsley, cilantro:</strong> {groups.basil.soil}</li>
          </ul>
        </div>

        <div className="diagram-box">
          <svg viewBox="0 0 400 170" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
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
            <tr><td>Rosemary, thyme, sage, oregano</td><td>1–2 gal</td><td>8&quot;</td></tr>
            <tr><td>Basil</td><td>1–2 gal</td><td>8&quot;</td></tr>
            <tr><td>Mint</td><td>1–2 gal, isolated</td><td>8&quot;</td></tr>
            <tr><td>Parsley, cilantro</td><td>1–2 gal</td><td>8–10&quot;</td></tr>
          </tbody>
        </table>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">Why does my basil keep wilting even though I water it?</div><p className="faq-a">Most often an undersized container that can't hold enough moisture reserve between waterings — check whether the pot is at least 1 to 2 gallons before troubleshooting watering frequency further.</p></div>
        <div className="faq-item"><div className="faq-q">Why is my rosemary turning brown and dying?</div><p className="faq-a">Root rot from soil that stays too wet is the most common cause, not underwatering. Check drainage holes and consider repotting into a mix with added perlite or sand before increasing water.</p></div>
        <div className="faq-item"><div className="faq-q">Container size for herbs, if I'm growing several types together?</div><p className="faq-a">Group by water needs, not by container size — Mediterranean herbs together in one fast-draining container, moisture-loving herbs like basil and parsley together in another.</p></div>
        <div className="faq-item"><div className="faq-q">Can mint be grown in the same pot as other herbs?</div><p className="faq-a">Not recommended — mint's spreading rhizomes will outcompete and eventually choke out neighboring plants within a season, regardless of container size.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing herbs indoors on a windowsill?</div><p className="faq-a">A container with excellent drainage holes matters more indoors than outdoors, since indoor air circulation is lower and wet soil takes longer to dry between waterings.</p></div>
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
