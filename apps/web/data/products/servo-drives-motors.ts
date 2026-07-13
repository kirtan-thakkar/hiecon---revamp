import type { IndividualProduct } from "./types";

export const servoDrivesMotors: IndividualProduct[] = [
{
    id: "smd-series",
    slug: "smd-series",
    categorySlug: "servo-drives-motors",
    name: "SMD Series",
    tagline: "Smart Motion Drive",
    shortDescription: "SMD servo drives are especially suitable for high dynamics and high precision. They integrate the power supply, the braking resistor, the mains filter, and the safety function. Thanks to their integrated inputs/outputs and PLC functions, they are suitable for a wide variety of applications.",
    heroImage: "/serad-servo-hero.webp",
    features: [
      { title: "Up to 8.8 kW" },
      { title: "Three-phase or single-phase power supply" },
      { title: "Integrated network filter" },
      { title: "Multi feedback" },
      { title: "Safety function SIL3" },
      { title: "Torque mode, Speed mode, Positioning mode" },
      { title: "Motion Functions: S-curve, Electric shaft, Cam profiles, Synchronization, Camboxes, Triggered movements" }
    ],
    technicalHighlights: [
      { label: "Drive Types", value: "Pulse Train Output (PTO), EtherCAT" },
      { label: "Software", value: "Windows-based parameterization software" }
    ],
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.serad.fr/en/products/smd" }
    ]
  },
{
    id: "sf-series",
    slug: "sf-series",
    categorySlug: "servo-drives-motors",
    name: "SF Series",
    tagline: "Compact Servo Motor",
    shortDescription: "SF servo motors are especially suitable for compact machines due to their small size. They offer high performance in precision and dynamics.",
    heroImage: "/servo-serad/serad-servo-motor.webp",
    features: [
      { title: "5 sizes available" },
      { title: "24V, 48V, 230V and 400V versions" },
      { title: "From 0.3 to 10 Nm" },
      { title: "Speed 3000 rpm" },
      { title: "Sinusoidal switching" },
      { title: "Low inertia" },
      { title: "Absolute encoder feedback, resolver" },
      { title: "Parking brake" },
      { title: "Cable output" },
      { title: "IP65 protection" }
    ],
    documents: [
      { title: "Datasheet", type: "PDF", externalUrl: "https://www.serad.fr/en/products/sf" }
    ]
  }
];
