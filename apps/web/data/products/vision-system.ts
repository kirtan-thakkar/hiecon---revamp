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

export const visionSystemProducts: IndividualProduct[] = [
{
    id: "fh-series",
    slug: "fh-series",
    categorySlug: "vision-system",
    groupName: "Product Family",
    name: "FH Series",
    tagline: "AI-based automated visual inspection",
    heroImage: "/vision-system/fh-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/fh-series",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/fh-series" }
    ]
  },
{
    id: "fz5-series",
    slug: "fz5-series",
    categorySlug: "vision-system",
    groupName: "Product Family",
    name: "FZ5 Series",
    tagline: "A range of processing items for positioning and inspection",
    heroImage: "/vision-system/fz5-series.webp",
    externalUrl: "https://industrial.omron.us/en/products/fz5-series",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/fz5-series" }
    ]
  },
{
    id: "fhv7-series",
    slug: "fhv7-series",
    categorySlug: "vision-system",
    groupName: "Smart Cameras",
    name: "FHV7 Series",
    tagline: "Ultimate flexibility to fit ever-changing production scene",
    heroImage: "/vision-system/smart-camera-fhv7.webp",
    externalUrl: "https://industrial.omron.us/en/products/fhv7-series",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/fhv7-series" }
    ]
  },
{
    id: "microhawk-f430",
    slug: "microhawk-f430",
    categorySlug: "vision-system",
    groupName: "Smart Cameras",
    name: "MicroHAWK F430-F / F420-F / ...",
    tagline: "World's smallest fully-integrated vision system.",
    heroImage: "/vision-system/smart-camera-micro-hawk-f430.webp",
    externalUrl: "https://industrial.omron.us/en/products/microhawk-f430-f",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/microhawk-f430-f" }
    ]
  },
{
    id: "fq2",
    slug: "fq2",
    categorySlug: "vision-system",
    groupName: "Smart Cameras",
    name: "FQ2",
    tagline: "Advanced inspection in a compact housing. Expanded performance and functionality.",
    heroImage: "/vision-system/smart-camera-fq2.webp",
    externalUrl: "https://industrial.omron.us/en/products/fq2",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/fq2" }
    ]
  },
{
    id: "fq-m-series",
    slug: "fq-m-series",
    categorySlug: "vision-system",
    groupName: "Smart Cameras",
    name: "FQ-M Series",
    tagline: "Designed for motion tracking",
    heroImage: "/vision-system/smart-camera-fq-m.webp",
    externalUrl: "https://industrial.omron.us/en/products/fq-m-series",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/fq-m-series" }
    ]
  }
];

