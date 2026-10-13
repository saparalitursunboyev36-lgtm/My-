import React from "react";

function SinglePageCard({ data }) {
  const images = data?.images ?? [];

  return (
    <div className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5 md:grid-cols-2">
      {/* Rasmlar */}
      <div className="bg-gradient-to-br from-emerald-50 to-stone-100 p-5">
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
          <img
            src={images[0]}
            alt={data?.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 flex gap-3">
          {images.slice(0, 3).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={data?.title}
              className={`h-16 w-16 rounded-xl object-cover ${
                i === 0
                  ? "ring-2 ring-emerald-600 ring-offset-2"
                  : "opacity-70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ma'lumot */}
      <div className="flex flex-col p-6 sm:p-10">
        <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
          {data?.category?.name}
        </span>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-4xl">
          {data?.title}
        </h1>

        <p className="mt-4 text-3xl font-extrabold text-emerald-700">
          ${data?.price}
          <span className="ml-1.5 text-sm font-medium text-stone-400">USD</span>
        </p>

        <div className="my-6 h-px bg-stone-200" />

        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          Mahsulot haqida
        </h2>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          {data?.description}
        </p>

        <div className="mt-auto flex gap-3 pt-8">
          <button className="flex-1 rounded-full bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700">
            Savatga qo&apos;shish
          </button>
          <button className="rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-bold text-stone-700 transition hover:border-emerald-300 hover:text-emerald-700">
            ♡ Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePageCard;
