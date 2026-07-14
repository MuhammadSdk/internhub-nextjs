import ApplicationTable from "./ApplicationTable";

export default function ApplicationList() {
  return (
    <section>

      <h1 className="text-3xl font-bold">
        Applications
      </h1>

      <p className="mt-2 text-slate-500">
        Manage all internship applications in one place.
      </p>

      <ApplicationTable />

    </section>
  );
}