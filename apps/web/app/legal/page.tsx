import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Disclosure | Hiecon",
  description: "Official legal disclosure and company information for Hiecon Industrial Automation.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-32 selection:bg-brand-primary selection:text-primary-foreground">
      <LegalClient />
    </main>
  );
}


