export default function AuthInput({
  label,
  type,
  placeholder,
}) {
  return (
    <div className="mt-5">

      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>

    </div>
  );
}