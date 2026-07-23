#!/usr/bin/env python3
"""Pass 2: leftovers from migrate-mali-to-cameroon.py.

Handles:
- lowercase SEO keyword phrases (chine mali -> chine cameroun, etc.)
- code identifiers (MALI -> CAMEROON, .mali -> .cameroon, 'mali' -> 'cameroon')
- hero-animation ids (bamako -> douala)
- Afrique de l'Ouest variants incl. escaped apostrophe
- west africa (any case) -> africa
Reports any remaining \\bmali\\b / +223 for manual review.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAN_DIRS = ["src", "public", "scripts", "terms"]
EXTS = {".ts", ".tsx", ".json", ".md", ".js", ".mjs", ".xml", ".html", ".txt"}

# Ordered longest-first. (pattern, replacement, flags)
PHRASES = [
    # French keyword phrases -> cameroun / douala
    ("chine mali", "chine cameroun"),
    ("Chine Mali", "Chine Cameroun"),
    ("chine bamako", "chine douala"),
    ("transitaire bamako", "transitaire douala"),
    ("cargo aerien bamako", "cargo aerien douala"),
    ("cargo aérien bamako", "cargo aérien douala"),
    ("logistique mali", "logistique cameroun"),
    ("achat alibaba mali", "achat alibaba cameroun"),
    ("forum importateurs mali", "forum importateurs cameroun"),
    ("partage conteneur bamako", "partage conteneur douala"),
    ("importateurs bamako", "importateurs douala"),
    # English keyword phrases -> cameroon / douala
    ("discussion group mali", "discussion group cameroon"),
    ("container sharing mali", "container sharing cameroon"),
    ("bamako importers network", "douala importers network"),
    # Afrique de l'Ouest variants (escaped, straight, curly apostrophe)
    ("Afrique de l\\'Ouest", "Afrique"),
    ("Afrique de l'Ouest", "Afrique"),
    ("Afrique de l’Ouest", "Afrique"),
    ("afrique de l'ouest", "afrique"),
    # West Africa(any case, optional -n)
    (re.compile(r"\bWest Africa(n)?\b"), lambda m: "Africa" + (m.group(1) or "")),
    (re.compile(r"\bwest africa(n)?\b"), lambda m: "africa" + (m.group(1) or "")),
    (re.compile(r"\bWEST AFRICA(N)?\b"), lambda m: "AFRICA" + (m.group(1) or "")),
]

# Identifier replacements (regex, replacement)
IDENTIFIERS = [
    (re.compile(r"\bMALI_1\b"), "CAMEROON_1"),
    (re.compile(r"\bMALI_2\b"), "CAMEROON_2"),
    (re.compile(r"\bMALI\b"), "CAMEROON"),
    (re.compile(r"\.mali\b"), ".cameroon"),
    (re.compile(r"'mali'"), "'cameroon"),
    (re.compile(r'"mali"'), '"cameroon"'),
    (re.compile(r"\bmali:"), "cameroon:"),
]

# Generic city sweep after phrases (ids like 'land-dakar-bamako')
CITY_SWEEP = [
    ("bamako", "douala"),
    ("Bamako", "Douala"),
    ("BAMAKO", "DOUALA"),
]

LEFTOVER = re.compile(r"\bmali\b|\bMali\b|\+223", re.IGNORECASE)


def iter_files():
    for d in SCAN_DIRS:
        base = os.path.join(ROOT, d)
        if not os.path.isdir(base):
            continue
        for dirpath, dirnames, filenames in os.walk(base):
            dirnames[:] = [x for x in dirnames if x not in ("node_modules", ".next", ".git")]
            for fn in filenames:
                if os.path.splitext(fn)[1].lower() in EXTS:
                    yield os.path.join(dirpath, fn)


def main():
    changed = []
    leftovers = []
    for path in iter_files():
        with open(path, "rb") as f:
            raw = f.read()
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            continue
        orig = text
        for pat, rep in PHRASES:
            if isinstance(pat, str):
                text = text.replace(pat, rep)
            else:
                text = pat.sub(rep, text)
        for pat, rep in IDENTIFIERS:
            text = pat.sub(rep, text)
        for pat, rep in CITY_SWEEP:
            text = text.replace(pat, rep)
        if text != orig:
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(text)
            changed.append(os.path.relpath(path, ROOT))
        for i, line in enumerate(text.splitlines(), 1):
            if LEFTOVER.search(line):
                leftovers.append(f"{os.path.relpath(path, ROOT)}:{i}: {line.strip()[:160]}")
    print(f"{len(changed)} files updated")
    for c in changed:
        print(f"  {c}")
    print(f"\n{len(leftovers)} leftover lines for manual review:")
    for l in leftovers:
        print(f"  {l}")


if __name__ == "__main__":
    sys.exit(main())
