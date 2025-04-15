"use client";
import Image from "next/image";
import Link from "next/link";
import bcrypt from "bcryptjs";

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-yellow-200 flex h-20 justify-center items-center py-12">
        <h1 className="text-3xl font-bold text-black">WELCOME TO HANDS ON TOURING</h1>
      </div>
      <div className="h-1 w-full bg-black" />
   
      <div className="bg-indigo-900 flex flex-col items-center flex-1 py-20">
        <div className="rounded-full overflow-hidden w-32 h-32 border-2 border-white">
          <Image src="/avatar.png" alt="User Avatar" width={128} height={128} />
        </div>
        <p className="text-white text-lg">Welcome back!</p>
        <Link href="/admin/login" className="px-4 py-2 bg-purple-600 text-white rounded">
          Login
        </Link>
      </div>
    </div>
  );
}

