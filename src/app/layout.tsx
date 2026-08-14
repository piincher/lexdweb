/**
 * Root Layout
 * 
 * Required <html> and <body> tags for Next.js 15+.
 * The locale-specific layout ([locale]/layout.tsx) wraps the content.
 */

import { ReactNode } from 'react';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/manrope';
import '@fontsource-variable/geist-mono';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
