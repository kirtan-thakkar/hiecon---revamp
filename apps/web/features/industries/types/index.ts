export interface MachineSolution {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  features?: string[];
}

export interface IndustryHero {
  heading: string;
  description: string;
  heroImage: string;
}

export interface IndustrySEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  colSpan?: 1 | 2; // For editorial masonry grids
}

export interface Industry {
  slug: string;
  title: string;
  seo: IndustrySEO;
  hero: IndustryHero;
  overview: {
    heading: string;
    description: string;
    paragraphs: string[];
  };
  machineSolutions: MachineSolution[];
  gallery: GalleryItem[];
}
