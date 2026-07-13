"use client";

import { ReactNode } from "react";
import gsap from "gsap";

export default function ScrollToDocumentsButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("documents");
    if (target) {
      // Using window scrollTo with smooth behavior usually works fine with GSAP ScrollSmoother
      // However, to be perfectly safe with GSAP, we can use ScrollSmoother's instance if available.
      // But standard window.scrollTo or element.scrollIntoView works fine in recent GSAP versions.
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full h-14 px-10 text-lg font-medium transition-transform hover:scale-105 border border-border/50 bg-transparent hover:bg-muted text-foreground"
    >
      View Documents
    </button>
  );
}
