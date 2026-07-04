import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md">
        <BriefcaseBusiness size={20} />
      </div>

      <div>
        <h1 className="text-lg font-bold">
          InternHub
        </h1>

        <p className="text-xs text-slate-500">
          Internship Management
        </p>
      </div>

    </Link>
  );
}