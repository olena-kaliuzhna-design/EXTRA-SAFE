// EXTRA SAFE — Landing 4.0
// 1) Sticky header gets a border/shadow once the page is scrolled
// 2) Mobile menu toggle (burger)
// 3) FAQ: keep one answer open at a time

(function () {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.header__burger');
  const menu = document.getElementById('mobile-menu');

  // 1. Sticky header state
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // 2. Mobile menu
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      menu.hidden = open;
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        menu.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // 3. FAQ accordion (one open at a time)
  const items = document.querySelectorAll('.faq__list details');
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => { if (other !== item) other.open = false; });
    });
  });
})();
