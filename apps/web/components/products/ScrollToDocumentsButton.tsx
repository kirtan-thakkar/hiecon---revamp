"use client";

import { ReactNode } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";

export default function ScrollToDocumentsButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("documents");
    if (target) {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        // Scroll to the documents section smoothly
        // The offset is roughly 120px to account for the sticky header
        smoother.scrollTo("#documents", true, "top 120px");
      } else {
        // Fallback if ScrollSmoother isn't active
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - 120, behavior: 'smooth' });
      }
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full h-14 px-10 text-lg font-medium transition-transform hover:scale-105 border border-border/50 bg-transparent hover:bg-muted text-foreground cursor-pointer"
    >
      View Documents
    </button>
  );
}
