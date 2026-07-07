export default function StatisticsCard({ number, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-4 text-4xl">
        {number}
      </div>

      <h3 className="text-xl font-semibold">
        {label}
      </h3>
      
    </div>
  );
}   