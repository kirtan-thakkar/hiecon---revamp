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
    shortDescription: "Engineered as ABB's all-compatible drives portfolio, suitable for a wide range of general purpose applications.",
    heroImage: "/ac drives/acs560.webp",
    features: [
      { title: "Engineered as ABB's all-compatible drives portfolio." },
      { title: "Connect to any automation system with a single parameter." },
      { title: "The intuitive icon-based basic panel as part of standard delivery." },
      { title: "Energy efficiency features." },
      { title: "Built-in macros for the application-specific requirement for faster commissioning." }
    ],
    technicalHighlights: [
      { label: "Power Range", value: "0.75 to 160 kW" },
      { label: "Voltage", value: "380 to 480 V" },
      { label: "Phase", value: "3 Phase" },
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
        title: "ACS560 AC Drives",
        subtitle: "0.75 to 160 KW, 380 to 480V, 3 Phase, 48 to 63 Hz Frequency with IP20 Enclosure",
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
          { model: "ACS560-01-02A6-4", frame: "R0", nd_current: "2.6", nd_power: "0.75", hd_current: "1.7", hd_power: "0.55", max_current: "3.2" },
          { model: "ACS560-01-03A3-4", frame: "R0", nd_current: "3.3", nd_power: "1.1", hd_current: "2.6", hd_power: "0.75", max_current: "4.7" },
          { model: "ACS560-01-04A0-4", frame: "R0", nd_current: "4", nd_power: "1.5", hd_current: "3.3", hd_power: "1.1", max_current: "5.9" },
          { model: "ACS560-01-05A6-4", frame: "R0", nd_current: "5.6", nd_power: "2.2", hd_current: "4", hd_power: "1.5", max_current: "7.2" },
          { model: "ACS560-01-07A2-4", frame: "R0", nd_current: "7.2", nd_power: "3", hd_current: "5.6", hd_power: "2.2", max_current: "10.1" },
          { model: "ACS560-01-09A4-4", frame: "R0", nd_current: "9.4", nd_power: "3.7", hd_current: "7.2", hd_power: "3", max_current: "13" },
          { model: "ACS560-01-12A6-4", frame: "R1", nd_current: "12.6", nd_power: "5.5", hd_current: "9.4", hd_power: "3.7", max_current: "16.9" },
          { model: "ACS560-01-017A-4", frame: "R2", nd_current: "17", nd_power: "7.5", hd_current: "12.6", hd_power: "5.5", max_current: "22.7" },
          { model: "ACS560-01-025A-4", frame: "R2", nd_current: "25", nd_power: "11", hd_current: "17", hd_power: "7.5", max_current: "30.6" },
          { model: "ACS560-01-033A-4", frame: "R3", nd_current: "33", nd_power: "15", hd_current: "24.6", hd_power: "11", max_current: "44.3" },
          { model: "ACS560-01-039A-4", frame: "R3", nd_current: "39", nd_power: "18.5", hd_current: "31.6", hd_power: "15", max_current: "56.9" },
          { model: "ACS560-01-046A-4", frame: "R3", nd_current: "46", nd_power: "22", hd_current: "37.7", hd_power: "18.5", max_current: "67.9" },
          { model: "ACS560-01-062A-4", frame: "R4", nd_current: "62", nd_power: "30", hd_current: "44.6", hd_power: "22", max_current: "76" },
          { model: "ACS560-01-073A-4", frame: "R4", nd_current: "73", nd_power: "37", hd_current: "61", hd_power: "30", max_current: "104" },
          { model: "ACS560-01-088A-4", frame: "R5", nd_current: "88", nd_power: "45", hd_current: "72", hd_power: "37", max_current: "122" },
          { model: "ACS560-01-106A-4", frame: "R5", nd_current: "106", nd_power: "55", hd_current: "87", hd_power: "45", max_current: "148" },
          { model: "ACS560-01-145A-4", frame: "R6", nd_current: "145", nd_power: "75", hd_current: "105", hd_power: "55", max_current: "178" },
          { model: "ACS560-01-169A-4", frame: "R7", nd_current: "168", nd_power: "90", hd_current: "145", hd_power: "75", max_current: "247" },
          { model: "ACS560-01-206A-4", frame: "R7", nd_current: "206", nd_power: "110", hd_current: "169", hd_power: "90", max_current: "287" },
          { model: "ACS560-01-246A-4", frame: "R8", nd_current: "246", nd_power: "132", hd_current: "206", hd_power: "110", max_current: "350" },
          { model: "ACS560-01-293A-4", frame: "R8", nd_current: "293", nd_power: "160", hd_current: "246", hd_power: "132", max_current: "418.2" }
        ]
      }
    ]
  },
  {
    id: "acs-580",
    slug: "acs-580",
    categorySlug: "ac-drives",
    name: "ACS 580",
    tagline: "General Purpose Drives",
    shortDescription: "A fully compatible general purpose drive, designed to control a wide range of variable and basic constant torque applications.",
    heroImage: "/ac drives/acs580.webp", 
    features: [
      { title: "Part of ABB's all-compatible drives portfolio" },
      { title: "Wide availability and support" },
      { title: "Connect to any automation system or use stand-alone" },
      { title: "All essential features built into the drive for minimized number of external components" },
      { title: "Many built-in control functions for simplified automation and process control" },
      { title: "Designed for reliability and consistent high quality" },
      { title: "Straightforward settings menu and assistants for fast commissioning" },
      { title: "Energy efficiency features for optimal energy use" }
    ],
    technicalHighlights: [
      { label: "Power Range", value: "0.75 to 500 kW" },
      { label: "Voltage", value: "380 to 480 V" },
      { label: "Phase", value: "3 Phase" },
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
        title: "ACS580 AC Drives",
        subtitle: "380 to 480V, 3 Phase, 48 to 63 Hz Frequency with IP20 Enclosure (0.75 to 500 KW)",
        columns: [
          { key: "model", label: "Model No" },
          { key: "frame", label: "Frame Size" },
          { key: "nd_current", label: "N.D. Current (Amp)" },
          { key: "nd_power", label: "N.D. Power (HP)" },
          { key: "hd_current", label: "H.D. Current (Amp)" },
          { key: "hd_power", label: "H.D. Power (HP)" },
          { key: "max_current", label: "Max. O/P Current (Amp)" }
        ],
        rows: [
          { model: "ACS580-01-02A7-4", frame: "R1", nd_current: "2.1", nd_power: "1", hd_current: "1.6", hd_power: "0.75", max_current: "2.9" },
          { model: "ACS580-01-03A4-4", frame: "R1", nd_current: "3", nd_power: "1.5", hd_current: "2.1", hd_power: "1", max_current: "3.6" },
          { model: "ACS580-01-04A1-4", frame: "R1", nd_current: "3.5", nd_power: "2", hd_current: "3", hd_power: "1.5", max_current: "5.4" },
          { model: "ACS580-01-05A7-4", frame: "R1", nd_current: "4.8", nd_power: "3", hd_current: "3.4", hd_power: "2", max_current: "6.1" },
          { model: "ACS580-01-07A3-4", frame: "R1", nd_current: "6", nd_power: "3", hd_current: "4", hd_power: "3", max_current: "7.2" },
          { model: "ACS580-01-09A5-4", frame: "R1", nd_current: "7.6", nd_power: "5", hd_current: "4.8", hd_power: "3", max_current: "8.6" },
          { model: "ACS580-01-12A7-4", frame: "R1", nd_current: "12", nd_power: "7.5", hd_current: "7.6", hd_power: "5", max_current: "11.4" },
          { model: "ACS580-01-018A-4", frame: "R2", nd_current: "14", nd_power: "10", hd_current: "11", hd_power: "7.5", max_current: "19.8" },
          { model: "ACS580-01-026A-4", frame: "R2", nd_current: "23", nd_power: "15", hd_current: "14", hd_power: "10", max_current: "25.2" },
          { model: "ACS580-01-033A-4", frame: "R3", nd_current: "27", nd_power: "20", hd_current: "21", hd_power: "15", max_current: "37.8" },
          { model: "ACS580-01-039A-4", frame: "R3", nd_current: "34", nd_power: "25", hd_current: "27", hd_power: "20", max_current: "48.6" },
          { model: "ACS580-01-046A-4", frame: "R3", nd_current: "44", nd_power: "30", hd_current: "34", hd_power: "25", max_current: "61.2" },
          { model: "ACS580-01-062A-4", frame: "R4", nd_current: "52", nd_power: "40", hd_current: "40", hd_power: "30", max_current: "76" },
          { model: "ACS580-01-073A-4", frame: "R4", nd_current: "65", nd_power: "50", hd_current: "52", hd_power: "40", max_current: "104" },
          { model: "ACS580-01-088A-4", frame: "R5", nd_current: "77", nd_power: "60", hd_current: "65", hd_power: "50", max_current: "122" },
          { model: "ACS580-01-106A-4", frame: "R5", nd_current: "96", nd_power: "75", hd_current: "77", hd_power: "60", max_current: "148" },
          { model: "ACS580-01-145A-4", frame: "R6", nd_current: "124", nd_power: "100", hd_current: "96", hd_power: "75", max_current: "178" },
          { model: "ACS580-01-169A-4", frame: "R7", nd_current: "156", nd_power: "125", hd_current: "124", hd_power: "100", max_current: "247" },
          { model: "ACS580-01-206A-4", frame: "R7", nd_current: "180", nd_power: "150", hd_current: "156", hd_power: "125", max_current: "287" },
          { model: "ACS580-01-246A-4", frame: "R8", nd_current: "240", nd_power: "200", hd_current: "180", hd_power: "150", max_current: "350" },
          { model: "ACS580-01-293A-4", frame: "R8", nd_current: "260", nd_power: "200", hd_current: "240", hd_power: "150", max_current: "418" },
          { model: "ACS580-01-363A-4", frame: "R9", nd_current: "361", nd_power: "300", hd_current: "302", hd_power: "250", max_current: "542" },
          { model: "ACS580-01-430A-4", frame: "R9", nd_current: "414", nd_power: "350", hd_current: "361", hd_power: "300", max_current: "542" }
        ]
      }
    ]
  },
  {
    id: "acs-880",
    slug: "acs-880",
    categorySlug: "ac-drives",
    name: "ACS 880",
    tagline: "Industrial Drives",
    shortDescription: "Uncompromised productivity. Simplify your world and open all possibilities with our all-compatible industrial drives.",
    heroImage: "/ac drives/acs880.webp",
    features: [
      { title: "Direct torque control (DTC) for precise open and closed loop control" },
      { title: "Removable memory unit for easy drive commissioning and replacement" },
      { title: "Built-in safety features for simplified configuration" },
      { title: "Communication with all major automation networks" },
      { title: "Designed for easy service" },
      { title: "Intuitive control panel and PC tool" },
      { title: "Energy optimizer and energy efficiency information for monitoring and saving energy" }
    ],
    technicalHighlights: [
      { label: "Voltage", value: "380 to 415 V" },
      { label: "Control", value: "Direct Torque Control (DTC)" }
    ],
    documents: [
      { title: "Technical Catalogue", type: "PDF" },
      { title: "Hardware Manual", type: "PDF" },
      { title: "Firmware Manual", type: "PDF" }
    ],
    specificationGroups: [
      {
        title: "ACS880 AC Drives",
        subtitle: "380 to 415V",
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
          { model: "ACS880-01-02A4-3", frame: "R1", nd_current: "2.4", nd_power: "0.75", hd_current: "1.8", hd_power: "0.55", max_current: "3.1" },
          { model: "ACS880-01-03A3-3", frame: "R1", nd_current: "3.3", nd_power: "1.1", hd_current: "2.4", hd_power: "0.75", max_current: "4.1" },
          { model: "ACS880-01-04A0-3", frame: "R1", nd_current: "4", nd_power: "1.5", hd_current: "3.3", hd_power: "1.1", max_current: "5.6" },
          { model: "ACS880-01-05A6-3", frame: "R1", nd_current: "5.6", nd_power: "2.2", hd_current: "4", hd_power: "1.5", max_current: "6.8" },
          { model: "ACS880-01-07A2-3", frame: "R1", nd_current: "8", nd_power: "3", hd_current: "5.6", hd_power: "2.2", max_current: "9.5" },
          { model: "ACS880-01-09A4-3", frame: "R1", nd_current: "10", nd_power: "4", hd_current: "8", hd_power: "3", max_current: "12.2" },
          { model: "ACS880-01-12A6-3", frame: "R1", nd_current: "12.9", nd_power: "5.5", hd_current: "10", hd_power: "4", max_current: "16" },
          { model: "ACS880-01-017A-3", frame: "R2", nd_current: "17", nd_power: "7.5", hd_current: "12.6", hd_power: "5.5", max_current: "21" },
          { model: "ACS880-01-025A-3", frame: "R2", nd_current: "25", nd_power: "11", hd_current: "17", hd_power: "7.5", max_current: "29" },
          { model: "ACS880-01-032A-3", frame: "R3", nd_current: "32", nd_power: "15", hd_current: "25", hd_power: "11", max_current: "42" },
          { model: "ACS880-01-038A-3", frame: "R3", nd_current: "38", nd_power: "18.5", hd_current: "32", hd_power: "15", max_current: "54" },
          { model: "ACS880-01-045A-3", frame: "R4", nd_current: "45", nd_power: "22", hd_current: "38", hd_power: "18.5", max_current: "64" },
          { model: "ACS880-01-061A-3", frame: "R4", nd_current: "61", nd_power: "30", hd_current: "45", hd_power: "22", max_current: "76" },
          { model: "ACS880-01-072A-3", frame: "R5", nd_current: "72", nd_power: "37", hd_current: "61", hd_power: "30", max_current: "104" },
          { model: "ACS880-01-087A-3", frame: "R5", nd_current: "87", nd_power: "45", hd_current: "72", hd_power: "37", max_current: "122" },
          { model: "ACS880-01-105A-3", frame: "R6", nd_current: "105", nd_power: "55", hd_current: "87", hd_power: "45", max_current: "148" },
          { model: "ACS880-01-145A-3", frame: "R6", nd_current: "145", nd_power: "75", hd_current: "105", hd_power: "55", max_current: "178" },
          { model: "ACS880-01-169A-3", frame: "R7", nd_current: "169", nd_power: "90", hd_current: "145", hd_power: "75", max_current: "247" },
          { model: "ACS880-01-206A-3", frame: "R7", nd_current: "206", nd_power: "110", hd_current: "168", hd_power: "90", max_current: "287" },
          { model: "ACS880-01-246A-3", frame: "R8", nd_current: "246", nd_power: "132", hd_current: "206", hd_power: "110", max_current: "350" },
          { model: "ACS880-01-293A-3", frame: "R8", nd_current: "293", nd_power: "160", hd_current: "246", hd_power: "132", max_current: "418" },
          { model: "ACS880-01-363A-3", frame: "R9", nd_current: "363", nd_power: "200", hd_current: "293", hd_power: "160", max_current: "498" },
          { model: "ACS880-01-430A-3", frame: "R9", nd_current: "430", nd_power: "250", hd_current: "363", hd_power: "200", max_current: "545" }
        ]
      }
    ]
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
