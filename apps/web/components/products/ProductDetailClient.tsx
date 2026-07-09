"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

type ProductData = {
  title: string;
  description: string;
  content: string;
  image: string;
  specs: { label: string; value: string }[];
};

export default function ProductDetailClient({ data }: { data: ProductData }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="w-full">
      <Container>
        <div className="max-w-4xl pt-12 pb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Product Detail
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            {data.title}
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            {data.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden bg-muted mb-24 cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            sizes="100vw"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <div className="max-w-6xl mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.content}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-6">Specifications</h2>
            <div className="flex flex-col border-t border-border/50">
              {data.specs.map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-border/50">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        src={data.image} 
        alt={data.title} 
      />
    </div>
  );
}
