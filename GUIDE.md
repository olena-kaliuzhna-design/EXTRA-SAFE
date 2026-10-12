# EXTRA SAFE — usage guide for components

The Figma file defines **foundations only** (no buttons/inputs/cards as Figma components). The recipes in `es-base.css`
are derived from the Figma tokens so every screen stays on-brand. Class → token mapping:

| Recipe | Class | Built from |
|---|---|---|
| Button | `.es-btn` + `--primary` / `--secondary` / `--outline` / `--ghost` / `--destructive`, sizes `--lg` (56, Buttons/Large 18) · default (48, Buttons/Medium 16) · `--sm` (36, Buttons/Small 14) | primary-main/light/dark, button-light/dark, border-secondary, icon-hover, destructive-*, radius 3, shadow "Buttons" |
| Icon button | `.es-icon-btn` | icon-primary, icon-hover, icon-disabled |
| Link | `.es-link`, `.es-link--sm` | Link Medium / Link Small, primary-main |
| Input | `.es-field` > `.es-field__label` + `.es-input` + `.es-field__hint`; `.is-error` | input, border-secondary, ring + alpha-green focus halo, destructive-main + alpha-red, helper, radius 3 |
| Card | `.es-card`, `--glow` (shadow "Card"), `--gradient-border` (paint "Stroke") | card-secondary, border, radius 4 |
| Badge | `.es-badge` (+ `--blue`, `--red`, `--neutral`) | overline style, alpha-green / secondary alpha / alpha-red |
| Header | `.es-header` | background, shadow "header", logo |
| Chat bubbles | `.es-chat` > `.es-msg--in` / `.es-msg--out`, `.es-msg__nick`, `.es-msg__time` | card-secondary + shadow "messege left", primary-main, Nickname 2, body2/app, caption-app |
| Modal / cookie banner | `.es-modal`, `.es-overlay` | card-secondary, radius 5, shadow "Cookie", Modal window text style, alpha |
| Background | `.es-atmosphere` | the "1 messages view" blurred blue/green glow |

Rules of thumb
- Spacing: use multiples of 4 (4, 8, 12, 16, 24, 32, 40, 48, 64, 80). Section vertical padding on landing: 80 (lg+), 48 (md), 40 (sm).
- Corner radius by size: chips/pills full · small controls 8 · buttons & inputs 12 · cards 16 · modals/large panels 24.
- Never put white text on `--primary-main`; use `--primary-foreground`.
- Headline accent: wrap 1–2 words in `.text-gradient` (blue→green) sparingly.
