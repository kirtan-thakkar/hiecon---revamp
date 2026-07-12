"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Button } from "@workspace/ui/components/button";
import { IndividualProduct } from "@/data/productDetails";

type ExpandableProductGridProps = {
  products: IndividualProduct[];
  baseSlug: string;
  initialLimit?: number;
};

export default function ExpandableProductGrid({ 
  products, 
  baseSlug,
  initialLimit = 3 
}: ExpandableProductGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProducts = isExpanded ? products : products.slice(0, initialLimit);
  const hasMore = products.length > initialLimit;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProducts.map((product) => {
          const innerContent = (
            <>
              <div className="relative w-full aspect-[4/3] mb-6 rounded-3xl bg-[#F8F8F8] dark:bg-[#E5E5E5] overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                <Image 
                  src={product.heroImage} 
                  alt={product.name}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                />
              </div>
              <div className="px-2">
                <h3 className="font-medium text-2xl text-foreground mb-2">{product.name}</h3>
                {product.tagline && <p className="text-base text-muted-foreground">{product.tagline}</p>}
              </div>
            </>
          );

          const cardClasses = "group relative flex flex-col";

          if (product.externalUrl) {
            return (
              <a
                key={product.id}
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {innerContent}
              </a>
            );
          }

          return (
            <Link
              key={product.id}
              href={`/products/${baseSlug}/${product.slug}`}
              className={cardClasses}
            >
              {innerContent}
            </Link>
          );
        })}
      </div>
      
      {hasMore && !isExpanded && (
        <div className="mt-16 flex justify-center">
          <Button 
            size="lg" 
            onClick={() => setIsExpanded(true)}
            className="rounded-full h-14 px-10 text-lg font-medium transition-transform hover:scale-105 shadow-sm"
          >
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
}
