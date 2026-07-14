# Hiecon Web Application

This repository contains the source code and configuration for the Hiecon site.

## Content Management Architecture

I have designed the architecture of this application to completely decouple the content from the underlying React codebase. This ensures that future content updates—such as modifying text, swapping images, or adding new products—can be executed quickly and safely without requiring any web development expertise.

All static content is centralized in the `apps/web/data/` directory.

### Configuration Files Overview

1. **Global Site Settings:**
   Location: `apps/web/data/siteConfig.ts`
   Controls globally shared elements, including the navigation menu, footer links, and copyright information.
   
2. **Home Page Data:**
   Location: `apps/web/data/homeData.ts`
   Controls the structural content of the landing page, including the hero section, statistics, technology partners, and the "Why Choose Us" sections.
   
3. **Products Data:**
   Location: `apps/web/data/products.ts` and `apps/web/data/productsPageData.ts`
   Controls the catalog of hardware products, specifications, and the static labels rendered on the products routing pages.
   
4. **Solutions Data:**
   Location: `apps/web/data/solutions.ts` and `apps/web/data/solutionsPageData.ts`
   Controls the industry-specific solutions, implementation stages, and the static labels rendered on the solutions routing pages.

### Content Editing Guide

For detailed instructions on modifying these configuration files, please refer to the **[Content Editing Guide](./apps/web/data/README.md)**.

---

## Technical Documentation

The following instructions are intended for developers modifying the core application code or managing the deployment pipeline.

### Prerequisites

Ensure you have Node.js installed. This project uses `npm` as the package manager.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000).

### Production Build

To compile the application for production deployment:
```bash
npm run build
```
