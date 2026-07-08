import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import OfficeLocations from "../../components/contact/OfficeLocations";

export const metadata = {
  title: "Contact Us | Hiecon",
  description: "Get in touch with Hiecon's engineering team or visit our global offices.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-primary selection:text-primary-foreground">
      <div className="relative pt-[80px]">
        <ContactHero />
        <ContactInfo />
        <OfficeLocations />
      </div>
    </main>
  );
}
