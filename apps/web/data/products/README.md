# Product Data Management

Welcome to the Product Data folder! This folder stores all the product information displayed on the website.

To make it easy to manage, the products have been split up into separate files based on their categories.

## How to Find a Product
Products are organized into files matching their category name:
- AC Drives → `ac-drives.ts`
- PLC → `plc.ts`
- Industrial Robots → `industrial-robots.ts`
- Weintek HMI → `weintek-hmi.ts`
- *(and so on...)*

## How to Edit an Existing Product
1. Open the file corresponding to the product's category (e.g., `ac-drives.ts`).
2. Search for the product's name (e.g., `ACS 310`).
3. Carefully edit the text inside the quotation marks `" "`.
4. **Important**: Preserve the existing property names, commas `,`, quotes `" "`, brackets `{}`, and overall structure.

## How to Add a New Product
To add a new product, find the correct category file and copy-paste an existing product block. Then modify the values. Here is a simplified example:

```typescript
  {
    id: "new-product-slug",
    slug: "new-product-slug",
    categorySlug: "ac-drives", // Must match the category
    name: "New Product Name",
    tagline: "Product Tagline",
    shortDescription: "A brief description of the product.",
    heroImage: "/path-to-image/image.webp",
    features: [
      { title: "Feature 1" },
      { title: "Feature 2" }
    ],
    technicalHighlights: [
      { label: "Power Range", value: "0.37 to 22 kW" }
    ],
    // Optional documents
    documents: [
      { title: "User's Manual", type: "PDF" }
    ]
  },
```

## How to Remove a Product
To remove a product, delete the entire block of code starting from the opening bracket `{` to the closing bracket `},` for that specific product. Do not leave trailing commas or empty brackets.

## Slug Rules
The `slug` and `id` fields are used for the website URLs (e.g., `hiecon.com/products/ac-drives/acs-310`).
- Use **all lowercase** letters.
- Use **hyphens** instead of spaces (e.g., `new-product-name`).
- Do **not** change slugs casually, as it will break existing links to that product page.
- Slugs must be **unique** within their category.

## ⚠️ Important Warnings
- **Do not rename property keys** (e.g., do not change `heroImage:` to `image:`).
- **Do not remove required fields** (e.g., `name`, `slug`, `categorySlug`).
- **Do not change `categorySlug`** unless you are intentionally moving a product to another category file.
- **Be careful when editing commas, quotes, `{}`, and `[]`.** A single missing comma can break the website.
- **Image Paths**: Keep image paths consistent. Place your images in the `public` folder and reference them starting with a slash (e.g., `/ac drives/my-image.webp`).
