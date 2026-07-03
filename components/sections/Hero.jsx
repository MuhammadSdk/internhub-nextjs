import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
        Internship Management System
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
        Track Every Internship.
        <br />
        Land Your Dream Career.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Manage all your internship applications,
        interviews, and progress in one modern dashboard.
      </p>

      <div className="mt-8 flex gap-4">

        <Link
          href="/register"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>

        <Link
          href="/dashboard"
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
        >
          View Dashboard
        </Link>

      </div>

    </section>
  );
}