export default function CompanyDetailPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Google
            </h1>

            <p className="mt-2 text-slate-500">
              California, USA
            </p>

          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
            Hiring
          </span>

        </div>

        <hr className="my-8"/>

        <h2 className="text-2xl font-bold">
          Internship Position
        </h2>

        <p className="mt-3 text-slate-600">
          Frontend Developer Internship
        </p>

        <h2 className="mt-8 text-2xl font-bold">
          Description
        </h2>

        <p className="mt-3 leading-8 text-slate-600">
          Join our engineering team and build modern web applications
          using React and Next.js.
        </p>

        <button
          className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Apply Internship
        </button>

      </section>

    </main>
  );
}