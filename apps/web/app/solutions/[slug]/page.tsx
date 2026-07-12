import { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailClient from "@/components/solutions/SolutionDetailClient";

import { solutionsData } from "@/data/solutions";
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = solutionsData[resolvedParams.slug];
  if (!data) return { title: "Solution Not Found" };
  return {
    title: `${data.title} | Hiecon Solutions`,
    description: data.description,
  };
}

export default async function SolutionPage({ params }: Props) {
  const resolvedParams = await params;
  const data = solutionsData[resolvedParams.slug];
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-0">
      <SolutionDetailClient data={data} />
    </main>
  );
}
