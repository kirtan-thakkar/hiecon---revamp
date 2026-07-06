"use client";
import HeroSection from "@/components/sections/Hero"
import TechnologyPartners from "@/components/home/TechnologyPartners";
import StatsSection from "@/components/home/StatsSection";
import ProductFamilies from "@/components/home/ProductFamilies";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Gallery from "@/components/home/Gallery";
import ContactSection from "@/components/home/ContactSection";
import { Button } from "@workspace/ui/components/button"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Navbar from "@/components/ui/navbar";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Page() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  });
  return (
    <div className="mt-2">
      <div className="z-10 w-full ">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          
        </div>
      </div>
    </div>
  )
}
