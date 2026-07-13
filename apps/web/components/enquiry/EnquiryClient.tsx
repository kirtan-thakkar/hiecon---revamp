"use client";

import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Label } from "@workspace/ui/components/label";
import { Trash2, Send, PackageX, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState } from "react";

export default function EnquiryClient() {
  const { items, removeItem, clearEnquiry } = useEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the email body
    const productList = items.map(item => `- ${item.title} (${item.category})`).join('%0D%0A');
    
    const subject = `Sales Enquiry from ${formData.name} at ${formData.company}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Requested Products:
${items.length > 0 ? items.map(item => `- ${item.title} (${item.category})`).join('\n') : 'No specific products selected.'}

Message:
${formData.message}
    `.trim().replace(/\n/g, '%0D%0A'); // Convert newlines to URL-encoded newlines for mailto:

    // Trigger mailto
    window.location.href = `mailto:sales@hiecon.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Optionally clear the cart after opening the email client
    // clearEnquiry(); 
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-border rounded-3xl bg-muted/20">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <PackageX className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-medium text-foreground mb-2">Your enquiry list is empty</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Browse our industrial automation solutions and add products to your list to request a quote.
        </p>
        <Link href="/products">
          <Button className="rounded-full h-12 px-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Explore Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: Product List */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <h3 className="text-xl font-medium text-foreground pb-4 border-b border-border">
          Selected Products ({items.length})
        </h3>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:border-border transition-colors group">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col flex-grow justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-medium text-foreground line-clamp-2">
                  {item.title}
                </h4>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="self-center p-3 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Enquiry Form */}
      <div className="lg:col-span-7 bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">
        <h3 className="text-2xl font-medium text-foreground mb-8">
          Contact Details
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleInputChange}
                className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes or Requirements</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="resize-none rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" 
              placeholder="Tell us about your project requirements..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-medium mt-4">
            <Send className="w-5 h-5 mr-2" />
            Submit Enquiry via Email
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            This will open your default email application (e.g. Outlook, Mail) with your enquiry details pre-filled.
          </p>
        </form>
      </div>
    </div>
  );
}
