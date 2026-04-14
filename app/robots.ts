import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot', 'CCBot', 'Anthropic-AI'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.aimemory.lat/sitemap.xml',
  }
}
