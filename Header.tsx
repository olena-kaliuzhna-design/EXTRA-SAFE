import { Logo } from './ui/Logo';
import { Icon } from './ui/Icon';

const NAV = [
  { href: '#flow', label: 'How it works' },
  { href: '#wallet', label: 'Wallet' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#fees', label: 'Fees' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="site-header" data-header>
      <div className="site-header__inner es-container">
        <a href="#top" className="site-header__logo" aria-label="EXTRA SAFE home">
          <Logo height={22} />
        </a>
        <nav aria-label="Main">
          <ul className="site-header__nav">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} data-nav-link>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button type="button" className="is-active" lang="en">EN</button>
            <button type="button" lang="hi">हिन्दी</button>
          </div>
          {/* Always visible on mobile while scrolling (brief requirement) */}
          <a href="#download" className="es-btn es-btn--primary es-btn--sm site-header__cta">
            <Icon name="arrow" size={16} className="rot-90" />
            Download
          </a>
        </div>
      </div>
      <div className="site-header__progress" data-scroll-progress />
    </header>
  );
}
