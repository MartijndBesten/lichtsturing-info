export function mount(el) {
  const tabs = [...el.querySelectorAll('.cmp-card')];
  const panels = [...el.querySelectorAll('.cmp-panel')];
  if (!tabs.length) return;
  el.classList.add('is-enhanced');
  const show = (i, focus = false) => {
    tabs.forEach((b, k) => {
      b.setAttribute('aria-selected', String(k === i));
      b.tabIndex = k === i ? 0 : -1;
    });
    panels.forEach((p, k) => {
      p.hidden = k !== i;
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((b, i) => {
    b.disabled = false;
    b.addEventListener('click', () => show(i));
    b.addEventListener('keydown', (ev) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
      if (!d) return;
      ev.preventDefault();
      ev.stopPropagation();
      show((i + d + tabs.length) % tabs.length, true);
    });
  });
  show(0);
  pick(el);
}

function pick(el) {
  const box = el.querySelector('.cmp-pick');
  const all = el.querySelector('.cmp-all');
  if (!box || !all) return;
  box.hidden = false;
  const sys = [...box.querySelectorAll('[data-pick-sys]')];
  const asp = [...box.querySelectorAll('[data-pick-asp]')];
  const apply = () => {
    const on = new Set(sys.filter((c) => c.checked).map((c) => c.dataset.pickSys));
    const rows = new Set(asp.filter((c) => c.checked).map((c) => c.dataset.pickAsp));
    for (const c of all.querySelectorAll('[data-sys]')) c.hidden = !on.has(c.dataset.sys);
    for (const r of all.querySelectorAll('tr[data-aspect]')) r.hidden = !rows.has(r.dataset.aspect);
    all.classList.toggle('is-two', on.size === 2);
  };
  for (const c of [...sys, ...asp]) c.addEventListener('change', apply);
  apply();
}
