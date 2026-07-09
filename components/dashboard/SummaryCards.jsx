import SummaryCard from "./SummaryCard";

const cards = [
  {
    icon: "📄",
    title: "Applications",
    total: 12,
    description: "Total internship applications",
    trend: "+5%",
  },
  {
    icon: "🏢",
    title: "Companies",
    total: 20,
    description: "Partner companies",
    trend: "+3%",
  },
  {
    icon: "📅",
    title: "Interviews",
    total: 4,
    description: "Upcoming interviews",
    trend: "Today",
  },
];

export default function SummaryCards() {
  return (
    <section className="mt-8">
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <SummaryCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            total={card.total}
            description={card.description}
            trend={card.trend}
          />
        ))}
      </div>
    </section>
  );
}