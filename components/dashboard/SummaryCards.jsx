import SummaryCard from "./SummaryCard";

import {
  FaFileAlt,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaFileAlt className="text-4xl text-blue-600" />,
    title: "Applications",
    total: 12,
    description: "Total internship applications",
    trend: "+5%",
  },
  {
    icon: <FaBuilding className="text-4xl text-blue-600" />,
    title: "Companies",
    total: 20,
    description: "Partner companies",
    trend: "+3%",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-blue-600" />,
    title: "Interviews",
    total: 4,
    description: "Upcoming interviews",
    trend: "Today",
  },
];

export default function SummaryCards() {
  return (
    <section className="mt-8">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

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