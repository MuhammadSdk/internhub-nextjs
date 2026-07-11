import TableRow from "./TableRow";

const applications = [
  {
    company: "Google",
    position: "Frontend Developer",
    status: "Applied",
    deadline: "20 Jul 2026",
  },
  {
    company: "Tokopedia",
    position: "Backend Developer",
    status: "Interview",
    deadline: "18 Jul 2026",
  },
  {
    company: "Shopee",
    position: "UI/UX Designer",
    status: "Accepted",
    deadline: "25 Jul 2026",
  },
  {
    company: "Traveloka",
    position: "Fullstack Developer",
    status: "Rejected",
    deadline: "15 Jul 2026",
  },
];

export default function InternshipTable() {
    
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Internship Applications
          </h2>

          <p className="mt-1 text-slate-500">
            Track all your internship applications.
          </p>
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="py-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Company
              </th>

              <th className="py-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Position
              </th>

              <th className="py-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="py-3 font-semibold">
                Deadline
              </th>

            </tr>

          </thead>

          <tbody>
              {applications.map((application) => (
            <TableRow
              key={application.company}
              company={application.company}
              position={application.position}
              status={application.status}
              deadline={application.deadline}
            />
          ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}