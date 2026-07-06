"use client";

import { motion, AnimatePresence } from "motion/react";
import Container from "../ui/Container";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Placeholder images
const images = [
  { id: 1, src: "https://placehold.co/800x600/e5e5e5/a3a3a3?text=Industrial+1", alt: "Industrial machinery", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { id: 2, src: "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Automation+2", alt: "Automation process", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { id: 3, src: "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Factory+3", alt: "Factory floor", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { id: 4, src: "https://placehold.co/600x800/e5e5e5/a3a3a3?text=Robotics+4", alt: "Robotics", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { id: 5, src: "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Control+5", alt: "Control systems", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { id: 6, src: "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Assembly+6", alt: "Assembly line", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
  }

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
          >
            Inside Our Facilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            A glimpse into our state-of-the-art manufacturing and automation processes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.colSpan} ${img.rowSpan} bg-neutral-100 dark:bg-neutral-900`}
              onClick={() => setSelectedImage(img.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img.src} 
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedImage} alt="Enlarged view" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
