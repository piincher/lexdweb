/**
 * Demo feature — typed simulated dataset
 *
 * All data is deterministic and translated via i18n keys; nothing here
 * talks to a backend. ETAs are expressed as minute offsets from "now"
 * so the countdowns are always live when the page is opened.
 */

export type ShipmentStatus = 'inTransit' | 'customs' | 'outForDelivery' | 'delivered' | 'delayed';
export type ShipmentMode = 'air' | 'sea';

export interface DemoShipment {
  id: string;
  code: string;
  originCode: string;
  destinationCode: string;
  status: ShipmentStatus;
  mode: ShipmentMode;
  /** Minutes from page-open until estimated arrival. */
  etaOffsetMinutes: number;
  /** 0–100 journey completion. */
  progress: number;
}

export const DEMO_SHIPMENTS: DemoShipment[] = [
  {
    id: 'shp-1',
    code: 'LX-2481',
    originCode: 'CAN',
    destinationCode: 'DLA',
    status: 'outForDelivery',
    mode: 'air',
    etaOffsetMinutes: 60 * 26 + 41,
    progress: 92,
  },
  {
    id: 'shp-2',
    code: 'LX-2477',
    originCode: 'SZX',
    destinationCode: 'DKR',
    status: 'customs',
    mode: 'air',
    etaOffsetMinutes: 60 * 71 + 18,
    progress: 74,
  },
  {
    id: 'shp-3',
    code: 'LX-2359',
    originCode: 'NING',
    destinationCode: 'ABJ',
    status: 'inTransit',
    mode: 'sea',
    etaOffsetMinutes: 60 * 24 * 11 + 60 * 9,
    progress: 48,
  },
];

export interface FeedEvent {
  id: string;
  /** i18n key under demo.feed.events */
  key: string;
  values: Record<string, string>;
  status: ShipmentStatus;
}

export const FEED_EVENTS: FeedEvent[] = [
  { id: 'ev-1', key: 'departedWarehouse', values: { code: 'LX-2486', city: 'Guangzhou' }, status: 'inTransit' },
  { id: 'ev-2', key: 'clearedCustoms', values: { code: 'LX-2477', city: 'Dakar' }, status: 'customs' },
  { id: 'ev-3', key: 'outForDelivery', values: { code: 'LX-2481', city: 'Douala' }, status: 'outForDelivery' },
  { id: 'ev-4', key: 'delivered', values: { code: 'LX-2470', city: 'Abidjan' }, status: 'delivered' },
  { id: 'ev-5', key: 'loadedContainer', values: { code: 'LX-2359', city: 'Ningbo' }, status: 'inTransit' },
  { id: 'ev-6', key: 'delayWeather', values: { code: 'LX-2352', city: 'Lomé' }, status: 'delayed' },
  { id: 'ev-7', key: 'arrivedHub', values: { code: 'LX-2486', city: 'Addis Ababa' }, status: 'inTransit' },
  { id: 'ev-8', key: 'delivered', values: { code: 'LX-2468', city: 'Conakry' }, status: 'delivered' },
];

export interface TimelineStep {
  id: string;
  /** i18n key under demo.timeline.steps */
  key: string;
  state: 'done' | 'current' | 'upcoming';
  /** i18n key under demo.timeline.times */
  timeKey: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  { id: 'tl-1', key: 'received', state: 'done', timeKey: 'mar02' },
  { id: 'tl-2', key: 'consolidated', state: 'done', timeKey: 'mar04' },
  { id: 'tl-3', key: 'departed', state: 'done', timeKey: 'mar06' },
  { id: 'tl-4', key: 'customs', state: 'current', timeKey: 'today' },
  { id: 'tl-5', key: 'outForDelivery', state: 'upcoming', timeKey: 'pending' },
  { id: 'tl-6', key: 'delivered', state: 'upcoming', timeKey: 'pending' },
];

export type RouteTrend = 'up' | 'down' | 'flat';

export interface TrendingRoute {
  id: string;
  originCode: string;
  destinationCode: string;
  mode: ShipmentMode;
  transitDays: number;
  pricePerKg: number;
  trend: RouteTrend;
  trendPct: number;
  shipmentsPerWeek: number;
}

export const TRENDING_ROUTES: TrendingRoute[] = [
  { id: 'rt-1', originCode: 'CAN', destinationCode: 'DLA', mode: 'air', transitDays: 7, pricePerKg: 5200, trend: 'down', trendPct: 4.2, shipmentsPerWeek: 38 },
  { id: 'rt-2', originCode: 'SZX', destinationCode: 'DKR', mode: 'air', transitDays: 8, pricePerKg: 5650, trend: 'flat', trendPct: 0.4, shipmentsPerWeek: 24 },
  { id: 'rt-3', originCode: 'NING', destinationCode: 'ABJ', mode: 'sea', transitDays: 32, pricePerKg: 1450, trend: 'down', trendPct: 2.1, shipmentsPerWeek: 12 },
  { id: 'rt-4', originCode: 'CAN', destinationCode: 'COO', mode: 'air', transitDays: 9, pricePerKg: 5900, trend: 'up', trendPct: 1.8, shipmentsPerWeek: 17 },
  { id: 'rt-5', originCode: 'YIW', destinationCode: 'CKY', mode: 'sea', transitDays: 35, pricePerKg: 1380, trend: 'down', trendPct: 3.3, shipmentsPerWeek: 9 },
];

export interface ProofItem {
  id: string;
  initials: string;
  /** i18n key under demo.proof.items */
  key: string;
  values: Record<string, string>;
}

export const PROOF_ITEMS: ProofItem[] = [
  { id: 'pf-1', initials: 'IT', key: 'booked', values: { name: 'Ibrahim T.', city: 'Douala', weight: '42 kg' } },
  { id: 'pf-2', initials: 'AK', key: 'received', values: { name: 'Aminata K.', city: 'Dakar', weight: '18 kg' } },
  { id: 'pf-3', initials: 'ON', key: 'paid', values: { name: 'Ousmane N.', city: 'Abidjan', weight: '96 kg' } },
  { id: 'pf-4', initials: 'FS', key: 'booked', values: { name: 'Fatou S.', city: 'Conakry', weight: '27 kg' } },
  { id: 'pf-5', initials: 'MD', key: 'received', values: { name: 'Moussa D.', city: 'Cotonou', weight: '61 kg' } },
];
