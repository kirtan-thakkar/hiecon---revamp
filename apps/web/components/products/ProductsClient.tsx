"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Link } from 'next-view-transitions';
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

import { products } from "@/data/products";
import { productsPageData } from "@/data/productsPageData";

export default function ProductsClient() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative pt-12 pb-24 mb-16 overflow-hidden border-b border-border/20 rounded-b-[2rem] md:rounded-b-[4rem] ">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">Products</span>
          </nav>
          <div className="max-w-4xl pt-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            {productsPageData.header.label}
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            {productsPageData.header.title}
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            {productsPageData.header.description}
          </motion.p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-32">
          {products.map((product, index) => {
            return (
              <motion.div 
                key={product.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: "easeOut" }}
                className="col-span-1 flex flex-col gap-6 group"
              >
                <div 
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted cursor-pointer"
                  onClick={() => setLightbox({ src: product.image, alt: product.title })}
                >
                  <div className="absolute inset-0 bg-background/5 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-medium tracking-tight text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-brand-primary font-medium mt-1 text-sm">
                    {productsPageData.detailLabels.viewSpecifications}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
      
      <Lightbox 
        isOpen={!!lightbox} 
        onClose={() => setLightbox(null)} 
        src={lightbox?.src || ""} 
        alt={lightbox?.alt || ""} 
      />
    </div>
  );
}
