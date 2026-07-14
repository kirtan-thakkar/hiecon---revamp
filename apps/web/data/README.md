# Content Editing Guide

Welcome! This folder (`apps/web/data/`) contains all the text, images, and data that power the Hiecon website. 

By editing the files in this folder, you can update the website's content **without needing to know any React code or web development**. 

---

## ⚠️ Important Rules for Editing

Before you open any file, please keep these three rules in mind:

1. **Only edit the text inside the quotes (`" "`).** 
   You will see structures like `title: "Some Text"`. You should change `"Some Text"` to `"New Text"`. **Do not** change the word `title:` or delete the quotes.
   
2. **Do not change the `slug`.**
   Many items have a `slug` (e.g., `slug: "ac-drives"`). This is used for the URL of the page (e.g., `hiecon.com/products/ac-drives`). Changing this will break links that point to that page.

3. **Images.**
   When replacing an image URL, ensure the link is a direct link to the image (ending in `.jpg`, `.png`, `.webp`, or using an image service like Unsplash).

---

## Where to find the data

Here is a breakdown of what each file controls:

### 1. Global Settings (`siteConfig.ts`)
Controls things that appear on every page.
- **Top Navigation Menu:** Add or remove links in the `navItems` array.
- **Footer:** Update the links in the bottom footer in the `footerLinks` array.
- **Copyright:** Update the copyright text.

### 2. Home Page (`homeData.ts`)
Controls all the sections on the main landing page.
- **Hero Section:** The big video background area. You can change the large text (`titleLine1`, `titleLine2`) and the video link (`videoUrl`).
- **Technology Partners:** Update the list of partners and the badges they show.
- **Why Choose Us:** Update the 4 core steps and the statistics at the bottom of the page.

### 3. Products Data (`products.ts` & `productsPageData.ts`)
Controls the entire `/products` page and the individual product pages.
- **`productsPageData.ts`**: Contains the main headlines and labels for the Products area (e.g., "Hardware Portfolio", "Product Detail").
- **`products.ts`**: Each product is an object in the `products` list. You can add a new product by copying an existing block (from `{` to `},`) and pasting it at the end of the list. Update `title`, `description`, `image`, and the technical `specs` here.

### 4. Solutions / Industries Data (`solutions.ts` & `solutionsPageData.ts`)
Controls the `/solutions` page and individual industry pages.
- **`solutionsPageData.ts`**: Contains the main headlines and labels for the Solutions area (e.g., "Industry Solutions", "Implementation Stages").
- **`solutions.ts`**: Works exactly like the `products.ts` file. You can update the `implementationStages` for each industry to show the exact machines used in the manufacturing process.

---

## Example: How to edit

Let's say you want to change the main headline on the Home page.

1. Open `homeData.ts`.
2. Find this section:
```typescript
  hero: {
    label: "Industrial Automation",
    titleLine1: "Engineering Smarter",
    // ...
```
3. Change it to:
```typescript
  hero: {
    label: "Factory Automation",
    titleLine1: "Building Smarter",
    // ...
```
4. Save the file. The website will instantly reflect the change!
