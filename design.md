# Design — LEXD Web

This is the active Hallmark system for the complete LEXD website. It supersedes
the rejected dispatch-board concept. Every route keeps the same information and
function, while the presentation follows this light Logistics Studio language.

## Genre

Modern-minimal with photographic warmth: confident, useful, human, and rooted
in real freight operations rather than an internal control-panel aesthetic.

## Macrostructure family

- Marketing pages: Split Studio — copy and real operational imagery share the
  canvas, alternating direction as the story develops.
- Service pages: Narrative Workflow — customer outcome first, then the actual
  sourcing, consolidation, transport, and delivery sequence.
- Route pages: Map / Diagram — the corridor and route logic organize the page.
- Content indexes: Ecosystem Index — featured guidance, categories, then recent
  articles without uniform card walls.
- Articles and legal pages: Magazine Long-Read — generous reading measure,
  understated local navigation, and typography-led hierarchy.
- Utility pages: Product Canvas — calculator, comparison, tracking, and verifier
  controls remain the visual focus.

## Theme

The exact handoff ramps remain canonical and may not be approximated.

- Paper: neutral-50 `#F6F8F7`
- Paper 2: neutral-100 `#ECF0EE`
- Ink: neutral-900 `#131A17`
- Muted ink: neutral-600 `#4A5A54`
- Rule: neutral-200 `#DCE3E0`
- Primary: green-500 `#007757`
- Primary hover/focus: green-600 `#00664B`
- Accent fill: amber-500 `#F5A524`
- Accent text on light surfaces: amber-700 `#996210`
- Deep green surface: green-900 `#022E22`

Amber-500 is fill-only with neutral-900 text. Amber text on light surfaces uses
amber-700 or darker. Legacy ChinaLink colors remain prohibited.

## Typography

- Display: Bricolage Grotesque, weight 550–750, normal style.
- Body: Manrope, weight 400–700.
- Operational metadata: Geist Mono, weight 500–650.
- Display tracking: -0.045em.
- Type scale anchor: `--text-display: clamp(3.25rem, 6vw + 1rem, 7rem)`.
- Chinese and Arabic fall back to locale-appropriate system glyph coverage while
  preserving the same size, weight, and spacing roles.

## Navigation and footer

- Navigation: a two-tier horizontal studio masthead. A slim green corridor bar
  carries context and preferences; the white navigation row carries the brand,
  main destinations, tools, and one WhatsApp action.
- Mobile navigation: compact masthead with a full-width disclosure panel.
- Footer: a green invitation block followed by a light service/contact index.
- No fixed sidebar, permanent dark rail, control-panel framing, or route-status
  decoration in the global chrome.

## Spacing

Use the named 4-point scale in `tokens.css`. Marketing sections use large,
uneven spacing to create editorial rhythm. Utility pages use tighter functional
spacing. Raw one-off spacing values are not introduced.

## Motion

- Reveal: opacity plus a short vertical translation on major photographic
  regions only.
- Interaction: color and one-pixel translation, 120–220 ms.
- Reduced motion: opacity-only, at most 150 ms.
- No perpetual movement, parallax, bounce, glow, or layout animation.

## Microinteractions stance

- Silent success; errors appear where the action occurred.
- Focus rings appear immediately.
- Image links reveal direction with a small arrow translation.
- Buttons use default, hover, focus, active, disabled, loading, error, and
  success states where the underlying component supports them.

## CTA voice

- Primary CTA: solid LEXD green, white text, concise action verb, 8px radius.
- Signal CTA: amber fill with neutral-900 text, at most one per viewport.
- Secondary CTA: transparent or paper surface with a neutral hairline.
- Clickable labels never wrap.

## Photography

- Use only real operational assets already owned by the project.
- Photography is cropped asymmetrically and paired with quiet captions.
- No invented stock scenes, fake customer logos, fake device frames, or
  fabricated metrics.
- Content and utility pages remain typography/function-led.

## What every page shares

- Exact LEXD ramps, Bricolage/Manrope type roles, 10px cards, 8px controls.
- Horizontal masthead, editorial invitation footer, visible focus indicators.
- Borders instead of decorative shadows.
- Plain-language headings; uppercase operational labels are exceptional.
- Amber footprint below five percent of each viewport.

## What pages may vary

- Image placement and crop on marketing pages.
- Workflow pacing on service pages.
- Corridor diagrams on route pages.
- Featured-story hierarchy on content indexes.
- Form/result proportions on calculators, quiz, tracking, and product checks.

## Exports

### tokens.css

```css
:root {
  --color-paper: #F6F8F7;
  --color-paper-2: #ECF0EE;
  --color-ink: #131A17;
  --color-ink-2: #4A5A54;
  --color-rule: #DCE3E0;
  --color-primary: #007757;
  --color-primary-hover: #00664B;
  --color-accent: #F5A524;
  --color-accent-ink: #131A17;
  --color-focus: #00664B;
  --font-display: var(--font-bricolage), "Bricolage Grotesque", sans-serif;
  --font-body: var(--font-manrope), "Manrope", sans-serif;
  --font-outlier: var(--font-geist-mono), "Geist Mono", monospace;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --text-sm: 0.875rem;
  --text-md: 1.125rem;
  --text-xl: 1.25rem;
  --text-display: clamp(3.25rem, 6vw + 1rem, 7rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-micro: 120ms;
  --dur-short: 220ms;
  --radius-card: 10px;
  --radius-input: 8px;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: #F6F8F7;
  --color-paper-2: #ECF0EE;
  --color-ink: #131A17;
  --color-primary-500: #007757;
  --color-primary-600: #00664B;
  --color-accent-500: #F5A524;
  --font-display: var(--font-bricolage), sans-serif;
  --font-body: var(--font-manrope), sans-serif;
  --font-outlier: var(--font-geist-mono), monospace;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --text-md: 1.25rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "#F6F8F7", "$type": "color" },
    "paper-2": { "$value": "#ECF0EE", "$type": "color" },
    "ink": { "$value": "#131A17", "$type": "color" },
    "primary": { "$value": "#007757", "$type": "color" },
    "accent": { "$value": "#F5A524", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Bricolage Grotesque", "$type": "fontFamily" },
    "body": { "$value": "Manrope", "$type": "fontFamily" },
    "outlier": { "$value": "Geist Mono", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1rem", "$type": "dimension" },
    "lg": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "2.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97% 0.006 160;
  --foreground: 19% 0.018 160;
  --card: 94% 0.009 160;
  --card-foreground: 19% 0.018 160;
  --primary: 50% 0.125 160;
  --primary-foreground: 98% 0.004 160;
  --secondary: 94% 0.009 160;
  --secondary-foreground: 34% 0.025 160;
  --muted: 89% 0.012 160;
  --muted-foreground: 45% 0.022 160;
  --accent: 76% 0.145 75;
  --accent-foreground: 19% 0.018 160;
  --border: 89% 0.012 160;
  --input: 89% 0.012 160;
  --ring: 43% 0.112 160;
  --radius: 0.625rem;
}
```
