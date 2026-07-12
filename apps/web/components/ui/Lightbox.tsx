"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export default function Lightbox({ isOpen, onClose, src, alt }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10000] p-2 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[80vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
