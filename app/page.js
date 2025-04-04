"use client";
import Image from "next/image";
import Link from "next/link";
import bcrypt from "bcryptjs";

export default function Home() {
  console.log("Hello World");

  // Hashing a password
  bcrypt.hash('yourpassword123', 10).then((hashed) => {
    console.log("Hashed password:", hashed);

    // Example to compare password
    const userInput = "yourpassword123"; // Password user types
    const storedHashedPassword = "$2b$10$CvQhyfIpgYXjvMl2qQCNL.SUfkZUGyjwInAeSGyQM8ySOeQmRmZG."; // Stored bcrypt hash

    // You MUST use await or then
    bcrypt.compare(userInput, storedHashedPassword).then((isMatch) => {
      if (isMatch) {
        console.log("✅ Password is correct!");
      } else {
        console.log("❌ Password is incorrect.");
      }
    }).catch((err) => {
      console.error("Error comparing passwords:", err);
    });
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        <Link href="/admin/login">Go to Admin</Link>
      </button>
    </div>
  );
}
