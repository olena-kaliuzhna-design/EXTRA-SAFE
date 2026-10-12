import { FAQ } from '@/content/faq';
import { Icon } from './ui/Icon';
import { SITE_LINKS } from './ui/Kit';

/* 9. FAQ — dark. Sticky left column, animated accordion, search filter, "Show all". */
export function Faq() {
  return (
    <section id="faq" className="section faq-sec" data-theme="dark">
      <div className="es-container faq-sec__grid">
        <div className="faq-sec__side">
          <h2 className="faq-sec__title" data-reveal>FAQs</h2>
          <p className="muted" data-reveal>Everything you need to know about EXTRA SAFE.</p>
          <label className="faq-search" data-reveal>
            <Icon name="search" size={18} />
            <input type="search" placeholder="Search questions" data-faq-search aria-label="Search questions" />
          </label>
          <div className="faq-help" data-reveal>
            <h3 className="text-h4">Need more help?</h3>
            <p className="muted">Learn about sending stablecoins and messaging in EXTRA SAFE Help Center.</p>
            <a href={SITE_LINKS.support} className="pill-link">Visit the Help Center <span><Icon name="arrow" size={16} stroke={2.2} /></span></a>
          </div>
        </div>

        <div className="faq-list" data-faq>
          {FAQ.map((f, i) => (
            <details key={f.q} className={`faq-item ${f.top ? '' : 'is-extra'}`} data-reveal open={i === 0}>
              <summary>
                <span className="faq-item__n" aria-hidden="true" />
                <span className="faq-item__q">{f.q}</span>
                <span className="faq-item__icon"><Icon name="chevron" size={18} /></span>
              </summary>
              <div className="faq-item__body"><p>{f.a}</p></div>
            </details>
          ))}
          <p className="faq-empty" hidden data-faq-empty>No questions match — try another word.</p>
          <button type="button" className="es-btn es-btn--secondary faq-more" data-faq-more>
            Show all {FAQ.length} questions <Icon name="chevron" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
