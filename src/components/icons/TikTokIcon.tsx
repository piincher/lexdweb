/**
 * TikTok glyph.
 *
 * lucide-react removed brand icons, so this fills the gap. The props and
 * defaults mirror a lucide icon (currentColor, 24px, className passthrough) so
 * it can sit alongside Facebook/Instagram in the footer icon lists without any
 * special casing.
 */
import type { SVGProps } from 'react';

interface TikTokIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function TikTokIcon({ size = 24, className, ...props }: TikTokIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.82-2.48V9.66a5.7 5.7 0 1 0 4.91 5.64V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export default TikTokIcon;
