import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { getOrganizationSchema } from '@/data/organizationSchema';
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { cn } from "@workspace/ui/lib/utils";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import BackToTop from "@/components/ui/BackToTop";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  other: {
    // Basic Geo tags
    'geo.region': 'IN-GJ',
    'geo.placename': siteConfig.address.addressLocality,
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn("antialiased", dmSans.className)}
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
          />
        </head>
        <body className="tracking-tight bg-transparent text-neutral-700 dark:bg-transparent dark:text-neutral-50 min-h-screen">
          <ThemeProvider>
            <Navbar />
            <SmoothScrollProvider>
              <div className="flex flex-col min-h-screen">
                <main className="grow flex flex-col">
                  {children}
                </main>
                <Footer />
              </div>
            </SmoothScrollProvider>
            <BackToTop />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
