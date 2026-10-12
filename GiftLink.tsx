import { Icon } from './ui/Icon';
import { Phone, Pill, Token } from './ui/Kit';

function Qr() {
  // decorative QR-like pattern
  const cells: [number, number][] = [];
  let seed = 7;
  for (let y = 0; y < 21; y++)
    for (let x = 0; x < 21; x++) {
      const finder = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
      if (finder) continue;
      seed = (seed * 9301 + 49297) % 233280;
      if (seed / 233280 > 0.55) cells.push([x, y]);
    }
  const f = (ox: number, oy: number) => (
    <g key={`${ox}-${oy}`}>
      <rect x={ox} y={oy} width="7" height="7" fill="#161616" />
      <rect x={ox + 1} y={oy + 1} width="5" height="5" fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width="3" height="3" fill="#161616" />
    </g>
  );
  return (
    <svg viewBox="0 0 21 21" shapeRendering="crispEdges" aria-hidden="true">
      <rect width="21" height="21" fill="#fff" />
      {f(0, 0)}{f(14, 0)}{f(0, 14)}
      {cells.map(([x, y]) => <rect key={`${x}.${y}`} x={x} y={y} width="1" height="1" fill="#161616" />)}
    </svg>
  );
}

/* 5. GIFT LINK — dark. Link/QR → a new wallet, funded. Animated path + count-up. */
export function GiftLink() {
  return (
    <section id="gift" className="section gift" data-theme="dark">
      <div className="es-container gift__grid">
        <div className="gift__copy">
          <Pill>Gift Link</Pill>
          <h2 className="section-title" data-reveal>Gift Stablecoins to Someone Who Isn&apos;t on EXTRA&nbsp;SAFE Yet</h2>
          <p className="text-body2 muted" data-reveal>
            Gift stablecoins as a link or a QR code. They open it, install the app, and the funds are already inside their new wallet. <b className="green">Usable from day one, no additional crypto required.</b>
          </p>
          <div className="gift__revoke" data-reveal>
            <span className="gift__revoke-icon"><Icon name="undo" size={18} /></span>
            <p>The gift stays revocable until it&apos;s claimed — pull it back any time before then.</p>
          </div>
          <a href="https://www.extrasafe.chat/" className="es-btn es-btn--outline" data-reveal>Learn more <Icon name="arrow" size={18} /></a>
        </div>

        <div className="gift__visual" data-gift data-reveal="zoom">
          <div className="gift-card">
            <span className="gift-card__icon"><Icon name="gift" size={22} /></span>
            <b>Gift Funded!</b>
            <span className="gift-card__sub">18 USD₮ for Sofia</span>
            <div className="gift-card__qr"><Qr /><span className="gift-card__scan" /></div>
            <div className="gift-card__share">
              {['WhatsApp', 'SMS', 'Telegram', 'Email'].map((s) => <span key={s}>{s}</span>)}
            </div>
            <span className="es-btn es-btn--primary es-btn--sm gift-card__btn"><Icon name="link" size={16} /> Share Gift Link</span>
          </div>

          <svg className="gift__path" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">
            <path id="giftPath" d="M5 60 C 60 0, 140 120, 195 60" fill="none" />
            <circle r="5" className="gift__dot">
              <animateMotion dur="2.6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#giftPath" />
              </animateMotion>
            </circle>
          </svg>

          <Phone className="gift__phone">
            <div className="new-wallet">
              <span className="new-wallet__badge">New wallet created</span>
              <span className="text-overline">Extra Wallet</span>
              <b className="new-wallet__total">$<span data-count-to="18" data-decimals="2">0.00</span></b>
              <div className="new-wallet__row"><Token size={28} /><span>USDT<small>Avalanche</small></span><b>18.00</b></div>
              <div className="new-wallet__claimed"><Icon name="check" size={14} stroke={2.4} /> Gift claimed from Daniel</div>
              <div className="new-wallet__actions"><span>Send</span><span>Receive</span><span>Swap</span></div>
            </div>
          </Phone>
        </div>
      </div>
    </section>
  );
}
