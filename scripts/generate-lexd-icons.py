"""Generate all LEXD website icons from the mobile app master icon.

Master: lexd/assets/images/lexd-icon.png (1024x1024 white wordmark on green).
Outputs into lexdweb/public/icons + lexdweb/src/app/favicon.ico.
"""
import os
from PIL import Image

ROOT = r"C:/Users/hp/Desktop/lexd"
MASTER = os.path.join(ROOT, "lexd/assets/images/lexd-icon.png")
ICONS = os.path.join(ROOT, "lexdweb/public/icons")
FAVICON_ICO = os.path.join(ROOT, "lexdweb/src/app/favicon.ico")
APPLE_TOUCH = os.path.join(ROOT, "lexdweb/public/apple-touch-icon.png")

master = Image.open(MASTER).convert("RGB")
GREEN = master.getpixel((5, 5))  # sample brand green from the master itself
print("sampled green:", GREEN)

ANY_SIZES = [16, 32, 72, 96, 114, 128, 144, 152, 180, 192, 384, 512]
MASKABLE_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

# --- Regular ("any") icons: straight resize of the full-bleed square master ---
for s in ANY_SIZES:
    img = master.resize((s, s), Image.LANCZOS)
    img.save(os.path.join(ICONS, f"icon-{s}x{s}.png"), optimize=True)
    print("any", s)

# --- Maskable icons: logo content scaled into the 80% safe zone on green ---
for s in MASKABLE_SIZES:
    canvas = Image.new("RGB", (s, s), GREEN)
    inner = master.resize((int(s * 0.76), int(s * 0.76)), Image.LANCZOS)
    off = (s - inner.width) // 2
    canvas.paste(inner, (off, off))
    canvas.save(os.path.join(ICONS, f"icon-{s}x{s}-maskable.png"), optimize=True)
    print("maskable", s)

# --- apple-touch-icon.png (180x180, no alpha per Apple spec) ---
master.resize((180, 180), Image.LANCZOS).save(APPLE_TOUCH, optimize=True)
print("apple-touch-icon")

# --- favicon.ico: multi-size ICO (16/32/48) ---
frames = [master.resize((s, s), Image.LANCZOS) for s in (16, 32, 48)]
frames[0].save(FAVICON_ICO, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)], append_images=frames[1:])
print("favicon.ico")

# --- badge-72x72.png: monochrome white wordmark on transparent (push badge) ---
src = Image.open(MASTER).convert("RGB")
px = src.load()
alpha = Image.new("L", src.size, 0)
ap = alpha.load()
for y in range(src.height):
    for x in range(src.width):
        r, g, b = px[x, y]
        # whiteness: how close the pixel is to the white wordmark vs green bg
        lum = (min(r, g, b) + (r + g + b) // 3) // 2
        ap[x, y] = 255 if lum > 200 else (lum if lum > 110 else 0)
bbox = alpha.getbbox()
alpha = alpha.crop(bbox)
# fit into 72x72 with padding, keep aspect
S = 72
pad = 6
w, h = alpha.size
scale = min((S - 2 * pad) / w, (S - 2 * pad) / h)
alpha = alpha.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
badge = Image.new("RGBA", (S, S), (255, 255, 255, 0))
white = Image.new("RGBA", alpha.size, (255, 255, 255, 255))
white.putalpha(alpha)
badge.paste(white, ((S - white.width) // 2, (S - white.height) // 2), white)
badge.save(os.path.join(ICONS, "badge-72x72.png"), optimize=True)
print("badge")

# --- high-contrast bitmap of the wordmark for SVG tracing (potrace input) ---
trace = Image.new("L", src.size, 255)  # white bg
tp = trace.load()
for y in range(src.height):
    for x in range(src.width):
        tp[x, y] = 255 - ap[x, y]  # letters -> black on white
trace = trace.crop(bbox)
# pad to square
side = max(trace.size) + 40
sq = Image.new("L", (side, side), 255)
sq.paste(trace, ((side - trace.width) // 2, (side - trace.height) // 2))
sq.save(os.path.join(ROOT, "lexdweb/scripts/_lexd-trace-input.pgm"))
print("trace input saved")
