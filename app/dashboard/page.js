import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import SummaryCards from "@/components/dashboard/SummaryCards";
import InternshipTable from "@/components/dashboard/InternshipTable";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <Header />

        {/* Summary Cards */}
        <SummaryCards />

        {/* Content */}
        <section className="mt-8 grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <InternshipTable />
          </div>

          <div>
            <RecentActivity />
          </div>

        </section>

      </main>

    </div>
  );
}