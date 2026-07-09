"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";

import { products } from "@/data/products";
import { solutions } from "@/data/solutions";

type SearchResult = {
  title: string;
  slug: string;
  description: string;
  type: "Product" | "Solution";
  image: string;
  url: string;
};

const searchIndex: SearchResult[] = [
  ...products.map(p => ({
    title: p.title,
    slug: p.slug,
    description: p.description,
    type: "Product" as const,
    image: p.image,
    url: `/products/${p.slug}`
  })),
  ...solutions.map(s => ({
    title: s.title,
    slug: s.slug,
    description: s.description,
    type: "Solution" as const,
    image: s.image,
    url: `/solutions/${s.slug}`
  }))
];

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useTransitionRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm)
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex justify-center bg-background/80 backdrop-blur-md overflow-hidden"
          onClick={onClose}
        >
          {/* Gooey SVG Filter Definition */}
          <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <defs>
              <filter id="goo-effect" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>

          {/* Container with Filter */}
          <div 
            className="w-[90vw] max-w-2xl relative mt-24 md:mt-32 h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ filter: "url(#goo-effect)" }}
          >
            {/* Main Search Bar (Always sits at top=0) */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-foreground text-background rounded-full flex items-center px-6 py-4 md:py-5 shadow-2xl">
              <Search className="w-6 h-6 mr-4 opacity-60 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, solutions..."
                className="bg-transparent border-none outline-none text-xl md:text-2xl font-medium flex-1 text-background placeholder:text-background/50"
              />
              <button 
                onClick={onClose} 
                className="ml-4 opacity-50 hover:opacity-100 transition-all hover:rotate-90 flex-shrink-0"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Dropping Results Area */}
            <AnimatePresence>
              {results.slice(0, 6).map((result, index) => (
                <motion.div
                  key={result.slug}
                  initial={{ y: 0, scale: 0.3, filter: "blur(10px)" }}
                  animate={{ y: (index + 1) * (window.innerWidth < 768 ? 76 : 88), scale: 1, filter: "blur(0px)" }}
                  exit={{ y: 0, scale: 0.3, filter: "blur(10px)" }}
                  transition={{ 
                    type: "spring", 
                    bounce: 0.35, 
                    duration: 0.75, 
                    delay: index * 0.08 
                  }}
                  className="absolute left-0 right-0 mx-auto w-[95%] bg-foreground text-background rounded-full px-6 py-4 cursor-pointer flex items-center justify-between shadow-xl z-10"
                  style={{ top: 0 }}
                  onClick={() => handleSelect(result.url)}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-primary">
                      {result.type}
                    </span>
                    <span className="text-base md:text-lg font-medium tracking-tight">
                      {result.title}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-60 flex-shrink-0" />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty State / No Results message inside Gooey */}
            <AnimatePresence>
              {query && results.length === 0 && (
                <motion.div
                  initial={{ y: 0, scale: 0.3, filter: "blur(10px)" }}
                  animate={{ y: 90, scale: 1, filter: "blur(0px)" }}
                  exit={{ y: 0, scale: 0.3, filter: "blur(10px)" }}
                  transition={{ type: "spring", bounce: 0.35, duration: 0.75 }}
                  className="absolute left-0 right-0 mx-auto w-[90%] bg-foreground text-background rounded-full px-6 py-5 flex justify-center shadow-xl z-10"
                  style={{ top: 0 }}
                >
                  <span className="text-base md:text-lg font-medium opacity-60">
                    No results found
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
