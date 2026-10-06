export function mount(el) {
  const cards = [...el.querySelectorAll('.pk-card')];
  const badges = [...el.querySelectorAll('.pk-badge')];
  const box = el.querySelector('.pk-cards');
  const legend = el.querySelector('.pk-legend');
  const hint = el.querySelector('.pk-hint');
  const narrow = window.matchMedia('(max-width: 40rem)');
  el.classList.add('is-enhanced');
  hint.hidden = false;
  box.setAttribute('aria-live', 'polite');
  for (const c of cards) c.hidden = true;
  for (const b of badges) {
    b.setAttribute('role', 'button');
    b.setAttribute('aria-pressed', 'false');
  }
  function pick(id, focus) {
    const card = cards.find((c) => c.dataset.id === id);
    if (!card) return;
    const related = new Set([...card.querySelectorAll('[data-pick]')].map((a) => a.dataset.pick));
    for (const c of cards) c.hidden = c !== card;
    for (const b of badges) {
      b.setAttribute('aria-pressed', String(b.dataset.pick === id));
      b.classList.toggle('is-related', related.has(b.dataset.pick));
    }
    (narrow.matches ? el.querySelector(`.pk-group[data-group="${card.dataset.group}"]`) : legend).after(box);
    hint.hidden = true;
    if (focus) card.focus();
  }
  el.addEventListener('click', (ev) => {
    const a = ev.target.closest('[data-pick]');
    if (!a) return;
    ev.preventDefault();
    pick(a.dataset.pick, Boolean(a.closest('.pk-card')));
  });
  el.addEventListener('keydown', (ev) => {
    if (ev.key !== ' ' || !ev.target.matches('.pk-badge')) return;
    ev.preventDefault();
    pick(ev.target.dataset.pick, false);
  });
}
