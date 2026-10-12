import { Icon } from './ui/Icon';
import { Avatar, Phone, Pill, Token } from './ui/Kit';

/* 4. PRIVATE BALANCES — light section with a dark product visual:
   masked *** balance (press to reveal) beside a block explorer where the amount never appears. */
export function PrivateBalances() {
  return (
    <section id="privacy" className="section private" data-theme="light">
      <div className="es-container private__grid">
        <div className="private__copy">
          <Pill>Private Balances</Pill>
          <h2 className="section-title" data-reveal>Private From the Public, <span className="text-gradient">Provable When It Counts</span></h2>
          <p className="text-body2 muted" data-reveal>
            On most chains, a stablecoin transfer sits on a public ledger forever — amount, address, all of it, visible to anyone. Private Balances, built on Avalanche&apos;s eERC standard, use zero-knowledge proofs to keep the amount hidden, even while it&apos;s just sitting in the wallet.
          </p>
          <p className="text-body2 muted" data-reveal>
            Convert any stablecoin to its private version in a few taps, from the Wallet tab on the Avalanche network. The balance shows as asterisks; biometrics reveal it, then it hides again. Who you&apos;re paying still shows on-chain. How much – never does.
          </p>
          <ul className="private__points" data-reveal-group>
            <li data-reveal><span><Icon name="eyeOff" size={20} /></span><div>A transfer shows that it happened, <b>never how much moved.</b></div></li>
            <li data-reveal><span><Icon name="key" size={20} /></span><div>Show any specific transaction to a regulator or auditor on request, <b>without exposing anything else.</b></div></li>
          </ul>
          <blockquote className="private__quote" data-reveal>eERC makes balances and payments private, while staying provable for anyone entitled to check.</blockquote>
          <div className="private__cta" data-reveal>
            <a href="https://www.extrasafe.chat/" className="es-btn es-btn--outline">Learn more <Icon name="arrow" size={18} /></a>
            <span className="private__by"><em>Private balances &amp; transfer amounts,</em> eERC by Avalanche.</span>
          </div>
        </div>

        <div className="private__visual" data-theme="dark" data-reveal="zoom">
          <div className="private__glow" aria-hidden="true" />
          <h3 className="private__visual-title">Keep Your <span className="green">Balances and Amounts Private</span> on Avalanche</h3>
          <div className="private__screens">
            <Phone className="private__phone">
              <div className="mini-chat">
                <div className="mini-chat__head"><Avatar name="Max" hue={210} size={26} /><b>Max</b></div>
                <div className="es-msg es-msg--out">Here is the payment for the video! 🎬</div>
                <div className="tx-mini tx-mini--masked">
                  <div className="tx-mini__top"><span>Sent</span><em>Completed <Icon name="check" size={11} stroke={2.6} /></em></div>
                  <button type="button" className="tx-mini__body reveal-btn" data-reveal-amount data-amount="500" aria-label="Hold to reveal amount">
                    <Token size={32} />
                    <div><b data-amount-text>***</b><span>esUSDT</span></div>
                    <span className="reveal-btn__eye"><Icon name="fingerprint" size={18} /></span>
                  </button>
                </div>
                <div className="es-msg es-msg--in">Got it 🙌 Thanks so much!</div>
                <span className="private__hint"><Icon name="fingerprint" size={14} /> Hold the card to reveal</span>
              </div>
            </Phone>

            <span className="private__arrow" aria-hidden="true"><Icon name="arrow" size={28} /></span>

            <div className="explorer" data-scan>
              <div className="explorer__head"><span className="explorer__brand"><i />Block explorer</span><span>Transaction Details</span></div>
              <dl>
                <div><dt>Timestamp</dt><dd>23 secs ago</dd></div>
                <div><dt>From</dt><dd className="mono">0xe7…****</dd></div>
                <div><dt>Interacted With (To)</dt><dd className="mono">0xc8…****</dd></div>
                <div className="explorer__value"><dt>Value</dt><dd><span className="mono">0 AVAX</span> <em className="hidden-chip"><Icon name="lock" size={12} /> Hidden</em></dd></div>
              </dl>
              <span className="explorer__scan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
