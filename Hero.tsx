import { Icon } from './ui/Icon';
import { Avatar, Phone, StoreButtons, Token, TransferCard } from './ui/Kit';
import { Mark } from './ui/Logo';

/* 1. HERO — dark. Store buttons sit right under headline + live product shot
   (desktop app window with in-chat transfer card + ₹ INR toggle; phone on mobile). */
export function Hero() {
  return (
    <section id="top" className="section hero es-atmosphere" data-theme="dark">
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="es-container hero__inner">
        <div className="hero__copy">
          <a href="#privacy" className="hero__announce" data-reveal>
            <span className="hero__announce-tag">New</span>
            Private Balances on Avalanche
            <Icon name="arrow" size={14} />
          </a>
          <h1 className="hero__title" data-reveal>
            Send <span className="text-gradient hero__title-accent">Tokenized Dollars</span> in&nbsp;Chat
          </h1>
          <p className="hero__sub text-body1" data-reveal>
            A privacy-first encrypted messenger with a built-in self-custodial stablecoin wallet.
          </p>
          <StoreButtons />
          <ul className="hero__trust" data-reveal>
            <li><span className="hero__stars">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={14} />)}</span> 5.0 from 1.25K reviews</li>
            <li><b>500K+</b> downloads</li>
            <li><Icon name="lock" size={14} /> End-to-end encrypted</li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal="zoom">
          {/* Desktop app window */}
          <div className="app-window" data-tilt>
            <div className="app-window__bar">
              <i /><i /><i />
              <span className="app-window__title"><Mark size={12} id="hero-bar" /> EXTRA SAFE</span>
            </div>
            <div className="app-window__body">
              <aside className="app-window__side">
                <div className="app-window__search">Search</div>
                {[
                  { n: 'Mom', m: '250 USDT · Completed', h: 150, a: true },
                  { n: 'Arjun', m: 'Voice message', h: 210 },
                  { n: 'Priya', m: 'See you tomorrow!', h: 330 },
                  { n: 'Family', m: 'Ravi: 👍', h: 40 },
                ].map((c) => (
                  <div key={c.n} className={`chat-row ${c.a ? 'is-active' : ''}`}>
                    <Avatar name={c.n} hue={c.h} size={32} />
                    <div><b>{c.n}</b><span>{c.m}</span></div>
                  </div>
                ))}
              </aside>
              <div className="app-window__chat" data-hero-chat>
                <div className="app-window__chat-head">
                  <Avatar name="Mom" hue={150} size={30} />
                  <div><b>Mom</b><span className="online">online</span></div>
                  <span className="app-window__chat-tools"><Icon name="video" size={16} /><Icon name="mic" size={16} /></span>
                </div>
                <div className="app-window__msgs">
                  <div className="es-msg es-msg--in hero-msg" data-step="1">Did you send it? 🙏<span className="es-msg__time">10:02</span></div>
                  <div className="es-msg es-msg--out hero-msg" data-step="2">Sending this month&apos;s transfer now<span className="es-msg__time">10:03</span></div>
                  <div className="hero-msg hero-msg--card" data-step="3">
                    <TransferCard amount="250" asset="USDT" time="10:03" state="pending" />
                  </div>
                  <div className="es-msg es-msg--in hero-msg" data-step="4">Got it, thank you! ❤️<span className="es-msg__time">10:03</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating wallet with ₹ INR toggle */}
          <div className="float-card wallet-chip" data-float="1">
            <div className="wallet-chip__top">
              <span className="text-overline">Extra Wallet</span>
              <span className="chain-tag"><i />Avalanche C</span>
            </div>
            <div className="currency-toggle" data-currency-toggle data-auto>
              <button type="button" data-cur="usd" className="is-active">$ USD</button>
              <button type="button" data-cur="inr">₹ INR</button>
              <i className="currency-toggle__thumb" />
            </div>
            <div className="wallet-chip__balance" data-balance data-usd="2500" data-rate="88.7">$2,500.00</div>
            <div className="wallet-chip__row"><Token size={20} /> USDT <span data-balance-sub data-usd="2250">$2,250.00</span></div>
          </div>

          {/* Floating gas chip */}
          <div className="float-card gas-chip" data-float="2">
            <Icon name="bolt" size={16} />
            <span>Gas paid in <b>USDT</b></span>
          </div>

          {/* Phone (mobile-only visual) */}
          <Phone className="hero__phone">
            <div className="mini-chat">
              <div className="mini-chat__head"><Avatar name="Mom" hue={150} size={26} /><b>Mom</b></div>
              <div className="es-msg es-msg--out">Sending this month&apos;s transfer</div>
              <TransferCard amount="250" asset="USDT" time="10:03" />
              <div className="es-msg es-msg--in">Thank you! ❤️</div>
            </div>
          </Phone>
        </div>
      </div>

      <a href="#flow" className="hero__scroll" aria-label="Scroll to next section"><span /></a>
    </section>
  );
}
