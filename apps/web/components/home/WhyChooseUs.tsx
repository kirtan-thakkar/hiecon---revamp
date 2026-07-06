"use client";

import Container from "../ui/Container";
import { 
  Award, 
  Users, 
  Handshake, 
  Wrench, 
  Settings, 
  Zap 
} from "lucide-react";

const reasons = [
  {
    title: "27 Years Experience",
    description: "Decades of proven expertise delivering reliable industrial automation.",
    icon: Award,
  },
  {
    title: "Experienced Engineers",
    description: "A dedicated team of highly skilled technical professionals.",
    icon: Users,
  },
  {
    title: "Trusted Technology Partners",
    description: "Collaborating with global leaders like Siemens, ABB, and Rockwell.",
    icon: Handshake,
  },
  {
    title: "Reliable After Sales Support",
    description: "Comprehensive maintenance and troubleshooting whenever you need it.",
    icon: Wrench,
  },
  {
    title: "Customized Solutions",
    description: "Tailor-made automation architectures designed for your specific needs.",
    icon: Settings,
  },
  {
    title: "Fast Technical Assistance",
    description: "Rapid response times to minimize downtime and keep you running.",
    icon: Zap,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We bring decades of expertise and a commitment to excellence, ensuring your industrial automation systems are reliable, efficient, and future-proof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex flex-col p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800/80"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <reason.icon className="w-6 h-6 text-neutral-800 dark:text-neutral-200" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
