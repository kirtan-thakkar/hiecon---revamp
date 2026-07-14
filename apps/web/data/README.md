# Content Editing Guide

This directory (`apps/web/data/`) contains the configuration files that manage the static content and data for the Hiecon web application. 

I have structured this data layer to ensure that content updates can be performed safely and efficiently without requiring any modifications to the core React components.

---

## Technical Constraints for Editing

When modifying the files in this directory, strict adherence to the following rules is required to prevent compilation errors and broken routing:

1. **Modify Values Only:** 
   Only modify the string values enclosed within quotation marks (`" "`). For example, in the key-value pair `title: "Industrial Automation"`, you may change `"Industrial Automation"` to `"Factory Automation"`. Do not alter the key name (`title:`) or remove the surrounding quotes.
   
2. **Preserve Slugs:**
   The `slug` property (e.g., `slug: "ac-drives"`) dictates the URL path for that specific entity. Modifying a slug after the application has been indexed by search engines will result in broken external links and 404 errors. Do not change existing slugs.

3. **Image Assets:**
   Ensure image URLs point directly to the media asset (typically ending in `.jpg`, `.png`, or `.webp`). When utilizing external image delivery services (e.g., Unsplash), maintain the appended query parameters that control resolution and cropping (e.g., `?q=80&w=2000&auto=format&fit=crop`) to ensure optimal performance and visual fidelity.

---

## Directory Structure & Responsibilities

The responsibilities of each configuration file are delineated below:

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

### 3. Products Catalog (`products.ts` & `productsPageData.ts`)
Manages the `/products` routing tree.
- **`productsPageData.ts`**: Static UI labels and headers specific to the product views (e.g., "Hardware Portfolio", "Technical Specifications").
- **`products.ts`**: The primary database of hardware offerings. Each product is a discreet object in the array containing its title, description, technical specifications, and associated documentation links. To add a new product, append a new object to this array matching the existing schema.

### 4. Solutions Catalog (`solutions.ts` & `solutionsPageData.ts`)
Manages the `/solutions` routing tree.
- **`solutionsPageData.ts`**: Static UI labels and headers specific to the solution views.
- **`solutions.ts`**: The database of industry-specific automation solutions. This includes the defined `implementationStages`, detailing the exact machinery deployed at each stage of a manufacturing process.

### 5. Legal & Policies (`legalData.ts`)
Manages the textual content for pages like Privacy Policy, Terms of Use, and Legal Disclosures that will be built later.
- Update the `title`, `lastUpdated` date, and main `content` paragraphs for each legal page here.

---

## Modification Example

To update the primary headline on the index page, follow this procedure:

1. Open `homeData.ts`.
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
