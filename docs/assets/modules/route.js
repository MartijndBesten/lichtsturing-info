export function mount(el) {
  const btns = [...el.querySelectorAll('.rt-btn')];
  const steps = [...el.querySelectorAll('.rt-step')];
  const layers = [...el.querySelectorAll('.rt-l')];
  const nav = el.querySelector('.rt-nav');
  if (!btns.length || !nav) return;
  const order = btns.map((b) => b.dataset.s);
  el.classList.add('is-enhanced');
  el.querySelector('.rt-pick').hidden = false;
  const pick = (id, focus) => {
    const n = order.indexOf(id);
    el.dataset.step = id;
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.s === id));
    for (const s of steps) s.hidden = s.dataset.s !== id;
    for (const l of layers) {
      const i = order.indexOf(l.dataset.s);
      l.classList.toggle('is-on', i <= n);
      l.classList.toggle('is-now', i === n);
    }
    nav.hidden = n === order.length - 1;
    if (focus) steps[n]?.querySelector('.rt-q')?.focus({ preventScroll: true });
  };
  for (const b of btns) b.addEventListener('click', () => pick(b.dataset.s, true));
  nav.querySelector('.rt-next').addEventListener('click', () => pick(order[order.indexOf(el.dataset.step) + 1], true));
  pick(order[0], false);
}
