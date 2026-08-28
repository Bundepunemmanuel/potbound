import SeoHead from "../SeoHead";

export default function About() {
  return (
    <>
      <SeoHead
        title="About Potbound | Our Method & Sources"
        description="How Potbound builds its container size recommendations, what we cite, and where the numbers come from."
        path="/about"
      />
      <main className="wrap">
        <div className="eyebrow">About Potbound</div>
        <h1>Why our numbers look the way they do</h1>
        <p className="intro">Potbound exists because most container-size advice online gives one number per crop and calls it settled. It almost never is. Here&apos;s how we actually build each recommendation, and where its limits are.</p>

        <h2>Our method</h2>
        <p>Every size and depth figure on this site starts from a simple question: what does this variety&apos;s root system actually need to complete its life cycle without stress? We reason from published horticultural principles — root architecture, growth-habit classification (determinate vs. indeterminate, bush vs. vining), and known drought or moisture tolerance for the plant family — rather than repeating a single rounded-off figure that&apos;s been copied across the web.</p>
        <p>Where sources genuinely disagree, we say so and explain the variable causing the disagreement, instead of picking one number and presenting it as the only correct answer.</p>

        <h2>What our numbers are, and aren&apos;t</h2>
        <p>Every figure on Potbound is a <strong>practical starting range</strong>, not a guaranteed outcome. Real results depend on variables we can&apos;t account for from a general guide: your specific cultivar, local climate, sunlight hours, container material and shape, potting mix, drainage, watering frequency, fertilizer schedule, and whether you&apos;re growing indoors or outdoors. Two people following the same recommendation in different climates can reasonably see different results — that&apos;s expected, not a sign the guidance was wrong.</p>

        <h2>What we don&apos;t do</h2>
        <p>We don&apos;t cite specific studies or named experts we haven&apos;t actually verified, and we don&apos;t present a single number as universally correct when real variation exists. If a claim on this site is ever unclear about its own confidence level, that&apos;s something we want to fix — corrections are welcome.</p>

        <h2>Review status</h2>
        <p>Crop pages are dated at the top with their last review. As we get real-world feedback from readers, sizing ranges get revised rather than left static.</p>

        <div className="related">
          <div className="related-label">More about this site</div>
          <a href="/privacy">Privacy Policy →</a>
          <a href="/terms">Terms of Use →</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure →</a>
        </div>
      </main>
    </>
  );
}
