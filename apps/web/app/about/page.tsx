import type { Metadata } from "next";
import AboutHero from "../../components/about/AboutHero";
import ProcessScroll from "../../components/about/ProcessScroll";
import ScaleReveal from "../../components/about/ScaleReveal";
import EngineeringHorizontal from "../../components/about/EngineeringHorizontal";
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
        <ProcessScroll />
        <ScaleReveal />
        <EngineeringHorizontal />
        <CTASection />
      </div>
    </main>
  );
}
