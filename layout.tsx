import type { Metadata, Viewport } from 'next';
// DM Sans (design-system font), self-hosted via Fontsource — no runtime call to Google Fonts.
import '@fontsource-variable/dm-sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'EXTRA SAFE — Send Tokenized Dollars in Chat',
  description:
    'A privacy-first encrypted messenger with a built-in self-custodial stablecoin wallet.',
};

export const viewport: Viewport = {
  themeColor: '#202020',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="es">{children}</body>
    </html>
  );
}
