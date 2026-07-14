"use client"

import { useEnquiry } from "@/components/providers/EnquiryProvider"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Trash2, Send, PackageX, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { useState } from "react"
import { motion } from "motion/react"
import { TextAnimate } from "@workspace/ui/components/text-animate"
import Container from "@/components/ui/Container"
import { ChevronRight } from "lucide-react"

export default function EnquiryClient() {
  const { items, removeItem, clearEnquiry } = useEnquiry()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const productList = items
      .map((item) => `- ${item.title} (${item.category})`)
      .join("%0D%0A")

    const subject = `Sales Enquiry from ${formData.name} at ${formData.company}`
    const body = `
Dear Hiecon Sales Team,

You have received a new product inquiry from the website portal. Please find the details of the request below:

--------------------------------------------------
CONTACT INFORMATION
--------------------------------------------------
Full Name:    ${formData.name}
Company:      ${formData.company ? formData.company : "N/A"}
Email:        ${formData.email}
Phone Number: ${formData.phone ? formData.phone : "N/A"}

--------------------------------------------------
SELECTED PRODUCTS
--------------------------------------------------
${items.length > 0 ? items.map((item, index) => `${index + 1}. ${item.title}\n   Category: ${item.category}`).join("\n\n") : "No specific products selected."}

--------------------------------------------------
ADDITIONAL REQUIREMENTS / MESSAGE
--------------------------------------------------
${formData.message ? formData.message : "No additional notes provided."}

--------------------------------------------------
End of Inquiry
    `
      .trim()
      .replace(/\n/g, "%0D%0A") // Convert newlines to URL-encoded newlines for mailto:

    window.location.href = `mailto:sales@hiecon.com?subject=${encodeURIComponent(subject)}&body=${body}`

    
    clearEnquiry();
  }

  if (items.length === 0) {
    return (
      <div className="w-full">
        <div className="relative mb-16 overflow-hidden rounded-b-[2rem] border-b border-border/20 pt-12 pb-24 md:rounded-b-[4rem]">
          <Container className="relative z-10">
            <nav className="mb-8 flex items-center text-sm font-medium text-muted-foreground">
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 opacity-50" />
              <span className="text-foreground">Enquiry</span>
            </nav>
            <div className="max-w-4xl pt-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase"
              >
                Request a Quote
              </motion.p>
              <TextAnimate
                animation="blurInUp"
                as="h1"
                by="word"
                className="mb-8 text-5xl leading-[1.05] font-medium tracking-tight text-foreground md:text-7xl lg:text-8xl"
              >
                Your Enquiry.
              </TextAnimate>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
              >
                Review your selected industrial automation products and send us
                a message. Our engineering team will get back to you shortly.
              </motion.p>
            </div>
          </Container>
        </div>

        <Container className="pb-32">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-4 py-16">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <PackageX className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-2xl font-medium text-foreground">
              Your enquiry list is empty
            </h2>
            <p className="mb-8 max-w-md text-center text-muted-foreground">
              Browse our industrial automation solutions and add products to
              your list to request a quote.
            </p>
            <Link href="/products">
              <Button className="h-12 rounded-full px-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Explore Products
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="relative mb-16 overflow-hidden rounded-b-[2rem] border-b border-border/20 pt-12 pb-24 md:rounded-b-[4rem]">
        <Container className="relative z-10">
          <nav className="mb-8 flex items-center text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 opacity-50" />
            <span className="text-foreground">Enquiry</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase"
            >
              Request a Quote
            </motion.p>
            <TextAnimate
              animation="blurInUp"
              as="h1"
              by="word"
              className="mb-8 text-5xl leading-[1.05] font-medium tracking-tight text-foreground md:text-7xl lg:text-8xl"
            >
              Your Enquiry.
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
            >
              Review your selected industrial automation products and send us a
              message. Our engineering team will get back to you shortly.
            </motion.p>
          </div>
        </Container>
      </div>

      <Container className="pb-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <h3 className="border-b border-border pb-4 text-xl font-medium text-foreground">
              Selected Products ({items.length})
            </h3>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-4 rounded-2xl border border-border/50 bg-card p-4 transition-colors hover:border-border"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col justify-center">
                    <span className="mb-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      {item.category}
                    </span>
                    <h4 className="line-clamp-2 text-base font-medium text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-center rounded-full p-3 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-sm md:p-10 lg:col-span-7">
            <h3 className="mb-8 text-2xl font-medium text-foreground">
              Contact Details
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-transparent bg-muted/50 transition-colors focus:border-primary focus:bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-transparent bg-muted/50 transition-colors focus:border-primary focus:bg-background"
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
                    className="h-12 rounded-xl border-transparent bg-muted/50 transition-colors focus:border-primary focus:bg-background"
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
                    className="h-12 rounded-xl border-transparent bg-muted/50 transition-colors focus:border-primary focus:bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Additional Notes or Requirements
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="resize-none rounded-xl border-transparent bg-muted/50 transition-colors focus:border-primary focus:bg-background"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-4 h-14 w-full rounded-xl text-lg font-medium"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Enquiry via Email
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                This will open your default email application (e.g. Outlook,
                Mail) with your enquiry details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}
