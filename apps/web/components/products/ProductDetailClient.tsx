"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { FileText, ExternalLink, Download } from "lucide-react";

type ProductData = {
  title: string;
  description: string;
  content: string;
  image: string;
  specs: { label: string; value: string }[];
  documents?: { title: string; type: string; fileUrl?: string; externalUrl?: string }[];
  specificationGroups?: ProductSpecTable[];
};

import { IndividualProduct, ProductSpecTable } from "@/data/productDetails";
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

        {data.specificationGroups && data.specificationGroups.length > 0 && (
          <div className="max-w-6xl mb-32 border-t border-border/50 pt-16">
            <h2 className="text-3xl font-medium mb-12">Technical Specifications</h2>
            <div className="space-y-16">
              {data.specificationGroups.map((group, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                    {group.subtitle && <p className="text-muted-foreground mt-1">{group.subtitle}</p>}
                  </div>
                  <div className="w-full overflow-x-auto rounded-xl border border-border bg-card">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-muted/50 text-muted-foreground">
                        <tr>
                          {group.columns.map((col) => (
                            <th key={col.key} className="px-6 py-4 font-medium border-b border-border">
                              {col.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {group.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-muted/30 transition-colors">
                            {group.columns.map((col) => (
                              <td key={col.key} className="px-6 py-4 text-foreground">
                                {row[col.key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.documents && data.documents.length > 0 && (
          <div id="documents" className="max-w-6xl mb-32 border-t border-border/50 pt-16">
            <h2 className="text-3xl font-medium mb-10">Technical Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.documents.map((doc, idx) => (
                <a 
                  key={idx}
                  href={doc.fileUrl || doc.externalUrl || "#"}
                  target={doc.externalUrl ? "_blank" : undefined}
                  rel={doc.externalUrl ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-border/50 bg-card hover:border-brand-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-primary-foreground transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{doc.title}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{doc.type}</span>
                    </div>
                  </div>
                  {doc.externalUrl ? <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-brand-primary transition-colors" /> : <Download className="w-5 h-5 text-muted-foreground group-hover:text-brand-primary transition-colors" />}
                </a>
              ))}
            </div>
          </div>
        )}

        {familyProducts && familyProducts.length > 0 && (
          <div className="max-w-6xl mb-32 border-t border-border/50 pt-16">
            <h2 className="text-3xl font-medium mb-12 text-center">Product Family</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {familyProducts.map((product) => {
                const innerContent = (
                  <>
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
                  </>
                );

                if (product.externalUrl) {
                  return (
                    <a
                      key={product.id}
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-between p-6 border border-border/50 bg-card rounded-2xl transition-all duration-300 hover:border-border hover:shadow-sm"
                    >
                      {innerContent}
                    </a>
                  );
                }

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="group flex flex-col items-center justify-between p-6 border border-border/50 bg-card rounded-2xl transition-all duration-300 hover:border-border hover:shadow-sm"
                  >
                    {innerContent}
                  </Link>
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
