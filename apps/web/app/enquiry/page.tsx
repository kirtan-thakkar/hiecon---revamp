import Container from "@/components/ui/Container";
import EnquiryClient from "@/components/enquiry/EnquiryClient";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export const metadata = {
  title: "Your Enquiry | Hiecon",
  description: "Review your selected products and submit your enquiry to Hiecon.",
};

import CTASection from "@/components/about/CTASection";

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-0 overflow-x-hidden">
      <EnquiryClient />
      <CTASection />
    </main>
  );
}
