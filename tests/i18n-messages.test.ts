import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { humanizeMessageKey, loadMessages } from '../src/i18n/messages';

const locales = ['en', 'fr', 'zh', 'ar'] as const;

test('locale messages contain valid named ICU placeholders', async () => {
  for (const locale of locales) {
    const raw = await readFile(
      new URL(`../src/i18n/locales/${locale}/common.json`, import.meta.url),
      'utf8'
    );

    assert.doesNotMatch(raw, /\{\{[^}]+\}\}/, `${locale} contains double-brace placeholders`);
    assert.doesNotMatch(raw, /\{\}/, `${locale} contains unnamed placeholders`);
  }
});

test('incomplete locales inherit readable English messages', async () => {
  const english = await loadMessages('en');
  const chinese = await loadMessages('zh');

  assert.deepEqual(
    (chinese.comparison as Record<string, unknown>).meta,
    (english.comparison as Record<string, unknown>).meta
  );
});

test('unexpected message keys become human-readable labels', () => {
  assert.equal(
    humanizeMessageKey('pricing.seaCalculator.minCBM.description'),
    'Min CBM description'
  );
  assert.equal(humanizeMessageKey('pricing.unknownDeliveryWindow'), 'Unknown Delivery Window');
});
