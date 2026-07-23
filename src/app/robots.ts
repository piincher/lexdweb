import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/test-db/', '/_next/', '/admin/', '/private/', '/*?*', '/*.json$'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
      },
    ],
    sitemap: 'https://www.lexdservices.com/sitemap.xml',
    host: 'https://www.lexdservices.com',
  };
}
