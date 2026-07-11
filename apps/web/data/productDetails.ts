export interface ProductSpecTable {
  title: string;
  subtitle?: string;
  columns: { key: string; label: string }[];
  rows: Record<string, string>[];
}

export interface IndividualProduct {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  tagline: string;
  shortDescription?: string;
  heroImage: string;
  features?: { title: string; description?: string }[];
  technicalHighlights?: { label: string; value: string }[];
  documents?: { title: string; type: string; fileUrl?: string; externalUrl?: string }[];
  specificationGroups?: ProductSpecTable[];
}

export const individualProductsData: IndividualProduct[] = [
  {
    id: "acs-310",
    slug: "acs-310",
    categorySlug: "ac-drives",
    name: "ACS 310",
    tagline: "General Purpose Drives",
    shortDescription: "A compact variable frequency drive engineered for straightforward pump and fan applications.",
    heroImage: "/ac drives/ac-310.webp",
    features: [
      { title: "0.37 to 11 kW / 0.5 to 15 hp 200 V" },
      { title: "0.37 to 22 kW / 0.5 to 30 hp 400 V" },
      { title: "IP20 enclosure (UL open type), optional NEMA 1 kit" },
      { title: "Built-in pump and fan features" },
      { title: "Embedded Modbus EIA-485 interface" },
      { title: "Built-in C3 EMC filter" }
    ],
    technicalHighlights: [
      { label: "Power Range", value: "0.37 to 22 kW" },
      { label: "Voltage", value: "200 to 480 V" },
      { label: "Enclosure", value: "IP20" },
    ],
    documents: [
      { title: "Flyer", type: "PDF" },
      { title: "User's Manual", type: "PDF" },
      { title: "Technical Catalogue", type: "PDF" },
      { title: "Safety Instructions", type: "PDF" }
    ],
    specificationGroups: [
      {
        title: "ACS 310 AC Drives",
        subtitle: "0.37 to 2.2 KW, 200 to 240V, 1 Phase, 48 to 63 Hz Frequency with IP20 Enclosure",
        columns: [
          { key: "model", label: "Model No" },
          { key: "frame", label: "Frame size" },
          { key: "current", label: "Normal Duty Current (Amp)" },
          { key: "power", label: "Normal Duty Power (kW)" }
        ],
        rows: [
          { model: "ACS310-01E-02A4-2", frame: "R0", current: "2.4", power: "0.37" },
          { model: "ACS310-01E-04A7-2", frame: "R1", current: "4.7", power: "0.75" },
          { model: "ACS310-01E-06A7-2", frame: "R1", current: "6.7", power: "1.1" },
          { model: "ACS310-01E-07A5-2", frame: "R2", current: "7.5", power: "1.5" },
          { model: "ACS310-01E-09A8-2", frame: "R2", current: "9.8", power: "2.2" }
        ]
      },
      {
        title: "ACS 310 AC Drives",
        subtitle: "0.37 to 22 KW, 380 to 480V, 3 Phase, 48 to 63 Hz Frequency with IP20 Enclosure",
        columns: [
          { key: "model", label: "Model No" },
          { key: "frame", label: "Frame size" },
          { key: "current", label: "Normal Duty Current (Amp)" },
          { key: "power", label: "Normal Duty Power (kW)" }
        ],
        rows: [
          { model: "ACS310-03E-01A3-4", frame: "R0", current: "1.3", power: "0.37" },
          { model: "ACS310-03E-02A1-4", frame: "R0", current: "2.1", power: "0.55" },
          { model: "ACS310-03E-02A6-4", frame: "R1", current: "2.6", power: "0.75" },
          { model: "ACS310-03E-03A6-4", frame: "R1", current: "3.6", power: "1.1" },
          { model: "ACS310-03E-04A5-4", frame: "R1", current: "4.5", power: "1.5" },
          { model: "ACS310-03E-06A2-4", frame: "R1", current: "6.2", power: "2.2" },
          { model: "ACS310-03E-08A0-4", frame: "R1", current: "8", power: "3" },
          { model: "ACS310-03E-09A7-4", frame: "R1", current: "9.7", power: "4" },
          { model: "ACS310-03E-13A8-4", frame: "R2", current: "13.8", power: "5.5" },
          { model: "ACS310-03E-17A2-4", frame: "R2", current: "17.2", power: "7.5" },
          { model: "ACS310-03E-25A4-4", frame: "R3", current: "25.4", power: "11" },
          { model: "ACS310-03E-34A1-4", frame: "R4", current: "34.1", power: "15" },
          { model: "ACS310-03E-41A8-4", frame: "R4", current: "41.8", power: "18.5" },
          { model: "ACS310-03E-48A4-4", frame: "R4", current: "48.4", power: "22" }
        ]
      }
    ]
  },
  {
    id: "acs-380",
    slug: "acs-380",
    categorySlug: "ac-drives",
    name: "ACS 380",
    tagline: "Machinery Drives",
    shortDescription: "A compact machinery drive designed to meet the requirements of machine builders.",
    heroImage: "/ac drives/ac380.webp",
    features: [
      { title: "Part of ABB all-compatible drives portfolio" },
      { title: "Adaptive programming for customizing the drive for the application" },
      { title: "Excellent motor control for various motor types including induction, permanent magnet and synchronous reluctance motors, from 0.25 to 22 kW, 200 to 240 V and 380 to 480 V" },
      { title: "Connects with all major industrial automation systems" },
      { title: "Built-in functional safety" },
      { title: "Designed to last 10 years or more" }
    ],
    technicalHighlights: [
      { label: "Power Range", value: "0.25 to 22 kW" },
      { label: "Voltage", value: "200 to 480 V" },
      { label: "Enclosure", value: "IP20" },
    ],
    documents: [
      { title: "Flyer", type: "PDF" },
      { title: "Technical Catalogue", type: "PDF" },
      { title: "Hardware Manual", type: "PDF" },
      { title: "Firmware Manual", type: "PDF" }
    ],
    specificationGroups: [
      {
        title: "ACS 380 AC Drives",
        subtitle: "0.37 to 3 KW, 200 to 240V, 1 Phase, 48 to 63 Hz Frequency with IP20 Enclosure",
        columns: [
          { key: "model", label: "Model No" },
          { key: "frame", label: "Frame Size" },
          { key: "nd_current", label: "N.D. Current (Amp)" },
          { key: "nd_power", label: "N.D. Power (KW)" },
          { key: "hd_current", label: "H.D. Current (Amp)" },
          { key: "hd_power", label: "H.D. Power (KW)" },
          { key: "max_current", label: "Max. O/P Current (Amp)" }
        ],
        rows: [
          { model: "ACS380-040S-02A4-1", frame: "R0", nd_current: "2.4", nd_power: "0.37", hd_current: "1.9", hd_power: "0.25", max_current: "3.2" },
          { model: "ACS380-040S-03A7-1", frame: "R0", nd_current: "3.7", nd_power: "0.55", hd_current: "2.4", hd_power: "0.37", max_current: "4.3" },
          { model: "ACS380-040S-04A8-1", frame: "R1", nd_current: "4.8", nd_power: "0.75", hd_current: "3.7", hd_power: "0.55", max_current: "6.7" },
          { model: "ACS380-040S-06A9-1", frame: "R1", nd_current: "6.9", nd_power: "1.1", hd_current: "4.8", hd_power: "0.75", max_current: "8.6" },
          { model: "ACS380-040S-07A8-1", frame: "R1", nd_current: "7.8", nd_power: "1.5", hd_current: "6.9", hd_power: "1.1", max_current: "12.4" },
          { model: "ACS380-040S-09A8-1", frame: "R2", nd_current: "9.8", nd_power: "2.2", hd_current: "7.8", hd_power: "1.5", max_current: "14" },
          { model: "ACS380-040S-12A2-1", frame: "R2", nd_current: "12.2", nd_power: "3", hd_current: "9.9", hd_power: "2.2", max_current: "17.6" }
        ]
      },
      {
        title: "ACS 380 AC Drives",
        subtitle: "0.25 to 22 KW, 380 to 480V, 3 Phase, 48 to 63 Hz Frequency with IP20 Enclosure",
        columns: [
          { key: "model", label: "Model No" },
          { key: "frame", label: "Frame Size" },
          { key: "nd_current", label: "N.D. Current (Amp)" },
          { key: "nd_power", label: "N.D. Power (KW)" },
          { key: "hd_current", label: "H.D. Current (Amp)" },
          { key: "hd_power", label: "H.D. Power (KW)" },
          { key: "max_current", label: "Max. O/P Current (Amp)" }
        ],
        rows: [
          { model: "ACS380-040S-01A8-4", frame: "R0", nd_current: "1.8", nd_power: "0.55", hd_current: "1.2", hd_power: "0.37", max_current: "2.2" },
          { model: "ACS380-040S-02A6-4", frame: "R1", nd_current: "2.6", nd_power: "0.75", hd_current: "1.8", hd_power: "0.55", max_current: "3.2" },
          { model: "ACS380-040S-03A3-4", frame: "R1", nd_current: "3.3", nd_power: "1.1", hd_current: "2.6", hd_power: "0.75", max_current: "4.7" },
          { model: "ACS380-040S-04A0-4", frame: "R1", nd_current: "4", nd_power: "1.5", hd_current: "3.3", hd_power: "1.1", max_current: "5.9" },
          { model: "ACS380-040S-05A6-4", frame: "R1", nd_current: "5.6", nd_power: "2.2", hd_current: "4", hd_power: "1.5", max_current: "7.2" },
          { model: "ACS380-040S-07A2-4", frame: "R1", nd_current: "7.2", nd_power: "3", hd_current: "5.6", hd_power: "2.2", max_current: "10.1" },
          { model: "ACS380-040S-09A4-4", frame: "R1", nd_current: "9.4", nd_power: "4", hd_current: "7.2", hd_power: "3", max_current: "13" },
          { model: "ACS380-040S-12A6-4", frame: "R2", nd_current: "12.6", nd_power: "5.5", hd_current: "9.4", hd_power: "4", max_current: "16.9" },
          { model: "ACS380-040S-17A0-4", frame: "R3", nd_current: "17", nd_power: "7.5", hd_current: "12.6", hd_power: "5.5", max_current: "22.7" },
          { model: "ACS380-040S-25A0-4", frame: "R3", nd_current: "25", nd_power: "11", hd_current: "17", hd_power: "7.5", max_current: "30.6" },
          { model: "ACS380-040S-032A-4", frame: "R4", nd_current: "32", nd_power: "15", hd_current: "25", hd_power: "11", max_current: "45" },
          { model: "ACS380-040S-038A-4", frame: "R4", nd_current: "38", nd_power: "18.5", hd_current: "32", hd_power: "15", max_current: "57.6" },
          { model: "ACS380-040S-045A-4", frame: "R4", nd_current: "45", nd_power: "22", hd_current: "38", hd_power: "18.5", max_current: "68.4" },
          { model: "ACS380-040S-050A-4", frame: "R4", nd_current: "50", nd_power: "22", hd_current: "45", hd_power: "22", max_current: "81" }
        ]
      }
    ]
  },
  {
    id: "acs-560",
    slug: "acs-560",
    categorySlug: "ac-drives",
    name: "ACS 560",
    tagline: "General Purpose Drives",
    heroImage: "/ac drives/acs560.webp",
  },
  {
    id: "acs-580",
    slug: "acs-580",
    categorySlug: "ac-drives",
    name: "ACS 580",
    tagline: "General Purpose Drives",
    heroImage: "/ac drives/acs580.webp",
  },
  {
    id: "acs-880",
    slug: "acs-880",
    categorySlug: "ac-drives",
    name: "ACS 880",
    tagline: "Industrial Drives",
    heroImage: "/ac drives/acs880.webp",
  }
];

export const getProductsByCategory = (categorySlug: string) => {
  return individualProductsData.filter(product => product.categorySlug === categorySlug);
};

export const getProduct = (categorySlug: string, productSlug: string) => {
  return individualProductsData.find(
    product => product.categorySlug === categorySlug && product.slug === productSlug
  );
};
