import { Icon } from './Icon';

// Links taken from the live site extrasafe.chat
export const STORE_LINKS = {
  appStore: 'https://apps.apple.com/app/id6745936574',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.extrasafe.chat.app',
  desktop: 'https://www.extrasafe.chat/download',
};

export const SITE_LINKS = {
  insiders: 'https://www.extrasafe.chat/beta-waitlist',
  support: 'https://www.extrasafe.chat/support',
  terms: 'https://www.extrasafe.chat/terms',
  privacy: 'https://www.extrasafe.chat/privacy-policy',
  linkedin: 'https://www.linkedin.com/company/extrasafechat/',
  x: 'https://x.com/EXTRA_SAFE_CHAT',
  youtube: 'https://www.youtube.com/@ExtraSafeChat',
  instagram: 'https://www.instagram.com/extrasafe.chat/',
  tiktok: 'https://www.tiktok.com/@extrasafe.chat',
};

export function StoreButtons({ align = 'start', size = 'md' }: { align?: 'start' | 'center'; size?: 'md' | 'lg' }) {
  return (
    <div className={`store-row store-row--${align} store-row--${size}`} data-reveal-group>
      <a href={STORE_LINKS.appStore} className="store-btn" data-reveal>
        <Icon name="apple" size={26} />
        <span><small>Download on the</small><strong>App Store</strong></span>
      </a>
      <a href={STORE_LINKS.googlePlay} className="store-btn" data-reveal>
        <Icon name="play" size={24} />
        <span><small>Get it on</small><strong>Google Play</strong></span>
      </a>
      <a href={STORE_LINKS.desktop} className="store-btn store-btn--new" data-reveal>
        <Icon name="desktop" size={24} />
        <span><small>Download for</small><strong>Desktop</strong></span>
        <em className="store-btn__badge">New</em>
      </a>
    </div>
  );
}

export function Pill({ children, tone = 'green' }: { children: React.ReactNode; tone?: 'green' | 'blue' }) {
  return (
    <span className={`pill pill--${tone}`} data-reveal>
      <i className="pill__dot" />
      {children}
    </span>
  );
}

export function Token({ size = 32, kind = 'usdt' }: { size?: number; kind?: 'usdt' | 'usdc' | 'avax' }) {
  const label = kind === 'usdt' ? '₮' : kind === 'usdc' ? '$' : 'A';
  return (
    <span className={`token token--${kind}`} style={{ width: size, height: size, fontSize: size * 0.48 }} aria-hidden="true">
      {label}
    </span>
  );
}

export function Phone({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <i className="phone__island" />
          <span className="phone__icons"><i /><i /><i /></span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Avatar({ name, hue = 150, size = 36 }: { name: string; hue?: number; size?: number }) {
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.42, background: `linear-gradient(135deg, hsl(${hue} 45% 52%), hsl(${hue + 40} 50% 38%))` }}
      aria-hidden="true"
    >
      {name.slice(0, 1)}
    </span>
  );
}

export function TransferCard({ amount = '150', asset = 'USDt', label = 'Sent', time = '11:39', masked = false, state = 'done' }: {
  amount?: string; asset?: string; label?: string; time?: string; masked?: boolean; state?: 'done' | 'pending';
}) {
  return (
    <div className={`tx-card ${state === 'pending' ? 'is-pending' : ''}`}>
      <div className="tx-card__top">
        <span className="tx-card__label">{label} <i className="tx-card__chain" /></span>
        <span className="tx-card__status">
          <span className="tx-card__status-pending">Sending…</span>
          <span className="tx-card__status-done">Completed <Icon name="check" size={12} stroke={2.4} /></span>
        </span>
      </div>
      <div className="tx-card__body">
        <Token size={36} />
        <div>
          <div className="tx-card__amount">{masked ? '***' : amount}</div>
          <div className="tx-card__asset">{asset}</div>
        </div>
        <span className="tx-card__time">{time}</span>
      </div>
      <div className="tx-card__foot">Show transaction details <Icon name="external" size={12} /></div>
    </div>
  );
}
