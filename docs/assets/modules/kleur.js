export function mount(el, config = {}) {
  const s = config.strings || {};
  const $$ = (q) => [...el.querySelectorAll(q)];
  const flow = $$('.ix-flow li');
  const state = el.querySelector('.kl-state');
  const decide = flow[2];
  const def = decide ? decide.textContent : '';
  let timers = [];
  el.classList.add('is-enhanced');
  for (const n of $$('.kl-modes, .kl-controls')) n.hidden = false;
  const say = () => {
    const dt8 = el.dataset.mode === 'dt8';
    state.textContent = String(s.state || '')
      .replace('{mode}', dt8 ? s.dt8 : s.dt6)
      .replace('{level}', el.dataset.level)
      .replace('{tc}', dt8 ? (s.tc || {})[el.dataset.tc] || '' : '—');
  };
  const sync = () => {
    for (const b of $$('.kl-mode')) b.setAttribute('aria-pressed', String(b.dataset.m === el.dataset.mode));
    for (const b of $$('.kl-btn[data-level]')) b.setAttribute('aria-pressed', String(b.dataset.level === el.dataset.level));
    for (const b of $$('.kl-btn[data-tc]')) {
      b.disabled = el.dataset.mode === 'dt6';
      b.setAttribute('aria-pressed', String(el.dataset.mode === 'dt8' && b.dataset.tc === el.dataset.tc));
    }
    if (decide) decide.textContent = el.dataset.mode === 'dt6' ? decide.dataset.alt || def : def;
  };
  const run = (apply) => {
    timers.forEach(clearTimeout);
    timers = [];
    for (const li of flow) li.classList.remove('is-on');
    el.classList.remove('ix-signal', 'ix-decide');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = [() => {}, () => el.classList.add('ix-signal'), () => el.classList.replace('ix-signal', 'ix-decide'), () => { el.classList.remove('ix-decide'); apply(); sync(); say(); }];
    steps.forEach((fn, k) => {
      const go = () => { flow[k]?.classList.add('is-on'); fn(); };
      if (reduce || !flow.length) go();
      else timers.push(setTimeout(go, k * 450));
    });
  };
  for (const b of $$('.kl-mode')) b.addEventListener('click', () => { el.dataset.mode = b.dataset.m; sync(); say(); });
  for (const b of $$('.kl-btn[data-level]')) b.addEventListener('click', () => run(() => { el.dataset.level = b.dataset.level; }));
  for (const b of $$('.kl-btn[data-tc]')) b.addEventListener('click', () => run(() => { el.dataset.tc = b.dataset.tc; }));
  sync();
  say();
}
