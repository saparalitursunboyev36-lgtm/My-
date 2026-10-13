import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
      <p className="text-8xl font-extrabold text-emerald-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-stone-900">Sahifa topilmadi</h1>
      <Link href="/" className="mt-8 rounded-full bg-stone-900 px-7 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}

export default NotFound;
