import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/welcome', '/sign-in', '/api/'],
      },
    ],
    sitemap: 'https://attune.co/sitemap.xml',
  }
}
