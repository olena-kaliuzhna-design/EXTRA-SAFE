# EXTRA SAFE Design System — пакет для Claude

Дизайн-система з Figma-файлу EXTRA SAFE (https://www.figma.com/design/5fZVCsxRa1gpL0bvZdPZ6u, сторінка «Styles»), зібрана так, щоб Claude брав усі стилі звідси.

## Що всередині
- `SKILL.md` — головна інструкція для Claude: бренд, кольори, шрифти, сітка, правила.
- `tokens/` — `tokens.css` (темна + світла тема, адаптивна типографіка DM Sans), `tokens.json`, `tailwind.preset.js`, `shadcn-theme.css`.
- `components/` — `es-base.css` (кнопки, поля, картки, бейджі, хедер, чат-бульбашки, модалка) + `GUIDE.md`.
- `examples/index.html` — сторінка-вітрина (відкрити в браузері, є перемикач теми).
- `assets/logo/` — логотипи, знак, іконки застосунку (SVG).
- `previews/` — скріншоти з Figma. `FIGMA-MAP.md` — ID вузлів у Figma.

## Як підключити до Claude
1. **Як Skill (рекомендовано):** Claude → Settings → Capabilities → Skills → Upload skill → завантажити `extrasafe-design-system.zip` (не розпаковувати).
2. **У репозиторії (Claude Code):** покласти папку в корінь проєкту і додати в `CLAUDE.md`:
   ```md
   ## Design system
   For any UI work use the EXTRA SAFE design system in `./extrasafe-design-system/`.
   Read `extrasafe-design-system/SKILL.md` first. Use only tokens from `tokens/tokens.css`
   (or `tokens/tailwind.preset.js` / `tokens/shadcn-theme.css`); never hardcode colours or font sizes.
   ```
3. **Разово в чаті:** прикріпити zip і написати «Використовуй цю дизайн-систему EXTRA SAFE».

## Важливо
- У Figma-файлі є лише **основа** (кольори, шрифти, тіні, сітки, логотип) — готових UI-компонентів там немає. Базові компоненти в `es-base.css` побудовані з токенів; якщо з’являться макети компонентів, їх варто додати.
- Палітра «Desktop old» у Figma — застаріла, у пакеті позначена як «не використовувати».
- Тема за замовчуванням темна; світла — `<html data-theme="light">`. Шрифт — DM Sans.
