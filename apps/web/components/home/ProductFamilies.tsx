"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";

export const productFamilies = [
  {
    id: 1,
    title: "AC Drives",
    slug: "ac-drives",
    description:
      "Variable frequency AC drives engineered for precise motor speed control, energy efficiency, and reliable industrial automation.",
    image: "/products/ac-drives.webp",
  },
  {
    id: 2,
    title: "AC Motors",
    slug: "ac-motors",
    description:
      "High-performance industrial AC motors designed for durability, efficiency, and demanding manufacturing environments.",
    image: "/products/ac-motors.webp",
  },
  {
    id: 3,
    title: "Servo Drives & Motors",
    slug: "servo-drives-motors",
    description:
      "Precision servo drive and motor solutions delivering high-speed, accurate motion control for modern automation systems.",
    image: "/products/servo-drives.webp",
  },
  {
    id: 4,
    title: "Golden Age Servo Motors",
    slug: "golden-age-servo-motors",
    description:
      "Reliable servo motor solutions for high-performance motion control applications across multiple industries.",
    image: "/products/golden-age-servo.webp",
  },
  {
    id: 5,
    title: "PLC",
    slug: "plc",
    description:
      "Industrial programmable logic controllers for machine automation, process control, and factory integration.",
    image: "/products/plc.webp",
  },
  {
    id: 6,
    title: "Motion Controllers",
    slug: "motion-controllers",
    description:
      "Advanced motion control systems for synchronized multi-axis automation and precision manufacturing.",
    image: "/products/motion-controller.webp",
  },
  {
    id: 7,
    title: "HMI",
    slug: "hmi",
    description:
      "Human Machine Interface solutions that provide intuitive visualization, monitoring, and machine operation.",
    image: "/products/hmi.webp",
  },
  {
    id: 8,
    title: "SCADA",
    slug: "scada",
    description:
      "Supervisory Control and Data Acquisition systems for real-time industrial monitoring and process management.",
    image: "/products/scada.webp",
  },
  {
    id: 9,
    title: "Industrial PC",
    slug: "industrial-pc",
    description:
      "Industrial-grade computing solutions built for continuous operation in harsh manufacturing environments.",
    image: "/products/industrial-pc.webp",
  },
  {
    id: 10,
    title: "Remote I/O",
    slug: "remote-io",
    description:
      "Distributed remote I/O modules enabling flexible connectivity and scalable industrial automation systems.",
    image: "/products/remote-io.webp",
  },
  {
    id: 11,
    title: "Control Panels",
    slug: "control-panels",
    description:
      "Custom-engineered industrial control panels designed for safe, efficient, and reliable machine operation.",
    image: "/products/control-panel.webp",
  },
  {
    id: 12,
    title: "IIoT Products",
    slug: "iiot-products",
    description:
      "Industrial Internet of Things solutions enabling connected factories, remote monitoring, and predictive maintenance.",
    image: "/products/iiot.webp",
  },
  {
    id: 13,
    title: "Automation Components",
    slug: "automation-components",
    description:
      "Comprehensive range of industrial automation components supporting modern manufacturing and machine building.",
    image: "/products/automation-components.webp",
  },
  {
    id: 14,
    title: "Industrial Robots",
    slug: "industrial-robots",
    description:
      "Robotic automation systems designed to improve productivity, accuracy, and operational efficiency.",
    image: "/products/industrial-robot.webp",
  },
];

export default function ProductFamilies() {
  // 1 large, 2 medium, rest in grid. So 3 are featured. We load 6 of the remaining at a time.
  const [visibleRemaining, setVisibleRemaining] = useState(6);

  const featuredLarge = productFamilies[0];
  const featuredMedium = productFamilies.slice(1, 3);
  const remainingProducts = productFamilies.slice(3);

  const handleLoadMore = () => {
    setVisibleRemaining((prev) => prev + 6);
  };

  if (!featuredLarge) return null;

  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            Explore Our Solutions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
          >
            From motion control and PLCs to industrial robotics and IIoT, discover automation solutions engineered for precision, reliability, and long-term performance.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Large Featured Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/products/${featuredLarge.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="relative lg:col-span-7 h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src={featuredLarge.image} alt={featuredLarge.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6">
                  {featuredLarge.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
                  {featuredLarge.description}
                </p>
                <div className="flex items-center text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors w-fit">
                  Explore Solution <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Medium Featured Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredMedium.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.slug}`} className="group flex flex-col h-full">
                  <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden bg-muted mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src={product.image} alt={product.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-3xl font-medium text-foreground mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors mt-auto w-fit">
                    Explore Solution <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Remaining Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {remainingProducts.slice(0, visibleRemaining).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Link href={`/products/${product.slug}`} className="group flex flex-col h-full">
                  <div className="relative w-full h-[240px] rounded-3xl overflow-hidden bg-muted mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src={product.image} alt={product.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors mt-auto w-fit">
                    Explore Solution <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {visibleRemaining < remainingProducts.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-20"
          >
            <Button size="lg" variant="outline" onClick={handleLoadMore} className="rounded-full px-8 h-12 text-base font-medium">
              Load More Solutions
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
