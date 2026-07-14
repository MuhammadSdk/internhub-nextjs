export default function SearchBar() {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search companies..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}