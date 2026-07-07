"use client";

import { motion } from "motion/react";
import { Link } from 'next-view-transitions';
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";

export default function ProductsClient() {
  return (
    <div className="w-full">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl pt-12 pb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Hardware Portfolio
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            Industrial grade hardware.
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            From edge controllers to heavy-duty servo motors. We partner with the world's leading manufacturers to provide reliable, scalable hardware for your factory.
          </motion.p>
        </div>

        {/* Products List */}
        <div className="flex flex-col gap-32 pb-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col gap-6 ${!isEven ? "lg:order-2 lg:pl-12" : "lg:pr-12"}`}
                >
                  <span className="text-sm font-medium text-muted-foreground">0{index + 1} /</span>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <Link href={`/products/${product.slug}`} className="group inline-flex items-center gap-2 text-brand-primary font-medium mt-4">
                    View Specifications
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Image Side - Scroll Driven Pull Up */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-muted ${!isEven ? "lg:order-1" : ""}`}
                >
                  <div className="absolute inset-0 bg-background/5 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </motion.div>

              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
