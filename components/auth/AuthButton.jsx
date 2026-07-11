export default function AuthButton({ children }) {
  return (
    <button
  className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg">
        {children}
    </button>
  
  );
}