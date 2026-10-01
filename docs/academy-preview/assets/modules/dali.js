export function mount(el, config = {}) {
  const modes = [...el.querySelectorAll('.dali-mode')];
  const panels = [...el.querySelectorAll('.dali-panel')];
  const parts = [...el.querySelectorAll('.dali-p')];
  const chips = [...el.querySelectorAll('.dali-chip')];
  const groups = config.groups || {};
  const scenes = config.scenes || {};
  el.classList.add('is-enhanced');
  el.querySelector('.dali-modes').hidden = false;
  const clear = () => {
    for (const p of parts) {
      p.classList.remove('is-on', 'is-off');
      p.style.removeProperty('--lvl');
      p.querySelector('.dali-level').textContent = '';
    }
    for (const c of chips) c.setAttribute('aria-pressed', 'false');
    el.classList.remove('has-pick');
  };
  function mode(m) {
    for (const b of modes) b.setAttribute('aria-pressed', String(b.dataset.mode === m));
    for (const p of panels) p.hidden = p.dataset.mode !== m;
    el.dataset.mode = m;
    clear();
  }
  for (const b of modes) b.addEventListener('click', () => mode(b.dataset.mode));
  for (const c of chips) {
    c.disabled = false;
    c.addEventListener('click', () => {
      const was = c.getAttribute('aria-pressed') === 'true';
      clear();
      if (was) return;
      c.setAttribute('aria-pressed', 'true');
      el.classList.add('has-pick');
      let on = () => false;
      if (c.dataset.p) on = (id) => id === c.dataset.p;
      if (c.dataset.g) on = (id) => (groups[c.dataset.g] || []).includes(id);
      if (c.dataset.s) {
        const lv = scenes[c.dataset.s] || {};
        on = (id) => id in lv;
        for (const p of parts) {
          if (!(p.dataset.p in lv)) continue;
          p.style.setProperty('--lvl', String(lv[p.dataset.p] / 100));
          p.querySelector('.dali-level').textContent = `${lv[p.dataset.p]} %`;
        }
      }
      for (const p of parts) {
        p.classList.toggle('is-on', on(p.dataset.p));
        p.classList.toggle('is-off', !on(p.dataset.p));
      }
    });
  }
  mode('adres');
}
