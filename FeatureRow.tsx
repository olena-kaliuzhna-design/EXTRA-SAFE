import { Icon } from './ui/Icon';
import { Avatar, Pill, Token } from './ui/Kit';
import { Mark } from './ui/Logo';

const CHAINS = ['Avalanche', 'Ethereum', 'BNB Chain', 'Arbitrum', 'Base', 'Polygon'];

/* 3. FEATURE ROW — dark. Bento grid; each card has its own micro-interaction. */
export function FeatureRow() {
  return (
    <section id="wallet" className="section features" data-theme="dark">
      <div className="features__bg" aria-hidden="true" />
      <div className="es-container">
        <div className="section-head">
          <Pill>Built-in Wallet</Pill>
          <h2 className="section-title" data-reveal>As Natural as <span className="text-gradient">Sending a Message</span></h2>
        </div>

        <div className="bento" data-reveal-group>
          {/* Wide hero card: Sent → Received */}
          <article className="bento__card bento__card--wide transfer-viz" data-reveal data-spotlight>
            <div className="transfer-viz__side">
              <Avatar name="Rahul" hue={30} size={56} />
              <div className="tx-mini">
                <div className="tx-mini__top"><span>Sent</span><em>Completed <Icon name="check" size={11} stroke={2.6} /></em></div>
                <div className="tx-mini__body"><Token size={34} /><div><b>150</b><span>USDt</span></div><time>11:39</time></div>
              </div>
            </div>
            <div className="transfer-viz__line" aria-hidden="true">
              <span className="transfer-viz__track" />
              <span className="transfer-viz__packet" />
              <span className="transfer-viz__check"><Icon name="check" size={16} stroke={2.4} /></span>
            </div>
            <div className="transfer-viz__side transfer-viz__side--right">
              <div className="tx-mini tx-mini--in">
                <div className="tx-mini__top"><span>Received</span><em>Completed <Icon name="check" size={11} stroke={2.6} /></em></div>
                <div className="tx-mini__body"><Token size={34} /><div><b>150</b><span>USDt</span></div><time>11:39</time></div>
              </div>
              <Avatar name="Anika" hue={320} size={56} />
            </div>
          </article>

          {/* 1. Contact, not address */}
          <article className="bento__card" data-reveal data-spotlight>
            <span className="bento__icon"><Icon name="chat" size={22} /></span>
            <h3 className="bento__title">Send to a Contact, Not to an Address</h3>
            <p className="bento__text">In a chat, just send — you already know who you&apos;re talking to. From the Wallet, send to an EXTRA SAFE number or scan a QR code.</p>
            <div className="addr-swap">
              <span className="addr-swap__old">0x7a3F…9c2E41bD08f7</span>
              <span className="addr-swap__new"><Avatar name="Mom" hue={150} size={22} /> Mom · <b>849 269 155</b></span>
            </div>
          </article>

          {/* 2. Gas in stablecoins */}
          <article className="bento__card" data-reveal data-spotlight>
            <span className="bento__icon"><Icon name="bolt" size={22} /></span>
            <h3 className="bento__title">Gas Paid With Stablecoins</h3>
            <p className="bento__text">The fee settles in the same asset you send. One asset covers the payment and the gas.</p>
            <div className="gas-stack">
              <div className="gas-stack__row"><span>Payment</span><b><Token size={18} /> 100.00 USDT</b></div>
              <div className="gas-stack__row gas-stack__row--gas"><span>Gas</span><b><Token size={18} /> USDT</b></div>
              <div className="gas-stack__row gas-stack__row--native"><span>Native coin needed</span><b className="strike">AVAX · ETH · BNB</b></div>
            </div>
          </article>

          {/* 3. Your currency */}
          <article className="bento__card" data-reveal data-spotlight>
            <span className="bento__icon"><Icon name="globe" size={22} /></span>
            <h3 className="bento__title">Your Whole Wallet, in Your Currency</h3>
            <p className="bento__text">Your funds, in your currency. One tap switches the whole wallet.</p>
            <div className="fx-card">
              <div className="currency-toggle currency-toggle--light" data-currency-toggle>
                <button type="button" data-cur="usd">$ USD</button>
                <button type="button" data-cur="inr" className="is-active">₹ INR</button>
                <i className="currency-toggle__thumb" />
              </div>
              <div className="fx-card__total" data-balance data-usd="1240" data-rate="88.7" data-start="inr">₹1,09,988</div>
              <div className="fx-card__rows">
                <span><Token size={18} /> USDT <b data-balance-sub data-usd="980">₹86,926</b></span>
                <span><Token size={18} kind="usdc" /> USDC <b data-balance-sub data-usd="260">₹23,062</b></span>
              </div>
            </div>
          </article>

          {/* 4. Six chains */}
          <article className="bento__card" data-reveal data-spotlight>
            <span className="bento__icon"><Icon name="link" size={22} /></span>
            <h3 className="bento__title">Six Chains, One Recovery Phrase</h3>
            <p className="bento__text">Avalanche as default blockchain, with Ethereum, BNB Chain, Arbitrum, Base and Polygon — one recovery phrase covers all six.</p>
            <div className="orbit" aria-label={CHAINS.join(', ')}>
              <span className="orbit__core"><Mark size={26} id="orbit" /></span>
              <span className="orbit__ring" />
              {CHAINS.map((c, i) => (
                <span key={c} className={`orbit__chain ${i === 0 ? 'is-default' : ''}`} style={{ ['--i' as string]: i }}>
                  <em>{c}</em>
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
