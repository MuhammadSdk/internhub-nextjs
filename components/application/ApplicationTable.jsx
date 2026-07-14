import ApplicationRow from "./ApplicationRow";

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

export default function ApplicationTable() {
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-200 text-left">

            <th className="py-3">Company</th>
            <th className="py-3">Position</th>
            <th className="py-3">Status</th>
            <th className="py-3">Deadline</th>

          </tr>

        </thead>

        <tbody>

          {applications.map((application) => (

            <ApplicationRow
              key={application.company}
              company={application.company}
              position={application.position}
              status={application.status}
              deadline={application.deadline}
            />

          ))}

        </tbody>

      </table>

    </section>
  );
}