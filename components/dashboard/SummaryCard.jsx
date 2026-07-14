export default function SummaryCard({
  icon,
  title,
  subtitle,
  value,
  growth,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div className="text-4xl">
          {icon}
        </div>

        <span className="font-semibold text-green-600">
          {growth}
        </span>

      </div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-1 text-slate-500">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-blue-600">
        {value}
      </h2>

    </div>
  );
}