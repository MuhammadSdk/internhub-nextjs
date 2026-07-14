import Link from "next/link";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/companies"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Companies
          </Link>

        </div>

        {/* Right Button */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

      </nav>
    </header>
  );
}