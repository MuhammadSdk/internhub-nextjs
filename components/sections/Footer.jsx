import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h3 className="text-2xl font-bold text-blue-600">
            InternHub
          </h3>

          <p className="mt-2 text-slate-600">
            Manage your internship journey with ease.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:justify-end">
          <Link href="/about" className="text-slate-600 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/privacy" className="text-slate-600 hover:text-blue-600">
            Privacy Policy
          </Link>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        © 2026 InternHub. All rights reserved.
      </div>

    </footer>
  );
}