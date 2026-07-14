import Link from "next/link";
import {
  FaChartPie,
  FaFileAlt,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <FaChartPie />,
  },
  {
    title: "Applications",
    href: "/applications",
    icon: <FaFileAlt />,
  },
  {
    title: "Companies",
    href: "/companies",
    icon: <FaBuilding />,
  },
  {
    title: "Interviews",
    href: "/interviews",
    icon: <FaCalendarAlt />,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 bg-slate-900 p-6 text-white lg:block">

      <h2 className="mb-10 text-2xl font-bold">
        InternHub
      </h2>

      <nav className="space-y-2">

        {menus.map((menu) => (

          <Link
            key={menu.title}
            href={menu.href}
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-slate-800"
          >
            <span className="text-lg">
              {menu.icon}
            </span>

            <span>
              {menu.title}
            </span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}