export type SolutionStage = {
  stage: string;
  machines: string[];
};

export type Solution = {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  implementations?: string[];
  implementationStages?: SolutionStage[];
};

export const solutions: Solution[] = [
  {
    title: "Textile",
    slug: "textile",
    description: "High-speed synchronized motion control for spinning, weaving, and finishing machinery. Increase throughput while reducing yarn breakage.",
    content: "Our textile solutions focus on precision tension control and high-speed synchronization. By implementing advanced EtherCAT networks and multi-axis servo drives, we reduce yarn breakage by 40% and increase machine throughput. From opening and blending to carding and spinning, our control systems ensure seamless operation.",
    image: "https://images.unsplash.com/photo-1620794341491-9f3ee141d8b7?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Pre-Treatment & Preparation",
        machines: ["Singeing", "Continuous Bleaching Range", "Merceriser", "Sectional Warping", "Direct Warping", "Sizing"]
      },
      {
        stage: "Dyeing & Printing",
        machines: ["Continuous Dyeing Range", "Indigo Denim Range", "Jet Dyeing", "Scholl Soft flow Dyeing", "Jigger Machine", "Flatbed Printing", "Rotary Printing"]
      },
      {
        stage: "Finishing",
        machines: ["Stenter", "Finishing Range / Compactor", "Drying Range", "Softfeel"]
      },
      {
        stage: "Quality Control",
        machines: ["Inspection"]
      }
    ]
  },
  {
    title: "Plastic",
    slug: "plastic",
    description: "Optimized extrusion and injection molding automation with precise temperature and pressure control.",
    content: "We provide high-accuracy PID control systems and high-speed multi-axis motion control for injection molding machines, extruders, and blow molding equipment, ensuring consistent part quality and minimal material waste.",
    image: "https://images.unsplash.com/photo-1518640038081-360e22eb527c?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Extrusion & Molding",
        machines: ["Injection Moulding", "Roto Moulding", "Pipe Extrusion", "Wire Extrusion", "Corrugated Pipe"]
      },
      {
        stage: "Film & Line Processing",
        machines: ["Multi Layer Blown Film Line", "Cast Line", "Tap Line", "Laminator"]
      },
      {
        stage: "Textile & Specialized Plastic",
        machines: ["Monofilament Yarn Extrusion Line", "Rope Making", "In Flow Twister", "Braiding"]
      },
      {
        stage: "Finishing",
        machines: ["Cutter Traction"]
      }
    ]
  },
  {
    title: "Pharmaceutical",
    slug: "pharmaceutical",
    description: "Clean-room ready, FDA-compliant automation. Precision filling, capping, and serialized tracking systems with 100% traceability.",
    content: "Precision, traceability, and compliance are paramount. We deliver 21 CFR Part 11 compliant SCADA systems coupled with high-accuracy servo-driven filling systems. Our solutions guarantee 100% serialization and traceability across the entire production batch.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Granulation",
        machines: ["Roll Compactor", "Octagonal Machine", "Fluid bed Dryer Machine"]
      },
      {
        stage: "Compression",
        machines: ["Amplus Machine", "Blitz Table Press Machine", "Single Rotary Tablet Machine", "Double Rotary Tablet Machine", "Moxie Press Machine", "Giga Press Machine", "Elan Press Machine"]
      },
      {
        stage: "Coating",
        machines: ["Auto Coater"]
      },
      {
        stage: "Inspection & QC",
        machines: ["Checkweigher"]
      }
    ]
  },
  {
    title: "Packaging",
    slug: "packaging",
    description: "End-of-line packaging automation including case packing, palletizing, and stretch wrapping with seamless ERP integration.",
    content: "From primary packaging (filling, sealing) to secondary and tertiary packaging (cartoning, palletizing), our solutions utilize high-speed robotics and synchronous motion control to maximize throughput and minimize changeover times.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Primary Packaging & Filling",
        machines: ["Filling Machine", "Single Track Blister Packaging Machine", "Double Track Blister Packaging Machine"]
      },
      {
        stage: "Processing & Automation",
        machines: ["Unscramble Machine", "Ring Making Machine"]
      },
      {
        stage: "Secondary Packaging & QC",
        machines: ["Labelling Machine with Inspection System"]
      }
    ]
  },
  {
    title: "Converting Line",
    slug: "converting-line",
    description: "High-speed continuous web handling and converting line automation with active tension control.",
    content: "Our converting line solutions utilize flying shears, rotary knife controls, and multi-axis electronic gearing to ensure precise cutting, coating, and lamination of paper, film, and foil webs at extremely high speeds.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Printing",
        machines: ["Rotogravure Printing", "Flexo Printing"]
      },
      {
        stage: "Processing & Finishing",
        machines: ["Laminator", "Slitter Rewinder"]
      }
    ]
  },
  {
    title: "HVAC",
    slug: "hvac",
    description: "Intelligent building automation and industrial HVAC control systems for optimized energy efficiency.",
    content: "We design robust control panels and PLC/BMS integrations for industrial chillers, AHUs, and cooling towers, implementing variable frequency drives (VFDs) to significantly reduce energy consumption while maintaining precise environmental conditions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Cooling & Chilling",
        machines: ["Chiller Control", "Compressor"]
      },
      {
        stage: "Air & Fluid Circulation",
        machines: ["Pump", "Fan & Blower"]
      }
    ]
  },
  {
    title: "Paper & Pulp",
    slug: "paper-pulp",
    description: "Heavy-duty drive systems and distributed control for continuous paper manufacturing processes.",
    content: "The paper and pulp industry demands massive torque and absolute synchronization across hundreds of meters of machinery. We provide sectional drive controls and DCS architectures to ensure continuous web integrity and uptime.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Web Processing",
        machines: ["Laminator Coating Machine"]
      },
      {
        stage: "Cutting & Winding",
        machines: ["Automation Cutter", "Winding Machine"]
      },
      {
        stage: "Packaging",
        machines: ["Wrapper Control System"]
      }
    ]
  },
  {
    title: "Energy",
    slug: "energy",
    description: "SCADA systems and predictive maintenance automation for power generation and distribution networks.",
    content: "Our energy automation solutions provide real-time grid monitoring, smart load balancing, and failsafe redundancy protocols. We integrate RTUs and advanced SCADA software for complete visibility into power plant operations.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Thermal Generation",
        machines: ["Hot Air Generator", "Steam Boiler"]
      },
      {
        stage: "Fluid Heating",
        machines: ["Thermic Fluid Heating System", "Thermal Water Heating System"]
      }
    ]
  },
  {
    title: "Material Handling",
    slug: "material-handling",
    description: "Automated guided vehicles (AGV), conveyor sortation, and AS/RS control systems.",
    content: "We engineer logic for complex intralogistics, including high-speed cross-belt sorters, automated storage and retrieval systems (AS/RS), and smart conveyor routing using distributed I/O and industrial RFID tracking.",
    image: "https://images.unsplash.com/photo-1581092921461-7031e4bfb314?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Lifting & Elevation",
        machines: ["Elevator", "Hoist"]
      },
      {
        stage: "Automated Movement",
        machines: ["Long & Cross Travel", "Door Opening & Closing"]
      }
    ]
  },
  {
    title: "Cement & Ceramic",
    slug: "cement-ceramic",
    description: "Ruggedized automation architectures designed to withstand extreme dust, heat, and vibration.",
    content: "Cement and ceramic production is harsh. We deploy ruggedized PLCs, heavy-duty VFDs for kilns and crushers, and comprehensive SCADA systems to monitor emissions, blending ratios, and overall plant efficiency.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Material Processing",
        machines: ["Ball Mill", "Batching System"]
      },
      {
        stage: "Thermal Treatment",
        machines: ["Kiln", "Spray Dryer"]
      },
      {
        stage: "Transport",
        machines: ["Conveyor"]
      }
    ]
  },
  {
    title: "Food & Beverages",
    slug: "food-beverages",
    description: "Hygienic, washdown-rated automation for processing, mixing, and bottling lines.",
    content: "Safety and hygiene are critical. We implement washdown-rated stainless steel servos and enclosures, along with batch control software (S88 compliant) to ensure consistent recipe management and rigorous CIP/SIP processes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Processing & Plant Control",
        machines: ["Poultry Feed Plant"]
      },
      {
        stage: "Preservation & Sterilization",
        machines: ["Food Freeze Dryer", "Dryer Heat Sterilizer"]
      }
    ]
  },
  {
    title: "Metal",
    slug: "metal",
    description: "High-torque rolling mill controls, induction heating automation, and metal forming press integration.",
    content: "For the metallurgical industry, we provide closed-loop tension control for rolling mills, precise positioning for press brakes, and integrated safety systems for heavy forging operations.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Melting & Casting",
        machines: ["Caster"]
      },
      {
        stage: "Rolling & Forming",
        machines: ["Cold & Hot Rolling", "Cone Rolling"]
      },
      {
        stage: "Surface Treatment",
        machines: ["Annealing & Pickling"]
      }
    ]
  },
  {
    title: "Chemical",
    slug: "chemical",
    description: "Intrinsically safe DCS and batch processing automation for hazardous environments.",
    content: "Chemical processing requires stringent safety standards (ATEX/SIL). We deliver redundant process controllers, intrinsically safe I/O barriers, and advanced alarm management systems to safely automate exothermic reactions and distillation.",
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Batch Processing",
        machines: ["Mixing Plant"]
      }
    ]
  },
  {
    title: "Water & Waste Water",
    slug: "water-waste-water",
    description: "Telemetry, pump station control, and wide-area SCADA networks for municipal water treatment.",
    content: "We automate filtration, aeration, and dosing processes. Utilizing robust telemetry (UHF/Cellular) and energy-efficient pump cascading algorithms via VFDs, we ensure municipalities maintain continuous, compliant water treatment operations.",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1920&auto=format&fit=crop",
    implementationStages: [
      {
        stage: "Treatment Operations",
        machines: ["Sewage Treatment Plant"]
      }
    ]
  }
];

export const solutionsData: Record<string, Solution> = solutions.reduce((acc, solution) => {
  acc[solution.slug] = solution;
  return acc;
}, {} as Record<string, Solution>);
