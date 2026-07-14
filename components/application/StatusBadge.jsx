export default function StatusBadge({ status }) {
  if (status === "Applied") {
    return (
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        Applied
      </span>
    );
  }

  if (status === "Interview") {
    return (
      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
        Interview
      </span>
    );
  }

  if (status === "Accepted") {
    return (
      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
        Accepted
      </span>
    );
  }

  return (
    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
      Rejected
    </span>
  );
}