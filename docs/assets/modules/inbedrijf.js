export function mount(el, config = {}) {
  const s = config.strings || {};
  const lum = config.lum || {};
  const ids = Object.keys(lum);
  const $ = (q) => el.querySelector(q);
  const $$ = (q) => [...el.querySelectorAll(q)];
  const part = (id) => $(`.ib-lum[data-l="${id}"]`);
  const steps = $$('.ib-step');
  const panels = $$('.ib-panel');
  const state = { found: false, placed: new Set(), group: {}, fn: { aanwezigheid: new Set(), daglicht: new Set() } };
  el.classList.add('is-enhanced');
  $('.ib-steps').hidden = false;

  for (const r of $$('.ib-groups input')) r.checked = false;
  for (const c of $$('.ib-fn input')) c.checked = false;
  const same = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
  const groupsOk = () => ids.every((id) => state.group[id] === lum[id].group);
  const fnOk = () => same([...state.fn.aanwezigheid], config.sensor.groups) && same([...state.fn.daglicht], config.sensor.daylight);

  function paint(light = {}) {
    for (const id of ids) {
      const p = part(id);
      const g = state.group[id];
      p.classList.toggle('is-placed', state.placed.has(id));
      for (const [k, gid] of (config.groups || []).entries()) p.classList.toggle(`is-g${k}`, g === gid);
      p.classList.toggle('is-on', light[id] === 'on');
      p.classList.toggle('is-dim', light[id] === 'dim');
    }
    el.classList.toggle('is-found', state.found);
  }
  const say = (q, text, ok) => {
    const n = $(q);
    n.textContent = text;
    n.classList.toggle('is-ok', Boolean(ok));
  };

  $('.ib-search').addEventListener('click', () => {
    state.found = true;
    for (const b of $$('.ib-blink')) b.disabled = false;
    paint();
  });
  for (const b of $$('.ib-blink')) {
    b.addEventListener('click', () => {
      const id = b.dataset.l;
      for (const x of $$('.ib-lum')) x.classList.remove('is-blink');
      for (const x of $$('.ib-blink')) x.setAttribute('aria-pressed', String(x === b));
      part(id).classList.add('is-blink');
      state.placed.add(id);
      el.querySelector(`.ib-place[data-l="${id}"]`).classList.add('is-known');
      paint();
      say('.ib-state--placed', s.placed.replace('{n}', String(state.placed.size)).replace('{total}', String(ids.length)), state.placed.size === ids.length);
    });
  }
  for (const r of $$('.ib-groups input')) {
    r.addEventListener('change', () => {
      state.group[r.dataset.l] = r.value;
      paint();
      say('.ib-state--groups', groupsOk() ? s.groupsOk : s.groupsOpen, groupsOk());
    });
  }
  for (const c of $$('.ib-fn input')) {
    c.addEventListener('change', () => {
      state.fn[c.dataset.fn][c.checked ? 'add' : 'delete'](c.dataset.g);
      say('.ib-state--fn', fnOk() ? s.functionOk : s.functionOpen, fnOk());
    });
  }
  let present = false;
  let day = false;
  function test() {
    const light = {};
    for (const id of ids) {
      const g = state.group[id];
      const on = present && g && state.fn.aanwezigheid.has(g);
      light[id] = on ? (day && state.fn.daglicht.has(g) ? 'dim' : 'on') : 'off';
    }
    paint(light);
    el.classList.toggle('is-present', present);
    el.classList.toggle('is-day', day);
    const want = (id) => (present && config.sensor.groups.includes(lum[id].group) ? (day && config.sensor.daylight.includes(lum[id].group) ? 'dim' : 'on') : 'off');
    const ok = ids.every((id) => light[id] === want(id));
    const msg = ids.filter((id) => light[id] !== want(id)).map((id) => `${el.querySelector(`.ib-place[data-l="${id}"]`).textContent}: ${s[`test${want(id) === 'on' ? 'On' : want(id) === 'dim' ? 'Dim' : 'Off'}`]}`);
    say('.ib-state--test', ok ? s.testOk : msg.join(' · '), ok);
  }
  for (const b of $$('.ib-test')) {
    b.disabled = false;
    b.addEventListener('click', () => {
      if (b.dataset.t === 'binnen') present = true;
      if (b.dataset.t === 'weg') present = false;
      if (b.dataset.t === 'daglicht') day = !day;
      test();
    });
  }
  function show(id, focus = false) {
    el.dataset.step = id;
    for (const b of steps) {
      const on = b.dataset.step === id;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    }
    for (const p of panels) p.hidden = p.dataset.step !== id;
    for (const x of $$('.ib-lum')) x.classList.remove('is-blink');
    if (id === 'testen') test();
    else paint();
  }
  steps.forEach((b, i) => {
    b.addEventListener('click', () => show(b.dataset.step));
    b.addEventListener('keydown', (ev) => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
      if (!k) return;
      ev.preventDefault();
      show(steps[(i + k + steps.length) % steps.length].dataset.step, true);
    });
  });
  $('.ib-search').disabled = false;
  show(steps[0].dataset.step);
}
