export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back! Here's an overview of your internship progress.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          🔔
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
          S
        </div>
      </div>
    </header>
  );
}