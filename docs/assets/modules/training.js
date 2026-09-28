import { wireCheck } from './check.js';

export function mount(el, config) {
  const s = config.strings || {};
  const steps = [...el.querySelectorAll('.training-step')];
  if (!steps.length) return;
  const progress = el.querySelector('.training-progress');
  const bar = progress?.querySelector('.training-bar span');
  const label = progress?.querySelector('.training-progress-text');
  const toc = [...el.querySelectorAll('.training-toc a[data-go]')];
  el.classList.add('is-enhanced');
  if (progress) progress.hidden = false;

  const indexOfHash = () => {
    const i = steps.findIndex((st) => `#${st.id}` === location.hash);
    return i < 0 ? 0 : i;
  };

  function show(i, { focus = false, push = false } = {}) {
    const n = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((st, k) => {
      st.hidden = k !== n;
    });
    toc.forEach((a, k) => {
      if (k === n) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
      a.classList.toggle('is-done', k < n);
    });
    if (bar) bar.style.width = `${Math.round(((n + 1) / steps.length) * 100)}%`;
    if (label) label.textContent = (s.count || '{n}/{total}').replace('{n}', n + 1).replace('{total}', steps.length);
    if (push && location.hash !== `#${steps[n].id}`) history.pushState(null, '', `#${steps[n].id}`);
    if (focus) {
      const h = steps[n].querySelector('h2');
      h?.setAttribute('tabindex', '-1');
      h?.focus({ preventScroll: true });
      el.scrollIntoView({ block: 'start' });
    }
  }

  el.addEventListener('click', (ev) => {
    const link = ev.target.closest('a[data-go]');
    if (!link || !el.contains(link)) return;
    ev.preventDefault();
    show(Number(link.dataset.go) - 1, { focus: true, push: true });
  });
  window.addEventListener('popstate', () => show(indexOfHash(), { focus: true }));

  for (const check of el.querySelectorAll('[data-check]')) wireCheck(check, s);

  show(indexOfHash());
}
