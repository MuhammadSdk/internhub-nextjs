import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import SummaryCards from "@/components/dashboard/SummaryCards";
import InternshipTable from "@/components/dashboard/InternshipTable";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 bg-slate-50 p-8">

        <Header />

          <SummaryCards />

          <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <InternshipTable />
            </div>

            <div>
              <RecentActivity />
            </div>

          </div>

    </main>
    </div>
  );
}