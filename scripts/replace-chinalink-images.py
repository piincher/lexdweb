#!/usr/bin/env python3
"""Replace remaining chinalinkexpress CDN images with local LEXD cargo photos."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def load(rel):
    with open(os.path.join(ROOT, rel), 'rb') as f:
        return f.read().decode('utf-8')

def save(rel, text):
    with open(os.path.join(ROOT, rel), 'w', encoding='utf-8', newline='') as f:
        f.write(text)

# 1. TestimonialsSection — replace all 6 chinalinkexpress URLs
rel = 'src/views/landing/components/TestimonialsSection.tsx'
text = load(rel)
orig = text
# 3 testimonial avatars + 3 industry cards
replacements = [
    ("'https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/tech.jpg'", "'/images/cargo/warehouse-douala-cbm.jpg'"),
    ("'https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/retails.jpg'", "'/images/cargo/cargo-packages-bubble-stacked.jpg'"),
    ("'https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/auto%20part.jpg'", "'/images/cargo/cargo-packages-bubble-vertical.jpg'"),
    ('"https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/retails.jpg"', "'/images/cargo/cargo-packages-bubble-stacked.jpg'"),
    ('"https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/tech.jpg"', "'/images/cargo/cargo-cartons-china.jpg'"),
    ('"https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/auto%20part.jpg"', "'/images/cargo/cargo-bales-warehouse.jpg'"),
]
for old, new in replacements:
    text = text.replace(old, new)
if text != orig:
    save(rel, text)
    print(f'updated {rel}')

# 2. AppPreviewSection — replace 2 app screenshots with one cargo photo, make grid single-col
rel = 'src/views/landing/components/AppPreviewSection.tsx'
text = load(rel)
orig = text
# Replace SCREENSHOTS with one local image
old_block = '''const SCREENSHOTS = [
  {
    src: 'https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/app-screen%20(1).jpg',
    alt: 'LEXD App — Tracking',
  },
  {
    src: 'https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/app-screen%20(2).jpg',
    alt: 'LEXD App — Notifications',
  },
];'''
new_block = '''const SCREENSHOTS = [
  {
    src: '/images/cargo/cargo-packages-bubble-stacked.jpg',
    alt: 'LEXD operations — cargo packed for Cameroon',
  },
];'''
text = text.replace(old_block, new_block)
text = text.replace('className="grid grid-cols-2 gap-4"', 'className="grid grid-cols-1 gap-4"')
if text != orig:
    save(rel, text)
    print(f'updated {rel}')

# 3. FAQSection — replace support image
rel = 'src/views/landing/components/FAQSection.tsx'
text = load(rel)
orig = text
text = text.replace(
    'src="https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com/airshipping/customer-support.png"',
    'src="/images/cargo/cargo-bales-warehouse.jpg"'
)
if text != orig:
    save(rel, text)
    print(f'updated {rel}')

# 4. Footer — remove QR code block (lines ~186-198)
rel = 'src/views/landing/components/Footer.tsx'
text = load(rel)
orig = text
start = text.find('            <motion.div \r\n              className="mt-6 bg-white rounded-2xl p-3"')
if start == -1:
    start = text.find('            <motion.div \n              className="mt-6 bg-white rounded-2xl p-3"')
if start != -1:
    end = text.find('            </motion.div>', start + 1)
    if end != -1:
        text = text[:start] + text[end + len('            </motion.div>'):]
if text != orig:
    save(rel, text)
    print(f'updated {rel}')

print('done')
