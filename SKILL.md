---
name: extrasafe-design-system
description: EXTRA SAFE brand and design system (colours, DM Sans typography, dark/light themes, gradients, shadows, grids, logo) extracted from the EXTRA SAFE Figma styles file. Use whenever building or editing anything for EXTRA SAFE / EXTRA SAFE.chat — website, landing page, web or mobile app screens, banners, emails, presentations — or when the user mentions EXTRA SAFE, its brand, styles or Figma.
---

# EXTRA SAFE Design System

Extracted from the Figma file **"Web, Landing, App (Copy)"** — https://www.figma.com/design/5fZVCsxRa1gpL0bvZdPZ6u (page "Styles").
This package is the source of truth for EXTRA SAFE visuals. Never invent colours, fonts, radii or shadows — use the tokens.

## Files

| Path | What it is |
|---|---|
| `tokens/tokens.css` | **Start here.** CSS variables: primitive palette, semantic dark/light tokens, radii, shadows, gradients, grid, responsive typography + `.text-*` classes |
| `tokens/tokens.json` | Same tokens as JSON (Style Dictionary / native apps). Also contains the legacy "Desktop old" palette marked DO-NOT-USE |
| `tokens/tailwind.preset.js` | Tailwind preset pointing at the CSS variables |
| `tokens/shadcn-theme.css` | Ready shadcn/ui theme (HSL variables) — the Figma token names follow shadcn conventions |
| `components/es-base.css` | Base UI recipes built from the tokens: buttons, inputs, cards, badges, header, chat bubbles, modal |
| `components/GUIDE.md` | How to use each token group + the recipes, with rules |
| `examples/index.html` | Live showcase of tokens and recipes, both themes |
| `assets/logo/*.svg` | Logo (horizontal, mono, EXTRA SAFE.chat), mark, app icons |
| `previews/*.png` | Screenshots of the Figma style sheets |
| `FIGMA-MAP.md` | Figma node IDs (for the Figma MCP) |

## How to use

1. Load DM Sans: `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">`.
2. Include `tokens/tokens.css` (and `components/es-base.css` for plain HTML). In Tailwind projects use `tailwind.preset.js`; with shadcn/ui paste `shadcn-theme.css` into `globals.css`.
3. **Dark theme is the default** (Figma mode "Dark theme"). Light: `data-theme="light"` on `<html>`. Always use semantic tokens (`--background`, `--foreground`, `--primary-main`, `--border` …) in UI, not primitives.
4. Typography is responsive by breakpoint via CSS variables — use `.text-h1`, `.text-body1` … (or `var(--text-h1-size)`), don't hand-write font sizes.
5. Inside the messaging **app** (EXTRA SAFE.chat) use the fixed `*-app` text styles (`.text-h1-app`, `.text-body2-app`, `.text-caption-app`, nicknames); on the **website/landing** use the responsive ones.
6. If the Figma MCP is connected you can inspect nodes listed in `FIGMA-MAP.md`.

## Brand essentials

- **Name & logo:** "EXTRA SAFE" (product: EXTRA SAFE.chat). Logo = shield-shaped speech-bubble mark with a vertical **blue → green gradient** (`#2F64D1/#3169CF` → `#5CC99A/#5AC59C`) + uppercase wordmark (`#1F1F1F` on light, white on dark). Use files from `assets/logo/`; never redraw or recolour the gradient. App icon = mark on `#111111` rounded square (radius ≈ 17 % of size).
- **Core colours:** Green `#5CC99A` (primary / CTA / focus), Blue `#2F64D1` (secondary brand), Dark `#1F1F1F–#202020`, Grey `#3A3C3F`, White. Brand gradient blue→green.
- **Mood:** dark, calm, secure messenger. Dark charcoal surfaces (`#202020`, cards `#262626`), soft green accents, atmospheric blurred blue/green glow backgrounds (`--bg-atmosphere`).
- **Font:** DM Sans only. Weights used: 300 (app body), 400, 500, 600.
- **Radii:** 4 · 8 · 12 · 16 · 24 (`--radius-1…5`). Buttons/inputs 12, cards 16, modals 24, pills full.

### Semantic colours (Desktop new) — dark → light

