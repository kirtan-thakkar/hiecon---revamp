# Hiecon Web Application

This repository contains the source code, configuration, and content database for the Hiecon site.

## Content Management Architecture

I have designed the architecture of this application to completely decouple the content from the underlying React codebase. This ensures that future content updates—such as modifying text, swapping images, updating statistics, or adding new hardware products—can be executed quickly and safely without requiring any web development expertise.

All static content is centralized in the `apps/web/data/` directory.

---

## Technical Constraints for Editing Content

When modifying the files in the data directory, strict adherence to the following rules is required to prevent compilation errors and broken routing:

1. **Modify Values Only:** 
   Only modify the string values enclosed within quotation marks (`" "`). For example, in the key-value pair `title: "Industrial Automation"`, you may change `"Industrial Automation"` to `"Factory Automation"`. Do not alter the key name (`title:`) or remove the surrounding quotes.
   
2. **Preserve Slugs:**
   The `slug` property (e.g., `slug: "ac-drives"`) dictates the URL path for that specific entity. Modifying a slug after the application has been indexed by search engines will result in broken external links and 404 errors. Do not change existing slugs.

3. **Image Assets:**
   Ensure image URLs point directly to the media asset (typically ending in `.jpg`, `.png`, or `.webp`). When utilizing external image delivery services (e.g., Unsplash), maintain the appended query parameters that control resolution and cropping (e.g., `?q=80&w=2000&auto=format&fit=crop`) to ensure optimal performance and visual fidelity.

4. **Follow Inline Comments:**
   I have added comprehensive inline documentation directly inside every `.ts` configuration file. Refer to the comments immediately preceding a block of data for specific instructions on how to safely edit it.

---

## Content Directory Structure & Responsibilities

The responsibilities of each configuration file located in `apps/web/data/` are delineated below:

### 1. Global Settings (`siteConfig.ts`)
Manages properties that persist across all views in the application.
- **Top Navigation:** Managed via the `navItems` array.
- **Footer:** Managed via the `footerLinks` array.
- **Metadata:** Company name, copyright text, and centralized social links.

### 2. Home Page Configuration (`homeData.ts`)
Manages the structural text, media assets, and numerical statistics rendered on the index page.
- **Hero Section:** Primary headlines, secondary descriptions, and the background video asset URI.
- **Technology Partners:** The array of affiliated brands and their respective badges.
- **Why Choose Us:** The staged informational sections and the company statistics block.

### 3. Products Catalog (`products/` & `productsPageData.ts`)
Manages the `/products` routing tree.
- **`productsPageData.ts`**: Static UI labels and headers specific to the product views (e.g., "Hardware Portfolio", "Technical Specifications").
- **`products/` Directory**: Contains individual TypeScript files for specific product categories (e.g., `industrial-robots.ts`, `ac-drives.ts`). Each product is a discreet object detailing its title, specifications, and documentation links. To add a new product, duplicate an existing block within the relevant category file.

### 4. Solutions Catalog (`solutions.ts` & `solutionsPageData.ts`)
Manages the `/solutions` routing tree.
- **`solutionsPageData.ts`**: Static UI labels and headers specific to the solution views.
- **`solutions.ts`**: The database of industry-specific automation solutions. This includes the defined `implementationStages`, detailing the exact machinery deployed at each stage of a manufacturing process.

### 5. Legal & Policies (`legalData.ts`)
Manages the textual content for standard legal pages.
- Update the `title`, `lastUpdated` date, and main `content` paragraphs for the Privacy Policy, Terms of Use, and Legal Disclosures here.

---

## Modification Example

To update the primary headline on the index page, follow this procedure:

1. Open `apps/web/data/homeData.ts`.
2. Locate the `hero` object:
```typescript
  hero: {
    label: "Industrial Automation",
    titleLine1: "Engineering Smarter",
    // ...
```
3. Update the required string value:
```typescript
  hero: {
    label: "Factory Automation",
    titleLine1: "Building Smarter",
    // ...
```
4. Save the file. The changes will propagate to the application immediately during local development, or upon the next production build.

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
