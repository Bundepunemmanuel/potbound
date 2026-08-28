import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="Potbound logo" width={26} height={26} />
          <span className="brand-name">Potbound</span>
        </Link>
        <span className="brand-tag">container gardening, by the numbers</span>
      </div>
    </header>
  );
}
