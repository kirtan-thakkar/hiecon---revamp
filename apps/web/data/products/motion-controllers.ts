/**
 * PRODUCT LIST DATA
 * 
 * This file contains the data for specific products in this category.
 * 
 * HOW TO ADD A NEW PRODUCT:
 * 1. Scroll to the bottom of the array.
 * 2. Copy an existing product block (everything from { to },).
 * 3. Paste it at the end.
 * 4. Update the values inside the quotes (name, tagline, heroImage, etc.).
 * 
 * IMPORTANT:
 * - Do NOT change the 'id' or 'slug' of an existing product as it will break links.
 * - 'groupName' is used to group similar products together at the bottom of the page.
 */
import type { IndividualProduct } from "./types";

export const motionControllers: IndividualProduct[] = [
{
    id: "nx7-series",
    slug: "nx7-series",
    categorySlug: "motion-controllers",
    name: "NX7 Series",
    tagline: "Motion, Logic, Safety, Vision and HMI in one",
    heroImage: "/motion-controllers/nx7-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/nx7",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/nx7" }
    ]
  },
{
    id: "nx1-series",
    slug: "nx1-series",
    categorySlug: "motion-controllers",
    name: "NX1 Series",
    tagline: "Improves production efficiency while optimizing information, safety, and quality",
    heroImage: "/motion-controllers/nx1-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/nx1",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/nx1" }
    ]
  },
{
    id: "nx1p-series",
    slug: "nx1p-series",
    categorySlug: "motion-controllers",
    name: "NX1P Series",
    tagline: "Advanced motion control and networks for onsite IoT in a compact entry model",
    heroImage: "/motion-controllers/nx1p-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/nx1p",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/nx1p" }
    ]
  },
{
    id: "nj-series",
    slug: "nj-series",
    categorySlug: "motion-controllers",
    name: "NJ Series",
    tagline: "Motion, Logic, Safety, Vision and HMI in one",
    heroImage: "/motion-controllers/nj-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/nj",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/nj" }
    ]
  }
];

