import Link from "next/link";
export default function CTA() {
    return (
        <section className="bg-blue-600 px-6 py-20">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-4xl font-bold text-white">
                    Ready to Get Started?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                    Join thousands of students and companies using our platform to manage internships.
                </p>
                <Link href="/signup">
                    <button className="mt-6 rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 hover:bg-blue-100">
                        Get Started
                    </button>
                </Link>
            </div>
        </section>
    )
}