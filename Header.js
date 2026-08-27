import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <Logo size={26} />
          <span className="brand-name">Potbound</span>
        </Link>
        <span className="brand-tag">container gardening, by the numbers</span>
      </div>
    </header>
  );
}
