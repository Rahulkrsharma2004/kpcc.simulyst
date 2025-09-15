import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "KPCC Sentiment Dashboard",
  description: "Real-time political sentiment tracking and analysis dashboard for KPCC",
  generator: "v0.app",
  keywords: ["KPCC", "sentiment analysis", "political tracking", "Karnataka", "dashboard"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
