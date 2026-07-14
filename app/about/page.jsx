import Link from "next/link";
import { FaBuilding, FaReact, FaLaptopCode } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";  

export default function AboutPage() {
  return (

    <>
    <Navbar />
    
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About InternHub
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Helping Students Find Their Dream Internship
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            InternHub is a modern internship management platform that helps
            students discover companies, manage applications, and prepare for
            interviews in one place.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

          <FaBuilding className="text-5xl text-blue-600" />

          <h2 className="mt-5 text-2xl font-bold">
            Explore Companies
          </h2>

          <p className="mt-3 text-slate-600">
            Browse internship opportunities from top companies.
          </p>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

          <HiDocumentText className="text-5xl text-blue-600" />

          <h2 className="mt-5 text-2xl font-bold">
            Manage Applications
          </h2>

          <p className="mt-3 text-slate-600">
            Keep track of every internship application easily.
          </p>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

          <MdOutlineCalendarMonth className="text-5xl text-blue-600" />

          <h2 className="mt-5 text-2xl font-bold">
            Prepare Interviews
          </h2>

          <p className="mt-3 text-slate-600">
            Stay organized with interview schedules and updates.
          </p>

        </div>

      </section>

      {/* Technologies */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Built With Modern Technologies
          </h2>

          <p className="mt-4 text-center text-slate-500">
            Technologies used to build InternHub.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl border border-slate-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <FaReact className="mx-auto text-5xl text-sky-500" />

              <p className="mt-4 font-semibold">
                React
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <SiNextdotjs className="mx-auto text-5xl text-black" />

              <p className="mt-4 font-semibold">
                Next.js
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <SiTailwindcss className="mx-auto text-5xl text-cyan-500" />

              <p className="mt-4 font-semibold">
                Tailwind CSS
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <FaLaptopCode className="mx-auto text-5xl text-indigo-500" />

              <p className="mt-4 font-semibold">
                Responsive Design
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Start Your Internship Journey?
        </h2>

        <p className="mt-4 text-slate-300">
          Join InternHub and discover opportunities that match your skills.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
        >
          Get Started
        </Link>

      </section>

    </main>
    <Footer />
    </>
  );
}