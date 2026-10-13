import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Moshinalarimiz",
  description: "Prava olish | Oson Prava Olish | prava",
};

function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-emerald-300/40 blur-3xl" />
      <section className="container relative mx-auto px-5 py-24 text-center sm:py-32">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800">
          Xush kelibsiz
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-stone-900 sm:text-7xl">
          Eng yaxshisini <span className="text-emerald-600">oson</span> toping
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-500">
          Bizning mahsulotlar to&apos;plamini ko&apos;rib chiqing va o&apos;zingizga mosini tanlang.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="rounded-full bg-stone-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700">
            Mahsulotlarni ko&apos;rish
          </Link>
          <Link href="/contact" className="rounded-full border border-stone-300 bg-white px-8 py-3.5 text-sm font-bold text-stone-800 transition hover:border-emerald-400">
            Aloqa
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
