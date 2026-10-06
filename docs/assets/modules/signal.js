export function mount(el, config = {}) {
  const steps = config.steps || [];
  const s = config.strings || {};
  if (!steps.length) return;
  const items = [...el.querySelectorAll('.sig-steps li')];
  const pos = el.querySelector('.arch-steppos');
  const prev = el.querySelector('[data-act="prev"]');
  const next = el.querySelector('[data-act="next"]');
  const levels = [...el.querySelectorAll('.sig-level')];
  const lamps = [...el.querySelectorAll('.sig-lamp')];
  el.classList.add('is-enhanced');
  el.querySelector('.sig-bar-ctl').hidden = false;
  let i = 0;
  let lvl = null;
  function show(k) {
    i = Math.max(0, Math.min(steps.length - 1, k));
    lvl = null;
    for (let j = 0; j <= i; j++) if (steps[j].level != null) lvl = steps[j].level;
    const st = steps[i];
    el.dataset.active = st.active.join(' ');
    el.dataset.telegram = st.telegram ? '1' : '0';
    for (const lamp of lamps) lamp.style.setProperty('--lvl', String((lvl ?? 0) / 100));
    for (const level of levels) level.textContent = lvl == null ? '' : s.level.replace('{n}', String(lvl));
    items.forEach((li, j) => li.classList.toggle('is-current', j === i));
    pos.textContent = s.pos.replace('{n}', String(i + 1)).replace('{total}', String(steps.length));
    prev.disabled = i === 0;
    next.disabled = i === steps.length - 1;
  }
  prev.addEventListener('click', () => show(i - 1));
  next.addEventListener('click', () => show(i + 1));
  el.querySelector('[data-act="again"]').addEventListener('click', () => show(0));
  el.addEventListener('keydown', (ev) => {
    if (!ev.target.closest('.sig-bar-ctl')) return;
    if (ev.key === 'ArrowRight') show(i + 1);
    if (ev.key === 'ArrowLeft') show(i - 1);
  });
  show(0);
}
