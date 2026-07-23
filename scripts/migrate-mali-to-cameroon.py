"""Mali -> Cameroon content migration for lexdweb.

Ordered rules:
1. URL/slug fragments (already-renamed dirs must match references)
2. French grammar forms -> Cameroun
3. City/code facts (Bamako -> Douala, BKO -> DLA)
4. West Africa -> Africa (en + fr)
5. Remaining bare "Mali" -> Cameroun or Cameroon by per-line language heuristic
"""
import io
import os
import re

ROOTS = ["src", "public", "scripts", "terms"]
EXTS = (".ts", ".tsx", ".json", ".md", ".js", ".mjs", ".xml", ".html", ".txt")

SLUG_RULES = [
    ("cargo-chine-mali", "cargo-chine-cameroun"),
    ("china-to-mali", "china-to-cameroon"),
    ("achat-alibaba-mali", "achat-alibaba-cameroun"),
    ("acheter-alibaba-mali", "acheter-alibaba-cameroun"),
    ("comment-importer-chine-mali", "comment-importer-chine-cameroun"),
    ("conteneur-chine-mali", "conteneur-chine-cameroun"),
    ("douane-mali-import-chine", "douane-cameroun-import-chine"),
    ("depuis-le-mali", "depuis-le-cameroun"),
    ("au-mali", "au-cameroun"),
    ("chine-mali", "chine-cameroun"),
    ("-mali", "-cameroun"),
]

FRENCH_RULES = [
    (r"\bau Mali\b", "au Cameroun"),
    (r"\bdu Mali\b", "du Cameroun"),
    (r"\ble Mali\b", "le Cameroun"),
    (r"\bMaliens\b", "Camerounais"),
    (r"\bmaliens\b", "camerounais"),
    (r"\bMalienne\b", "Camerounaise"),
    (r"\bmalienne\b", "camerounaise"),
    (r"\bMalien\b", "Camerounais"),
    (r"\bmalien\b", "camerounais"),
]

FACT_RULES = [
    (r"\bBamako\b", "Douala"),
    (r"Kalaban Coura", "Akwa"),
    (r"\bBKO\b", "DLA"),
]

REGION_RULES = [
    (r"\bWest African\b", "African"),
    (r"\bWest Africa\b", "Africa"),
    (r"Afrique de [lL]['’]Ouest", "Afrique"),
    (r"\bouest-africaines?\b", "africaines"),
    (r"\bouest-africains?\b", "africains"),
    (r"\bOuest-africaines?\b", "Africaines"),
    (r"\bOuest-africains?\b", "Africains"),
]

FR_HINT = re.compile(
    r"\b(le|la|les|des|une|aux|pour|vous|nous|depuis|vers|avec|dans|votre|vos|notre|chez|sur|sont|être|afin|lorsque|également|entre|après|avant|tout|tous|très|plus|moins|sans|arnaque|douane|fret|colis|expédition|livraison|importateurs?)\b",
    re.IGNORECASE,
)


def classify(line: str) -> str:
    return "Cameroun" if FR_HINT.search(line) else "Cameroon"


def transform(text: str) -> str:
    for old, new in SLUG_RULES:
        text = text.replace(old, new)
    for pattern, new in FRENCH_RULES + FACT_RULES + REGION_RULES:
        text = re.sub(pattern, new, text)
    out_lines = []
    for line in text.split("\n"):
        if "Mali" in line:
            line = re.sub(r"\bMALI\b", lambda _: classify(line).upper(), line)
            line = re.sub(r"\bMali\b", lambda _: classify(line), line)
        out_lines.append(line)
    return "\n".join(out_lines)


changed = []
for root in ROOTS:
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in ("node_modules", ".next", ".git")]
        for name in filenames:
            if not name.endswith(EXTS):
                continue
            path = os.path.join(dirpath, name)
            with io.open(path, encoding="utf-8") as f:
                original = f.read()
            updated = transform(original)
            if updated != original:
                with io.open(path, "w", encoding="utf-8", newline="") as f:
                    f.write(updated)
                changed.append(path)

print(f"{len(changed)} files updated")
for p in changed:
    print(" ", p)
