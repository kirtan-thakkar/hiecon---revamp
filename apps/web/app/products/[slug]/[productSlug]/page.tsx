import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ChevronRight, FileText, ExternalLink, Download } from "lucide-react";

import { getProduct, getProductsByCategory, IndividualProduct } from "@/data/productDetails";
import { productsData } from "@/data/products";
import Container from "@/components/ui/Container";
import { Button } from "@workspace/ui/components/button";
import CTASection from "@/components/about/CTASection";

type Props = {
  params: Promise<{ slug: string; productSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug, resolvedParams.productSlug);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | ${product.categorySlug} | Hiecon`,
    description: product.shortDescription || product.tagline,
  };
}

export default async function IndividualProductPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug, productSlug } = resolvedParams;
  
  const category = productsData[slug];
  const product = getProduct(slug, productSlug);
  
  if (!category || !product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(slug).filter(p => p.id !== product.id);

  return (
    <main className="min-h-screen bg-background pt-32 pb-0">
      <Container>

        <nav className="flex items-center text-sm font-medium text-muted-foreground mb-12">
          <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href={`/products/${slug}`} className="hover:text-foreground transition-colors">{category.title}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-foreground">{product.name}</span>
        </nav>
        {/* HERO SECTION (MATCHING CATEGORY PAGE DESIGN SYSTEM) */}
        <div className="max-w-4xl pt-12 pb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6">
            {category.title}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-2xl mb-4">
            {product.tagline}
          </p>
          {product.shortDescription && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {product.shortDescription}
            </p>
          )}

          <div className="flex gap-4 mt-8">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">Request Quote</Button>
            </Link>
            {product.documents && product.documents.length > 0 && (
              <Link href="#documents">
                <Button size="lg" variant="outline" className="rounded-full px-8">View Documents</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-muted mb-24 border border-border/50 group">
          <Image 
            src={product.heroImage} 
            alt={product.name}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
          />
        </div>

        {product.technicalHighlights && product.technicalHighlights.length > 0 && (
          <div className="max-w-6xl mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-medium mb-6">Highlights</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Key technical parameters and specifications for the {product.name} {product.tagline}.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium mb-6">Quick Specs</h2>
              <div className="flex flex-col border-t border-border/50">
                {product.technicalHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex justify-between py-4 border-b border-border/50">
                    <span className="text-muted-foreground">{highlight.label}</span>
                    <span className="font-medium text-foreground text-right">{highlight.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FEATURES OVERVIEW */}
        {product.features && product.features.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-medium mb-10">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col py-4 border-b border-border/50">
                  <span className="font-medium text-foreground text-lg">{feature.title}</span>
                  {feature.description && (
                    <span className="text-muted-foreground mt-2">{feature.description}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECHNICAL SPECIFICATIONS */}
        {product.specificationGroups && product.specificationGroups.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-medium mb-12">Technical Specifications</h2>
            <div className="space-y-16">
              {product.specificationGroups.map((group, idx) => (
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

        {/* DOCUMENTS */}
        {product.documents && product.documents.length > 0 && (
          <div id="documents" className="mb-24">
            <h2 className="text-3xl font-medium mb-10">Technical Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.documents.map((doc, idx) => (
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

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mb-32 pt-16 border-t border-border/50">
            <h2 className="text-3xl font-medium mb-10">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((related) => (
                <Link 
                  href={`/products/${related.categorySlug}/${related.slug}`} 
                  key={related.id}
                  className="group flex flex-col items-center justify-between p-6 border border-border/50 bg-card rounded-2xl transition-all duration-300 hover:border-border hover:shadow-sm"
                >
                  <div className="relative w-full aspect-[4/3] mb-6 rounded-lg bg-muted/50 p-2 overflow-hidden">
                    <Image 
                      src={related.heroImage} 
                      alt={related.name}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{related.name}</h3>
                    <p className="text-sm text-muted-foreground">{related.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
      
      <CTASection />
    </main>
  );
}
