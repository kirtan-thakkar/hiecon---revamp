"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

export default function PrivacyClient() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-12 pb-16 md:pb-24 overflow-hidden border-b border-border/20 mb-16">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">Privacy Policy</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
            >
              Data Protection
            </motion.p>
            <TextAnimate 
              animation="blurInUp" 
              as="h1" 
              by="word"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
            >
              Privacy Policy.
            </TextAnimate>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Learn how Hiecon collects, processes, and protects your personal and corporate data.
            </motion.p>
          </div>
        </Container>
      </div>

      {/* Content Section */}
      <Container>
        <div className="max-w-3xl grid grid-cols-1 gap-12 md:gap-16">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              1. Information We Collect
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                When you interact with the Hiecon website or utilize our online enquiry system, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Contact Information:</strong> Full name, email address, phone number, and company name provided during an inquiry.</li>
                <li><strong className="text-foreground">Project Requirements:</strong> Textual notes or technical specifications provided voluntarily in the inquiry message field.</li>
                <li><strong className="text-foreground">Technical Data:</strong> IP addresses, browser types, and anonymized analytics data tracking website navigation.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              2. How We Use Your Data
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                The information collected is used exclusively for legitimate business purposes, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To process, respond to, and fulfill product or engineering inquiries.</li>
                <li>To generate accurate sales quotations and technical proposals.</li>
                <li>To improve our website's functionality and user experience through anonymized analytics.</li>
                <li>To comply with legal obligations and resolve disputes.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              3. Data Sharing & Third Parties
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Hiecon Industrial Automation strictly adheres to a policy of <strong className="text-foreground">never selling your personal data</strong> to third parties. We only share information with trusted third-party service providers (such as hosting and analytics platforms) strictly necessary for operating our website. 
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              4. Cookies and Tracking
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Our website utilizes cookies to ensure core functionality (e.g., maintaining state for your "Enquiry List"). We also use analytical cookies to understand traffic patterns. You may disable cookies via your browser settings, though this may prevent certain features of the site (like the inquiry cart) from functioning properly.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              5. Your Privacy Rights
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Depending on your jurisdiction, you have the right to request access to, modification of, or deletion of the personal data we hold about you. To exercise these rights, or if you have any questions regarding this Privacy Policy, please contact our Data Protection Officer at:
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Email:</strong> privacy@hiecon.com<br />
                <strong className="text-foreground">Phone:</strong> +[PLACEHOLDER_PHONE]
              </p>
            </div>
          </motion.section>

        </div>
      </Container>
    </>
  );
}
