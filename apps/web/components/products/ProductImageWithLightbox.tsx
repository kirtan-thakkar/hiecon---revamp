"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

export default function ProductImageWithLightbox({ src, alt }: { src: string; alt: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div 
        className="relative aspect-video w-full rounded-3xl overflow-hidden bg-[#F8F8F8] dark:bg-[#E5E5E5] mb-24 cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
        />
      </div>
      
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        src={src} 
        alt={alt} 
      />
    </>
  );
}
