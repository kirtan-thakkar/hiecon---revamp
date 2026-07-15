/**
 * HOME PAGE CONTENT
 * 
 * This file controls all the text, images, and videos on the main landing page.
 * - To change text, modify only the content inside the " " quotes.
 * - Be careful not to delete commas (,) at the end of lines.
 */
export const homeData = {
  // ---------------------------------------------------------
  // 1. HERO SECTION (The top video section)
  // ---------------------------------------------------------
  hero: {
    // Small text above the main headline
    label: "Industrial Automation",
    // Main large headline (split into two lines)
    titleLine1: "Engineering Smarter",
    titleLine2: "Automation Systems",
    // The word in the headline that has a different color/style
    titleHighlight: "Industrial",
    // The paragraph under the headline
    description: "We architect, deploy, and scale state-of-the-art automation solutions for modern manufacturing—driving precision, reliability, and long-term performance.",
    // Link to the background video
    videoUrl: "/heicon-main.mov",
    // Fallback image if video fails to load
    bgImageUrl: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?q=80&w=2000&auto=format&fit=crop",
    // The three small statistics/badges below the description
    stats: [
      { label: "ISO 9001:2015", highlight: "Certified" },
      { label: "Industry 4.0", highlight: "Ready" },
      { label: "Global", highlight: "Support" },
    ]
  },

  // ---------------------------------------------------------
  // 2. PRODUCT FAMILIES PREVIEW (The grid of solutions)
  // ---------------------------------------------------------
  productFamilies: {
    // The title above the products grid
    title: "Explore Our Solutions.",
    // The description above the products grid
    description: "From motion control and PLCs to industrial robotics and IIoT, discover automation solutions engineered for precision, reliability, and long-term performance."
  },

  // ---------------------------------------------------------
  // 3. TECHNOLOGY PARTNERS SECTION (The list of brands like ABB, Omron)
  // ---------------------------------------------------------
  technologyPartners: {
    label: "Our Network",
    title: "Technology Partners",
    description: "Authorized integrations with the world's most trusted manufacturing brands.",
    partners: [
      {
        name: "ABB",
        description: "Global leader in power and automation technologies.",
        // The small badges shown next to the partner
        solutions: ["AC Drives", "AC Motors", "PLC"],
      },
      {
        name: "Omron",
        description: "Advanced sensing and control technology for factory automation.",
        solutions: ["Automation Components", "Motion Controllers", "Industrial Robots", "Vision Systems"],
      },
      {
        name: "Weintek",
        description: "Specialized human-machine interfaces for industrial environments.",
        solutions: ["Standard HMI", "Advanced HMI", "Remote I/O", "IIoT Products"],
      },
      {
        name: "SERAD",
        description: "Precision motion control and high-performance servo systems.",
        solutions: ["Servo Drives & Motors"],
      },
      {
        name: "Golden Age",
        description: "Reliable servo motor solutions for dynamic industrial applications.",
        solutions: ["Servo Motors"],
      },
      {
        name: "WEG",
        description: "Leading manufacturer of robust electric motors and drive technology.",
        solutions: ["AC Motors"],
      },
    ]
  },

  // ---------------------------------------------------------
  // 4. WHY CHOOSE US SECTION (The 4 stages + Support stats)
  // ---------------------------------------------------------
  whyChooseUs: {
    // The alternating left/right sections
    sections: [
      {
        label: "01 / The Challenge",
        // Use \n to force a line break in the title
        title: "Every factory has\na bottleneck",
        description: "Before we write a single line of PLC code, we analyze your production line to find the exact point of friction costing you throughput.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
        reverse: false
      },
      {
        label: "02 / Engineering",
        title: "Architecting\nthe solution",
        description: "We engineer complete hardware topologies. From specifying high-torque servo drives to designing distributed I/O networks that guarantee microsecond synchronization.",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
        // Setting reverse to true puts the image on the left instead of right
        reverse: true
      },
      {
        label: "03 / Partners",
        title: "Global Components\nOne Integrated Solution",
        description: "We aren't tied to a single vendor. Our engineers select the ideal combination of ABB, Siemens, Yaskawa, and Weintek technologies to build automation solutions tailored to your manufacturing requirements.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
        reverse: false
      },
      {
        label: "04 / Deployment",
        title: "Commission on\nthe factory floor",
        description: "Our involvement doesn't end with a schematic. Our engineers deploy to your facility, wiring cabinets, tuning servo loops, and rigorously testing safety zones until the line runs flawlessly.",
        image: https://images.unsplash.com/photo-1716643863806-989dd76ae093?q=80&w=1974&auto=format&fit=crop",
        reverse: true
      }
    ],
    // The final block with the big numbers/stats
    support: {
      label: "05 / Support",
      // This is used to auto-calculate the "Years Active" stat (Current Year - 1997)
      startYear: 1997,
      description: "We don't just engineer systems—we partner with you for the lifecycle of your facility. Our dedicated support teams ensure your operations never miss a beat.",
      stats: [
        // 'v' is the value (number), 'l' is the label (text underneath)
        { v: "750+", l: "Facilities" },
        { v: "36", l: "Engineers" },
        { v: "4hr", l: "Avg. Response" }
      ]
    }
  }
};
