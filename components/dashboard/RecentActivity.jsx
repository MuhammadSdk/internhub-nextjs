const activities = [
  {
    company: "Google",
    action: "Applied for Frontend Developer",
    time: "2 hours ago",
  },
  {
    company: "Tokopedia",
    action: "Interview scheduled",
    time: "Yesterday",
  },
  {
    company: "Shopee",
    action: "Application accepted",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <p className="mt-1 text-slate-500">
        Latest updates from your internship journey.
      </p>

      <div className="mt-6 space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.company}
            className="flex items-start justify-between rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md"
          >

            <div>

              <h3 className="font-semibold">
                {activity.company}
              </h3>

              <p className="text-slate-600">
                {activity.action}
              </p>

            </div>

            <span className="text-sm text-slate-400">
              {activity.time}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}