export default function InterviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">

      <section className="rounded-2xl bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
          Interviews
        </h1>

        <p className="mt-2 text-slate-500">
          Track your upcoming internship interviews.
        </p>

        <div className="mt-8 space-y-4">

          <div className="rounded-xl border border-slate-200 p-5">

            <h2 className="text-xl font-semibold">
              Google
            </h2>

            <p className="mt-2 text-slate-600">
              Frontend Developer Internship
            </p>

            <p className="mt-2 text-sm text-slate-500">
              📅 22 July 2026 • 10:00 AM
            </p>

          </div>

          <div className="rounded-xl border border-slate-200 p-5">

            <h2 className="text-xl font-semibold">
              Tokopedia
            </h2>

            <p className="mt-2 text-slate-600">
              Backend Developer Internship
            </p>

            <p className="mt-2 text-sm text-slate-500">
              📅 25 July 2026 • 01:30 PM
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}