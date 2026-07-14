import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">

      <AuthCard>

        <h1 className="text-center text-3xl font-bold text-slate-900">
          InternHub
        </h1>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">
          Create Account
        </h2>

        <p className="mt-2 text-slate-500">
          Start managing your internship journey.
        </p>

        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

         <AuthButton href="/dashboard">
          Create Account
        </AuthButton>
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </AuthCard>

    </main>
  );
}