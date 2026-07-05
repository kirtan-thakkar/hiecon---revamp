import { DM_Sans } from 'next/font/google';

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", dmSans.className)}
    >
      <body className="tracking-tight bg-transparent text-neutral-700 dark:bg-transparent dark:text-neutral-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
