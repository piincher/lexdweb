'use client';

import type { ComponentProps } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { humanizeMessageKey } from '@/i18n/messages';

type ProviderProps = ComponentProps<typeof NextIntlClientProvider>;

export function HumanReadableIntlProvider(props: ProviderProps) {
  return (
    <NextIntlClientProvider
      {...props}
      getMessageFallback={({ namespace, key }) =>
        humanizeMessageKey(namespace ? `${namespace}.${key}` : key)
      }
    />
  );
}
