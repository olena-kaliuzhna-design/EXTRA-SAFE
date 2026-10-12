# Figma node map — EXTRA SAFE

File: https://www.figma.com/design/5fZVCsxRa1gpL0bvZdPZ6u · fileKey `5fZVCsxRa1gpL0bvZdPZ6u` · page `0:1` "Styles".

| Node | What |
|---|---|
| `162:20485` | Main System — brand swatches, logos, app icons, DM Sans specimen, colour scales |
| `184:2117` | Color Main — primitive scales (Primary, Secondary, Neutral, Grey, Red, Green) |
| `162:20582` / `162:20564` / `162:20576` / `162:20570` | Logo black + gradient icon / white + gradient / black / white |
| `162:20551` / `162:20545` / `162:20557` | App icon gradient / black / white |
| `688:5030` | Horizontal logo (large) |
| `10168:150340` | EXTRA SAFE.chat logo |
| `8723:40423` | App icon size set (512 → 16, square, round, no background) |
| `200:8000` | Typography — all text styles with breakpoints |
| `21171:110774` | Global Tokens — Desktop new + Desktop old, dark & light |
| `21171:112822` | Global Tokens — COLORS primitives |
| `20888:288307`, `19205:1445489` | "1 messages view" — atmospheric background (desktop 1516×852, mobile 393×852) |
| `66:2497`, `66:2548`, `66:2599`, `66:2650` | Neutral / Grey scale columns |

Variables: collection "Global Tokens" (modes Dark theme / Light Theme: groups `Desktop new` = current, `Desktop old` = legacy, `radius/*`, layout numbers) and collection "Global Tokens" (mode light: `COLORS/*` primitives).
Styles: 104 paint (Dark/*, Light/*, Old/* legacy, gradients), 72 text, 7 effect, 5 grid (Landing page/sm…2xl).
Known inconsistencies in Figma: paint style `Light/Background` = #FFFFFF but variable = #F2F2F2; `Light/Foreground` = #3F3F3F vs variable #1F1F1F; `Light/Border` #757373 vs variable #E4E4E4. The package follows the **variables**.
