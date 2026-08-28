import SeoHead from "../SeoHead";

export default function AffiliateDisclosure() {
  return (
    <>
      <SeoHead
        title="Affiliate Disclosure | Potbound"
        description="Potbound's current affiliate link policy."
        path="/affiliate-disclosure"
      />
      <main className="wrap">
        <div className="eyebrow">Legal</div>
        <h1>Affiliate Disclosure</h1>
        <p className="intro">Last updated August 2026.</p>

        <h2>Current status</h2>
        <p>Potbound does not currently use any affiliate links or earn commission on any product mentioned on this site. All recommendations and container-size guidance are based solely on our editorial method, described on the <a href="/about">About</a> page.</p>

        <h2>If this changes</h2>
        <p>If Potbound ever introduces affiliate links, they will be clearly labeled at the point they appear, and this page will be updated to reflect the change before it takes effect. Our editorial recommendations — the actual sizes, depths, and care guidance — will never be influenced by whether a link is an affiliate link.</p>

        <div className="related">
          <div className="related-label">More about this site</div>
          <a href="/about">About Potbound →</a>
          <a href="/privacy">Privacy Policy →</a>
        </div>
      </main>
    </>
  );
}
