import { Icon } from './ui/Icon';
import { Avatar, Phone, StoreButtons, Token, SITE_LINKS } from './ui/Kit';
import { Logo, Mark } from './ui/Logo';

/* 10. FINAL CTA — atmosphere gradient, all three badges + QR for desktop visitors. */
export function FinalCta() {
  return (
    <section id="download" className="section final es-atmosphere" data-theme="dark">
      <div className="final__glow" aria-hidden="true" />
      <div className="es-container final__grid">
        <div className="final__copy">
          <span className="final__mark" data-reveal><Mark size={44} id="final" /></span>
          <h2 className="final__title" data-reveal>Download <span className="text-gradient">EXTRA SAFE</span></h2>
          <p className="text-body1 muted" data-reveal>Chat, call and send tokenized dollars — privately, from your phone or desktop.</p>
          <StoreButtons size="lg" />
        </div>
        <div className="final__visual" data-reveal="zoom">
          <Phone className="final__phone">
            <div className="wallet-home">
              <div className="wallet-home__head"><Avatar name="Njeri" hue={150} size={30} /><div><small>Good morning</small><b>Njeri</b></div></div>
              <div className="wallet-home__card">
                <span className="text-overline">Total balance</span>
                <b>$2,506.00</b>
                <div className="wallet-home__btns"><span><Icon name="send" size={14} /> Send</span><span><Icon name="qr" size={14} /> Receive</span></div>
              </div>
              <div className="wallet-home__row"><Token size={26} /> USDT <b>2,250.00</b></div>
              <div className="wallet-home__row"><Token size={26} kind="usdc" /> USDC <b>256.00</b></div>
            </div>
          </Phone>
          <div className="final__qr float-card" data-float="1">
            <span className="final__qr-code"><Icon name="qr" size={56} stroke={1.4} /></span>
            <span>Scan to download<br /><b>iOS &amp; Android</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = 2026;
  return (
    <footer className="footer" data-theme="dark">
      <div className="es-container footer__inner">
        <div className="footer__brand">
          <Logo height={20} />
          <p className="muted">A privacy-first encrypted messenger with a built-in self-custodial stablecoin wallet.</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#flow">How it works</a>
          <a href="#wallet">Wallet</a>
          <a href="#privacy">Private Balances</a>
          <a href="#fees">Fees</a>
          <a href={SITE_LINKS.support}>Help Center</a>
          <a href={SITE_LINKS.terms}>Terms</a>
          <a href={SITE_LINKS.privacy}>Privacy Policy</a>
        </nav>
        <div className="footer__social">
          <a href={SITE_LINKS.x}>X</a>
          <a href={SITE_LINKS.linkedin}>LinkedIn</a>
          <a href={SITE_LINKS.youtube}>YouTube</a>
          <a href={SITE_LINKS.instagram}>Instagram</a>
          <a href={SITE_LINKS.tiktok}>TikTok</a>
        </div>
      </div>
      <div className="es-container footer__bottom">© {year} EXTRA SAFE. All rights reserved.</div>
    </footer>
  );
}
