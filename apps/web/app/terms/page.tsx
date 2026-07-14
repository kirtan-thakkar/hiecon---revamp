import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Use | Hiecon",
  description: "Terms and conditions governing the use of the Hiecon Industrial Automation website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-32 selection:bg-brand-primary selection:text-primary-foreground">
      <TermsClient />
    </main>
  );
}
