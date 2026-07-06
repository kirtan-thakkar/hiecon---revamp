"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@workspace/ui/components/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "center 50%",
        scrub: 1,
      }
    });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      descRef.current,
      { opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

  }, { scope: containerRef });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-neutral-950">
      <Container>
        <div className="flex flex-col items-center justify-center mb-16 text-center max-w-3xl mx-auto">
          <div className="overflow-hidden mb-6">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              Automation, Simplified
            </h2>
          </div>
          <p 
            ref={descRef}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400"
          >
            Discover our complete range of industrial automation products engineered for performance, precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productFamilies.slice(0, visibleCount).map((product, index) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.1, // Stagger rows correctly
                  ease: "easeOut",
                }}
                className="h-full flex flex-col p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 transition-all duration-300 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="w-full h-40 rounded-2xl bg-neutral-200 dark:bg-neutral-800 mb-6 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {product.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 flex-grow mb-6">
                  {product.description}
                </p>
                <div className="flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400 mt-auto">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {visibleCount < productFamilies.length && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <Button size="lg" onClick={handleLoadMore} className="rounded-full px-8">
              Load More Products
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
