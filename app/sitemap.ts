import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aimemory.lat'
  
  const routes = [
    '',
    '/pricing',
    '/extension',
    '/docs/getting-started',
    '/docs/api',
    '/business',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/pricing' ? 0.9 : 0.7,
  }))
}
