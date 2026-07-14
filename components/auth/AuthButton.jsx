import Link from "next/link";

export default function AuthButton({
  children,
  href = "/dashboard",
}) {
  return (
    <Link
      href={href}
      className="mt-6 block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}