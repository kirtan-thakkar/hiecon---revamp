import { Metadata } from "next";
import ProductsClient from "@/components/products/ProductsClient";
import CTASection from "@/components/about/CTASection";

export const metadata: Metadata = {
  title: "Products | Hiecon Industrial Automation",
  description: "Browse our portfolio of industrial-grade PLC Systems, HMI Panels, and Servo Drives.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-0">
      <ProductsClient />
      <CTASection />
    </main>
  );
}
