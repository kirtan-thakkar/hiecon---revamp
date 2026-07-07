export type Solution = {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  implementations?: string[];
};

export const solutions: Solution[] = [
  {
    title: "Textile",
    slug: "textile",
    description: "High-speed synchronized motion control for spinning, weaving, and finishing machinery. Increase throughput while reducing yarn breakage.",
    content: "Our textile solutions focus on precision tension control and high-speed synchronization. By implementing advanced EtherCAT networks and multi-axis servo drives, we reduce yarn breakage by 40% and increase machine throughput. From opening and blending to carding and spinning, our control systems ensure seamless operation.",
    image: "https://images.unsplash.com/photo-1590483864703-96b6fb955fa9?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Jigger Machine", "Continuous Bleaching Range", "Continuous Dyeing Range", "Flatbed Printing",
      "Rotary Printing", "Merceriser", "Singeing", "Finishing Range / Compactor", "Drying Range",
      "Sectional Warping", "Direct Warping", "Sizing", "Indigo Denim Range", "Jet Dyeing",
      "Scholl Soft flow Dyeing", "Softfeel", "Stenter", "Inspection"
    ]
  },
  {
    title: "Plastic",
    slug: "plastic",
    description: "Optimized extrusion and injection molding automation with precise temperature and pressure control.",
    content: "We provide high-accuracy PID control systems and high-speed multi-axis motion control for injection molding machines, extruders, and blow molding equipment, ensuring consistent part quality and minimal material waste.",
    image: "https://images.unsplash.com/photo-1605370608796-03c004a43d93?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Laminator", "Rope Making", "Pipe Extrusion", "Injection Moulding", "Roto Moulding",
      "Cutter Traction", "In Flow Twister", "Corrugated Pipe", "Tap Line", "Braiding",
      "Cast Line", "Monofilament Yarn Extrusion Line", "Wire Extrusion", "Multi Layer Blown Film Line"
    ]
  },
  {
    title: "Pharmaceutical",
    slug: "pharmaceutical",
    description: "Clean-room ready, FDA-compliant automation. Precision filling, capping, and serialized tracking systems with 100% traceability.",
    content: "Precision, traceability, and compliance are paramount. We deliver 21 CFR Part 11 compliant SCADA systems coupled with high-accuracy servo-driven filling systems. Our solutions guarantee 100% serialization and traceability across the entire production batch.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Amplus Machine", "Roll Compactor", "Auto Coater", "Blitz Table Press Machine",
      "Single Rotary Tablet Machine", "Moxie Press Machine", "Giga Press Machine",
      "Double Rotary Tablet Machine", "Checkweigher", "Octagonal Machine",
      "Fluid bed Dryer Machine", "Elan Press Machine"
    ]
  },
  {
    title: "Packaging",
    slug: "packaging",
    description: "End-of-line packaging automation including case packing, palletizing, and stretch wrapping with seamless ERP integration.",
    content: "From primary packaging (filling, sealing) to secondary and tertiary packaging (cartoning, palletizing), our solutions utilize high-speed robotics and synchronous motion control to maximize throughput and minimize changeover times.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Single Track Blister Packaging Machine", "Unscramble Machine", "Double Track Blister Packaging Machine",
      "Labelling Machine with Inspection System", "Filling Machine", "Ring Making Machine"
    ]
  },
  {
    title: "Converting Line",
    slug: "converting-line",
    description: "High-speed continuous web handling and converting line automation with active tension control.",
    content: "Our converting line solutions utilize flying shears, rotary knife controls, and multi-axis electronic gearing to ensure precise cutting, coating, and lamination of paper, film, and foil webs at extremely high speeds.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Laminator", "Rotogravure Printing", "Flexo Printing", "Slitter Rewinder"
    ]
  },
  {
    title: "HVAC",
    slug: "hvac",
    description: "Intelligent building automation and industrial HVAC control systems for optimized energy efficiency.",
    content: "We design robust control panels and PLC/BMS integrations for industrial chillers, AHUs, and cooling towers, implementing variable frequency drives (VFDs) to significantly reduce energy consumption while maintaining precise environmental conditions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Pump", "Chiller Control", "Fan & Blower", "Compressor"
    ]
  },
  {
    title: "Paper & Pulp",
    slug: "paper-pulp",
    description: "Heavy-duty drive systems and distributed control for continuous paper manufacturing processes.",
    content: "The paper and pulp industry demands massive torque and absolute synchronization across hundreds of meters of machinery. We provide sectional drive controls and DCS architectures to ensure continuous web integrity and uptime.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Automation Cutter", "Laminator Coating Machine", "Winding Machine", "Wrapper Control System"
    ]
  },
  {
    title: "Energy",
    slug: "energy",
    description: "SCADA systems and predictive maintenance automation for power generation and distribution networks.",
    content: "Our energy automation solutions provide real-time grid monitoring, smart load balancing, and failsafe redundancy protocols. We integrate RTUs and advanced SCADA software for complete visibility into power plant operations.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Hot Air Generator", "Thermic Fluid Heating System", "Steam Boiler", "Thermal Water Heating System"
    ]
  },
  {
    title: "Material Handling",
    slug: "material-handling",
    description: "Automated guided vehicles (AGV), conveyor sortation, and AS/RS control systems.",
    content: "We engineer logic for complex intralogistics, including high-speed cross-belt sorters, automated storage and retrieval systems (AS/RS), and smart conveyor routing using distributed I/O and industrial RFID tracking.",
    image: "https://images.unsplash.com/photo-1581092921461-7031e4bfb314?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Door Opening & Closing", "Long & Cross Travel", "Elevator", "Hoist"
    ]
  },
  {
    title: "Cement & Ceramic",
    slug: "cement-ceramic",
    description: "Ruggedized automation architectures designed to withstand extreme dust, heat, and vibration.",
    content: "Cement and ceramic production is harsh. We deploy ruggedized PLCs, heavy-duty VFDs for kilns and crushers, and comprehensive SCADA systems to monitor emissions, blending ratios, and overall plant efficiency.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Batching System", "Conveyor", "Ball Mill", "Spray Dryer", "Kiln"
    ]
  },
  {
    title: "Food & Beverages",
    slug: "food-beverages",
    description: "Hygienic, washdown-rated automation for processing, mixing, and bottling lines.",
    content: "Safety and hygiene are critical. We implement washdown-rated stainless steel servos and enclosures, along with batch control software (S88 compliant) to ensure consistent recipe management and rigorous CIP/SIP processes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Poultry Feed Plant", "Food Freeze Dryer", "Dryer Heat Sterilizer"
    ]
  },
  {
    title: "Metal",
    slug: "metal",
    description: "High-torque rolling mill controls, induction heating automation, and metal forming press integration.",
    content: "For the metallurgical industry, we provide closed-loop tension control for rolling mills, precise positioning for press brakes, and integrated safety systems for heavy forging operations.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Annealing & Pickling", "Cone Rolling", "Cold & Hot Rolling", "Caster"
    ]
  },
  {
    title: "Chemical",
    slug: "chemical",
    description: "Intrinsically safe DCS and batch processing automation for hazardous environments.",
    content: "Chemical processing requires stringent safety standards (ATEX/SIL). We deliver redundant process controllers, intrinsically safe I/O barriers, and advanced alarm management systems to safely automate exothermic reactions and distillation.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Mixing Plant"
    ]
  },
  {
    title: "Water & Waste Water",
    slug: "water-waste-water",
    description: "Telemetry, pump station control, and wide-area SCADA networks for municipal water treatment.",
    content: "We automate filtration, aeration, and dosing processes. Utilizing robust telemetry (UHF/Cellular) and energy-efficient pump cascading algorithms via VFDs, we ensure municipalities maintain continuous, compliant water treatment operations.",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1200&auto=format&fit=crop",
    implementations: [
      "Sewage Treatment Plant"
    ]
  }
];

export const solutionsData: Record<string, Solution> = solutions.reduce((acc, solution) => {
  acc[solution.slug] = solution;
  return acc;
}, {} as Record<string, Solution>);
