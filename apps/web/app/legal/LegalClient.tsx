"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

export default function LegalClient() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-12 pb-16 md:pb-24 overflow-hidden border-b border-border/20 mb-16">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">Legal</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
            >
              Impressum
            </motion.p>
            <TextAnimate 
              animation="blurInUp" 
              as="h1" 
              by="word"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
            >
              Legal Disclosure.
            </TextAnimate>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Official company information and regulatory disclosures for Hiecon.
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
              Company Information
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Name:</strong> Hiecon Industrial Automation Pvt. Ltd.</p>
              <p><strong className="text-foreground">Type:</strong> Private Limited Company</p>
              <p><strong className="text-foreground">Representation:</strong> Board of Directors</p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Registered Office
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p>
                [PLACEHOLDER_ADDRESS_LINE_1]<br />
                [PLACEHOLDER_ADDRESS_LINE_2]<br />
                [PLACEHOLDER_CITY], [PLACEHOLDER_STATE] [PLACEHOLDER_POSTAL_CODE]<br />
                [PLACEHOLDER_COUNTRY]
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Contact Details
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Email:</strong> info@hiecon.com</p>
              <p><strong className="text-foreground">Phone:</strong> +[PLACEHOLDER_PHONE]</p>
              <p><strong className="text-foreground">Website:</strong> www.hiecon.com</p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Regulatory Information
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Company Registration Number:</strong> [PLACEHOLDER_REG_NUMBER]</p>
              <p><strong className="text-foreground">VAT / GST Number:</strong> [PLACEHOLDER_VAT_NUMBER]</p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Copyright & Trademarks
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p>
                All content, images, and designs on this website are the exclusive property of Hiecon Industrial Automation or its respective licensors. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
              </p>
              <p>
                "Hiecon" and the Hiecon logo are registered trademarks. All other trademarks, product names, and company names or logos cited herein are the property of their respective owners.
              </p>
            </div>
          </motion.section>

        </div>
      </Container>
    </>
  );
}
