/**
 * DemoSection — section shell for the demo screen.
 * Eyebrow + title + subtitle header, consistent vertical rhythm.
 */
import React from 'react';
import { OVERLINE } from './statusStyles';

interface DemoSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  labelledBy: string;
}

export function DemoSection({ eyebrow, title, subtitle, children, labelledBy }: DemoSectionProps) {
  return (
    <section aria-labelledby={labelledBy} className="py-14 md:py-20">
      <div className="max-w-3xl">
        <p style={{ ...OVERLINE, color: 'var(--color-primary)' }}>{eyebrow}</p>
        <h2
          id={labelledBy}
          className="mt-2 font-bold tracking-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h2>
        <p className="mt-2 text-base" style={{ color: 'var(--color-ink-2)' }}>
          {subtitle}
        </p>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default DemoSection;
