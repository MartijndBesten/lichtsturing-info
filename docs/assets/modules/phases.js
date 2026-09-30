export function mount(el) {
  const links = [...el.querySelectorAll('.phase-strip a[data-phase]')];
  const phases = [...el.querySelectorAll('details.phase[data-phase]')];
  if (links.length < 2 || phases.length !== links.length) return;
  const wide = () => window.matchMedia('(min-width: 64rem)').matches;
  const show = (id, focus = false) => {
    el.dataset.active = id;
    for (const a of links) {
      if (a.dataset.phase === id) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
    }
    for (const d of phases) {
      const on = d.dataset.phase === id;
      d.classList.toggle('is-active', on);
      if (on) d.open = true;
      else if (wide()) d.open = false;
    }
    const active = phases.find((d) => d.dataset.phase === id);
    if (focus && active) active.querySelector('summary')?.focus({ preventScroll: true });
  };
  for (const a of links) {
    a.addEventListener('click', (e) => {
      if (!wide()) return; // telefoon: de strip is verborgen; ankers werken zoals altijd
      e.preventDefault();
      show(a.dataset.phase, true);
      history.replaceState(null, '', a.getAttribute('href'));
    });
  }
  for (const d of phases) d.addEventListener('toggle', () => { if (d.open && el.dataset.active !== d.dataset.phase) show(d.dataset.phase); });
  const fromHash = phases.find((d) => location.hash && (d.id === location.hash.slice(1) || d.querySelector(location.hash)));
  show((fromHash ?? phases[0]).dataset.phase);
}
