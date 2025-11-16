import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'USGentics - Explore Human Genetic Diversity',
  description: 'A comprehensive platform for exploring genetic ancestry, haplogroups, mitochondrial DNA, and environmental factors affecting human evolution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
