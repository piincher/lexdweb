/**
 * Root not-found
 *
 * Required, not optional. Without an App Router not-found at the root, Next
 * falls back to the Pages Router error page to satisfy `/404` and `/_error`,
 * which then fails the production build with:
 *
 *   Error: <Html> should not be imported outside of pages/_document.
 *
 * Locale-aware 404s live in `[locale]/not-found.tsx`; this one only catches
 * paths that never resolved a locale, so it stays dependency-free — no
 * next-intl, no theme provider, no locale context to read.
 */

import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: '#022E22',
        color: '#FFFFFF',
        fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
      }}
    >
      <div>
        {/* Plain <img>: next/image needs config this bare route should not depend on. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lexd-wordmark-light.png"
          alt="LEXD"
          width={140}
          height={51}
          style={{ height: '3.2rem', width: 'auto', marginBottom: '2rem' }}
        />
        <p style={{ fontSize: '3rem', fontWeight: 700, margin: 0, letterSpacing: '-0.04em' }}>404</p>
        <p style={{ margin: '0.75rem 0 2rem', color: '#A9D8C7' }}>
          Cette page n&apos;existe pas.
        </p>
        <Link
          href="/fr"
          style={{
            display: 'inline-block',
            padding: '0.9rem 1.75rem',
            background: '#F5A524',
            color: '#131A17',
            borderRadius: '8px',
            fontWeight: 800,
            textDecoration: 'none',
          }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
