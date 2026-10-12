import { Icon } from './ui/Icon';
import { Avatar, StoreButtons, SITE_LINKS } from './ui/Kit';

const STATS = [
  { to: 500, suffix: 'K+', label: 'downloads' },
  { to: 5.0, suffix: '★', decimals: 1, label: 'from 1.25K reviews' },
  { to: 5.8, suffix: '×', decimals: 1, label: 'organic growth in five months' },
  { to: 9, suffix: '', label: 'languages' },
];

const MARQUEE = [
  'End-to-end encrypted', 'Self-custodial', 'Gas paid in stablecoins', 'Private Balances', 'Gift Links',
  'Six chains', 'Voice & video calls', 'Disappearing messages', 'No phone number', 'Desktop app',
];

/* 8. PROOF STRIP — light. Count-up stats, marquee, store badges, Insiders Hub (Telegram). */
export function Proof() {
  return (
    <section id="proof" className="section proof" data-theme="light">
      <div className="es-container">
        <div className="stats" data-reveal-group>
          {STATS.map((s) => (
            <div className="stat" key={s.label} data-reveal>
              <b className="stat__value"><span data-count-to={s.to} data-decimals={s.decimals ?? 0}>0</span>{s.suffix}</b>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i}><i />{m}</span>
          ))}
        </div>
      </div>

      <div className="es-container">
        <div className="proof__get" data-reveal>
          <span className="proof__get-label">Get the app</span>
          <StoreButtons />
        </div>

        <div className="insiders" data-theme="dark" data-reveal="zoom">
          <div className="insiders__visual" aria-hidden="true">
            <div className="insiders__panel">
              <div className="insiders__panel-head"><span className="insiders__tg"><Icon name="telegram" size={14} /></span> EXTRA SAFE <em>Insiders</em></div>
              {['🛋️ Lounge', '❓ Question & Help', '🐞 Bug reports', '🎨 UX Feedback', '📣 Announcements'].map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="insiders__bubble insiders__bubble--a"><Avatar name="T" hue={210} size={22} /> Would love a home screen widget!</div>
            <div className="insiders__bubble insiders__bubble--b"><Avatar name="E" hue={150} size={22} /> Shipping in the next beta 🚀</div>
            <span className="insiders__scribble">Real people.<br />Real feedback.<br />Real progress. ♡</span>
          </div>
          <div className="insiders__copy">
            <span className="es-badge">Insiders Hub</span>
            <h3 className="text-h3">Curious What Ships Next?</h3>
            <p>Join the Insiders Hub — our closed Telegram community. Get early access to new features and the closed testing community, a direct line to the EXTRA SAFE team, and a real say in what we build.</p>
            <a href={SITE_LINKS.insiders} className="es-btn es-btn--primary es-btn--lg">Join <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
