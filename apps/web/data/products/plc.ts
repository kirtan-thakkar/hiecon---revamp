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

export const plcProducts: IndividualProduct[] = [
{
    id: "ac500",
    slug: "ac500",
    categorySlug: "plc",
    name: "AC500",
    tagline: "Programmable Logic Controller (PLC)",
    shortDescription: "Wide range of performance, communications and I/O capabilities for industrial applications. The ideal choice for complex, high speed machinery and networking solutions.",
    heroImage: "/plc/abb-ac500.webp",
    features: [
      { title: "Fast processing CPUs with appropriate memory, performance and networking capabilities." },
      { title: "The use of one integrated software in the entire AC500 PLC range provides the easiness to fulfill new demands." },
      { title: "Variety of communication possibilities, onboard and with expansion modules" },
      { title: "Connect your automation solution to the past, keep it up to date and lead it into tomorrow." },
      { title: "Built-in web server for reports, signals, and messages" }
    ],
    documents: [
      { title: "Technical Catalogue", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500" },
      { title: "Hardware Manual", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500" }
    ],
    specificationGroups: [
      {
        title: "AC500 - S500",
        subtitle: "Digital I/O Modules",
        columns: [
          { key: "model", label: "Model No" },
          { key: "ios", label: "Number of I/Os" },
          { key: "features", label: "Features" },
        ],
        rows: [
          { model: "DI524", ios: "32 DI", features: "24 V DC", },
          { model: "DC522", ios: "16 DC", features: "Configurable, Transistor 0.5 A, fast counter",  },
          { model: "DC523", ios: "24 DC", features: "Configurable, Transistor 0.5 A, fast counter", },
          { model: "DC532", ios: "16 DI 16 DC", features: "16 Configurable, Transistor 0.5 A, fast counter",},
          { model: "DX522", ios: "8 DI 8 DO", features: "Rela" },
          { model: "DX531", ios: "8 DI 4 DO", features: "Rela "},
          { model: "DO524", ios: "32 DO", features: "Transistor 0.5 A",  }
        ]
      },
      {
        title: "AC500 - S500",
        subtitle: "Analog I/O Modules",
        columns: [
          { key: "model", label: "Model No" },
          { key: "ios", label: "Number of I/Os" },
          { key: "features", label: "Features" },
        ],
        rows: [
          { model: "AI523", ios: "16 AI", features: "V,mA,pt100,pt1000,ni1000",  },
          { model: "AX521", ios: "4 AI 4 AO", features: "V,mA,pt100,pt1000,ni1000",  },
          { model: "AX522", ios: "8 AI 8 AO", features: "V,mA,pt100,pt1000,ni1000",  },
          { model: "AO523", ios: "16 AO", features: "-",  },
          { model: "AI531", ios: "8 AI", features: "V,mA,pt100,pt1000,ni1000,Thermocouple", }
        ]
      }
    ]
  },
{
    id: "ac500-eco",
    slug: "ac500-eco",
    categorySlug: "plc",
    name: "AC500-eCo",
    tagline: "Programmable Logic Controller (PLC)",
    shortDescription: "Optimally suited flexible and economical configurations for automation solutions in smaller applications.",
    heroImage: "/plc/abb-ac500-eCo.webp",
    features: [
      { title: "Designed to integrate seamlessly into the broader AC500 family, offering you the decisive benefit of having a fully scalable and modular system." },
      { title: "Customized solutions can be created by using S500 and S500-eCo I/O modules." },
      { title: "The user program can be downloaded via a memory card without the need for programming tools." },
      { title: "CPUs with integrated I/Os for small to large applications" },
      { title: "Motion I/Os allow you to realize simple point-to-point motion on up to 4 axes." },
      { title: "Pre-wiring is possible through the use of pluggable terminal blocks." },
      { title: "The modules can be mounted on the DIN rail with an easy-to-use snap-on mechanism." }
    ],
    documents: [
      { title: "Technical Catalogue", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500-eco" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500-eco" },
      { title: "Hardware Manual", type: "PDF", externalUrl: "https://new.abb.com/plc/programmable-logic-controllers-plcs/ac500-eco" }
    ],
    specificationGroups: [
      {
        title: "AC500-eCo",
        subtitle: "CPUs",
        columns: [
          { key: "model", label: "Model No." },
          { key: "ios", label: "Onboard I/Os" },
          { key: "power", label: "Power Supply" },
        ],
        rows: [
          { model: "PM554-TP-ETH", ios: "8DI 6DO Transistor", power: "24 V DC", },
          { model: "PM556-TP-ETH", ios: "8DI 6DO Transistor", power: "24 V DC", }
        ]
      },
      {
        title: "AC500-eCo",
        subtitle: "Digital I/O Modules",
        columns: [
          { key: "model", label: "Model No" },
          { key: "ios", label: "Number of I/Os" },
          { key: "features", label: "Features" },
        ],
        rows: [
          { model: "DI561", ios: "8DI", features: "24 V DC", },
          { model: "DI562", ios: "16DI", features: "24 V DC", },
          { model: "DI571", ios: "8DI", features: "100-240 V AC", },
          { model: "DI572", ios: "16DI", features: "100-240 V AC", },
          { model: "DO561", ios: "8DO", features: "Transistor", },
          { model: "DO562", ios: "16DO", features: "Transistor", },
          { model: "DO571", ios: "8DO", features: "Relay", },
          { model: "DO572", ios: "8DO", features: "Triac", },
          { model: "DO573", ios: "16DO", features: "Relay", },
          { model: "DX561", ios: "8DI / 8DO", features: "24 V DC / Transistor", },
          { model: "DX571", ios: "8DI / 8DO", features: "24 V AC / Relay", }
        ]
      },
      {
        title: "AC500-eCo",
        subtitle: "Analog I/O Modules",
        columns: [
          { key: "model", label: "Model No" },
          { key: "ios", label: "Number of I/Os" },
          { key: "features", label: "Features" },
        ],
        rows: [
          { model: "AI561", ios: "4AI", features: "24 V DC",  },
          { model: "AI562", ios: "2AI", features: "24 V DC",  },
          { model: "AI563", ios: "4AI", features: "100-240 V AC",  },
          { model: "AO561", ios: "2AO", features: "100-240 V AC",  },
          { model: "AX561", ios: "4AI / 2AO", features: "Transistor",  }
        ]
      }
    ]
  },
{
    id: "cp1e-series",
    slug: "cp1e-series",
    categorySlug: "plc",
    name: "CP1E Series",
    tagline: "Enhanced Expandability for Analog and Temperature Control",
    heroImage: "/plc/omron-cp1e.webp",
    externalUrl: "https://industrial.omron.us/en/products/cp1e",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/cp1e" }
    ]
  },
{
    id: "cp2e-series",
    slug: "cp2e-series",
    categorySlug: "plc",
    name: "CP2E Series",
    tagline: "Designed to support data collection and Machine to Machine communication",
    heroImage: "/plc/omron-cp2e.webp",
    externalUrl: "https://industrial.omron.us/en/products/cp2e",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/cp2e" }
    ]
  },
{
    id: "cp1l-series",
    slug: "cp1l-series",
    categorySlug: "plc",
    name: "CP1L Series",
    tagline: "High Performing Programmable Controller with Embedded Ethernet",
    heroImage: "/plc/omron-cp1L.webp",
    externalUrl: "https://industrial.omron.us/en/products/cp1l",
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://industrial.omron.us/en/products/cp1l" }
    ]
  }
];

