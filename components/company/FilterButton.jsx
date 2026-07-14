export default function FilterButton({ text }) {
  return (
    <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium transition hover:bg-blue-600 hover:text-white">
      {text}
    </button>
  );
}