import StatisticsCard from "../ui/StatisticsCard";
const stats = [
  {
    number: "10K+",
    label: "Students",
  },
  {
    number: "500+",
    label: "Companies",
  },
  {
    number: "95%",
    label: "Success Rate",
  },
  {
    number: "24/7",
    label: "Support",
  },
];
export default function Statistics() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Our Impact
        </h2>
        <p className="mt-4 text-slate-600">
          See how we're helping students find their dream internships.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatisticsCard
            key={stat.label}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
    