| Token | Dark | Light | Use |
|---|---|---|---|
| `--background` | #202020 | #F2F2F2 | page |
| `--background-secondary` | #181818 | #F3F3F3 | sidebars, sections |
| `--foreground` | #FFFFFF | #1F1F1F | text |
| `--card-secondary` | #262626 | #FFFFFF | cards / panels |
| `--card-dark` / `--card-light` / `--card-main` | #3B3B3B / #545454 / #6E6E6E | #F1F1F1 / #E4E4E4 / #D6D6D6 | nested surfaces, muted fills |
| `--card-foreground` | #FFFFFF | #454545 | text on cards |
| `--primary-main` / `-light` / `-dark` | #5CC99A / #3FBF88 / #5CC99A | #92E9C4 / #3FBF88 / #5EC89A | CTA default / hover / pressed |
| `--primary-foreground` | #202020 | #202020 | text on green |
| `--secondary-main` / `-light` / `-dark` | #82A2E3 / #6B8FDA / #4D77CE | same | blue accents |
| `--blue-500` | #2F64D1 | #2F64D1 | brand blue |
| `--destructive-main` / `-light` / `-dark` | #D32C3A / #DA4F5B / #941F29 | #E23C3F / … | errors |
| `--border` / `--border-secondary` | #454545 / #686868 | #E4E4E4 / #D9D9D9 | borders |
| `--input` | #5A5A5A | #CDCACA | input borders |
| `--ring` | #5CC99A | #57BD91 | focus |
| `--button-light` / `--button-dark` | #323232 / #282828 | #FFFFFF / #E4E4E4 | secondary buttons |
| `--icon-primary` / `-secondary` / `-on-color` / `-disabled` | #F1F1F1 / #535353 / #202020 / #3F3F3F | #737373 / #8E8E8E / #F2F2F2 / #949494 | icons |
| `--icon-hover` | #404040 | #E2E2E2 | icon-button hover bg |
| `--helper`, `--muted-foreground` | #777777, #535353 | #909090, #A5A5A5 | hints, secondary text |
| `--popover` | #929292 | #B7B7B7 | tooltips |
| `--alpha`, `--alpha-white`, `--alpha-green`, `--alpha-red` | overlays & tinted backgrounds | | |

Primitive scales (100–1000 + alpha 10): Primary (green), Secondary (blue), Neutral, Grey, Red, Green (success `#1FC16B`), Blue (info `#379BF7`). See `tokens.css`.

### Typography (DM Sans) — breakpoints xs <360 · sm ≥360 · md ≥768 · lg 1024–1531 · xl ≥1532

| Class | xs | sm | md | lg | xl | Weight |
|---|---|---|---|---|---|---|
| `h1` | 24/32 | 28/36 | 32/40 | 48/62 | 58/70 | 600 |
| `h2` | 20/28 | 22/30 | 28/36 | 36/47 | 48/50 | 600 |
| `h3` | 17/24 | 19/26 | 22/30 | 28/36 | 36/44 | 600 |
| `h4` | 16/24 | 17/24 | 19/26 | 22/30 | 28/36 | 500→600 |
| `subtitle1` | 14/20 | 15/22 | 16/24 | 18/26 | 20/28 | 500 (xl 600) |
| `subtitle2` | 13/18 | 14/20 | 15/22 | 16/24 | 18/26 | 500 |
| `body1` | 16/24 | 17/24 | 18/28 | 20/30 | 24/34 | 400 |
| `body2` | 14/18 | 15/20 | 16/22 | 18/24 | 20/26 | 400 |
| `body3` | 12/18 | 13/20 | 14/20 | 15/22 | 16/24 | 400 |
| `button1` | 16/22 | 17/24 | 18/26 | 19/28 | 20/30 | 500 |
| `button2` | 12/18 | 13/20 | 15/22 | 16/24 | 18/26 | 500 |
| `modal-title` | 20/24 | 22/26 | 24/28 | 26/32 | 26/32 | 500→600 |

Fixed styles: `caption` 12/16 (+0.4 px) · `overline` 12/16 UPPERCASE +1 px · `button-large/medium/small` 18/16/14 Medium · `link-medium/small` 16/14 underlined · `nickname-1/2/3` 16/14/12 SemiBold 160 % · `banner` 109/136 SemiBold.
App styles (160 % / 150 % line-height): `h1-app` 35 · `h2-app` 32 · `h3-app` 24 · `h4-app` 20 · `subtitle1-app` 18 · `subtitle2-app` 16 · `body1-app` 18 · `body2-app` 16 Light · `body3-app` 14 Light · `caption-app` 12 Light.

### Layout grid (Landing page grids)

sm ≥360: 4 col, gutter 8, margin 24 · md ≥768: 8 col, 24, 40 · lg ≥1024: 12 col, 24, 80 · xl ≥1532: 12 × 64 px, gutter 32, centred (1120) · 2xl: 12 × 80 px, gutter 32, centred (1312). Use `.es-container` / `.es-grid`.

### Effects

`--shadow-header` (sticky header) · `--shadow-card` (soft green glow) · `--shadow-feedback` · `--shadow-cookie` (modals/banners) · `--shadow-button` · `--shadow-message-left` (incoming chat bubble) · `--shadow-nickname`.
Gradients: `--gradient-brand` (blue→green, vertical), `--gradient-logo` (horizontal), `--gradient-red` (orange→red), `--gradient-stroke` (green fading border), `--gradient-background`, `--bg-atmosphere` (blurred blue/green glow on #1F1F1F — the app/landing background).

## Rules

- One green primary CTA per view; secondary actions use `secondary`/`outline`/`ghost` buttons.
- Green `--primary-main` is for actions, focus and success accents; blue is supporting (links in chat, nicknames, info). Red only for errors/destructive actions.
- Text on green/primary = `--primary-foreground` (#202020), not white.
- Green **text** (links, badges) uses `--primary-light` (#3FBF88): in the light theme `--primary-main` is #92E9C4, too pale for text on white.
- Keep both themes working (`data-theme="light"`).
- Ignore anything named "Desktop old" / "Old/…" in Figma — legacy palette, deprecated.
- Components: the Figma file has **no UI component designs**, only foundations. `components/es-base.css` gives consistent recipes built from the tokens; follow them, and if the user provides real component designs later, those take precedence.
