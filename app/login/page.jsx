import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import Navbar from "@/components/layout/Navbar";

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">

      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <AuthCard>

            <div className="text-center">

            <div className="text-5xl">
                
            </div>

            <h1 className="mt-3 text-3xl font-bold text-slate-900">
                InternHub
            </h1>

            </div>
            <h2 className="mt-8 text-2xl font-semibold text-slate-900">
                Welcome Back in InternHub
            </h2>

            <p className="mt-2 text-slate-500">
                Sign in to continue your internship journey.
            </p>

            <AuthInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                />

            <AuthInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                />
            <div className="mt-4 flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600">

                    <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300"
                    />

                    Remember me

                </label>

                <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    Forgot password?
                </a>

            </div>

            <AuthButton href="/dashboard">
                Sign In
            </AuthButton>
            <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
                <a
                    href="/register"
                    className="font-semibold text-blue-600 hover:underline">
                    Register
                </a>
            </p>

        </AuthCard>

      </section>

    </main>
    </>
  );
}