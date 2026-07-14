import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // The core static pages of the website
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/solutions',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // Core pages change somewhat frequently
    changeFrequency: 'weekly' as const,
    // The home page is the most important
    priority: route === '' ? 1 : 0.8,
  }));

  // Map all product entries to dynamic routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Map all solution entries to dynamic routes
  const solutionRoutes = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Return the combined array for Next.js to generate the XML
  return [...staticRoutes, ...productRoutes, ...solutionRoutes];
}
