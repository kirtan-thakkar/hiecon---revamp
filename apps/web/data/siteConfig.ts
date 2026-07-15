/**
 * GLOBAL SITE CONFIGURATION
 *
 * This file controls the main settings that appear across every page of the website.
 * - To change text, modify only the content inside the " " quotes.
 * - Do not change the keys (like 'name:' or 'navItems:').
 */
export const siteConfig = {
  // The global name of the company used in metadata and titles
  name: "HIECON",
  // The text shown next to the logo in the navigation bar
  logoText: "HIECON",
  // The global description used for SEO and default social sharing
  description: "Engineering Smarter Industrial Automation Systems",
  // The primary domain for the website (used for SEO, sitemap, robots.txt)
  url: "https://www.hiecon.com",
  // The copyright text shown at the very bottom of the footer
  copyright: "©2026 Hiecon. All rights reserved.",

  // Local SEO Information (Optional but recommended for LocalBusiness schema)
  contact: {
    phone: "+91 9974707600",
    email: "sales@hiecon.com",
  },
  address: {
    streetAddress:
      "152, Lane 3, Azad Society, Acharya Narendradev Nagar, Ambawadi",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  geo: {
    latitude: "23.0241",
    longitude: "72.534081",
  },
  // The links shown in the top navigation bar
  navItems: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
  ],

  // The columns and links shown in the footer
  footerLinks: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Industrial Automation", href: "/solutions" },
        { name: "Products", href: "/products" },
      ],
    },
    {
      title: "Social",
      links: [
        // Ensure this link is a full URL starting with https://
        { name: "LinkedIn", href: "https://www.linkedin.com/company/hiecon/" },
      ],
    },
  ],
}
