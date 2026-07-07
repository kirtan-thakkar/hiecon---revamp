import { Metadata } from "next";
import SolutionsClient from "@/components/solutions/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | Hiecon Industrial Automation",
  description: "Explore our engineered solutions for Textile, FMCG, Pharmaceuticals, Automotive and Packaging.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <SolutionsClient />
    </main>
  );
}
