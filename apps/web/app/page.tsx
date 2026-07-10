"use client";
import HeroSection from "@/components/sections/Hero";
import ProductFamilies from "@/components/home/ProductFamilies";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/about/CTASection";

export default function Page() {
  return (
    <div className="-mt-20">
      <HeroSection />
      <ProductFamilies />
      <WhyChooseUs />
      <ContactSection />
      <CTASection />
    </div>
  )
}
