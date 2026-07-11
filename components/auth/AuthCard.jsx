export default function AuthCard({ children }) {
  return (
    <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {children}
    </section>
  );
}