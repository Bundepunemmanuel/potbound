import Head from "next/head";
import ContainerTool from "../ContainerTool";

const varieties = [
  { value: "bush", label: "Bush variety (compact, no trellis)", size: "5 gal", depth: '12"', why: "Bush cucumbers are bred to stop vining early, the same genetic mechanism that caps determinate tomato roots — growth terminates, and root expansion terminates with it." },
  { value: "vining", label: "Vining variety (needs trellis)", size: "5–10 gal", depth: '12"+', why: "Vining plants keep producing new leaf nodes and lateral roots along the entire crawling stem until the season ends, not just from the base." },
];

export default function CucumbersPage() {
  return (
    <>
      <Head>
        <title>Cucumbers in Containers | Bush vs Vining Changes Everything | Potbound</title>
        <meta name="description" content="Bush and vining cucumbers need different container sizes and different support. Here's the growth-habit difference guides skip." />
      </Head>

      <main className="wrap">
        <div className="eyebrow">Case study — updated August 2026</div>
        <h1>Cucumbers in Containers: Bush vs Vining Changes Everything</h1>
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
          <svg viewBox="0 0 400 210" width="100%" style={{ maxWidth: 400, display: "block", margin: "0 auto" }}>
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
            <text x="300" y="118" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B" transform="rotate(90 300 118)"></text>
            <text x="300" y="145" textAnchor="middle" className="sketch-font" fontSize="12" fill="#64748B">trellis required</text>
          </svg>
          <div className="diagram-caption">Bush type stays self-contained. Vining type needs both more root volume and something to climb.</div>
        </div>

        <h2>How many cucumber plants fit in one container</h2>
        <p>One bush plant per 5-gallon container is the reliable default. Cucumbers are heavy feeders with wide-spreading surface roots, and doubling up in the same container — even a larger one — tends to reduce total yield for both plants rather than simply splitting one plant&apos;s output between two.</p>

        <h2>Try it: growing cucumbers in containers, by growth habit</h2>
        <ContainerTool label="Select your cucumber type" varieties={varieties} />
        <p style={{ fontSize: 13.5, color: "#64748B", marginTop: -8 }}>Training a vining variety on a trellis inside the container? Size up slightly from the number above — the support structure eats into the soil area roots would otherwise spread through.</p>

        <h2>Best container for growing cucumbers: full breakdown</h2>
        <table>
          <tbody>
            <tr><th>Type</th><th>Container size</th><th>Min. depth</th><th>Support needed</th></tr>
            <tr><td>Bush variety</td><td>5 gal</td><td>12&quot;</td><td>No</td></tr>
            <tr><td>Vining variety</td><td>5–10 gal</td><td>12&quot;+</td><td>Yes — trellis or cage</td></tr>
            <tr><td>Dwarf / patio hybrid</td><td>3–5 gal</td><td>10–12&quot;</td><td>Optional</td></tr>
          </tbody>
        </table>

        <h2>Questions people actually ask</h2>
        <div className="faq-item"><div className="faq-q">Container size for cucumbers — does variety really change it this much?</div><p className="faq-a">Yes. Bush varieties top out around 5 gallons for their entire lifecycle; vining varieties can outgrow that same container by midsummer if left unaccounted for.</p></div>
        <div className="faq-item"><div className="faq-q">How deep does a cucumber container need to be?</div><p className="faq-a">12 inches minimum for either growth habit — cucumbers have a shallower root profile than tomatoes but spread wider, so depth matters less than diameter here.</p></div>
        <div className="faq-item"><div className="faq-q">Do vining cucumbers need a trellis in a container?</div><p className="faq-a">Functionally, yes. Without vertical support, a vining variety sprawls across the container's soil surface, which increases fungal disease risk from leaf-to-soil contact and makes harvesting considerably harder to track.</p></div>
        <div className="faq-item"><div className="faq-q">Best container for growing cucumbers — plastic or fabric?</div><p className="faq-a">Fabric grow bags suit cucumbers well since they're heavy water users and fabric's faster drainage reduces root rot risk, provided you're prepared to water more frequently than you would with plastic.</p></div>
        <div className="faq-item"><div className="faq-q">What size pot for cucumbers in a small space or balcony?</div><p className="faq-a">A dwarf or patio hybrid variety in a 3-to-5-gallon container is the best fit for limited space — these are bred specifically for compact growth without sacrificing fruit size as much as standard bush types do.</p></div>
        <div className="faq-item"><div className="faq-q">How much sunlight do container cucumbers need?</div><p className="faq-a">6 or more hours daily regardless of variety — cucumbers are consistently among the more light-demanding common container vegetables, and undersized fruit is more often a light problem than a container problem.</p></div>

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">Download the Container Size Cheat Sheet (free PDF)</a>

        <div className="related">
          <div className="related-label">Related pages</div>
          <a href="/tomatoes-in-containers">Tomatoes in containers →</a>
          <a href="/peppers-in-containers">Peppers in containers →</a>
        </div>
      </main>
    </>
  );
}
