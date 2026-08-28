import SeoHead from "../SeoHead";

export default function Privacy() {
  return (
    <>
      <SeoHead
        title="Privacy Policy | Potbound"
        description="Potbound's privacy policy — what data is and isn't collected on this site."
        path="/privacy"
      />
      <main className="wrap">
        <div className="eyebrow">Legal</div>
        <h1>Privacy Policy</h1>
        <p className="intro">Last updated August 2026.</p>

        <h2>What we collect</h2>
        <p>Potbound does not require an account, a login, or an email address to use any tool, read any guide, or download any file on this site. We do not currently operate any email list or newsletter.</p>

        <h2>Analytics</h2>
        <p>Like most websites, we may use basic, aggregated analytics (such as page-view counts) to understand which pages are useful. This data is not tied to your name or identity and is not sold to third parties.</p>

        <h2>Cookies</h2>
        <p>This site does not currently use tracking or advertising cookies. If that changes in the future, this page will be updated to reflect it before any such change takes effect.</p>

        <h2>Downloads</h2>
        <p>PDF downloads on this site are direct file links. Downloading a file does not require providing any personal information.</p>

        <h2>Third-party links</h2>
        <p>Pages on this site may link to external retailers or resources. Potbound is not responsible for the privacy practices of external sites you visit from a link here.</p>

        <h2>Changes to this policy</h2>
        <p>If this policy changes, the &quot;last updated&quot; date at the top of this page will change accordingly.</p>

        <div className="related">
          <div className="related-label">More about this site</div>
          <a href="/about">About Potbound →</a>
          <a href="/terms">Terms of Use →</a>
        </div>
      </main>
    </>
  );
}
