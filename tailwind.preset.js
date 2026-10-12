/** EXTRA SAFE Tailwind preset. Load tokens.css first (values point at CSS variables so dark/light + responsive type work).
 *  tailwind.config.js -> presets: [require('./extrasafe-design-system/tokens/tailwind.preset.js')] */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    screens: { sm: '360px', md: '768px', lg: '1024px', xl: '1532px', '2xl': '1920px' },
    extend: {
      colors: {
        "background": "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "foreground": "var(--foreground)",
        "card-main": "var(--card-main)",
        "card-light": "var(--card-light)",
        "card-dark": "var(--card-dark)",
        "card-secondary": "var(--card-secondary)",
        "card-secondary-light": "var(--card-secondary-light)",
        "card-secondary-dark": "var(--card-secondary-dark)",
        "card-foreground": "var(--card-foreground)",
        "popover": "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        "primary-main": "var(--primary-main)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "primary-foreground": "var(--primary-foreground)",
        "secondary-main": "var(--secondary-main)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-foreground": "var(--secondary-foreground)",
        "blue-500": "var(--blue-500)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "destructive-main": "var(--destructive-main)",
        "destructive-light": "var(--destructive-light)",
        "destructive-dark": "var(--destructive-dark)",
        "destructive-foreground": "var(--destructive-foreground)",
        "accent-foreground": "var(--accent-foreground)",
        "success": "var(--success)",
        "color": "var(--color)",
        "border": "var(--border)",
        "border-secondary": "var(--border-secondary)",
        "input": "var(--input)",
        "ring": "var(--ring)",
        "button-light": "var(--button-light)",
        "button-dark": "var(--button-dark)",
        "icon-primary": "var(--icon-primary)",
        "icon-secondary": "var(--icon-secondary)",
        "icon-on-color": "var(--icon-on-color)",
        "icon-hover": "var(--icon-hover)",
        "icon-secondary-hover": "var(--icon-secondary-hover)",
        "icon-disabled": "var(--icon-disabled)",
        "helper": "var(--helper)",
        "gray-200": "var(--gray-200)",
        "alpha": "var(--alpha)",
        "alpha-white": "var(--alpha-white)",
        "alpha-green": "var(--alpha-green)",
        "alpha-red": "var(--alpha-red)",
        "es-primary": {
                "100": "#def4eb",
                "200": "#bee9d7",
                "300": "#9ddfc2",
                "400": "#7dd4ae",
                "500": "#5cc99a",
                "600": "#3fbf88",
                "700": "#36a374",
                "800": "#2c865f",
                "900": "#23694b",
                "1000": "#194d36",
                "alpha-10": "rgba(92, 201, 154, 0.102)"
        },
        "es-secondary": {
                "100": "#d5e0f6",
                "200": "#acc1ed",
                "300": "#82a2e3",
                "400": "#5983da",
                "500": "#2f64d1",
                "600": "#2857b7",
                "700": "#224a9c",
                "800": "#1c3d81",
                "900": "#173066",
                "1000": "#11244b",
                "alpha-10": "rgba(47, 100, 209, 0.102)"
        },
        "es-neutral": {
                "100": "#ededed",
                "200": "#d6d6d6",
                "300": "#bfbfbf",
                "400": "#a9a9a9",
                "500": "#929292",
                "600": "#7b7b7b",
                "700": "#646464",
                "800": "#4e4e4e",
                "900": "#373737",
                "1000": "#202020",
                "alpha-10": "rgba(32, 32, 32, 0.102)",
                "alpha-70": "rgba(32, 32, 32, 0.698)"
        },
        "es-grey": {
                "100": "#d6d6d6",
                "200": "#c1c1c1",
                "300": "#acacac",
                "400": "#989898",
                "500": "#838383",
                "600": "#6e6e6e",
                "700": "#5a5a5a",
                "800": "#454545",
                "900": "#323232",
                "1000": "#202020",
                "alpha-10": "rgba(69, 69, 69, 0.102)"
        },
        "es-red": {
                "100": "#f8dcde",
                "200": "#f0b9bd",
                "300": "#e9969d",
                "400": "#e2727c",
                "500": "#da4f5b",
                "600": "#d32c3a",
                "700": "#b32531",
                "800": "#941f29",
                "900": "#741820",
                "1000": "#541217",
                "alpha-10": "rgba(211, 44, 58, 0.102)"
        },
        "es-green": {
                "100": "#84ebb4",
                "200": "#1fc16b",
                "alpha-10": "rgba(31, 193, 107, 0.102)"
        },
        "es-blue": {
                "100": "#cfe7fd",
                "200": "#a9d4fb",
                "300": "#83c1fa",
                "400": "#5daef8",
                "500": "#379bf7",
                "600": "#1188f5",
                "700": "#0974d6",
                "800": "#075fb0",
                "900": "#064b8a",
                "1000": "#043664"
        }
},
      borderRadius: { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px' },
      fontFamily: { sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
      fontSize: {
        "h1": [
                "var(--text-h1-size)",
                {
                        "lineHeight": "var(--text-h1-lh)",
                        "fontWeight": "var(--text-h1-weight)"
                }
        ],
        "h2": [
                "var(--text-h2-size)",
                {
                        "lineHeight": "var(--text-h2-lh)",
                        "fontWeight": "var(--text-h2-weight)"
                }
        ],
        "h3": [
                "var(--text-h3-size)",
                {
                        "lineHeight": "var(--text-h3-lh)",
                        "fontWeight": "var(--text-h3-weight)"
                }
        ],
        "h4": [
                "var(--text-h4-size)",
                {
                        "lineHeight": "var(--text-h4-lh)",
                        "fontWeight": "var(--text-h4-weight)"
                }
        ],
        "subtitle1": [
                "var(--text-subtitle1-size)",
                {
                        "lineHeight": "var(--text-subtitle1-lh)",
                        "fontWeight": "var(--text-subtitle1-weight)"
                }
        ],
        "subtitle2": [
                "var(--text-subtitle2-size)",
                {
                        "lineHeight": "var(--text-subtitle2-lh)",
                        "fontWeight": "var(--text-subtitle2-weight)"
                }
        ],
        "body1": [
                "var(--text-body1-size)",
                {
                        "lineHeight": "var(--text-body1-lh)",
                        "fontWeight": "var(--text-body1-weight)"
                }
        ],
        "body2": [
                "var(--text-body2-size)",
                {
                        "lineHeight": "var(--text-body2-lh)",
                        "fontWeight": "var(--text-body2-weight)"
                }
        ],
        "body3": [
                "var(--text-body3-size)",
                {
                        "lineHeight": "var(--text-body3-lh)",
                        "fontWeight": "var(--text-body3-weight)"
                }
        ],
        "button1": [
                "var(--text-button1-size)",
                {
                        "lineHeight": "var(--text-button1-lh)",
                        "fontWeight": "var(--text-button1-weight)"
                }
        ],
        "button2": [
                "var(--text-button2-size)",
                {
                        "lineHeight": "var(--text-button2-lh)",
                        "fontWeight": "var(--text-button2-weight)"
                }
        ],
        "modal-title": [
                "var(--text-modal-title-size)",
                {
                        "lineHeight": "var(--text-modal-title-lh)",
                        "fontWeight": "var(--text-modal-title-weight)"
                }
        ]
},
      boxShadow: { header: 'var(--shadow-header)', feedback: 'var(--shadow-feedback)', card: 'var(--shadow-card)', cookie: 'var(--shadow-cookie)', button: 'var(--shadow-button)', message: 'var(--shadow-message-left)' },
      backgroundImage: { brand: 'var(--gradient-brand)', 'brand-x': 'var(--gradient-logo)', red: 'var(--gradient-red)', atmosphere: 'var(--bg-atmosphere)' },
      maxWidth: { container: '1312px' },
    },
  },
};
