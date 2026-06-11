import type { Metadata } from "next"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anchor — Recovery Coping Skills",
  description:
    "20+ evidence-based coping skills for addiction recovery. Box breathing, grounding, urge surfing, and more — free, private, and always available when you need them most.",
  keywords: ["recovery coping skills", "addiction recovery app", "urge surfing", "box breathing", "sobriety tools"],
  openGraph: {
    title: "Anchor — Recovery Coping Skills",
    description: "20+ evidence-based coping skills for addiction recovery. Free, private, always available.",
    siteName: "Anchor by Recovery Life Collective",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
