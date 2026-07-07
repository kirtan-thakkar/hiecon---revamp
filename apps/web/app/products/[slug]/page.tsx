import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/products/ProductDetailClient";

import { productsData } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = productsData[resolvedParams.slug];
  if (!data) return { title: "Product Not Found" };
  return {
    title: `${data.title} | Hiecon Products`,
    description: data.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const data = productsData[resolvedParams.slug];
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <ProductDetailClient data={data} />
    </main>
  );
}
