import ContactSection from "../../components/home/ContactSection";
import CTASection from "../../components/about/CTASection";

export const metadata = {
  title: "Contact Us | Hiecon",
  description: "Get in touch with Hiecon's engineering team or visit our global offices.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-0">
      <ContactSection 
        title="Let's Engineer the Future Together." 
        subtitle="Contact Us" 
      />
      <CTASection />
    </main>
  );
}
