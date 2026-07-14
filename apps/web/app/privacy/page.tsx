import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Hiecon",
  description: "Learn how Hiecon collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-32 selection:bg-brand-primary selection:text-primary-foreground">
      <PrivacyClient />
    </main>
  );
}
