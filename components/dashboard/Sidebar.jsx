const menus = [
  {
    title: "Dashboard",
    icon: "🏠",
  },
  {
    title: "Applications",
    icon: "📄",
  },
  {
    title: "Companies",
    icon: "🏢",
  },
  {
    title: "Interviews",
    icon: "📅",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 p-6 text-white">
      <h2 className="mb-10 text-2xl font-bold">
        InternHub
      </h2>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <div
            key={menu.title}
            className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition hover:bg-slate-800"
          >
            <span>{menu.icon}</span>
            <span>{menu.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}