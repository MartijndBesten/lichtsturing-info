const STEP = 450;
const STATES = {
  normaal: { before: null, after: { meter: 0.5, machine: 'uit', light: 'normaal', battery: 'rust', pv: 'laag' } },
  piek: { before: { meter: 0.97, machine: 'start', light: 'normaal', battery: 'rust', pv: 'laag' }, after: { meter: 0.7, machine: 'start', light: 'lager', battery: 'levert', pv: 'laag' } },
  napiek: { before: { meter: 0.62, machine: 'aan', light: 'lager', battery: 'rust', pv: 'laag' }, after: { meter: 0.68, machine: 'aan', light: 'normaal', battery: 'laadt', pv: 'laag' } },
  zon: { before: { meter: 0.18, machine: 'aan', light: 'normaal', battery: 'rust', pv: 'hoog' }, after: { meter: 0.28, machine: 'aan', light: 'normaal', battery: 'laadt', pv: 'hoog' } },
};

export function mount(el, config = {}) {
  const flows = (config.strings || {}).flows || {};
  const btns = [...el.querySelectorAll('.fx-btn')];
  const items = [...el.querySelectorAll('.fx-item')];
  const strip = el.querySelector('.ix-flow');
  const flow = strip ? [...strip.children] : [];
  const level = el.querySelector('.fx-level');
  if (!btns.length || !level) return;
  let timers = [];
  el.classList.add('is-enhanced');
  el.querySelector('.fx-pick').hidden = false;
  const apply = (st) => {
    level.style.transform = `scaleY(${st.meter})`;
    el.dataset.over = String(st.meter > 0.76);
    for (const k of ['machine', 'light', 'battery', 'pv']) el.dataset[k] = st[k];
  };
  const pick = (id) => {
    timers.forEach(clearTimeout);
    timers = [];
    const s = STATES[id];
    el.dataset.state = id;
    el.classList.remove('ix-signal', 'ix-decide');
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.s === id));
    for (const it of items) it.hidden = it.dataset.s !== id;
    const texts = flows[id];
    if (strip) strip.hidden = !texts;
    for (const [i, li] of flow.entries()) {
      li.classList.remove('is-on');
      li.textContent = texts ? texts[i] : '';
    }
    if (!texts || !s.before) { apply(s.after); return; }
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = [
      () => apply(s.before),
      () => el.classList.add('ix-signal'),
      () => el.classList.replace('ix-signal', 'ix-decide'),
      () => { el.classList.remove('ix-decide'); apply(s.after); },
    ];
    steps.forEach((fn, k) => {
      const go = () => { flow[k]?.classList.add('is-on'); fn(); };
      if (reduce) go();
      else timers.push(setTimeout(go, k * STEP));
    });
  };
  for (const b of btns) b.addEventListener('click', () => pick(b.dataset.s));
  pick(btns[0].dataset.s);
}
