import SeoHead from "../SeoHead";

export default function Terms() {
  return (
    <>
      <SeoHead
        title="Terms of Use | Potbound"
        description="Terms of use for the Potbound website, tools, and downloadable resources."
        path="/terms"
      />
      <main className="wrap">
        <div className="eyebrow">Legal</div>
        <h1>Terms of Use</h1>
        <p className="intro">Last updated August 2026.</p>

        <h2>Informational purpose</h2>
        <p>Potbound provides general gardening information and practical starting ranges for container gardening. Content on this site is offered for informational purposes and does not account for every possible growing condition. See our <a href="/about">About &amp; Methodology</a> page for more on how recommendations are built and their limitations.</p>

        <h2>No guarantee of results</h2>
        <p>Because plant outcomes depend on many factors outside this site&apos;s control — climate, cultivar, care, and growing conditions — Potbound makes no guarantee that following any recommendation here will produce a specific result.</p>

        <h2>Free tools and downloads</h2>
        <p>Tools, calculators, and downloadable files on this site are provided free of charge for personal, non-commercial use. You may print or save downloads for your own use; redistributing or reselling them is not permitted.</p>

        <h2>Intellectual property</h2>
        <p>Text, diagrams, and downloadable materials on this site are the property of Potbound unless otherwise noted, and are provided for personal use as described above.</p>

        <h2>Changes to these terms</h2>
        <p>These terms may be updated periodically. Continued use of the site after changes are posted constitutes acceptance of the updated terms.</p>

        <div className="related">
          <div className="related-label">More about this site</div>
          <a href="/about">About Potbound →</a>
          <a href="/privacy">Privacy Policy →</a>
        </div>
      </main>
    </>
  );
}
