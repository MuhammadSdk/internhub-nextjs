import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

      {/* Badge */}

      <div className="rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
        Internship Management System
      </div>

      {/* Title */}

      <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">

        Track Every Internship.

        <br />

        Land Your Dream Career.

      </h1>

      {/* Subtitle */}

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">

        Manage your internship journey from discovering companies,
        tracking applications, preparing interviews,
        and monitoring your progress in one modern platform.

      </p>

      {/* Button */}

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <Link
          href="/register"
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>

        <Link
          href="/companies"
          className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          Explore Companies
        </Link>

      </div>

      {/* Statistics */}

      <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-3">

        <div>

          <h2 className="text-5xl font-bold text-blue-600">
            500+
          </h2>

          <p className="mt-2 text-slate-500">
            Internship Opportunities
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-blue-600">
            100+
          </h2>

          <p className="mt-2 text-slate-500">
            Partner Companies
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-blue-600">
            2K+
          </h2>

          <p className="mt-2 text-slate-500">
            Active Students
          </p>

        </div>

      </div>

    </section>
  );
}