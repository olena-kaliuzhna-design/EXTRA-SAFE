type IconName =
  | 'apple' | 'play' | 'desktop' | 'arrow' | 'check' | 'eye' | 'eyeOff' | 'key' | 'shield'
  | 'user' | 'chat' | 'bolt' | 'globe' | 'link' | 'video' | 'mic' | 'phoneDown' | 'image'
  | 'file' | 'send' | 'lock' | 'gift' | 'qr' | 'telegram' | 'chevron' | 'paperclip'
  | 'star' | 'undo' | 'cloud' | 'fingerprint' | 'swap' | 'menu' | 'close' | 'external' | 'search';

const paths: Record<IconName, React.ReactNode> = {
  apple: <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" fill="currentColor" stroke="none" />,
  play: <path d="M4.5 2.8l10.3 9.2-10.3 9.2c-.3-.2-.5-.6-.5-1V3.8c0-.4.2-.8.5-1zm11.3 10.1l2.6 2.3-11.6 6.6 9-8.9zm0-1.8l-9-8.9 11.6 6.6-2.6 2.3zm3.6 3.2l-2.7-2.3 2.7-2.3 2.6 1.5c.8.4.8 1.2 0 1.6l-2.6 1.5z" fill="currentColor" stroke="none" />,
  desktop: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12l5 5 9-10" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="M3 3l18 18M10.6 5.1A10 10 0 0112 5c6 0 10 7 10 7a17 17 0 01-3.2 3.9M6.6 6.6C3.9 8.3 2 12 2 12s4 7 10 7c1.7 0 3.2-.5 4.5-1.2" /><path d="M9.9 9.9a3 3 0 004.2 4.2" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M16 7l3 3" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></>,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  bolt: <path d="M13 3L5 14h6l-1 7 8-11h-6z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  link: <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></>,
  mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></>,
  phoneDown: <path d="M4 15c5-4 11-4 16 0l-2 3-3-1.5V14c-2-.7-4-.7-6 0v2.5L6 18z" />,
  image: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M21 16l-5-5-8 8" /></>,
  file: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /></>,
  send: <path d="M7 17L17 7M9 7h8v8" />,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
  gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12M12 8S10.5 4 8 4a2 2 0 000 4M12 8s1.5-4 4-4a2 2 0 010 4" /></>,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3M21 14v.01M14 21h3M21 18v3h-1" /></>,
  telegram: <path d="M21 4L3 11l6 2 2 6 3-4 5 4z M9 13l9-7" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  paperclip: <path d="M20 11l-8.5 8.5a5 5 0 01-7-7L13 4a3.5 3.5 0 015 5l-8.5 8.5a2 2 0 01-3-3L14 7" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="currentColor" stroke="none" />,
  undo: <><path d="M9 14L4 9l5-5" /><path d="M4 9h11a5 5 0 010 10h-3" /></>,
  cloud: <path d="M7 18a5 5 0 01-.9-9.9A6 6 0 0118 9a4.5 4.5 0 01-.5 9z" />,
  fingerprint: <><path d="M12 11v3a8 8 0 01-1.5 5M8.5 7.5A5 5 0 0117 11v1.5M7 11a5 5 0 01.4-2M15 14.5a12 12 0 01-.9 4.5M4 9.5A9 9 0 0120 10v1M5 15.5c.6-1.4 1-2.9 1-4.5" /></>,
  swap: <><path d="M7 4L3 8l4 4M3 8h14" /><path d="M17 20l4-4-4-4M21 16H7" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" /></>,
};

export function Icon({ name, size = 20, stroke = 1.8, className }: { name: IconName; size?: number; stroke?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
