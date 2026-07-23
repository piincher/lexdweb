#!/usr/bin/env python3
"""Pass 3: native-script zh/ar translations + terms md + doc examples + placeholders."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (relative path, [(old, new), ...])
EDITS = {
    "src/i18n/locales/zh/common.json": [
        ("巴马科", "杜阿拉"),   # Bamako -> Douala
        ("西非法郎", "中非法郎"),  # West African franc -> Central African franc
        ("西非", "非洲"),        # West Africa -> Africa
        ("马里", "喀麦隆"),      # Mali -> Cameroon
        ('"phonePlaceholder": "+223 XX XX XX XX"', '"phonePlaceholder": "+237 6XX XX XX XX"'),
    ],
    "src/i18n/locales/ar/common.json": [
        ("باماكو", "دوالا"),          # Bamako -> Douala
        ("فرنك غرب أفريقي", "فرنك وسط أفريقي"),  # West African franc -> Central African franc
        ("غرب أفريقيا", "أفريقيا"),    # West Africa -> Africa
        ("غرب افريقيا", "أفريقيا"),
        ("مالي", "الكاميرون"),         # Mali -> Cameroon
        ('"phonePlaceholder": "+223 XX XX XX XX"', '"phonePlaceholder": "+237 6XX XX XX XX"'),
    ],
    "src/i18n/locales/en/common.json": [
        ('"phonePlaceholder": "+223 XX XX XX XX"', '"phonePlaceholder": "+237 6XX XX XX XX"'),
    ],
    "src/i18n/locales/fr/common.json": [
        ('"phonePlaceholder": "+223 XX XX XX XX"', '"phonePlaceholder": "+237 6XX XX XX XX"'),
    ],
    "src/lib/wasender/README.md": [
        ("+22378901234", "+237698765432"),
    ],
    "src/features/import-quiz/types/guide.ts": [
        ('"+223 **** 1234"', '"+237 **** 1234"'),
    ],
    "terms/SUCCESS_METRICS_KPIS.md": [
        ("douane mali", "douane cameroun"),
        ("import + product + mali", "import + product + cameroun"),
        ("douane + mali", "douane + cameroun"),
    ],
    "terms/VIDEO_CONTENT_SCRIPTS.md": [
        ("business import mali", "business import cameroun"),
    ],
}

for rel, pairs in EDITS.items():
    path = os.path.join(ROOT, rel)
    if not os.path.isfile(path):
        print(f"MISSING: {rel}")
        continue
    with open(path, "rb") as f:
        text = f.read().decode("utf-8")
    orig = text
    for old, new in pairs:
        text = text.replace(old, new)
    if text != orig:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(text)
        print(f"updated: {rel}")
    else:
        print(f"no change: {rel}")
