export default function SummaryCard({ icon, title, total, description, trend }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>

        <span className="text-sm font-semibold text-green-600">
          {trend}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {description}
      </p>

      <p className="mt-2 text-3xl font-bold text-blue-600">
        {total}
      </p>
    </div>
  );
}