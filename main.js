// EXTRA SAFE — Landing 4.0
// 1) Header: dropdowns (Chat / Wallet / Resources) — same behaviour as www.extrasafe.chat
// 2) Header: burger menu below 1280px
// 3) FAQ: keep one answer open at a time

(function () {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.header__burger');
  const toggles = document.querySelectorAll('.nav-toggle');

  // 1. Dropdowns
  const closeAll = (except) => toggles.forEach((t) => { if (t !== except) t.setAttribute('aria-expanded', 'false'); });
  toggles.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = t.getAttribute('aria-expanded') === 'true';
      closeAll(t);
      t.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-item')) closeAll(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAll(); setMenu(false); } });

  // 2. Burger menu
  function setMenu(open) {
    if (!header || !burger) return;
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('no-scroll', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (!open) closeAll();
  }
  if (burger) burger.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
  window.addEventListener('resize', () => { if (window.innerWidth >= 1280) setMenu(false); });

  // 3. FAQ accordion (one open at a time)
  const items = document.querySelectorAll('.faq__list details');
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => { if (other !== item) other.open = false; });
    });
  });
})();

// ==========================================================================
// Hero: tilt the desktop app toward the pointer (like touching it)
// ==========================================================================
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const area = document.querySelector('[data-tilt-area]');
  const win = document.querySelector('[data-tilt]');
  if (!area || !win || reduce || !window.matchMedia('(hover: hover)').matches) return;
  area.addEventListener('pointermove', (e) => {
    const r = win.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    win.classList.add('is-tilting');
    win.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.015)`;
    win.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    win.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  });
  area.addEventListener('pointerleave', () => {
    win.classList.remove('is-tilting');
    win.style.transform = '';
  });
})();

// ==========================================================================
// Hero: EXTRA WALLET widget — network tabs + $ / ₹ / ₦ switch with live conversion
// Rates are illustrative (display only).
// ==========================================================================
(function () {
  const w = document.querySelector('[data-wallet]');
  if (!w) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const RATES = { usd: 1, inr: 88.7, ngn: 1530 };
  const FMT = {
    usd: (v) => '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    inr: (v) => '₹' + v.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    ngn: (v) => '₦' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  };
  const NETS = {
    avax: { usd: 2500, asset: 'USDT' },
    bnb: { usd: 1240.5, asset: 'USDT' },
    eth: { usd: 860.25, asset: 'USDT' },
  };
  const curOrder = ['usd', 'inr', 'ngn'];
  const netOrder = ['avax', 'bnb', 'eth'];
  const sw = w.querySelector('.cur-switch');
  const balEl = w.querySelector('[data-balance]');
  const assetEl = w.querySelector('[data-asset]');
  const amtEl = w.querySelector('[data-amount]');
  const badgeEl = w.querySelector('[data-net-badge]');
  let cur = 'usd', net = 'avax', shown = NETS.avax.usd, raf = 0, pausedUntil = 0, pending = 0;

  function render(animate) {
    const target = NETS[net].usd * RATES[cur];
    assetEl.textContent = NETS[net].asset;
    amtEl.textContent = NETS[net].usd.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' ' + NETS[net].asset;
    sw.dataset.active = cur;
    sw.querySelectorAll('button').forEach((b) => b.classList.toggle('is-active', b.dataset.cur === cur));
    w.querySelectorAll('.net-tab').forEach((b) => b.classList.toggle('is-active', b.dataset.net === net));
    const tabIcon = w.querySelector(`.net-tab[data-net="${net}"] svg`);
    if (badgeEl && tabIcon) badgeEl.innerHTML = tabIcon.outerHTML;
    cancelAnimationFrame(raf);
    if (!animate || reduce) { shown = target; balEl.textContent = FMT[cur](target); return; }
    balEl.classList.remove('is-flip'); void balEl.offsetWidth; balEl.classList.add('is-flip');
    const from = shown, t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 650), e = 1 - Math.pow(1 - k, 3);
      shown = from + (target - from) * e;
      balEl.textContent = FMT[cur](shown);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  // Keep the active network tab visible inside the clipped tab row
  const tabsRow = w.querySelector('.net-tabs');
  function revealTab() {
    const t = w.querySelector(`.net-tab[data-net="${net}"]`);
    if (!t || !tabsRow) return;
    const left = t.offsetLeft - 8, right = t.offsetLeft + t.offsetWidth + 8;
    if (left < tabsRow.scrollLeft) tabsRow.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
    else if (right > tabsRow.scrollLeft + tabsRow.clientWidth) tabsRow.scrollTo({ left: right - tabsRow.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }
  // Tap feedback — used both for real clicks and the automatic "presses"
  function press(btn) {
    btn.classList.remove('is-pressed'); void btn.offsetWidth; btn.classList.add('is-pressed');
    setTimeout(() => btn.classList.remove('is-pressed'), 450);
  }
  sw.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { clearTimeout(pending); pausedUntil = Date.now() + 8000; press(b); cur = b.dataset.cur; render(true); }));
  w.querySelectorAll('.net-tab').forEach((b) => b.addEventListener('click', () => { clearTimeout(pending); pausedUntil = Date.now() + 8000; press(b); net = b.dataset.net; render(true); revealTab(); }));
  render(false);

  // Auto-play: the switch "presses itself" $ → ₹ → ₦, then taps the next network.
  // A visitor's click pauses it for 8 s, then it carries on from where they left it.
  if (!reduce) {
    setInterval(() => {
      if (document.hidden || Date.now() < pausedUntil) return;
      const i = (curOrder.indexOf(cur) + 1) % curOrder.length;
      if (i === 0) {
        const nextNet = netOrder[(netOrder.indexOf(net) + 1) % netOrder.length];
        const tab = w.querySelector(`.net-tab[data-net="${nextNet}"]`);
        if (tab) press(tab);
        pending = setTimeout(() => { net = nextNet; cur = 'usd'; render(true); revealTab(); }, 220);
      } else {
        const btn = sw.querySelector(`button[data-cur="${curOrder[i]}"]`);
        if (btn) press(btn);
        pending = setTimeout(() => { cur = curOrder[i]; render(true); }, 220);
      }
    }, 2600);
  }
})();
