import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aimemory.lat'),
  title: {
    default: 'AI Memory - Persistent Memory System for AI Applications',
    template: '%s | AI Memory',
  },
  description: 'Add persistent memory to any AI application. Semantic search, vector embeddings, context management, and built-in billing. Works with ChatGPT, Claude, Gemini and any LLM.',
  keywords: [
    'AI memory',
    'LLM memory',
    'persistent memory',
    'vector embeddings',
    'semantic search',
    'AI chatbot memory',
    'memory for ChatGPT',
    'Claude memory',
    'Gemini memory',
    'AI context management',
    'vector store',
    'embedding database',
    'AI developer tools',
    'monetization',
    'API billing',
    'usage tracking',
    'browser extension',
    'chrome extension AI',
  ],
  authors: [{ name: 'Gabriel Pitrella', url: 'https://www.aimemory.lat' }],
  creator: 'Gabriel Pitrella',
  publisher: 'AI Memory',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aimemory.lat',
    siteName: 'AI Memory',
    title: 'AI Memory - Persistent Memory System for AI Applications',
    description: 'Add persistent memory to any AI application. Semantic search, vector embeddings, context management, and built-in billing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Memory - Persistent Memory for AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Memory - Persistent Memory for AI Applications',
    description: 'Add persistent memory to any AI. Semantic search, vector embeddings, built-in billing.',
    site: '@aimemory_dev',
    creator: '@aimemory_dev',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.aimemory.lat',
    languages: {
      'en-US': 'https://www.aimemory.lat',
      'es-ES': 'https://www.aimemory.lat',
    },
  },
  category: 'Technology',
  classification: 'AI Developer Tools',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Memory',
  description: 'Persistent memory system for AI applications with semantic search, vector embeddings, and built-in monetization.',
  url: 'https://www.aimemory.lat',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Node.js, Chrome, Edge, Firefox, Safari',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free tier available, paid plans from $3/month',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
  },
  author: {
    '@type': 'Person',
    name: 'Gabriel Pitrella',
    url: 'https://www.aimemory.lat',
  },
  provider: {
    '@type': 'Organization',
    name: 'AI Memory',
    url: 'https://www.aimemory.lat',
  },
  softwareHelp: {
    '@type': 'CreativeWork',
    name: 'Documentation',
    url: 'https://www.aimemory.lat/docs',
  },
  codeRepository: 'https://github.com/gpitrella/ai-memory',
  license: 'https://opensource.org/licenses/MIT',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI Memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory is a persistent memory system for AI applications. It allows AI models like ChatGPT, Claude, and Gemini to remember user preferences, conversation history, and contextual information across sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory stores memories using vector embeddings for semantic search. When you call brain.remember(), it stores information. When you call brain.recall(), it retrieves relevant memories based on semantic similarity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI models are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory works with any LLM that accepts text input, including OpenAI GPT-4, Claude, Gemini, Llama, Mistral, and custom models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a free tier with 100 memories/day. Paid plans start at $3/month for 1,000 memories/day with cloud sync.',
      },
    },
  ],
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Memory',
  description: 'Persistent memory system for LLM applications with semantic search, context management, and monetization-ready infrastructure.',
  url: 'https://www.aimemory.lat',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'AI SDK',
  operatingSystem: ['Node.js 18+', 'Web Browser'],
  programLanguage: ['TypeScript', 'JavaScript'],
  runtimePlatform: ['Node.js', 'Browser'],
  keywords: 'AI memory, LLM memory, persistent memory, vector embeddings, semantic search, AI chatbot memory',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '99',
    priceCurrency: 'USD',
    offerCount: '4',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
    bestRating: '5',
  },
  featureList: [
    'Semantic search with vector embeddings',
    'Multi-user support with isolation',
    'Session management',
    'Context builder for LLM prompts',
    'TypeScript native',
    'Rate limiting',
    'Usage tracking',
    'Redis and PostgreSQL storage',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-gradient-dark min-h-screen`}>{children}</body>
    </html>
  )
}
