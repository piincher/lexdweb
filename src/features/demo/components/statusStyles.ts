/**
 * Shared status → token mapping for the demo feature.
 * Rails and chips use CSS variables so they adapt to dark mode.
 */
import type React from 'react';
import type { ShipmentStatus } from '../data/demoData';

export interface StatusStyle {
  rail: string;
  chipBg: string;
  chipText: string;
}

export const STATUS_STYLES: Record<ShipmentStatus, StatusStyle> = {
  inTransit: {
    rail: 'var(--color-info)',
    chipBg: 'color-mix(in srgb, var(--color-info) 12%, transparent)',
    chipText: 'var(--color-info-dark)',
  },
  customs: {
    rail: 'var(--color-accent)',
    chipBg: 'color-mix(in srgb, var(--color-accent) 16%, transparent)',
    chipText: 'var(--color-accent-dark)',
  },
  outForDelivery: {
    rail: 'var(--color-primary)',
    chipBg: 'var(--color-primary-50)',
    chipText: 'var(--color-primary-700)',
  },
  delivered: {
    rail: 'var(--color-success)',
    chipBg: 'var(--color-primary-50)',
    chipText: 'var(--color-success-dark)',
  },
  delayed: {
    rail: 'var(--color-error)',
    chipBg: 'color-mix(in srgb, var(--color-error) 10%, transparent)',
    chipText: 'var(--color-error-dark)',
  },
};

export const OVERLINE: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};
