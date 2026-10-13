import SinglePageCard from "@/components/SinglePageCard";
import React from "react";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  // fetch post information
  const post = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
  ).then((res) => res.json());

  return {
    title: post.title,
    description: post.description,
  };
}

async function SinglePage({ params }) {
  const { productId } = await params;

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:py-14">
      <SinglePageCard data={data} />
    </div>
  );
}

export default SinglePage;
