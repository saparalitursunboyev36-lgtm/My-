import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Haqimizda" },
  { href: "/products", label: "Mahsulotlar" },
  { href: "/contact", label: "Aloqa" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf9f6]/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-stone-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-sm font-bold text-white shadow-md shadow-emerald-600/25">
            N
          </span>
          NextBrand
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-stone-200 bg-white p-1 text-sm font-medium text-stone-600 shadow-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-full px-4 py-1.5 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href="#"
            className="hidden font-semibold text-stone-700 transition hover:text-emerald-700 sm:block"
          >
            Kirish
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-stone-900 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700"
          >
            Bog&apos;lanish
          </Link>
        </div>
      </div>

      {/* Mobil navigatsiya */}
      <ul className="flex items-center gap-2 overflow-x-auto px-5 pb-3 text-sm font-medium text-stone-600 md:hidden">
        {links.map((l) => (
          <li key={l.href} className="shrink-0">
            <Link
              href={l.href}
              className="block rounded-full border border-stone-200 bg-white px-4 py-1.5"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
