import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // ============================================================================
  // Image Optimization
  // ============================================================================
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chinalinkexpress.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chinalinkexpress1.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Optimize images up to 4K
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL (1 day)
    minimumCacheTTL: 86400,
    // Disable unoptimized images in production for better performance
    unoptimized: false,
  },

  // ============================================================================
  // Redirects - SEO URL Structure
  // ============================================================================
  async redirects() {
    return [
      // Redirect old URLs to new structure
      {
        source: '/home',
        destination: '/fr/',
        permanent: true,
      },
      {
        source: '/air-freight',
        destination: '/fr/services/air-freight',
        permanent: true,
      },
      {
        source: '/sea-freight',
        destination: '/fr/services/sea-freight',
        permanent: true,
      },
      {
        source: '/sourcing',
        destination: '/fr/services/sourcing',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/routes/china-to-ivory-coast',
        destination: '/:locale/routes/china-to-cote-divoire',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/routes/china-to-ivory-coast/',
        destination: '/:locale/routes/china-to-cote-divoire',
        permanent: true,
      },
      // Mali -> Cameroon slug migrations (SEO)
      {
        source: '/:locale(fr|en|zh|ar)/cargo-chine-mali',
        destination: '/:locale/cargo-chine-cameroun',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/routes/china-to-mali',
        destination: '/:locale/routes/china-to-cameroon',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/services/achat-alibaba-mali',
        destination: '/:locale/services/achat-alibaba-cameroun',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/blog/acheter-alibaba-mali-sans-arnaque',
        destination: '/:locale/blog/acheter-alibaba-cameroun-sans-arnaque',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/blog/cargo-chine-mali-guide-complet',
        destination: '/:locale/blog/cargo-chine-cameroun-guide-complet',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/blog/comment-importer-chine-mali-2026',
        destination: '/:locale/blog/comment-importer-chine-cameroun-2026',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/blog/conteneur-chine-mali-prix-2026',
        destination: '/:locale/blog/conteneur-chine-cameroun-prix-2026',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/blog/douane-mali-import-chine',
        destination: '/:locale/blog/douane-cameroun-import-chine',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/guides/acheter-sur-1688-depuis-le-mali',
        destination: '/:locale/guides/acheter-sur-1688-depuis-le-cameroun',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/guides/acheter-sur-alibaba-depuis-le-mali',
        destination: '/:locale/guides/acheter-sur-alibaba-depuis-le-cameroun',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/guides/douane-mali-import-chine',
        destination: '/:locale/guides/douane-cameroun-import-chine',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/guides/fret-aerien-vs-maritime-chine-mali',
        destination: '/:locale/guides/fret-aerien-vs-maritime-chine-cameroun',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|zh|ar)/guides/importer-de-chine-au-mali',
        destination: '/:locale/guides/importer-de-chine-au-cameroun',
        permanent: true,
      },
      // Force lowercase URLs
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-original-path',
            value: '(?i)^.*[A-Z].*$',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  // ============================================================================
  // Headers - Security & Performance
  // ============================================================================
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Performance Headers
          {
            key: 'Accept-CH',
            value: 'DPR, Width, Viewport-Width, ECT, Save-Data',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
        ],
      },
      ...(process.env.NODE_ENV === 'production' ? [
        {
          // Cache static assets (production only - avoid stale dev chunks)
          source: '/:all*(svg|jpg|png|webp|avif|gif|ico|css|js|woff|woff2|ttf)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ] : []),
      {
        // Cache sitemap and robots
        source: '/(sitemap.xml|robots.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // ============================================================================
  // Rewrites - Clean URL Structure
  // ============================================================================
  async rewrites() {
    return [
      // Optional: Clean URLs without locale prefix for default locale
      // {
      //   source: '/services/:path*',
      //   destination: '/fr/services/:path*',
      //   locale: false,
      // },
    ];
  },

  // ============================================================================
  // Webpack Configuration
  // ============================================================================
  webpack: (config, { isServer, nextRuntime }) => {
    // Handle shader files if needed
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // Optimize three.js imports for client only
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'three$': 'three/build/three.module.js',
      };
    }

    // Tree-shake unused locales from moment.js (if used)
    config.plugins.push(
      new (require('webpack')).IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );

    return config;
  },

  // ============================================================================
  // Experimental Features
  // ============================================================================
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: [
      'framer-motion',
      'gsap',
      '@react-three/drei',
      'lucide-react',
      'three',
    ],
    // Server Actions optimization
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // React compiler for better performance (disabled - requires babel plugin)
    // reactCompiler: true,
  },

  // ============================================================================
  // TypeScript & Build
  // ============================================================================
  typescript: {
    // Disable type checking during build (run separately for CI/CD)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Disable ESLint during build (run separately for CI/CD)
    ignoreDuringBuilds: false,
  },

  // ============================================================================
  // Power Usage & Performance
  // ============================================================================
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  generateEtags: true, // Enable ETag generation
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // ============================================================================
  // Transpile Packages
  // ============================================================================
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/postprocessing',
    'next-intl',
  ],

  // ============================================================================
  // Environment Variables Validation
  // ============================================================================
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  },

  // ============================================================================
  // Logging
  // ============================================================================
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },

  // ============================================================================
  // Trailing Slash (SEO - consistent URL structure)
  // ============================================================================
  trailingSlash: false, // Keep URLs without trailing slash
};

// Create next-intl plugin with the request config path
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
