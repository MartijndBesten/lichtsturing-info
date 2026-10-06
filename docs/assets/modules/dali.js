export function mount(el, config = {}) {
  if (el.dataset.variant === 'build') return mountBuild(el, config);
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
      if (c.dataset.b) on = (id) => el.querySelector(`.dali-p[data-p="${id}"]`).dataset.kind === 'armatuur';
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
  mode(modes[0].dataset.mode);
}

function mountBuild(el, config) {
  const s = config.strings || {};
  const lum = config.lum || [];
  const tabs = [...el.querySelectorAll('.db-step')];
  const panels = [...el.querySelectorAll('.db-panel')];
  const checks = [...el.querySelectorAll('.db-matrix input')];
  const levels = [...el.querySelectorAll('.db-level')];
  const live = el.querySelector('.db-live');
  const taskState = el.querySelector('.db-task-state');
  const tryHint = el.querySelector('.db-try');
  const partsOf = (id) => [...el.querySelectorAll(`.dali-p[data-p="${id}"]`)];
  el.classList.add('is-enhanced');
  el.querySelector('.db-steps').hidden = false;
  const groups = Object.fromEntries(Object.keys(config.groups || {}).map((g) => [g, new Set()]));
  const scenes = JSON.parse(JSON.stringify(config.scenes || {}));
  const lit = {};
  let done = false;
  const say = (text) => {
    live.textContent = '';
    setTimeout(() => { live.textContent = text; }, 30); // leegmaken en opnieuw vullen: de live-regio meldt ook een herhaalde tekst
  };
  function paint() {
    for (const pill of el.querySelectorAll('.db-pill')) pill.classList.toggle('is-member', groups[pill.dataset.g]?.has(pill.dataset.p));
    for (const id of lum) {
      const v = lit[id];
      for (const p of partsOf(id)) {
        p.classList.toggle('is-on', v > 0);
        p.style.setProperty('--lvl', String((v || 0) / 100));
      }
      for (const txt of el.querySelectorAll(`[data-level="${id}"]`)) txt.textContent = v == null ? '' : `${v} %`;
    }
    const task = config.task || {};
    const ok = Object.keys(task).length > 0 && Object.entries(task).every(([g, ms]) => groups[g] && groups[g].size === ms.length && ms.every((m) => groups[g].has(m)));
    if (taskState) {
      taskState.textContent = ok ? s.taskOk : s.taskOpen;
      taskState.classList.toggle('is-ok', ok);
    }
    if (ok && !done) {
      done = true;
      if (tryHint) tryHint.hidden = false;
    }
  }
  for (const c of checks) {
    c.addEventListener('change', () => {
      groups[c.dataset.g][c.checked ? 'add' : 'delete'](c.dataset.p);
      paint();
      say(s.changed);
    });
  }
  for (const sel of levels) {
    sel.addEventListener('change', () => {
      const sc = scenes[sel.dataset.s];
      if (sel.value === 'negeren') delete sc[sel.dataset.p];
      else sc[sel.dataset.p] = Number(sel.value);
      say(s.changed);
    });
  }
  el.querySelector('.db-r-go').addEventListener('click', () => {
    const sc = scenes[el.querySelector('.db-r-scene').value] || {};
    const target = el.querySelector('.db-r-target').value;
    const who = target === '*' ? lum : lum.filter((id) => groups[target]?.has(id));
    let moved = 0;
    for (const id of who) {
      if (id in sc) {
        lit[id] = sc[id];
        moved++;
      }
    }
    paint();
    say(`${s.recalled.replace('{n}', String(moved))} ${s.untouched}`);
  });
  el.querySelector('.db-r-off').addEventListener('click', () => {
    for (const id of lum) lit[id] = 0;
    paint();
    say(`${s.off} ${s.untouched}`);
  });
  function show(m, focus = false) {
    el.dataset.mode = m;
    for (const b of tabs) {
      const on = b.dataset.mode === m;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    }
    for (const p of panels) p.hidden = p.dataset.mode !== m;
  }
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => show(b.dataset.mode));
    b.addEventListener('keydown', (ev) => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
      if (!k) return;
      ev.preventDefault();
      show(tabs[(i + k + tabs.length) % tabs.length].dataset.mode, true);
    });
  });
  show('adres');
  paint();
}
