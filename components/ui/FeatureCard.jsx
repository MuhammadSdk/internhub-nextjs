export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex justify-center">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

    </div>
  );
}