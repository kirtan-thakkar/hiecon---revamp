/**
 * PRODUCT LIST DATA
 * 
 * This file contains the data for specific products in this category.
 * 
 * HOW TO ADD A NEW PRODUCT:
 * 1. Scroll to the bottom of the array.
 * 2. Copy an existing product block (everything from { to }, ).
 * 3. Paste it at the end.
 * 4. Update the values inside the quotes (name, tagline, heroImage, etc.).
 * 
 * IMPORTANT:
 * - Do NOT change the 'id' or 'slug' of an existing product as it will break links.
 * - 'groupName' is used to group similar products together at the bottom of the page.
 */
import type { IndividualProduct } from "./types";

export const goldenAgeProducts: IndividualProduct[] = [
{
    id: "gm7-series",
    slug: "gm7-series",
    categorySlug: "golden-age",
    name: "GM7 Series",
    tagline: "Fan Cooling Asynchronous Spindle Motor",
    shortDescription: "GM7 Series AC Servo Frequency conversion (spindle) motors are composed of stator, rotor, low-noise fan, and high-precision encoder (not needed for open-loop control). On the basis of structure optimization and magnetic circuit.",
    heroImage: "/golden-age-hero.webp",
    features: [
      { title: "Compact design, smaller body, lighter weight, high energy density" },
      { title: "Special design for electronics-magnet vibration, low noise, high rotation resolution, enough constant speed range and constant power range" },
      { title: "Low Inertia, High response" },
      { title: "Even air gap, high balance accuracy, low torque wave" },
      { title: "Full sealed design, Protection class: IP54" },
      { title: "Special Class F insulation, anti-surge current and corona" },
      { title: "Robust, Durable & Reliable" },
      { title: "Good price based on strong performance" }
    ],
    technicalHighlights: [
      { label: "Applications", value: "Machine Tools, Spindle, Paper winding, Synchronous spindle of Rotary knife" }
    ],
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "http://www.gkmotor.com" }
    ],
    specificationGroups: [
      {
        title: "GM7 Series",
        subtitle: "Fan Cooling Asynchronous Spindle Motor",
        columns: [
          { key: "shaft_height", label: "Shaft Height" },
          { key: "rpm", label: "RPM" },
          { key: "range", label: "Range" }
        ],
        rows: [
          { shaft_height: "100 Shaft Height: GM710", rpm: "2000", range: "2.9 KW, 5.5 KW, 7.5 KW, 11 KW, 14 KW" },
          { shaft_height: "100 Shaft Height: GM710", rpm: "1500", range: "2.2 KW, 3.0 KW, 3.7 KW, 5.5 KW, 7.5 KW, 11 KW, 15 KW" },
          { shaft_height: "100 Shaft Height: GM710", rpm: "1000", range: "2.5 KW, 3.5 KW, 6.3 KW, 7.5 KW" },
          { shaft_height: "132 Shaft Height: GM713", rpm: "2000", range: "6.3 KW, 14 KW, 20 KW, 24 KW, 28KW" },
          { shaft_height: "132 Shaft Height: GM713", rpm: "1500", range: "5.5 KW, 7.5 KW, 11 KW, 15 KW, 18.5 KW, 22 KW, 30KW" },
          { shaft_height: "132 Shaft Height: GM713", rpm: "1000", range: "4.3 KW, 8.8 KW, 12 KW, 15 KW, 17 KW, 22KW" },
          { shaft_height: "132 Shaft Height: GM713", rpm: "750", range: "3.6 KW, 5.9 KW, 7.5 KW, 11 KW, 12 KW" },
          { shaft_height: "132 Shaft Height: GM713", rpm: "500", range: "2.6 KW, 5.5 KW, 7.8 KW, 9.4 KW" },
          { shaft_height: "160 Shaft Height: GM7167,9", rpm: "1500", range: "30 KW, 37 KW" },
          { shaft_height: "160 Shaft Height: GM7167,9", rpm: "1000", range: "20 KW, 28 KW" },
          { shaft_height: "160 Shaft Height: GM7167,9", rpm: "750", range: "16 KW, 22 KW" },
          { shaft_height: "160 Shaft Height: GM7167,9", rpm: "500", range: "11 KW, 16 KW" },
          { shaft_height: "180 Shaft Height: GM718", rpm: "1500", range: "30 KW, 37 KW, 51 KW, 65 KW, 75 KW" },
          { shaft_height: "180 Shaft Height: GM718", rpm: "1000", range: "22 KW, 28 KW, 39 KW, 51 KW, 60 KW" },
          { shaft_height: "180 Shaft Height: GM718", rpm: "750", range: "18.5 KW, 23 KW, 30 KW, 42 KW, 51 KW" },
          { shaft_height: "180 Shaft Height: GM718", rpm: "500", range: "12 KW, 16 KW, 22 KW, 30 KW, 36KW" },
          { shaft_height: "225 Shaft Height: GM722", rpm: "1500", range: "75 KW, 100 KW, 130 KW, 160 KW, 190 KW, 220 KW" },
          { shaft_height: "225 Shaft Height: GM722", rpm: "1000", range: "55 KW, 71 KW, 92 KW, 113 KW, 134 KW, 155 KW" }
        ]
      }
    ]
  },
{
    id: "se-gz6-series",
    slug: "se-gz6-series",
    categorySlug: "golden-age",
    name: "SE-GZ6 Series",
    tagline: "Extruder, Water Cool Main Motors",
    heroImage: "/golden age/se-gz6.webp",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "http://www.gkmotor.com" }
    ],
    specificationGroups: [
      {
        title: "SE-GZ6 Series",
        subtitle: "Extruder, Water Cool Main Motors",
        columns: [
          { key: "type", label: "Type" },
          { key: "kw", label: "KW" },
          { key: "nm", label: "NM" },
          { key: "a", label: "A" },
          { key: "v", label: "V" },
          { key: "nma", label: "NM/A" },
          { key: "mm", label: "MM" },
          { key: "kg", label: "KG" }
        ],
        rows: [
          { type: "SE-GZ61145-16WR66-b Z144", kw: "30", nm: "191", a: "51", v: "340", nma: "3.75", mm: "132", kg: "93" },
          { type: "SE-GZ61625-16WR66-b Z144", kw: "37", nm: "236", a: "63", v: "340", nma: "3.75", mm: "160", kg: "127" },
          { type: "SE-GZ61630-16WR66-b Z144", kw: "45", nm: "287", a: "77", v: "340", nma: "3.74", mm: "160", kg: "135" },
          { type: "SE-GZ61640-16WR66-b Z144", kw: "55", nm: "350", a: "93", v: "340", nma: "3.78", mm: "160", kg: "155" },
          { type: "SE-GZ61650-16WR66-b Z144", kw: "75", nm: "478", a: "127", v: "340", nma: "3.75", mm: "160", kg: "175" },
          { type: "SE-GZ61660-16WR66-b Z144", kw: "90", nm: "573", a: "152", v: "340", nma: "3.77", mm: "160", kg: "195" },
          { type: "SE-GZ62235-16WR66-b Z144", kw: "110", nm: "700", a: "186", v: "340", nma: "3.76", mm: "225", kg: "245" },
          { type: "SE-GZ62245-16WR66-b Z144", kw: "143", nm: "913", a: "246", v: "340", nma: "3.71", mm: "225", kg: "260" },
          { type: "SE-GZ62250-16WR66-b Z144", kw: "160", nm: "1020", a: "273", v: "340", nma: "3.74", mm: "225", kg: "290" },
          { type: "SE-GZ62260-16WR66-b Z144", kw: "194", nm: "1232", a: "329", v: "340", nma: "3.74", mm: "225", kg: "310" },
          { type: "SE-GZ62265-16WR66-b Z144", kw: "204", nm: "1300", a: "345", v: "340", nma: "3.77", mm: "225", kg: "320" },
          { type: "SE-GZ62270-16WR66-b Z144", kw: "227", nm: "1445", a: "385", v: "340", nma: "3.74", mm: "225", kg: "335" },
          { type: "SE-GZ62280-16WR66-b Z144", kw: "260", nm: "1657", a: "437", v: "340", nma: "3.79", mm: "225", kg: "375" }
        ]
      }
    ]
  },
{
    id: "gz6-series",
    slug: "gz6-series",
    categorySlug: "golden-age",
    name: "GZ6 Series",
    tagline: "Rotary Knife, Water Cooled Motors",
    heroImage: "/golden age/gz6.webp",
    features: [
      { title: "High Torque" },
      { title: "Compact Structure" },
      { title: "Small Volume" },
      { title: "High Power Density" },
      { title: "Light weight" }
    ],
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "http://www.gkmotor.com" }
    ],
    specificationGroups: [
      {
        title: "GZ6 Series",
        subtitle: "Rotary Knife, Water Cooled Motors",
        columns: [
          { key: "type", label: "Type" },
          { key: "kw", label: "KW" },
          { key: "rpm1", label: "RPM" },
          { key: "nm", label: "NM" },
          { key: "a", label: "A" },
          { key: "rpm2", label: "RPM" }
        ],
        rows: [
          { type: "GZ62225-16WE61-J11E-b Z144", kw: "30", rpm1: "500", nm: "574", a: "59", rpm2: "600" },
          { type: "GZ62240-16WE61-J11E-b Z144", kw: "45", rpm1: "500", nm: "860", a: "85", rpm2: "600" },
          { type: "GZ62245-16WE61-J11E-b Z144", kw: "55", rpm1: "500", nm: "1050", a: "104", rpm2: "600" },
          { type: "GZ62250-16WE61-J11E-b Z144", kw: "63", rpm1: "500", nm: "1200", a: "119", rpm2: "600" },
          { type: "GZ62260-16WE61-J11E-b Z144", kw: "75", rpm1: "500", nm: "1433", a: "142", rpm2: "600" },
          { type: "GZ62275-16WE61-J11E-b Z144", kw: "90", rpm1: "500", nm: "1720", a: "177", rpm2: "600" },
          { type: "GZ62290-16WE61-J11E-b Z144", kw: "110", rpm1: "500", nm: "2100", a: "208", rpm2: "600" },
          { type: "GZ63150-24WE66-J11E-b Z144", kw: "132", rpm1: "500", nm: "2520", a: "259", rpm2: "600" },
          { type: "GZ63155-24WE66-J11E-b Z144", kw: "150", rpm1: "500", nm: "2865", a: "294", rpm2: "600" },
          { type: "GZ63180-24WE66-J11E-b Z144", kw: "220", rpm1: "500", nm: "4200", a: "431", rpm2: "600" }
        ]
      }
    ]
  }
];

