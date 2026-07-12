export interface ProductSpecTable {
  title: string;
  subtitle?: string;
  columns: { key: string; label: string }[];
  rows: Record<string, string>[];
}

export interface IndividualProduct {
  id: string;
  slug: string;
  categorySlug: string | string[];
  name: string;
  tagline: string;
  groupName?: string;
  shortDescription?: string;
  heroImage: string;
  externalUrl?: string;
  features?: { title: string; description?: string }[];
  technicalHighlights?: { label: string; value: string }[];
  documents?: { title: string; type: string; fileUrl?: string; externalUrl?: string }[];
  specificationGroups?: ProductSpecTable[];
}
