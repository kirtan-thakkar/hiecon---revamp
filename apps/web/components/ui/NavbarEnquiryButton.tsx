"use client";

import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { Link } from "next-view-transitions";
import { ShoppingCart } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function NavbarEnquiryButton({ className }: { className?: string }) {
  const { items } = useEnquiry();
  const count = items.length;

  return (
    <Link href="/enquiry" className={className}>
      <Button 
        variant="default" 
        className="relative rounded-xl h-10 px-5 font-medium transition-transform hover:scale-105 shadow-sm bg-primary text-primary-foreground w-full"
      >
        Enquiry
        {count > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground shadow-sm">
            {count}
          </span>
        )}
      </Button>
    </Link>
  );
}
