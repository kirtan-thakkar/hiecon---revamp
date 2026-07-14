import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Disclosure | Hiecon",
  description: "Official legal disclosure and company information for Hiecon Industrial Automation.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-32 selection:bg-brand-primary selection:text-primary-foreground">
      <LegalClient />
    </main>
  );
}

      {/* Content Section */}
      <Container>
        <div className="max-w-3xl grid grid-cols-1 gap-12 md:gap-16">
          
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Company Information
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Name:</strong> Hiecon Industrial Automation Pvt. Ltd.</p>
              <p><strong className="text-foreground">Type:</strong> Private Limited Company</p>
              <p><strong className="text-foreground">Representation:</strong> Board of Directors</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
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
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Contact Details
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Email:</strong> info@hiecon.com</p>
              <p><strong className="text-foreground">Phone:</strong> +[PLACEHOLDER_PHONE]</p>
              <p><strong className="text-foreground">Website:</strong> www.hiecon.com</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-foreground border-b border-border/50 pb-2">
              Regulatory Information
            </h2>
            <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Company Registration Number:</strong> [PLACEHOLDER_REG_NUMBER]</p>
              <p><strong className="text-foreground">VAT / GST Number:</strong> [PLACEHOLDER_VAT_NUMBER]</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
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
          </section>

        </div>
      </Container>
    </main>
  );
}
