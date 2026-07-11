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

import { IndividualProduct } from "@/data/productDetails";
import { Link } from "next-view-transitions";

export default function ProductDetailClient({ data, familyProducts }: { data: ProductData, familyProducts?: IndividualProduct[] }) {
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
        {familyProducts && familyProducts.length > 0 && (
          <div className="max-w-6xl mb-32 border-t border-border/50 pt-16">
            <h2 className="text-3xl font-medium mb-12 text-center">Product Family</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {familyProducts.map((product) => {
                const isExternal = !!product.externalUrl;
                const Wrapper = isExternal ? 'a' : Link;
                const props = isExternal 
                  ? { href: product.externalUrl, target: "_blank", rel: "noopener noreferrer" } 
                  : { href: `/products/${product.categorySlug}/${product.slug}` };

                return (
                  // @ts-ignore
                  <Wrapper 
                    {...props}
                    key={product.id}
                    className="group flex flex-col items-center justify-between p-6 border border-border/50 bg-card rounded-2xl transition-all duration-300 hover:border-border hover:shadow-sm"
                  >
                    <div className="relative w-full aspect-[4/3] mb-6 rounded-lg bg-muted/50 p-2 overflow-hidden">
                      <Image 
                        src={product.heroImage} 
                        alt={product.name}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        )}
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
