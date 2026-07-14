import Link from "next/link";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function CompanyCard({
  name,
  location,
  internship,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <FaBuilding className="text-4xl text-blue-600" />

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Hiring
        </span>

      </div>

      <h2 className="mt-5 text-xl font-bold">
        {name}
      </h2>

      <p className="mt-3 flex items-center gap-2 text-slate-500">
        <FaLocationDot />
        {location}
      </p>

      <p className="mt-5 text-slate-700">
        {internship}
      </p>

      <Link
        href="/companies/google"
        className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        View Details →
      </Link>

    </div>
  );
}