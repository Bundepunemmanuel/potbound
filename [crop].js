import SeoHead from "../SeoHead";
import { cropMeta, cropBodies } from "../cropContent";

export async function getStaticPaths() {
  return {
    paths: cropMeta.map((c) => ({ params: { crop: c.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.crop } };
}

export default function CropPage({ slug }) {
  const meta = cropMeta.find((c) => c.slug === slug);
  const Body = cropBodies[slug];
  if (!meta || !Body) return null;

  return (
    <>
      <SeoHead
        title={meta.seoTitle}
        description={meta.seoDescription}
        path={`/${slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          about: meta.seoDescription,
          datePublished: "2026-08-01",
          dateModified: "2026-08-27",
        }}
      />

      <main className="wrap">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <a href="/">Home</a> <span aria-hidden="true">→</span> <span>{meta.title.split(":")[0]}</span>
        </nav>

        <div className="eyebrow">Case study</div>
        <h1>{meta.title}</h1>
        <div className="review-date">Reviewed {meta.reviewDate}</div>
        <div className="method-note">
          Sizes below are practical starting ranges, not guaranteed outcomes —
          real results vary by cultivar and climate. See our{" "}
          <a href="/about">method and its limits</a>.
        </div>

        <Body />

        <a href="/downloads/container-size-cheat-sheet.pdf" className="cta">
          Download the Container Size Cheat Sheet (free PDF)
        </a>

        <div className="related">
          <div className="related-label">Related pages</div>
          {meta.related.map((r) => (
            <a key={r.href} href={r.href}>{r.label}</a>
          ))}
        </div>
      </main>
    </>
  );
}
