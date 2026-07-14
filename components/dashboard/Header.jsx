import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back! Here's your internship progress.
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="transition hover:text-blue-600">
          <FaBell className="text-2xl text-slate-600" />
        </button>

        <button className="transition hover:text-blue-600">
          <FaUserCircle className="text-4xl text-slate-600" />
        </button>

      </div>

    </header>
  );
}