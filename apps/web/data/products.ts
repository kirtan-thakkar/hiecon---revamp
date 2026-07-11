import { ProductSpecTable } from "./productDetails";

export type Product = {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  specs: { label: string; value: string }[];
  documents?: { title: string; type: string; fileUrl?: string; externalUrl?: string }[];
  specificationGroups?: ProductSpecTable[];
};

export const products: Product[] = [
  {
    title: "AC Drives",
    slug: "ac-drives",
    description: "Authorized value provider for ABB AC Drives. A comprehensive product family for general purpose, machinery, and industrial applications.",
    content: "Hiecon is an authorized value provider for ABB. We offer a full range of AC Drives including the ACS 310 (General Purpose), ACS 380 (Machinery Drives), ACS 560 (General Purpose), ACS 580 (General Purpose), and ACS 880 (Industrial Drives). These drives are designed to improve energy efficiency and process control.",
    image: "/ac-drive-hero.webp",
    specs: [
      { label: "Product Family", value: "ACS 310, ACS 380, ACS 560, ACS 580, ACS 880" },
      { label: "Partner", value: "ABB Authorized Value Provider" },
      { label: "Applications", value: "General Purpose, Machinery, Industrial" }
    ]
  },
  {
    title: "AC Motors",
    slug: "ac-motors",
    description: "Improve reliability, energy efficiency, and productivity with a wide range of ABB low voltage AC induction motors.",
    content: "Hiecon is an authorized dealer of ABB make AC Motors. Improve reliability, energy efficiency and productivity of your processes with ABB AC motors. Our wide range of low voltage AC induction motors are suitable for all industries and applications and they fulfill all international and national efficiency regulations.",
    image: "/ac-motos-hero.webp",
    specs: [
      { label: "Partner", value: "ABB Authorized Dealer" },
      { label: "Type", value: "Low Voltage AC Induction Motors" },
      { label: "Compliance", value: "International & National Efficiency Regulations" }
    ]
  },
  {
    title: "Servo Drives & Servo Motors",
    slug: "servo-drives-motors",
    description: "SERAD SMD Series Smart Motion Drives and SF Series Compact Servo Motors for high dynamics and high precision applications.",
    content: "SERAD SMD Series Smart Motion Drives integrate power supply, braking resistor, mains filter, and safety functions (SIL3). They offer industrial Ethernet communication and a user-friendly Windows-based setup. SERAD SF Series Compact Servo Motors are perfect for compact machines requiring high precision, offering 5 sizes and absolute encoder feedback.",
    image: "/serad-servo-hero.webp",
    specs: [
      { label: "Drive Power", value: "Up to 8.8 kW (Single/Three-phase)" },
      { label: "Drive Safety", value: "SIL3 Integrated" },
      { label: "Drive Communication", value: "Pulse Train Output (PTO), EtherCAT" },
      { label: "Motion Functions", value: "S-curve, Electric shaft, Cam profiles, Sync" },
      { label: "Motor Torque", value: "0.3 to 10 Nm" },
      { label: "Motor Speed", value: "3000 rpm" },
      { label: "Motor Protection", value: "IP65" }
    ]
  },
  {
    title: "Golden Age",
    slug: "golden-age",
    description: "Advanced automation controllers, servo systems, and high-performance spindle motors from Golden Age.",
    content: "Golden Age offers high-performance motion solutions. Their portfolio includes EtherCAT Supported and Standard Type AC Servo Systems, High Response Standard Motors, Large Power Motors, and High Speed Low Noise Induction Spindle Motors.",
    image: "/golden-age-hero.webp",
    specs: [
      { label: "Servo Systems", value: "EtherCAT, Standard AC" },
      { label: "Motors", value: "Standard, High Response, Large Power" },
      { label: "Spindle Motors", value: "High Speed, Low Noise Induction, PMSM" }
    ]
  },
  {
    title: "PLC",
    slug: "plc",
    description: "High-performance Programmable Logic Controllers and Machine Automation Controllers from OMRON.",
    content: "We provide OMRON's industry-leading controllers. This includes the NX1 and NX1P Series Machine Automation Controllers, as well as the robust and proven CJ2, CP2, CP1, and CS1 Series Programmable Logic Controllers for versatile automation needs.",
    image: "/plc-hero.webp",
    specs: [
      { label: "Partner", value: "OMRON Authorized" },
      { label: "Machine Automation", value: "NX1 Series, NX1P Series" },
      { label: "Programmable Logic", value: "CJ2, CP2, CP1, CS1 Series" }
    ]
  },
  {
    title: "Motion Controllers",
    slug: "motion-controllers",
    description: "Dedicated OMRON multi-axis motion controllers for highly synchronized robotics and CNC applications.",
    content: "We provide OMRON's advanced Motion Controllers, including the NX7 Series (Motion, Logic, Safety, Vision in one), NX1 Series, NX1P Series, and NJ Series. These controllers improve production efficiency with command interpolation, speed, and precision.",
    image: "/motion-controllers-hero.webp",
    specs: [
      { label: "Partner", value: "OMRON Authorized Integrator" },
      { label: "Product Family", value: "NX7, NX1, NX1P, NJ Series" },
      { label: "Integration", value: "Motion, Logic, Safety, Vision" }
    ]
  },
  {
    title: "Weintek HMI",
    slug: "weintek-hmi",
    description: "Innovative and reliable HMI solutions from WEINTEK, trusted globally for user-friendly interfaces and powerful features.",
    content: "Weintek is a globally recognized brand known for its innovative HMI solutions. As an authorized distributor, Hiecon brings the expertise to help you harness the full potential of Weintek products. We offer both Standard HMIs (MT8000 series) and Advanced Industry 4.0 IIoT Enabled HMIs (cMT series).",
    image: "/Weintek-HMI-hero.webp",
    specs: [
      { label: "Partner", value: "WEINTEK Authorized Distributor" },
      { label: "Series Available", value: "Standard HMI, Advanced cMT Series" },
      { label: "Capabilities", value: "Industry 4.0, IIoT Enabled" }
    ]
  },
  {
    title: "Weg Motors",
    slug: "weg-motors",
    description: "Leading Industrial Electric Motors by WEG offering high efficiency and extreme reliability with a 3-year warranty.",
    content: "WEG AC Motors are built for heavy industry. They feature Class 'F' insulation, robust IP55 TEFC cooling, and WISE insulation systems suitable for VFD operation. These motors are certified for High Efficiency (IE2) and Premium Efficiency (IE3).",
    image: "/weg-ac-motor-hero.webp",
    specs: [
      { label: "Output Range", value: "0.18 to 500 kW" },
      { label: "Voltage", value: "240/415 V (50 Hz +/- 5%)" },
      { label: "Insulation & Cooling", value: "Class 'F', TEFC (IC411), IP55" },
      { label: "Certifications", value: "BIS (IE2/IE3), CE Marking" }
    ]
  },
  {
    title: "Weintek Remote I/O",
    slug: "weintek-remote-io",
    description: "Scalable and reliable distributed I/O systems (iR Series) from WEINTEK for expansive plant layouts.",
    content: "The Weintek iR Series Remote I/O provides a flexible and scalable architecture. It includes high-speed Couplers (CANopen, Modbus TCP/IP, EtherNet/IP, EtherCAT), a wide array of Digital and Analog I/O modules, and Motion control units (iR-PU01-P).",
    image: "/weintek-remote-io-hero.webp",
    specs: [
      { label: "Coupler Protocols", value: "CANopen, Modbus TCP, EtherNet/IP, EtherCAT" },
      { label: "Digital I/O", value: "Up to 16 Channels (Sink/Source/Relay)" },
      { label: "Analog I/O", value: "Voltage/Current, RTD, Thermocouple" }
    ],
    documents: [
      { title: "Broucher", type: "PDF" },
      { title: "Datasheet", type: "PDF" },
      { title: "Installation Instructions", type: "PDF" }
    ],
    specificationGroups: [
      {
        title: "Couplers",
        columns: [
          { key: "coupler", label: "Coupler" },
          { key: "fieldbus", label: "Fieldbus" }
        ],
        rows: [
          { coupler: "IR-COP", fieldbus: "CANopen Slave" },
          { coupler: "IR-ETN", fieldbus: "Modbus TCP/IP Server, EtherNet/IP Adapter" },
          { coupler: "IR-ECAT", fieldbus: "EtherCAT® Slave" }
        ]
      },
      {
        title: "Digital I/O",
        columns: [
          { key: "partNo", label: "Part No" },
          { key: "description", label: "Description" }
        ],
        rows: [
          { partNo: "IR-DI16-K", description: "16 DI (Sink/Source)" },
          { partNo: "IR-DM16-P", description: "8 DI (Sink/Source), 8 DO (Source)" },
          { partNo: "IR-DM16-N", description: "8 DI (Sink/Source), 8 DO (Sink)" },
          { partNo: "IR-DQ16-P", description: "16 DO (Source)" },
          { partNo: "IR-DQ16-N", description: "16 DO (Sink)" },
          { partNo: "IR-DQ08-R", description: "8 DO (Relay)" }
        ]
      },
      {
        title: "Analog I/O",
        columns: [
          { key: "partNo", label: "Part No" },
          { key: "description", label: "Description" }
        ],
        rows: [
          { partNo: "IR-AI04-VI", description: "4 AI, ±10V ±20mA" },
          { partNo: "IR-AM06-VI", description: "4 AI, 2 AO, ±10V ±20mA" },
          { partNo: "IR-AQ04-VI", description: "4 AO, ±10V ±20mA" },
          { partNo: "IR-AI04-TR", description: "4 AI, RTD Thermocouple" }
        ]
      },
      {
        title: "Motion List",
        columns: [
          { key: "partNo", label: "Part No" },
          { key: "irpu01p", label: "IR-PU01-P" }
        ],
        rows: [
          { partNo: "Differential Output", irpu01p: "2 (A/B)" },
          { partNo: "Differential Input", irpu01p: "3 (A/B/Z)" },
          { partNo: "Input Point", irpu01p: "4" },
          { partNo: "Output Point", irpu01p: "4" }
        ]
      }
    ]
  },
  {
    title: "IIOT Products",
    slug: "iiot-products",
    description: "Industry 4.0 IIoT gateways and advanced cMT HMIs by WEINTEK for cloud connectivity and smart manufacturing.",
    content: "In the era of Industry 4.0, Weintek leads the world in IIoT-compatible HMIs. The cMT Series offers advanced cloud connectivity, SQL Server integration, remote access (EasyAccess 2.0), and connectivity to remote I/Os with CODESYS licenses.",
    image: "/iiot-products-hero.webp",
    specs: [
      { label: "Connectivity", value: "Cloud, SQL Server, Remote Access" },
      { label: "Product Line", value: "WEINTEK cMT Series" },
      { label: "Soft PLC", value: "CODESYS Integration" }
    ]
  },
  {
    title: "Control Panels",
    slug: "control-panels",
    description: "Custom-engineered electrical control panels built for neatness, organization, and protection classes up to IP65.",
    content: "Hiecon manufactures bespoke Automation Control Panels up to IP65 protection class. We understand the critical importance of neat, organized wiring for future troubleshooting. We serve industries including Plastics, Textiles, Pharma, Chemical, Cement, and Food & Beverage.",
    image: "/control-panel-hero.webp",
    specs: [
      { label: "Protection Class", value: "Up to IP65" },
      { label: "Services", value: "Engineering Review, Custom Design, FAT Testing" },
      { label: "Mounting Options", value: "Wall-mount and Floor-mount" }
    ]
  },
  {
    title: "Automation Components",
    slug: "automation-components",
    description: "A comprehensive range of essential OMRON industrial automation components, sensors, switches, and relays.",
    content: "We supply everything required for complete industrial control from OMRON. Our portfolio includes advanced Photoelectric/Fiber/Vision Sensors, Limit/Basic Switches, comprehensive Safety Components (Light Curtains, Door Switches), Relays, Temperature Controllers, and Power Supplies.",
    image: "/automation-component-hero.webp",
    specs: [
      { label: "Partner", value: "OMRON Authorized" },
      { label: "Sensors & Switches", value: "Vision, Fiber, Proximity, Limit, Level" },
      { label: "Safety & Control", value: "Light Curtains, Relays, Temp Controllers, UPS" }
    ]
  },
  {
    title: "Vision System",
    slug: "vision-system",
    description: "High-speed OMRON machine vision systems and smart cameras for automated quality inspection.",
    content: "Implement advanced visual inspection with OMRON's Vision Systems. We offer the PC-based FH Series and FZ5 Series. For compact applications, we provide Smart Cameras including the FHV7 Series, MicroHAWK F430-F/F420-F, FQ2, and FQ-M Series.",
    image: "/vision-system-hero.webp",
    specs: [
      { label: "Partner", value: "OMRON Authorized" },
      { label: "PC Based Vision", value: "FH Series, FZ5 Series" },
      { label: "Smart Cameras", value: "FHV7, MicroHAWK, FQ2, FQ-M Series" }
    ]
  },
  {
    title: "Industrial Robots",
    slug: "industrial-robots",
    description: "OMRON Collaborative, Mobile, Parallel, SCARA, and Articulated robots for high-speed flexible manufacturing.",
    content: "Integrate world-class OMRON robotics into your production line. Our portfolio covers TM Series Collaborative Robots, LD/HD Series Mobile Robots, alongside high-speed Parallel, SCARA, and 6-Axis Articulated Robots for pick, place, and assembly.",
    image: "/industrial-robots-hero.webp",
    specs: [
      { label: "Partner", value: "OMRON Authorized" },
      { label: "Collaborative & Mobile", value: "TM Series, LD/HD Series" },
      { label: "Industrial", value: "Parallel, SCARA, Articulated Robots" }
    ]
  }
];

export const productsData: Record<string, Product> = products.reduce((acc, product) => {
  acc[product.slug] = product;
  return acc;
}, {} as Record<string, Product>);
