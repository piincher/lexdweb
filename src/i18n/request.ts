import { getRequestConfig } from 'next-intl/server';
import { i18nConfig, type Locale } from './config';
import { humanizeMessageKey, loadMessages } from './messages';

/**
 * next-intl request configuration
 * Used for server-side translations
 */
export default getRequestConfig(async ({ locale, requestLocale }) => {
  // next-intl v4: the [locale] segment arrives via `requestLocale` (a promise);
  // `locale` is only set for explicit overrides like getTranslations({locale}).
  const requested = locale ?? (await requestLocale);

  // Fallback to default locale if invalid
  const validLocale = (requested && i18nConfig.locales.includes(requested as Locale))
    ? requested
    : i18nConfig.defaultLocale;

  // Dynamically import the messages for this locale
  const messages = await loadMessages(validLocale as Locale);

  return {
    locale: validLocale,
    messages,
    getMessageFallback: ({ namespace, key }) =>
      humanizeMessageKey(namespace ? `${namespace}.${key}` : key),
    timeZone: 'Africa/Douala',
    now: new Date(),
  };
});
