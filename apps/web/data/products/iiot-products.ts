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

export const iiotProducts: IndividualProduct[] = [
{
    id: "cmt-g01",
    slug: "cmt-g01",
    categorySlug: "iiot-products",
    name: "cMT-G01",
    tagline: "Weintek IIoT Gateway",
    heroImage: "/iiot-products/cmt-g01.webp",
    features: [
      { title: "Integration with major industry cloud" },
      { title: "Supports OPC UA Server, MQTT, TCP/IP Gateway" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "SSL/TSL Encryption" },
      { title: "Industrial Standard Protocol" },
      { title: "Optional Easy Access (Remote Access)" },
      { title: "Event / Alarm Notification" },
      { title: "Data log" },
      { title: "Email" }
    ],
    technicalHighlights: [
      { label: "Memory", value: "Built-in 256 MB Flash Memory & 256 MB RAM" },
      { label: "Design", value: "Compact Design and DIN-rail Mountable" },
      { label: "COM Ports", value: "One COM Port for RS-232 and RS-485(2W/4W)" },
      { label: "Ethernet Ports", value: "Two Ethernet Ports" },
      { label: "Supported Protocols", value: "Supports MPI 187.5K" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g01/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g01/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g01/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g01/" }
    ]
  },
{
    id: "cmt-g02",
    slug: "cmt-g02",
    categorySlug: "iiot-products",
    name: "cMT-G02",
    tagline: "Weintek IIoT Gateway",
    heroImage: "/iiot-products/cmt-g02.webp",
    features: [
      { title: "Integration with major industry cloud" },
      { title: "Supports OPC UA Server, MQTT, TCP/IP Gateway" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "SSL/TSL Encryption" },
      { title: "Industrial Standard Protocol" },
      { title: "Optional Easy Access (Remote Access)" },
      { title: "Event / Alarm Notification" },
      { title: "Data log" },
      { title: "Email" }
    ],
    technicalHighlights: [
      { label: "Memory", value: "Built-In 256 MB Flash Memory & 256 MB RAM" },
      { label: "Design", value: "Compact Design and DIN-rail Mountable" },
      { label: "COM Ports", value: "One COM Port for RS-232 and RS-485(2W/4W)" },
      { label: "Ethernet Ports", value: "One Ethernet Ports" },
      { label: "Wi-Fi", value: "Wi-Fi compatible with 802.11 b/g/n" },
      { label: "Input Voltage", value: "Wide input voltage range: 10.5~28VDC" },
      { label: "Supported Protocols", value: "Supports MPI 187.5K" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g02/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g02/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g02/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt-g02/" }
    ]
  }
];

