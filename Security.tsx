import { Icon } from './ui/Icon';
import { Avatar, Pill } from './ui/Kit';
import { Mark } from './ui/Logo';

/* 6. SECURITY — light. Three living cards + "Built on Cryptographic Identity" banner. */
export function Security() {
  return (
    <section id="security" className="section security" data-theme="light">
      <div className="es-container">
        <div className="section-head section-head--center">
          <Pill>Security</Pill>
          <h2 className="section-title" data-reveal>You Own and Control Your <span className="text-gradient">Assets and Chats</span></h2>
        </div>

        <div className="sec-grid" data-reveal-group>
          <article className="sec-card" data-reveal>
            <div className="sec-card__visual device-keys">
              <div className="device-keys__phone"><Icon name="key" size={26} /></div>
              <span className="device-keys__wall" />
              <span className="device-keys__cloud"><Icon name="cloud" size={22} /><Icon name="close" size={12} stroke={3} /></span>
            </div>
            <h3 className="sec-card__title">Self-custodial</h3>
            <p>Your private keys are generated on the device and never leave it — nobody at EXTRA SAFE can freeze the funds or read the chats.</p>
          </article>

          <article className="sec-card" data-reveal>
            <div className="sec-card__visual id-card">
              <Avatar name="Priya" hue={320} size={44} />
              <div>
                <span className="id-card__name">Priya</span>
                <span className="id-card__num" data-roll="849269155">000 000 000</span>
              </div>
            </div>
            <h3 className="sec-card__title">Pick a name, get an EXTRA SAFE number</h3>
            <p>The identity is wallet-based, created right on the device.</p>
          </article>

          <article className="sec-card" data-reveal>
            <div className="sec-card__visual phrase" data-phrase>
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} style={{ ['--d' as string]: `${i * 90}ms` }}><em>{i + 1}</em>••••••</span>
              ))}
            </div>
            <h3 className="sec-card__title">Your 12-word Recovery Phrase</h3>
            <p>The only way to restore your wallet, chats, and contacts if you switch devices or lose access. Copy it yourself and store it wherever you trust, or save an encrypted, password-protected backup to Google Drive or iCloud.</p>
          </article>
        </div>

        <div className="identity-banner" data-theme="dark" data-reveal="zoom">
          <div className="identity-banner__copy">
            <h3 className="text-h3">Built on Cryptographic Identity</h3>
            <p>Open EXTRA SAFE, pick a name, and get a unique EXTRA SAFE number. That number is your identity everywhere, for chats and transactions, backed by a private-public key pair generated locally on your device. Your 12-word Recovery Phrase moves it to any device.</p>
          </div>
          <div className="identity-banner__visual" aria-hidden="true">
            <div className="identity-banner__lock"><Icon name="lock" size={34} /></div>
            <div className="identity-banner__card">
              <span className="identity-banner__brand"><Mark size={14} id="idb" /> EXTRA SAFE</span>
              <b>Self-Custodial Messenger</b>
              <span>A stablecoin-first wallet built in.</span>
              <div><i className="is-primary">Start</i><i>Restore Account</i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
