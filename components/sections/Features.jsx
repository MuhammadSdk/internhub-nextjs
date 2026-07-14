import FeatureCard from "../ui/FeatureCard";

import { FaReact, FaLaptopCode } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const features = [
  {
    icon: <FaReact className="text-5xl text-sky-500" />,
    title: "React",
    description:
      "Build reusable and interactive user interfaces with React.",
  },
  {
    icon: <SiNextdotjs className="text-5xl text-black" />,
    title: "Next.js",
    description:
      "Modern React framework for fast and scalable web applications.",
  },
  {
    icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building responsive interfaces.",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-indigo-500" />,
    title: "Responsive Design",
    description:
      "Optimized experience across desktop, tablet, and mobile devices.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Built With Modern Technologies
        </h2>

        <p className="mt-4 text-slate-500">
          InternHub is built using today's most popular web technologies.
        </p>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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