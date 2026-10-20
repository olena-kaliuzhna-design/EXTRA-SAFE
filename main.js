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
