import ProductCard from '@/components/ProductCard';
import { cacheLife } from 'next/cache';
import React from 'react'

async function Products() {
  "use cache"
  cacheLife({
    revalidate:3600,
    expire:3600
  })

  const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=1");
  const result = await res.json();

  return (
    <>
      <main className='container mx-auto px-5 py-14'>
        <div className='mb-10'>
          <span className='text-xs font-bold uppercase tracking-widest text-emerald-700'>Katalog</span>
          <h1 className='mt-2 text-4xl font-extrabold tracking-tight text-stone-900'>Mahsulotlar</h1>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            result?.map((el) => (
              <ProductCard key={el.id} el={el} />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default Products;
