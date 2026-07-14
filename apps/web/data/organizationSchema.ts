import { siteConfig } from "./siteConfig";

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`, // Assuming a logo.png exists at the root, adjust as needed
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.streetAddress,
      "addressLocality": siteConfig.address.addressLocality,
      "addressRegion": siteConfig.address.addressRegion,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude,
    },
    "areaServed": "India",
    "sameAs": siteConfig.footerLinks
      .find((group) => group.title === "Social")
      ?.links.map((link) => link.href) || [],
  };
};
