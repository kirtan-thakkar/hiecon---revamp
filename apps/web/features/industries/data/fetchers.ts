import { industries } from "../../../data/industries";
import { Industry } from "../types";

/**
 * Fetches an industry by its slug.
 * In a future CMS implementation, this function will perform the network request.
 * The rest of the application will not need to change.
 */
export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  // Simulate network latency or CMS fetch (optional)
  // await new Promise(resolve => setTimeout(resolve, 50));
  
  const industry = industries.find((ind) => ind.slug === slug);
  return industry || null;
}

/**
 * Fetches all available industry slugs.
 * Used for static generation (generateStaticParams).
 */
export async function getAllIndustrySlugs(): Promise<string[]> {
  return industries.map((ind) => ind.slug);
}
