import Container from "@/components/ui/Container";
import EnquiryClient from "@/components/enquiry/EnquiryClient";

export const metadata = {
  title: "Your Enquiry | Hiecon",
  description: "Review your selected products and submit your enquiry to Hiecon.",
};

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
              Your Enquiry
            </h1>
            <p className="text-lg text-muted-foreground">
              Review your selected industrial automation products and send us a message. Our engineering team will get back to you shortly.
            </p>
          </div>
          
          <EnquiryClient />
        </div>
      </Container>
    </main>
  );
}
