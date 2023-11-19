import { Inter } from "next/font/google"

import { Providers } from "./providers"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next.js + NextUI Starter Kit",
  description: "A starter kit for Next.js + NextUI with custom theme preview.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground" suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
