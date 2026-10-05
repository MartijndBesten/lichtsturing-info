const STEP_MS = 3600;

export function mount(el) {
  const items = [...el.querySelectorAll('.kt-steps > li')];
  if (items.length < 2) return;
  const buttons = items.map((li, i) => {
    const b = li.querySelector('.kt-step-btn');
    b?.addEventListener('click', () => {
      user = true;
      show(i);
    });
    return b;
  });
  let current = -1;
  let timer = 0;
  let user = false;
  let visible = false;

  function show(i) {
    current = i;
    el.dataset.step = String(i + 1);
    items.forEach((li, k) => li.classList.toggle('is-current', k === i));
    buttons.forEach((b, k) => b?.setAttribute('aria-pressed', k === i ? 'true' : 'false'));
    el.classList.remove('kt-run');
    void el.getBoundingClientRect();
    el.classList.add('kt-run');
    clearTimeout(timer);
    if (!user && visible && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setTimeout(() => show((current + 1) % items.length), STEP_MS);
  }

  el.classList.add('kt-ready');
  show(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      for (const e of entries) {
        visible = e.isIntersecting;
        if (visible && !user) show(current < 0 ? 0 : current);
        else clearTimeout(timer);
      }
    }, { threshold: 0.4 }).observe(el);
  }
}
