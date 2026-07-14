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

export const weintekHmiProducts: IndividualProduct[] = [
{
    id: "mt8052ip",
    slug: "mt8052ip",
    categorySlug: "weintek-hmi",
    name: "MT8052iP",
    tagline: "Weintek 4.3\" Basic HMI",
    heroImage: "/hmi/standard-mt8052ip.webp",
    features: [
      { title: "Recipe: Import/Export, Database, View" },
      { title: "Data logging & Trends" },
      { title: "Operation Data log" },
      { title: "Alarm Display & History" },
      { title: "Enhance Security mode" },
      { title: "VNC server" },
      { title: "OPC UA Client" },
      { title: "File browser & picture viewer" },
      { title: "Optional Easy Access (Remote Support Feature)" },
      { title: "3G/4G Dongle Support" },
      { title: "Time synchronization" }
    ],
    technicalHighlights: [
      { label: "Display", value: "4.3\" 480x272 TFT LCD" },
      { label: "Colors & Backlight", value: "16M Colours with LED Back Light" },
      { label: "Touch Screen", value: "4-wire Resistive type" },
      { label: "Memory", value: "256 MB Flash and 128 MB RAM Memory" },
      { label: "Processor", value: "Dual-core RISC Processor" },
      { label: "Ports", value: "One USB Host and Ethernet Port" },
      { label: "COM Ports", value: "COM1: RS-232/RS-485 2W/4W, COM3: RS-485 2W" },
      { label: "RTC", value: "Built-in RTC" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8052ip/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8052ip/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8052ip/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8052ip/" }
    ]
  },
{
    id: "mt8102ip",
    slug: "mt8102ip",
    categorySlug: "weintek-hmi",
    name: "MT8102iP",
    tagline: "Weintek 10.1\" Basic HMI",
    heroImage: "/hmi/standard-mt8102ip.webp",
    features: [
      { title: "Recipe: Import/Export, Database, View" },
      { title: "Data logging & Trends" },
      { title: "Operation Data log" },
      { title: "Alarm Display & History" },
      { title: "Enhance Security mode" },
      { title: "VNC server" },
      { title: "OPC UA Client" },
      { title: "File browser & picture viewer" },
      { title: "Optional Easy Access (Remote Support Feature)" },
      { title: "3G/4G Dongle Support" },
      { title: "Time synchronization" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1024x600 TFT LCD" },
      { label: "Colors & Backlight", value: "16M Colours with LED Back Light" },
      { label: "Touch Screen", value: "4-wire Resistive type" },
      { label: "Memory", value: "128 MB Flash and 128 MB RAM Memory" },
      { label: "Processor", value: "32-bit RISC Cortex-A8 600MHz Processor" },
      { label: "Ports", value: "One USB Host and Ethernet Port" },
      { label: "COM Ports", value: "COM1: RS-232/RS-485 2W/4W, COM3: RS-485 2W" },
      { label: "RTC", value: "Built-in RTC" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8102ip/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8102ip/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8102ip/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8102ip/" }
    ]
  },
{
    id: "mt8106ip",
    slug: "mt8106ip",
    categorySlug: "weintek-hmi",
    name: "MT8106iP",
    tagline: "Weintek 10.1\" Basic HMI",
    heroImage: "/hmi/standard-mt8106iP.webp",
    features: [
      { title: "Recipe: Import/Export, Database, View" },
      { title: "Data logging & Trends" },
      { title: "Operation Data log" },
      { title: "Alarm Display & History" },
      { title: "Enhance Security mode" },
      { title: "VNC server" },
      { title: "OPC UA Client" },
      { title: "File browser & picture viewer" },
      { title: "Optional Easy Access (Remote Support Feature)" },
      { title: "3G/4G Dongle Support" },
      { title: "Time synchronization" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1024 x 600 Wide Viewing Angle LCD, LED Backlight" },
      { label: "Cooling", value: "Fan-less Cooling System" },
      { label: "Memory & RTC", value: "Built-in flash memory and RTC" },
      { label: "COM Ports", value: "COM2 RS-485 2W supports MPI 187.5K" },
      { label: "Isolation", value: "Built-in power isolation" },
      { label: "Protection", value: "NEMA4 / IP65 Compliant Front Panel" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8106ip/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8106ip/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8106ip/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8106ip/" }
    ]
  },
{
    id: "mt8072ip",
    slug: "mt8072ip",
    categorySlug: "weintek-hmi",
    name: "MT8072iP",
    tagline: "Weintek 7\" Basic HMI",
    heroImage: "/hmi/standard-mt8072iP.webp",
    features: [
      { title: "Recipe: Import/Export, Database, View" },
      { title: "Data logging & Trends" },
      { title: "Operation Data log" },
      { title: "Alarm Display & History" },
      { title: "Enhance Security mode" },
      { title: "VNC server" },
      { title: "OPC UA Client" },
      { title: "File browser & picture viewer" },
      { title: "Optional Easy Access (Remote Support Feature)" },
      { title: "3G/4G Dongle Support" },
      { title: "Time synchronization" }
    ],
    technicalHighlights: [
      { label: "Display", value: "7\" 800x480 TFT LCD" },
      { label: "Colors & Backlight", value: "16M Colours with LED Back Light" },
      { label: "Touch Screen", value: "4-wire Resistive type" },
      { label: "Memory", value: "256 MB Flash and 128 MB RAM Memory" },
      { label: "Processor", value: "Dual-core RISC Processor" },
      { label: "Ports", value: "One USB Host and Ethernet Port" },
      { label: "COM Ports", value: "COM1: RS-232 4W, COM2: RS-485 2W/4W" },
      { label: "RTC", value: "Built-in RTC" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8072ip/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8072ip/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8072ip/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/mt8072ip/" }
    ]
  },
{
    id: "cmt2158x",
    slug: "cmt2158x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT2158X",
    tagline: "Weintek 15\" Advance HMI",
    heroImage: "/hmi/4.0-cmt2158x.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client" },
      { title: "FTP File transfer" },
      { title: "PDF viewer" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "15\" 1024 x 768 IPS LCD" },
      { label: "Processor", value: "Quad-core Cortex-A17 CPU with High Performance Processor" },
      { label: "Touch Screen", value: "4-wire Resistive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Expansion", value: "SD Card Slot Supports SD/SDHC Cards" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "One USB Host and Two Ethernet Ports" },
      { label: "Isolation", value: "RS-485 Built-in Isolation, Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2158x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2158x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2158x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2158x/" }
    ]
  },
{
    id: "cmt2108x2",
    slug: "cmt2108x2",
    categorySlug: "weintek-hmi",
    name: "cMT2108X2",
    tagline: "Weintek 7\" Advance HMI",
    heroImage: "/hmi/4.0-cmt2108x2.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client" },
      { title: "FTP File transfer" },
      { title: "PDF viewer" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1024 x 600 TFT LCD, LED Backlight" },
      { label: "Memory & RTC", value: "Built-in 4GB Flash Memory and RTC" },
      { label: "Cooling", value: "Fan-less Cooling System" },
      { label: "COM Ports", value: "COM2 / COM3 RS-485 2W supports MPI 187.5K, please use one at a time." },
      { label: "Protection", value: "PCB coating process ensures high reliability to resist from corrosion in harsh environment." },
      { label: "Isolation", value: "Built-in Power Isolation" },
      { label: "Panel", value: "NEMA4 / IP66 Compliant Front Panel" },
      { label: "Expansion", value: "Compatible with M02 WiFi Expansion Module that supports wireless communication" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2108x2/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2108x2/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2108x2/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2108x2/" }
    ]
  },
{
    id: "cmt1106x",
    slug: "cmt1106x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT1106X",
    tagline: "Weintek 10.1\" Advance HMI",
    heroImage: "/hmi/4.0-cmt1106x.webp",
    features: [
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G Dongle Support" },
      { title: "Email" },
      { title: "IIOT protocol : MQTT" },
      { title: "OPC UA Client" },
      { title: "Optional Easy Access (Remote Access Feature)" },
      { title: "FTP File transfer" },
      { title: "PDF viewer" },
      { title: "Ethernet Printer" },
      { title: "Web Interface" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1024x600 TFT LCD" },
      { label: "Colors & Backlight", value: "16.7M Colours with LED Back Light" },
      { label: "Touch Screen", value: "4-wire Resistive type" },
      { label: "Memory", value: "4 GB Flash and 1 GB RAM Memory" },
      { label: "Processor", value: "Quad-core RISC Processor" },
      { label: "Ports", value: "One USB Host and Ethernet Port" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485 (2W/4W)" },
      { label: "Expansion", value: "M02 WiFi Expansion Module (Optional)" },
      { label: "Protection", value: "PCB coating protections" },
      { label: "Isolation", value: "Built-in Power Isolation" },
      { label: "RTC", value: "Built-in RTC" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt1106x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt1106x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt1106x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt1106x/" }
    ]
  },
{
    id: "cmt3108xh",
    slug: "cmt3108xh",
    categorySlug: "weintek-hmi",
    name: "cMT3108XH",
    tagline: "Weintek 10.1\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3108xh.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1280 x 800 Wide Viewing Angle LCD" },
      { label: "Processor", value: "Quad-core 32-bit RISC 1.6 GHz Processor" },
      { label: "Touch Screen", value: "4-wire Resistive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Bus", value: "CAN Bus Supports CANopen Protocol" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "Two Ethernet Ports and One USB Host" },
      { label: "Expansion", value: "Optional Wi-Fi with M02 module" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3108xh/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3108xh/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3108xh/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3108xh/" }
    ]
  },
{
    id: "cmt3102x",
    slug: "cmt3102x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT3102X",
    tagline: "Weintek 10.1\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3102x.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "10.1\" 1024 x 600 TFT LCD" },
      { label: "Processor", value: "Quad-core 32-bit RISC 1.6 GHz Processor" },
      { label: "Touch Screen", value: "4-wire Resistive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Bus", value: "CAN Bus Supports CANopen Protocol" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "One USB Host and Two Ethernet Ports" },
      { label: "Expansion", value: "Optional Wi-Fi with M02 module" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3102x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3102x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3102x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3102x/" }
    ]
  },
{
    id: "cmt3152x",
    slug: "cmt3152x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT3152X",
    tagline: "Weintek 15\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3152x.webp",
    features: [
      { title: "Built-in EasyAccess 2.0 License (Remote access)" },
      { title: "Database Connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G Dongle Support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File Transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet Printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "15\" 1024 x 768 IPS LCD" },
      { label: "Processor", value: "Quad-core Cortex-A17 CPU with High Performance Processor" },
      { label: "Touch Screen", value: "Tempered Glass, Capacitive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Expansion", value: "SD Card Slot Supports SD/SDHC Cards" },
      { label: "Bus", value: "CAN Bus Supports CANopen Protocol" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "One USB Host and Two Ethernet Ports" },
      { label: "Isolation", value: "RS-485 & CAN Bus Built-in Isolation, Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3152x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3152x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3152x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3152x/" }
    ]
  },
{
    id: "cmt3072xh2",
    slug: "cmt3072xh2",
    categorySlug: "weintek-hmi",
    name: "cMT3072XH2",
    tagline: "Weintek 7\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3073xh2.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "7\" 1024 x 600 Wide Viewing Angle LCD, LED Backlight" },
      { label: "Processor", value: "Quad-core CPU with High Performance dedicated 3D Processor" },
      { label: "Cooling", value: "Fan-less Cooling System" },
      { label: "Memory & RTC", value: "Built-in 4GB Flash Memory and RTC" },
      { label: "COM Ports", value: "COM2 and COM3 RS-485 2W supports MPI 187.5K, please use one at a time" },
      { label: "Bus", value: "CAN Bus Supports CANopen, CAN Bus 2.0A/2.0B and SAE J1939" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Panel", value: "NEMA4 / IP66 Compliant Front Panel" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xh2/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xh2/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xh2/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xh2/" }
    ]
  },
{
    id: "cmt2078x",
    slug: "cmt2078x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT2078X",
    tagline: "Weintek 7\" Advance HMI",
    heroImage: "/hmi/4.0-cmt2078x.webp",
    features: [
      { title: "Optional Easy Access (Remote Access Feature)" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G Dongle Support" },
      { title: "Email" },
      { title: "OPC UA Client" },
      { title: "FTP File transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "7\" 800x480 TFT LCD" },
      { label: "Colors & Backlight", value: "16.7M Colours with LED Back Light" },
      { label: "Touch Screen", value: "4-wire Resistive type" },
      { label: "Memory", value: "4 GB Flash and 1 GB RAM Memory" },
      { label: "Processor", value: "Quad-core Cortex-A35 Processor" },
      { label: "Ports", value: "One USB Host and Two Ethernet Port" },
      { label: "COM Ports", value: "Two Isolated COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Isolation", value: "Built-in Power Isolation" },
      { label: "RTC", value: "Built-in RTC" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2078x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2078x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2078x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt2078x/" }
    ]
  },
{
    id: "cmt3072xht",
    slug: "cmt3072xht",
    categorySlug: "weintek-hmi",
    name: "cMT3072XHT",
    tagline: "Weintek 7\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3072xht.webp",
    features: [
      { title: "Optional EasyAccess 2.0 License (Remote access)" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File transfer" },
      { title: "PDF viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "7\" 1024 x 600 Wide Viewing Angle LCD" },
      { label: "Processor", value: "Quad-core 32-bit RISC 1.6 GHz Processor" },
      { label: "Touch Screen", value: "4-wire Resistive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Bus", value: "CAN Bus Supports CANopen Protocol" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "Two Ethernet Ports and One USB Host" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xht/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xht/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xht/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3072xht/" }
    ]
  },
{
    id: "cmt3092x",
    slug: "cmt3092x",
    categorySlug: ["weintek-hmi", "iiot-products"],
    name: "cMT3092X",
    tagline: "Weintek 9.7\" Advance HMI",
    heroImage: "/hmi/4.0-cmt3092x.webp",
    features: [
      { title: "Built-in EasyAccess 2.0 License (Remote access)" },
      { title: "Database connectivity with MySQL and MS SQL" },
      { title: "Barcode Scanner" },
      { title: "PLC Web Browser" },
      { title: "Optional CODESYS" },
      { title: "IIoT protocol : MQTT, MQTT cloud service integration" },
      { title: "JS Object" },
      { title: "USB/IP Camera" },
      { title: "VNC Server & Viewer" },
      { title: "USB Tethering" },
      { title: "3G/4G dongle support" },
      { title: "Email" },
      { title: "OPC UA Client & Server" },
      { title: "FTP File transfer" },
      { title: "PDF Viewer & Media Player" },
      { title: "Ethernet printer" },
      { title: "Web View" }
    ],
    technicalHighlights: [
      { label: "Display", value: "9.7\" 1024 x 768 TFT LCD" },
      { label: "Processor", value: "Quad-core Cortex-A17 CPU with High Performance Processor" },
      { label: "Touch Screen", value: "4-wire Resistive Type Touchscreen" },
      { label: "Memory", value: "Built-in 4GB Flash Memory and 1 GB RAM" },
      { label: "Bus", value: "CAN Bus Supports CANopen Protocol" },
      { label: "COM Ports", value: "Two COM Ports for RS-232 and RS-485(2W/4W)" },
      { label: "Ports", value: "One USB Host and Two Ethernet Ports" },
      { label: "Audio", value: "Built-in Mono Speaker" },
      { label: "Isolation", value: "Built-in Power Isolator" },
      { label: "Protection", value: "PCB coating protection" }
    ],
    documents: [
      { title: "Broucher", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3092x/" },
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3092x/" },
      { title: "Installation Instructions", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3092x/" },
      { title: "Software Manual", type: "PDF", externalUrl: "https://www.weintek.com/global/en/products/cmt3092x/" }
    ]
  }
];

