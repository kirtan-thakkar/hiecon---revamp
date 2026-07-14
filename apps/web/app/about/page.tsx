import type { Metadata } from "next";
import AboutHero from "../../components/about/AboutHero";
import CompanyIntro from "../../components/about/CompanyIntro";
import CompanyScale from "../../components/about/CompanyScale";
import TechnologyBreadth from "../../components/about/TechnologyBreadth";
import CoreCompetency from "../../components/about/CoreCompetency";
import EngineeringStrength from "../../components/about/EngineeringStrength";
import CTASection from "../../components/about/CTASection";

export const metadata: Metadata = {
  title: "About Us | Hiecon",
  description: "Learn about Hiecon's history engineering the future of industrial automation since 1996.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-primary selection:text-primary-foreground">
      <div className="relative pt-[80px]">
        <AboutHero />
        <CompanyIntro />
        <CompanyScale />
        <TechnologyBreadth />
        <CoreCompetency />
        <EngineeringStrength />
        <CTASection />
      </div>
    </main>
  );
}
