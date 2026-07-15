"use client"

import { motion } from "motion/react"
import { Link } from "next-view-transitions"
import { ChevronRight } from "lucide-react"
import Container from "@/components/ui/Container"
import { TextAnimate } from "@workspace/ui/components/text-animate"

export default function LegalClient() {
  return (
    <>
      <div className="relative mb-16 overflow-hidden border-b border-border/20 pt-12 pb-16 md:pb-24">
        <Container className="relative z-10">
          <nav className="mb-8 flex items-center text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 opacity-50" />
            <span className="text-foreground">Legal</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase"
            >
              Impressum
            </motion.p>
            <TextAnimate
              animation="blurInUp"
              as="h1"
              by="word"
              className="mb-8 text-5xl leading-[1.05] font-medium tracking-tight text-foreground md:text-7xl lg:text-8xl"
            >
              Legal Disclosure.
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
            >
              Official company information and regulatory disclosures for
              Hiecon.
            </motion.p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid max-w-3xl grid-cols-1 gap-12 md:gap-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h2 className="border-b border-border/50 pb-2 text-2xl font-medium text-foreground">
              Company Information
            </h2>
            <div className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Name:</strong> Hiecon
                Industrial Automation Pvt. Ltd.
              </p>
              <p>
                <strong className="text-foreground">Type:</strong> Private
                Limited Company
              </p>
              <p>
                <strong className="text-foreground">Representation:</strong>{" "}
                Board of Directors
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="border-b border-border/50 pb-2 text-2xl font-medium text-foreground">
              Registered Office
            </h2>
            <div className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
              <p>
                152, Lane 3, Azad Society
                <br />
                Acharya Narendradev Nagar, Ambawadi
                <br />
                Ahmedabad, Gujarat 380015
                <br />
                India
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="border-b border-border/50 pb-2 text-2xl font-medium text-foreground">
              Contact Details
            </h2>
            <div className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                sales@hiecon.com
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                +91 9974707600
              </p>
              <p>
                <strong className="text-foreground">Website:</strong>{" "}
                www.hiecon.com
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h2 className="border-b border-border/50 pb-2 text-2xl font-medium text-foreground">
              Regulatory Information
            </h2>
            <div className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Company Registration Number:
                </strong>{" "}
                [PLACEHOLDER_REG_NUMBER]
              </p>
              <p>
                <strong className="text-foreground">GST Number:</strong>{" "}
                [PLACEHOLDER_GST_NUMBER]
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h2 className="border-b border-border/50 pb-2 text-2xl font-medium text-foreground">
              Copyright & Trademarks
            </h2>
            <div className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
              <p>
                All content, images, and designs on this website are the
                exclusive property of Hiecon Industrial Automation or its
                respective licensors. Unauthorized reproduction, distribution,
                or commercial use is strictly prohibited.
              </p>
              <p>
                "Hiecon" and the Hiecon logo are registered trademarks. All
                other trademarks, product names, and company names or logos
                cited herein are the property of their respective owners.
              </p>
            </div>
          </motion.section>
        </div>
      </Container>
    </>
  )
}
