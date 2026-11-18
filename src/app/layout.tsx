import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/lib/site"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "FixMate — Home repairs, simplified",
    template: "%s · FixMate",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "home repair",
    "home services",
    "plumbing",
    "electrical",
    "handyman",
    "FixMate",
  ],
  openGraph: {
    title: "FixMate — Home repairs, simplified",
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#F5F8F3",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
