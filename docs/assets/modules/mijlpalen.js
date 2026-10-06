export function mount(el) {
  const line = el.querySelector('.mp-line');
  const btns = [...el.querySelectorAll('.mp-btn')];
  const panels = [...el.querySelectorAll('.mp-panel')];
  if (!line || !btns.length) return;
  el.classList.add('is-enhanced');
  line.hidden = false;
  const pick = (id, focus) => {
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.m === id));
    for (const p of panels) p.hidden = p.dataset.m !== id;
    if (focus) panels.find((p) => p.dataset.m === id)?.querySelector('.mp-head')?.focus({ preventScroll: true });
  };
  for (const b of btns) b.addEventListener('click', () => pick(b.dataset.m, true));
  pick(btns[0].dataset.m, false);
}
