/**
 * Hero Animation Loader
 *
 * Client-only wrapper that lazy-loads the hero-animation feature (three.js
 * WebGL globe, liquid background, morphing constellations) so the heavy 3D
 * bundle is code-split and never blocks the server-rendered hero. The
 * landing page is a server component, so the `ssr: false` dynamic import
 * must live behind this 'use client' boundary.
 */

'use client';

import dynamic from 'next/dynamic';

const HeroAnimation = dynamic(
  () => import('@/features/hero-animation').then((mod) => mod.HeroAnimation),
  { ssr: false }
);

export function HeroAnimationLoader() {
  return <HeroAnimation effectMode="combined" />;
}
