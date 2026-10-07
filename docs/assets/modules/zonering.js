export function mount(el, config = {}) {
  const s = config.strings || {};
  const $$ = (q) => [...el.querySelectorAll(q)];
  const modes = $$('.zr-mode');
  const btns = $$('.zr-btn');
  const zones = $$('.zr-zone');
  const shapes = $$('.zr-svg [data-z]');
  if (!modes.length || !btns.length) return;
  el.classList.add('is-enhanced');
  el.querySelector('.zr-now').setAttribute('aria-live', 'polite');
  for (const n of $$('.zr-modes, .zr-btn')) n.hidden = false;
  const unit = (n) => `${n} ${s.unit || ''}`.trim();
  const lux = Object.fromEntries($$('.zr-btn .zr-lx').map((x) => [x.dataset.z, Number(x.dataset.lx)]));
  const sync = () => {
    for (const b of modes) b.setAttribute('aria-pressed', String(b.dataset.m === el.dataset.mode));
    for (const p of $$('.zr-mode-text')) p.hidden = p.dataset.m !== el.dataset.mode;
    for (const z of Object.keys(lux)) {
      const v = unit(el.dataset.mode === 'alles' ? s.all : lux[z]);
      for (const t of $$(`.zr-l--${z}, .zr-lx[data-z="${z}"]`)) t.textContent = v;
    }
  };
  const now = el.querySelector('.zr-now');
  const focus = (z) => {
    el.dataset.focus = z || '';
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.z === z));
    const li = zones.find((x) => x.dataset.z === z);
    now.hidden = !li;
    now.textContent = '';
    if (li) now.textContent = li.querySelector('.zr-text').textContent;
  };
  for (const b of modes) b.addEventListener('click', () => { el.dataset.mode = b.dataset.m; sync(); focus(el.dataset.focus); });
  for (const b of btns) b.addEventListener('click', () => focus(el.dataset.focus === b.dataset.z ? '' : b.dataset.z));
  for (const p of shapes) {
    p.addEventListener('click', () => focus(p.dataset.z));
    p.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') el.dataset.hover = p.dataset.z; });
    p.addEventListener('pointerleave', () => { el.dataset.hover = ''; });
  }
  sync();
  focus('');
}
