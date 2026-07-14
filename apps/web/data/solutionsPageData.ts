/**
 * SOLUTIONS PAGE CONFIGURATION
 * 
 * This file controls the main headings and labels on the Solutions overview page
 * and the individual Industry Solution pages.
 */
export const solutionsPageData = {
  // ---------------------------------------------------------
  // 1. HEADER (The top banner on the /solutions page)
  // ---------------------------------------------------------
  header: {
    // Small text above the main headline
    label: "Industry Solutions",
    // Main large headline
    title: "Engineered for your industry.",
    // The paragraph under the headline
    description: "We don't build generic systems. We engineer deep, domain-specific automation architectures tailored to the physics of your production line."
  },
  
  // ---------------------------------------------------------
  // 2. STATIC LABELS (The text used across all solution detail pages)
  // ---------------------------------------------------------
  detailLabels: {
    // Small label at the top of the detail page
    solutionDetail: "Solution Detail",
    // Heading for the description paragraph
    overview: "Overview",
    // Heading for the section detailing the process steps
    implementationStages: "Implementation Stages",
    // Heading for the machines used list (if applicable)
    machinesUsed: "Machines & Solutions Used",
    // The text on the button to view a solution
    exploreSolution: "Explore Solution"
  }
};
