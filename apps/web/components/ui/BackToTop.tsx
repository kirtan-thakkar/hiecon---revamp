"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const pathname = usePathname();

  // Hide on dynamic pages (e.g. /products/[slug] or /solutions/[slug])
  // We check if it starts with the route but is not the index route itself.
  const isDynamicPage = 
    (pathname?.startsWith('/products/') && pathname !== '/products') || 
    (pathname?.startsWith('/solutions/') && pathname !== '/solutions');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (isDynamicPage) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[90] p-4 rounded-full bg-brand-primary text-primary-foreground shadow-2xl shadow-brand-primary/20 hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
