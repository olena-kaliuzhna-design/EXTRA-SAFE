# EXTRA SAFE — Landing 4.0

Static HTML/CSS redesign of the extrasafe.chat homepage, built from the Landing 4.0 brief and the Figma file **"EXTRA SAFE — Landing 4.0"**.

No build step: open `index.html` in a browser, or publish the repo with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

## Structure

All files sit in the repo root (no folders), so they can be uploaded through the GitHub web interface as-is.

```
index.html        page markup, 10 sections + header/footer
tokens.css        design tokens (colors, type scale, spacing, radii, Dark/Light themes, breakpoints)
main.css          layout and components
main.js           sticky header state, mobile menu, FAQ accordion
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
| 07 | Fees (Variant A) | dark |
| 08 | Proof Strip + Insiders Hub | light |
| 09 | FAQ (15 questions) | dark |
| 10 | Final CTA — Download EXTRA SAFE | light |

Light/dark alternation is controlled by the `.theme-dark` / `.theme-light` class on each section. Each class redefines the semantic color variables (`--bg-page`, `--text-primary`, `--text-accent`, …) from `tokens.css`.

## Tokens (from the live site)

- Font: DM Sans (Google Fonts)
- Primary: `#5BC899`, page background `#202020`, media surface `#181818`
- Container: 1312px max, side padding 112px (desktop) / 48px (tablet) / 16px (mobile)
- Section padding: 120px / 96px / 64px
- Radius: buttons 36px, pills 9999px, cards 24px, media 16px

## Responsive behaviour

- **≥1200px**: two-column layouts, full navigation.
- **768–1199px**: single column, burger menu.
- **<768px**: mobile type scale; header stays pinned with an always-visible **Get the App** button; the Desktop badge and QR code are hidden; the hero shows the phone image instead of the desktop-app mock.

## To do

- [ ] Images are loaded from `https://www.extrasafe.chat/content-media/home/…`. Upload them to the repo root and update the `src` paths if the repo should be self-contained.
- [ ] Replace the Private Balances visual with the brief's visual: the masked `***` balance next to a block-explorer view with the amount hidden.
- [ ] Replace the hero desktop-app mock with a real desktop-app screenshot when one exists.
- [ ] Replace the QR placeholder in the Final CTA with a real QR code for the download link.
- [ ] Fill in the `href="#"` links: Learn more (Private Balances), Help Center, Chat/Resources pages, policies.
- [ ] Fees: choose Variant A or B. Variant B text is in an HTML comment in section 07.
