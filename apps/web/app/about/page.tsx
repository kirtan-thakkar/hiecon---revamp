import type { Metadata } from "next";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import CoreValues from "../../components/about/CoreValues";
import GlobalPresence from "../../components/about/GlobalPresence";
import CTASection from "../../components/about/CTASection";

const yearsOfExperience = new Date().getFullYear() - 1997;

export const metadata: Metadata = {
  title: "About Us | Hiecon",
  description: `Learn about Hiecon's ${yearsOfExperience}-year history engineering the future of industrial automation.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-primary selection:text-primary-foreground">
      <div className="relative pt-[80px]">
        <AboutHero />
        <OurStory />
        <CoreValues />
        <GlobalPresence />
        <CTASection />
      </div>
    </main>
  );
}
