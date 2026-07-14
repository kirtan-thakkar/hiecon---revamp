/**
 * PRODUCTS PAGE CONFIGURATION
 * 
 * This file controls the main headings and labels on the Products overview page
 * and the individual Product Detail pages.
 */
export const productsPageData = {
  // ---------------------------------------------------------
  // 1. HEADER (The top banner on the /products page)
  // ---------------------------------------------------------
  header: {
    // Small text above the main headline
    label: "Hardware Portfolio",
    // Main large headline
    title: "Industrial grade hardware.",
    // The paragraph under the headline
    description: "From edge controllers to heavy-duty servo motors. We partner with the world's leading manufacturers to provide reliable, scalable hardware for your factory."
  },
  
  // ---------------------------------------------------------
  // 2. STATIC LABELS (The text used across all product detail pages)
  // ---------------------------------------------------------
  detailLabels: {
    // Small label at the top of the detail page
    productDetail: "Product Detail",
    // Heading for the description paragraph
    overview: "Overview",
    // Heading for the small bullet points table
    specifications: "Specifications",
    // Heading for the large technical data tables
    technicalSpecifications: "Technical Specifications",
    // Heading for the downloadable PDFs section
    technicalDocuments: "Technical Documents",
    // The text on the button to view a product
    viewSpecifications: "View Specifications"
  }
};
