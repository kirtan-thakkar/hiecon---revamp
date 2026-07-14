"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

export default function TermsClient() {
  return (
    <>
      {/* Header Section */}
      <div className="relative pt-12 pb-16 md:pb-24 overflow-hidden border-b border-border/20 mb-16">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">Terms of Use</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
            >
              Legal Agreement
            </motion.p>
            <TextAnimate 
              animation="blurInUp" 
              as="h1" 
              by="word"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
            >
              Terms of Use.
            </TextAnimate>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Please read these terms and conditions carefully before using the Hiecon Industrial Automation website.
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
              1. Agreement to Terms
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                By accessing this website, you agree to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              2. Intellectual Property Rights
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Unless otherwise stated, Hiecon Industrial Automation and/or its licensors own the intellectual property rights for all material on this website, including but not limited to technical schematics, CAD representations, photography, code, and text. All intellectual property rights are reserved.
              </p>
              <p>
                You may access this for your own personal, non-commercial use subjected to restrictions set in these terms and conditions. You must not:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Republish material from Hiecon</li>
                <li>Sell, rent, or sub-license material from Hiecon</li>
                <li>Reproduce, duplicate, or copy engineering designs or concepts from Hiecon</li>
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
              3. Disclaimer of Warranties
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                The materials on Hiecon's website are provided on an 'as is' basis. Hiecon makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Furthermore, Hiecon does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. <strong className="text-foreground">Official engineering guarantees and performance metrics are only established through formally executed B2B contracts.</strong>
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
              4. Limitations of Liability
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                In no event shall Hiecon or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hiecon's website, even if Hiecon or a Hiecon authorized representative has been notified orally or in writing of the possibility of such damage.
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
              5. Governing Law
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Any claim relating to Hiecon's website shall be governed by the laws of <strong className="text-foreground">[PLACEHOLDER_JURISDICTION]</strong> without regard to its conflict of law provisions.
              </p>
            </div>
          </motion.section>

        </div>
      </Container>
    </>
  );
}
