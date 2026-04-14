import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aimemory.lat'),
  title: 'AI Memory - Persistent Memory for AI Applications',
  description: 'The Monetization-First Memory Layer for AI. Add persistent memory to any AI with semantic search, vector embeddings, and built-in billing.',
  keywords: ['AI memory', 'LLM memory', 'persistent memory', 'vector embeddings', 'semantic search', 'AI chatbot memory', 'chrome extension', 'memory for ChatGPT'],
  authors: [{ name: 'AI Memory' }],
  openGraph: {
    title: 'AI Memory - Persistent Memory for AI Applications',
    description: 'The Monetization-First Memory Layer for AI. Built for developers and users.',
    type: 'website',
    siteName: 'AI Memory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Memory - Persistent Memory for AI Applications',
    description: 'The Monetization-First Memory Layer for AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-dark min-h-screen`}>{children}</body>
    </html>
  )
}
