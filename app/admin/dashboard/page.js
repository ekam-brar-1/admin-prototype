"use client";
import Link from "next/link";

const options = [
  { label: "Clients", href: "/admin/dashboard" },
  { label: "Users", href: "/admin/users" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "Settings", href: "/admin/settings" },
];

export default function DashboardOptions() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#4F378B]">Admin Dashboard</h1>
      </header>

      {/* Options Grid */}
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              /* 
                Each option is a card with:
                - White background (#FFFFFF)
                - Gray border (#B8B8B8)
                - Purple-ish text (#65558F)
                - On hover, changes background to #948AAE and text to white
              */
              className="block p-6 bg-[#FFFFFF] border border-[#B8B8B8] rounded-lg 
                         shadow text-[#65558F] font-semibold 
                         hover:bg-[#948AAE] hover:text-white transition"
            >
              <h2 className="text-2xl">{label}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
