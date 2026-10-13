import Link from "next/link";
import React from "react";

function ProductCard({ el }) {
  const image = el.images?.[0];

  return (
    <Link
      href={`/products/${el.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-50 to-stone-100">
        {image && (
          <img
            src={image}
            alt={el.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        {el.category?.name && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-800 backdrop-blur">
            {el.category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-base font-bold text-stone-900 transition group-hover:text-emerald-700">
          {el.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
          {el.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-lg font-extrabold text-stone-900">
            ${el.price}
          </span>
          <span className="text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1">
            Batafsil →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
