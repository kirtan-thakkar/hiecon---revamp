import { DM_Sans } from 'next/font/google';

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { cn } from "@workspace/ui/lib/utils";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

import { ViewTransitions } from 'next-view-transitions'

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
        <body className="tracking-tight bg-transparent text-neutral-700 dark:bg-transparent dark:text-neutral-50">
          <ThemeProvider>
            <Navbar />
            <SmoothScrollProvider>
              {children}
              <Footer />
            </SmoothScrollProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
