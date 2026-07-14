import StatusBadge from "./StatusBadge";

export default function ApplicationRow({
  company,
  position,
  status,
  deadline,
}) {
  return (
    <tr className="border-b border-slate-200">

      <td className="py-4 font-medium">
        {company}
      </td>

      <td className="py-4 text-slate-600">
        {position}
      </td>

      <td className="py-4">
        <StatusBadge status={status} />
      </td>

      <td className="py-4 text-slate-600">
        {deadline}
      </td>

    </tr>
  );
}