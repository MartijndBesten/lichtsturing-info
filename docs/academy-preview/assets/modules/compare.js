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
}
