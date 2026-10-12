/* Vanilla DOM interactions for the landing page. Framework-agnostic on purpose:
   the same bundle powers the static preview. Returns a cleanup function. */

const reduce = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel) as NodeListOf<T>);

function fmtUsd(v: number) {
  return '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtInr(v: number) {
  return '₹' + Math.round(v).toLocaleString('en-IN');
}

export function initInteractions(): () => void {
  const cleanups: (() => void)[] = [];
  const timers: number[] = [];
  const doc = document.documentElement;
  doc.classList.add('js');

  /* ---------- Reveal on scroll ---------- */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.classList.add('is-in');
        revealIO.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  $$('[data-reveal-group]').forEach((g) => {
    $$('[data-reveal]', g).forEach((el, i) => el.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 80}ms`));
  });
  $$('[data-reveal]').forEach((el) => revealIO.observe(el));
  // Safety net: never leave content hidden (thumbnails, slow observers).
  timers.push(window.setTimeout(() => $$('[data-reveal]:not(.is-in)').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 1.5) el.classList.add('is-in');
  }), 1500));
  cleanups.push(() => revealIO.disconnect());

  /* ---------- Header state + scroll progress + active nav ---------- */
  const header = document.querySelector<HTMLElement>('[data-header]');
  const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
  const sections = $$('main section[id]');
  const navLinks = $$('[data-nav-link]') as HTMLAnchorElement[];
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header?.classList.toggle('is-scrolled', y > 8);
      const max = doc.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      // header theme follows the section under it
      const probe = 40;
      let current: HTMLElement | undefined;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) { current = s; break; }
      }
      if (header && current) header.dataset.on = current.dataset.theme === 'light' ? 'light' : 'dark';
      const id = current?.id;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  cleanups.push(() => removeEventListener('scroll', onScroll));

  /* ---------- Language switch (visual only) ---------- */
  $$('.lang-switch').forEach((g) => {
    $$('button', g).forEach((b) =>
      b.addEventListener('click', () => {
        $$('button', g).forEach((x) => x.classList.remove('is-active'));
        b.classList.add('is-active');
      })
    );
  });

  /* ---------- Currency toggles ($ USD ↔ ₹ INR) ---------- */
  $$('[data-currency-toggle]').forEach((tg) => {
    const card = tg.closest('.wallet-chip, .fx-card, .bento__card') || tg.parentElement!;
    const main = card.querySelector<HTMLElement>('[data-balance]');
    const subs = $$('[data-balance-sub]', card);
    const rate = parseFloat(main?.dataset.rate || '88.7');
    let cur: 'usd' | 'inr' = (tg.querySelector('.is-active') as HTMLElement)?.dataset.cur === 'inr' ? 'inr' : 'usd';
    const paint = (animate: boolean) => {
      tg.dataset.active = cur;
      $$('button', tg).forEach((b) => b.classList.toggle('is-active', b.dataset.cur === cur));
      const set = (el: HTMLElement) => {
        const usd = parseFloat(el.dataset.usd || '0');
        const target = cur === 'inr' ? usd * rate : usd;
        const fmt = cur === 'inr' ? fmtInr : fmtUsd;
        if (!animate || reduce()) { el.textContent = fmt(target); return; }
        el.classList.remove('is-flip'); void el.offsetWidth; el.classList.add('is-flip');
        const from = cur === 'inr' ? usd : usd * rate;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 650);
          const e = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(from + (target - from) * e);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      if (main) set(main);
      subs.forEach(set);
    };
    paint(false);
    $$('button', tg).forEach((b) =>
      b.addEventListener('click', () => {
        cur = b.dataset.cur === 'inr' ? 'inr' : 'usd';
        tg.dataset.touched = '1';
        paint(true);
      })
    );
    if (tg.hasAttribute('data-auto') && !reduce()) {
      const id = window.setInterval(() => {
        if (tg.dataset.touched) return;
        cur = cur === 'usd' ? 'inr' : 'usd';
        paint(true);
      }, 3200);
      timers.push(id);
    }
  });

  /* ---------- Hero chat sequence ---------- */
  const heroChat = document.querySelector<HTMLElement>('[data-hero-chat]');
  if (heroChat) {
    const msgs = $$('.hero-msg', heroChat);
    const card = heroChat.querySelector('.tx-card');
    if (reduce()) {
      msgs.forEach((m) => m.classList.add('is-shown'));
      card?.classList.remove('is-pending');
    } else {
      const run = () => {
        msgs.forEach((m) => m.classList.remove('is-shown'));
        card?.classList.add('is-pending');
        const seq: [number, () => void][] = [
          [300, () => msgs[0]?.classList.add('is-shown')],
          [1200, () => msgs[1]?.classList.add('is-shown')],
          [2100, () => msgs[2]?.classList.add('is-shown')],
          [3600, () => card?.classList.remove('is-pending')],
          [4600, () => msgs[3]?.classList.add('is-shown')],
        ];
        seq.forEach(([t, fn]) => timers.push(window.setTimeout(fn, t)));
      };
      run();
      timers.push(window.setInterval(run, 9000));
    }
  }

  /* ---------- Tilt on hover (desktop) ---------- */
  if (!reduce() && matchMedia('(hover: hover)').matches) {
    $$('[data-tilt]').forEach((el) => {
      const host = el.parentElement!;
      const move = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      };
      const leave = () => (el.style.transform = '');
      host.addEventListener('pointermove', move);
      host.addEventListener('pointerleave', leave);
    });
    /* spotlight cards */
    $$('[data-spotlight]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Stepper (Signature Flow) ---------- */
  $$('[data-stepper]').forEach((root) => {
    const btns = $$('[data-step-btn]', root);
    const panels = $$('[data-step-panel]', root);
    const interval = parseInt(root.dataset.interval || '4000', 10);
    let idx = 0;
    let timer = 0;
    let visible = false;
    const go = (i: number) => {
      idx = (i + btns.length) % btns.length;
      btns.forEach((b, j) => {
        b.classList.toggle('is-active', j === idx);
        b.classList.toggle('is-done', j < idx);
        b.style.setProperty('--dur', `${interval}ms`);
      });
      panels.forEach((p, j) => p.classList.toggle('is-active', j === idx));
      root.dataset.step = String(idx);
    };
    const schedule = () => {
      clearTimeout(timer);
      if (!visible || reduce()) return;
      timer = window.setTimeout(() => { go(idx + 1); schedule(); }, interval);
    };
    btns.forEach((b, j) => b.addEventListener('click', () => { go(j); schedule(); }));
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      root.classList.toggle('is-playing', visible && !reduce());
      if (visible) { go(idx); schedule(); } else clearTimeout(timer);
    }, { threshold: 0.35 });
    io.observe(root);
    go(0);
    cleanups.push(() => { io.disconnect(); clearTimeout(timer); });
  });

  /* ---------- Count-up numbers ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      countIO.unobserve(el);
      const to = parseFloat(el.dataset.countTo || '0');
      const dec = parseInt(el.dataset.decimals || '0', 10);
      const fmt = (v: number) => v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (reduce()) { el.textContent = fmt(to); return; }
      const delay = parseInt(el.dataset.delay || '0', 10);
      const t0 = performance.now() + delay;
      const step = (t: number) => {
        const p = Math.max(0, Math.min(1, (t - t0) / 1600));
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  $$('[data-count-to]').forEach((el) => countIO.observe(el));
  cleanups.push(() => countIO.disconnect());

  /* ---------- Number roll (EXTRA SAFE number) ---------- */
  const rollIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      rollIO.unobserve(el);
      const final = el.dataset.roll || '';
      const fmt = (s: string) => s.replace(/(\d{3})(?=\d)/g, '$1 ');
      if (reduce()) { el.textContent = fmt(final); return; }
      let frame = 0;
      const id = window.setInterval(() => {
        frame++;
        const s = final.split('').map((d, i) => (frame > 6 + i * 2 ? d : String(Math.floor(Math.random() * 10)))).join('');
        el.textContent = fmt(s);
        if (frame > 6 + final.length * 2) { clearInterval(id); el.classList.add('is-done'); }
      }, 55);
      timers.push(id);
    });
  }, { threshold: 0.6 });
  $$('[data-roll]').forEach((el) => rollIO.observe(el));
  cleanups.push(() => rollIO.disconnect());

  /* ---------- Hold to reveal private amount ---------- */
  $$('[data-reveal-amount]').forEach((btn) => {
    const txt = btn.querySelector<HTMLElement>('[data-amount-text]');
    let hideT = 0;
    const show = () => {
      clearTimeout(hideT);
      btn.classList.add('is-revealed');
      if (txt) txt.textContent = btn.dataset.amount || '';
    };
    const hide = () => {
      hideT = window.setTimeout(() => {
        btn.classList.remove('is-revealed');
        if (txt) txt.textContent = '***';
      }, 900);
    };
    btn.addEventListener('pointerdown', show);
    btn.addEventListener('pointerup', hide);
    btn.addEventListener('pointerleave', hide);
    btn.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === ' ' || (e as KeyboardEvent).key === 'Enter') show(); });
    btn.addEventListener('keyup', hide);
  });

  /* ---------- Gift: start animation when visible ---------- */
  const playIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.target as HTMLElement).classList.toggle('is-playing', e.isIntersecting));
  }, { threshold: 0.3 });
  $$('[data-gift], [data-phrase], [data-scan], .orbit, .transfer-viz, .marquee').forEach((el) => playIO.observe(el));
  cleanups.push(() => playIO.disconnect());

  /* ---------- Fee calculator ---------- */
  $$('[data-fee-calc]').forEach((calc) => {
    const range = calc.querySelector<HTMLInputElement>('[data-fee-range]')!;
    const out = calc.querySelector<HTMLElement>('[data-fee-amount]')!;
    const variant = calc.dataset.feeVariant === 'B' ? 'B' : 'A';
    const swapPct = 0.0045; // A: 0.45%; B: 0.25% + 0.20% = 0.45%
    const swapLabel = calc.querySelector<HTMLElement>('[data-fee-swap-label]');
    if (swapLabel) swapLabel.textContent = variant === 'B' ? '0.25% + 0.20% routing' : '0.45%';
    $$('[data-variant]').forEach((p) => (p.hidden = p.dataset.variant !== variant));
    let mode = 'send';
    const set = (sel: string, v: number) => {
      const el = calc.querySelector<HTMLElement>(sel);
      if (el) el.textContent = fmtUsd(v);
    };
    const calcAll = () => {
      const a = parseFloat(range.value);
      out.textContent = '$' + a.toLocaleString('en-US');
      range.style.setProperty('--p', `${((a - +range.min) / (+range.max - +range.min)) * 100}%`);
      const service = 0.05 + a * 0.001;
      const swap = mode === 'swap' ? a * swapPct : 0;
      const claim = mode === 'gift' ? service : 0;
      set('[data-fee-service]', service);
      set('[data-fee-swap]', swap);
      set('[data-fee-claim]', claim);
      set('[data-fee-total]', service + swap + claim);
      $$('[data-fee-row]', calc).forEach((r) => (r.hidden = r.dataset.feeRow !== mode));
      const total = calc.querySelector<HTMLElement>('[data-fee-total]');
      total?.classList.remove('is-bump'); void total?.offsetWidth; total?.classList.add('is-bump');
    };
    range.addEventListener('input', calcAll);
    $$('[data-fee-mode]', calc).forEach((b) =>
      b.addEventListener('click', () => {
        mode = b.dataset.feeMode || 'send';
        $$('[data-fee-mode]', calc).forEach((x) => x.classList.toggle('is-active', x === b));
        calc.dataset.mode = mode;
        calcAll();
      })
    );
    calcAll();
  });

  /* ---------- FAQ: smooth accordion, show all, search ---------- */
  const faq = document.querySelector<HTMLElement>('[data-faq]');
  if (faq) {
    const items = $$<HTMLDetailsElement>('details', faq);
    items.forEach((d) => {
      const summary = d.querySelector('summary')!;
      const body = d.querySelector<HTMLElement>('.faq-item__body')!;
      summary.addEventListener('click', (e) => {
        if (reduce()) return;
        e.preventDefault();
        if (d.open) {
          body.style.height = body.scrollHeight + 'px';
          requestAnimationFrame(() => { body.style.height = '0px'; });
          d.classList.add('is-closing');
          setTimeout(() => { d.open = false; d.classList.remove('is-closing'); body.style.height = ''; }, 320);
        } else {
          d.open = true;
          const h = body.scrollHeight;
          body.style.height = '0px';
          requestAnimationFrame(() => { body.style.height = h + 'px'; });
          setTimeout(() => { body.style.height = ''; }, 340);
        }
      });
    });
    const more = faq.querySelector<HTMLButtonElement>('[data-faq-more]');
    more?.addEventListener('click', () => {
      faq.classList.add('is-expanded');
      more.hidden = true;
    });
    const search = document.querySelector<HTMLInputElement>('[data-faq-search]');
    const empty = faq.querySelector<HTMLElement>('[data-faq-empty]');
    search?.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      faq.classList.toggle('is-searching', q.length > 0);
      let n = 0;
      items.forEach((d) => {
        const hit = !q || d.textContent!.toLowerCase().includes(q);
        d.classList.toggle('is-hidden', !hit);
        if (hit) n++;
      });
      if (empty) empty.hidden = n > 0;
    });
  }

  return () => {
    cleanups.forEach((c) => c());
    timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
  };
}
