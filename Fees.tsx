import { Icon } from './ui/Icon';
import { Pill, Token } from './ui/Kit';

/* 7. FEES — dark. Static breakdown (Variant A from the brief) + live calculator.
   Variant B swap copy is kept in data-attrs so the team can switch: data-fee-variant="B". */
export function Fees() {
  return (
    <section id="fees" className="section fees" data-theme="dark">
      <div className="es-container fees__grid">
        <div className="fees__copy">
          <Pill>Fees</Pill>
          <h2 className="section-title" data-reveal>The Fee Breakdown</h2>
          <p className="text-body2 muted" data-reveal>Every transfer shows its full cost — the service fee and the network gas — before you confirm.</p>

          <ul className="fee-list" data-reveal-group>
            <li data-reveal>
              <span className="fee-list__icon"><Icon name="send" size={18} /></span>
              <div><b>Sending</b><p>$0.05 + 0.1% of the amount, plus gas at the exact amount used.</p></div>
            </li>
            <li data-reveal>
              <span className="fee-list__icon"><Icon name="swap" size={18} /></span>
              <div><b>Swapping to a different asset</b>
                <p data-variant="A">The sending fee, plus 0.45% for the swap.</p>
                <p data-variant="B" hidden>The sending fee, plus a 0.25% EXTRA SAFE fee and a 0.20% routing fee.</p>
              </div>
            </li>
            <li data-reveal>
              <span className="fee-list__icon"><Icon name="gift" size={18} /></span>
              <div><b>Gift Link</b><p>The sending fee, charged once when you send and once when it&apos;s claimed, plus a small gift fee.</p></div>
            </li>
          </ul>
        </div>

        <div className="fee-calc" data-fee-calc data-fee-variant="A" data-reveal="zoom">
          <div className="fee-calc__tabs" role="tablist">
            <button type="button" role="tab" className="is-active" data-fee-mode="send">Send</button>
            <button type="button" role="tab" data-fee-mode="swap">Swap</button>
            <button type="button" role="tab" data-fee-mode="gift">Gift Link</button>
          </div>

          <label className="fee-calc__amount">
            <span>You send</span>
            <div className="fee-calc__input">
              <Token size={28} />
              <output data-fee-amount>$250</output>
              <span>USDT</span>
            </div>
            <input type="range" min="5" max="2000" step="5" defaultValue="250" data-fee-range aria-label="Amount in USD" />
            <span className="fee-calc__scale"><i>$5</i><i>$2,000</i></span>
          </label>

          <div className="fee-calc__rows">
            <div><span>Service fee <small>$0.05 + 0.1%</small></span><b data-fee-service>$0.30</b></div>
            <div data-fee-row="swap" hidden><span>Swap fee <small data-fee-swap-label>0.45%</small></span><b data-fee-swap>$1.13</b></div>
            <div data-fee-row="gift" hidden><span>Claim fee <small>charged when claimed</small></span><b data-fee-claim>$0.30</b></div>
            <div data-fee-row="gift" hidden><span>Gift fee</span><b>small</b></div>
            <div><span>Network gas <small>exact amount used</small></span><b className="green">paid in USDT</b></div>
          </div>
          <div className="fee-calc__total">
            <span>Service fees before gas</span>
            <b data-fee-total>$0.30</b>
          </div>
          <p className="fee-calc__note"><Icon name="check" size={14} stroke={2.4} /> Shown in full before you confirm. No native coin needed.</p>
        </div>
      </div>
    </section>
  );
}
