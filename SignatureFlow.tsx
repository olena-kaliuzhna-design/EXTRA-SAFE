import { Icon } from './ui/Icon';
import { Avatar, Phone, Pill, TransferCard } from './ui/Kit';

const STEPS = [
  { n: '01', title: 'Call', text: "A quick in-chat call confirms whom you're sending your stablecoins to." },
  { n: '02', title: 'Send', text: 'Picking the asset from the attachment menu starts the transfer.' },
  { n: '03', title: 'Done', text: 'The status shows up in the same dialogue – completed in seconds.' },
];

/* 2. SIGNATURE FLOW — light. Auto-playing 3-step stepper synced with a phone. */
export function SignatureFlow() {
  return (
    <section id="flow" className="section flow" data-theme="light">
      <div className="es-container">
        <div className="section-head section-head--center">
          <Pill>Transaction Flow</Pill>
          <h2 className="section-title" data-reveal>See Who You&apos;re Paying, Then Pay Them</h2>
        </div>

        <div className="flow__grid" data-stepper data-interval="3800">
          <ol className="flow__steps">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <button type="button" className={`flow-step ${i === 0 ? 'is-active' : ''}`} data-step-btn={i} data-reveal>
                  <span className="flow-step__num">{s.n}</span>
                  <span className="flow-step__body">
                    <span className="flow-step__title">{s.title}</span>
                    <span className="flow-step__text">{s.text}</span>
                  </span>
                  <span className="flow-step__bar"><i /></span>
                </button>
              </li>
            ))}
          </ol>

          <div className="flow__stage" data-reveal="zoom">
            <div className="flow__ring" aria-hidden="true" />
            <Phone className="flow__phone">
              {/* Screen 1: video call */}
              <div className="flow-screen flow-screen--call is-active" data-step-panel="0">
                <div className="call">
                  <div className="call__video">
                    <Avatar name="Mom" hue={150} size={96} />
                    <span className="call__pulse" />
                  </div>
                  <b className="call__name">Mom</b>
                  <span className="call__meta"><Icon name="lock" size={12} /> Encrypted video call · 00:12</span>
                  <div className="call__pip"><Avatar name="You" hue={220} size={40} /></div>
                  <div className="call__controls">
                    <span><Icon name="mic" size={18} /></span>
                    <span><Icon name="video" size={18} /></span>
                    <span className="is-end"><Icon name="phoneDown" size={18} /></span>
                  </div>
                </div>
              </div>

              {/* Screen 2: attachment menu */}
              <div className="flow-screen flow-screen--attach" data-step-panel="1">
                <div className="mini-chat__head"><Avatar name="Mom" hue={150} size={26} /><b>Mom</b></div>
                <div className="mini-chat__spacer" />
                <div className="attach-sheet">
                  <div className="attach-sheet__grid">
                    <span><i><Icon name="image" size={18} /></i>Image</span>
                    <span><i><Icon name="file" size={18} /></i>File</span>
                    <span><i><Icon name="globe" size={18} /></i>Location</span>
                  </div>
                  <div className="attach-sheet__assets">
                    <span className="is-picked"><b className="token token--usdt">₮</b>USDT<em>Send</em></span>
                    <span><b className="token token--usdc">$</b>USDC</span>
                    <span><b className="token token--avax">A</b>AVAX</span>
                  </div>
                  <div className="attach-sheet__amount">
                    <span>Amount</span>
                    <b data-typer="250">250</b>
                    <span className="attach-sheet__fee">Fee paid in USDT</span>
                  </div>
                </div>
                <div className="mini-chat__input"><Icon name="paperclip" size={16} /> Message</div>
              </div>

              {/* Screen 3: status in chat */}
              <div className="flow-screen flow-screen--done" data-step-panel="2">
                <div className="mini-chat__head"><Avatar name="Mom" hue={150} size={26} /><b>Mom</b></div>
                <div className="mini-chat__spacer" />
                <div className="es-msg es-msg--out">Sending this month&apos;s transfer.</div>
                <TransferCard amount="250" asset="USDT" time="10:03" />
                <div className="es-msg es-msg--in">Thank you! ❤️</div>
                <div className="mini-chat__input"><Icon name="paperclip" size={16} /> Message</div>
              </div>
            </Phone>
          </div>
        </div>

        <p className="flow__summary" data-reveal>
          <em>Call to confirm, send the stablecoins, check the status.</em> <b>All in the same chat.</b>
        </p>
      </div>
    </section>
  );
}
