export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">

      <div className="text-6xl">
        📂
      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

    </div>
  );
}