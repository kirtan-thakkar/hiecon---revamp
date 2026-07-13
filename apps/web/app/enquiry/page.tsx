import Container from "@/components/ui/Container";
import EnquiryClient from "@/components/enquiry/EnquiryClient";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export const metadata = {
  title: "Your Enquiry | Hiecon",
  description: "Review your selected products and submit your enquiry to Hiecon.",
};

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-28 pb-0">
      
      {/* Header Section */}
      <div className="relative pt-12 pb-24 mb-16 overflow-hidden border-b border-border/20 rounded-b-[2rem] md:rounded-b-[4rem]">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">Enquiry</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6">
              Request a Quote
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
              Your Enquiry.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Review your selected industrial automation products and send us a message. Our engineering team will get back to you shortly.
            </p>
          </div>
        </Container>
      </div>

      <Container className="pb-32">
        <EnquiryClient />
      </Container>
    </main>
  );
}
