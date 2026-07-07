import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: "📊",
    title: "Track Applications",
    description: "Manage all your internship applications in one place.",
  },
  {
    icon: "🏢",
    title: "Company Management",
    description: "Organize companies and internship opportunities.",
  },
  {
    icon: "📅",
    title: "Interview Schedule",
    description: "Never miss an interview with schedule reminders.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Why Choose InternHub?
        </h2>

        <p className="mt-4 text-slate-600">
          Everything you need to manage your internship journey.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>


    </section>
  );
}