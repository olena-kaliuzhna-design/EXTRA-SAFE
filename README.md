# EXTRA SAFE — Landing 4.0

Static HTML/CSS redesign of the extrasafe.chat homepage, built from the Landing 4.0 brief and the Figma file **"EXTRA SAFE — Landing 4.0"**. All copy follows the **"EXTRA SAFE — Homepage Mockup"** design (desktop + mobile boards).

No build step: open `index.html` in a browser, or publish the repo with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

## Structure

All files sit in the repo root (no folders), so they can be uploaded through the GitHub web interface as-is.

```
index.html        page markup, 10 sections + header/footer (header and footer copied 1:1 from www.extrasafe.chat)
tokens.css        design tokens (colors, type scale, spacing, radii, Dark/Light themes, breakpoints)
main.css          layout and components
main.js           header dropdowns, burger menu (<1280px), FAQ accordion
logo.svg          EXTRA SAFE logo
app-store.svg     App Store badge
google-play.svg   Google Play badge
```

## Sections

| # | Section | Theme |
|---|---------|-------|
| 01 | Hero — Send Tokenized Dollars in Chat (+ desktop-app product shot) | dark |
| 02 | Signature Flow — See Who You're Paying, Then Pay Them | light |
| 03 | Feature Row — Built-in Wallet | dark |
| 04 | Private Balances | light |
| 05 | Gift Link | dark |
| 06 | Security | light |
| 07 | Fees (Variant A for swapping) | dark |
| 08 | Proof + Community (stats, Get the app, Insiders Hub) | light |
| 09 | FAQ (5 questions) | dark |
| 10 | Final CTA — Download EXTRA SAFE | light |

Light/dark alternation is controlled by the `.theme-dark` / `.theme-light` class on each section. Each class redefines the semantic color variables (`--bg-page`, `--text-primary`, `--text-accent`, …) from `tokens.css`.

## Tokens (from the live site)

- Font: DM Sans (Google Fonts)
- Primary: `#5BC899`, page background `#202020`, media surface `#181818`
- Container: 1312px max, side padding 112px (desktop) / 48px (tablet) / 16px (mobile)
- Section padding: 120px / 96px / 64px
- Radius: buttons 36px, pills 9999px, cards 24px, media 16px

## Responsive behaviour

- **Header** (same as the live site): ≥1280px full navigation with Chat / Wallet / Resources dropdowns and Start a Meeting; below 1280px a burger menu with the same links, Start a Meeting and Download for Mac.
- **≥1200px**: two-column layouts.
- **768–1199px**: single column.
- **<768px**: mobile type scale; the Desktop badge is hidden; the hero shows the phone image instead of the desktop-app mock.

## To do

- [ ] Images are loaded from `https://www.extrasafe.chat/content-media/home/…`. Upload them to the repo root and update the `src` paths if the repo should be self-contained.
- [ ] Hero: add the real photo (Indian family, a real life moment) and the real desktop-app screenshot (chat with transfer card, ₹ INR toggle visible).
- [ ] Gift Link visual: replace the QR placeholder with a real QR code.
- [ ] Fill in the `href="#"` links: Learn more (Private Balances), Learn more about fees.
- [ ] Fees: Variant A is live. Variant B (0.25% EXTRA SAFE fee + 0.20% routing fee) is in an HTML comment in section 07.
