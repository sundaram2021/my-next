"use client"

import Link from "next/link";


export default function Home() {
  return (
    <div className="p-10">
      <Link href="/login" className="w-20 h-10 bg-slate-50 text-black py-2 px-3 rounded-md">Login</Link>
    </div>
  );
}
