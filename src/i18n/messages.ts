import type { Locale } from './config';

export type AppMessages = Record<string, unknown>;

function isMessageGroup(value: unknown): value is AppMessages {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function mergeMessages(fallback: AppMessages, localized: AppMessages): AppMessages {
  const merged: AppMessages = { ...fallback };

  for (const [key, value] of Object.entries(localized)) {
    const fallbackValue = fallback[key];
    merged[key] = isMessageGroup(fallbackValue) && isMessageGroup(value)
      ? mergeMessages(fallbackValue, value)
      : value;
  }

  return merged;
}

export async function loadMessages(locale: Locale): Promise<AppMessages> {
  const fallback = (await import('./locales/en/common.json')).default as AppMessages;
  if (locale === 'en') return fallback;

  const localized = (await import(`./locales/${locale}/common.json`)).default as AppMessages;
  return mergeMessages(fallback, localized);
}

export function humanizeMessageKey(path: string): string {
  const segments = path.split('.').filter(Boolean);
  const last = segments.at(-1) || 'Message';
  const genericLeaf = /^(title|description|label|text|message|heading)$/i.test(last);
  const source = genericLeaf && segments.length > 1
    ? `${segments.at(-2)} ${last}`
    : last;

  const words = source
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return words ? words.charAt(0).toUpperCase() + words.slice(1) : 'Message';
}
