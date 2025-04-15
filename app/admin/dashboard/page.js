"use client";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authcontext"; 

const options = [
  { label: "Clients", href: "/admin/dashboard" },
  { label: "Users", href: "/admin/users" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "Settings", href: "/admin/settings" },
];

export default function DashboardOptions() {
  const router = useRouter();
  const { isAuthenticated, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#4F378B]">Admin Dashboard</h1>
      </header>
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block p-6 bg-[#FFFFFF] border border-[#B8B8B8] rounded-lg shadow text-[#65558F] font-semibold hover:bg-[#948AAE] hover:text-white transition"
            >
              <h2 className="text-2xl">{label}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
