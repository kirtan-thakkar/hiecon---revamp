"use client";

import { useEnquiry, EnquiryItem } from "@/components/providers/EnquiryProvider";
import { Button } from "@workspace/ui/components/button";
import { ClipboardCheck, ClipboardList } from "lucide-react";
import { Link } from "next-view-transitions";

export default function AddToEnquiryButton({ product }: { product: EnquiryItem }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.id);

  if (added) {
    return (
      <Link href="/enquiry">
        <Button 
          size="lg" 
          className="rounded-full h-14 px-10 text-lg font-medium transition-transform hover:scale-105 shadow-sm bg-muted text-foreground border-2 border-primary/20 hover:bg-muted"
        >
          <ClipboardCheck className="w-5 h-5 mr-2 text-primary" />
          Added to Enquiry
        </Button>
      </Link>
    );
  }

  return (
    <Button 
      size="lg" 
      onClick={() => addItem(product)}
      className="rounded-full h-14 px-10 text-lg font-medium transition-transform hover:scale-105 shadow-sm bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <ClipboardList className="w-5 h-5 mr-2" />
      Add to Enquiry
    </Button>
  );
}
