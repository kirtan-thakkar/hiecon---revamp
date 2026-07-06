"use client";
import HeroSection from "@/components/sections/Hero"
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
