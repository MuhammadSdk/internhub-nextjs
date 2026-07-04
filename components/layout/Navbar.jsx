import Link from "next/link";
import Logo from "../ui/Logo";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo />

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

                <Link
                    href="/"
                    className="text-slate-600 transition hover:text-blue-600">
                    Home
                </Link>

                <Link
                    href="/about"
                    className="text-slate-600 transition hover:text-blue-600">
                    About
                </Link>

                <Link
                    href="/dashboard"
                    className="text-slate-600 transition hover:text-blue-600">
                    Dashboard
                </Link>

                </div>

        {/* Button */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="text-slate-600 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

        </div>

      </nav>
    </header>
  );
}