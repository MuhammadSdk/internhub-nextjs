export default function TableRow({
  company,
  position,
  status,
  deadline,
}) {

  let statusStyle = "";

  if (status === "Applied") {
    statusStyle = "bg-blue-100 text-blue-700";
  } else if (status === "Interview") {
    statusStyle = "bg-yellow-100 text-yellow-700";
  } else if (status === "Accepted") {
    statusStyle = "bg-green-100 text-green-700";
  } else if (status === "Rejected") {
    statusStyle = "bg-red-100 text-red-700";
  }

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">

      <td className="py-4 font-medium text-slate-800">
        {company}
      </td>

      <td className="py-4 text-slate-600">
        {position}
      </td>

      <td className="py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyle}`}
        >
          {status}
        </span>
      </td>

      <td className="py-4 text-slate-500">
        {deadline}
      </td>

    </tr>
  );
}