"use client";
import HeroSection from "@/components/sections/Hero";
import ProductFamilies from "@/components/home/ProductFamilies";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";

export default function Page() {
  return (
    <div className="mt-2">
      <HeroSection />
      <ProductFamilies />
      <WhyChooseUs />
      <ContactSection />
    </div>
  )
}
