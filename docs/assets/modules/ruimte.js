
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function mount(el, config) {
  const s = config.strings || {};
  const panel = el.querySelector('.rs-panel');
  const svg = el.querySelector('.rs-svg');
  if (!panel || !svg) return;
  const levels = config.levels || { uit: 0, basis: 0.24, gedimd: 0.55, vol: 1 };
  const dayMap = config.daylight || { geen: 0, weinig: 0.3, veel: 0.85 };
  const groups = config.groups || [];
  const positions = config.positions || {};

  const scenarios = [...el.querySelectorAll('.rs-scenario')].map((sec) => ({
    id: sec.dataset.sc,
    steps: [...sec.querySelectorAll('.rs-steps > li')].map((li) => ({
      at: li.dataset.at,
      presence: li.dataset.presence === '1',
      levels: Object.fromEntries((li.dataset.levels || '').split(' ').filter(Boolean).map((x) => x.split(':'))),
      day: dayMap[li.dataset.day] ?? 0,
      event: li.dataset.event || '',
      phase: li.dataset.phase || '',
      dur: Math.max(1.5, Number(li.dataset.dur) || 4),
      label: li.querySelector('strong')?.textContent || '',
      html: li.innerHTML,
    })),
  }));
  if (!scenarios.length || !scenarios[0].steps.length) return;

  const actors = [...svg.querySelectorAll('.rs-actor')];
  const groupEls = Object.fromEntries(groups.map((g) => [g.id, svg.querySelector(`.rs-g[data-g="${g.id}"]`)]));
  const lensEls = Object.fromEntries(groups.map((g) => [g.id, svg.querySelector(`.rs-lens[data-g="${g.id}"]`)]));
  const sky = svg.querySelector('.rs-sky');
  const dayEl = svg.querySelector('.rs-day');
  const dark = svg.querySelector('.rs-dark');
  const sigs = [...svg.querySelectorAll('.rs-sig')];
  const sensorEls = [...svg.querySelectorAll('.rs-sensor')];
  const flow = [...el.querySelectorAll('.rs-flow li')];
  const nowPos = panel.querySelector('.rs-now-pos');
  const nowLabel = panel.querySelector('.rs-now-label');
  const nowText = panel.querySelector('.rs-now-text');
  const now = panel.querySelector('.rs-now');
  const playBtn = panel.querySelector('[data-rs="play"]');
  const range = panel.querySelector('.rs-range');
  const phasesEl = panel.querySelector('.rs-phases');
  const dayCtl = panel.querySelector('[data-rs="day"]');
  const meters = Object.fromEntries([...panel.querySelectorAll('.rs-meters li')].map((li) => [li.dataset.g, li.querySelector('.rs-meter-fill')]));
  const tabs = [...panel.querySelectorAll('.rs-tabs [data-sc]')];

  let sc = 0;
  let idx = -1;
  let t = 0;
  let playing = false;
  let started = false;
  let tick = 0;
  let last = 0;
  let dayOverride = null;
  let poseTimer = 0;

  const steps = () => scenarios[sc].steps;
  const total = () => steps().reduce((a, x) => a + x.dur, 0);
  const startOf = (i) => steps().slice(0, i).reduce((a, x) => a + x.dur, 0);
  const indexAt = (time) => {
    let acc = 0;
    const st = steps();
    for (let i = 0; i < st.length; i++) {
      acc += st[i].dur;
      if (time < acc) return i;
    }
    return st.length - 1;
  };

  const eff = (g, step, day) => {
    const base = levels[step.levels[g.id] || 'uit'] ?? 0;
    if (!g.daylight || base < levels.gedimd) return base;
    return Math.max(base * 0.18, base * (1 - day * g.daylight));
  };

  const pulse = (node, cls) => {
    node.classList.remove(cls);
    void node.getBoundingClientRect();
    node.classList.add(cls);
  };

  function render(i, { announce = false } = {}) {
    const st = steps();
    const step = st[i];
    const prev = idx >= 0 && idx < st.length ? st[idx] : null;
    const changed = i !== idx;
    idx = i;
    const day = dayOverride ?? step.day;
    const pos = positions[step.at] || {};
    clearTimeout(poseTimer);
    for (const a of actors) {
      const p = pos[a.dataset.a];
      if (!p) {
        a.style.opacity = '0';
        continue;
      }
      const key = `${p.x},${p.y}`;
      const moved = Boolean(a.dataset.key) && a.dataset.key !== key;
      a.dataset.key = key;
      a.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.s})`;
      a.style.opacity = p.out ? '0' : '1';
      a.dataset.pose = moved && !reduce() ? 'walk' : p.pose || 'stand';
      if (moved && !reduce()) poseTimer = setTimeout(() => (a.dataset.pose = p.pose || 'stand'), 1500);
    }
    let max = 0;
    for (const g of groups) {
      const v = eff(g, step, day);
      max = Math.max(max, v);
      if (groupEls[g.id]) groupEls[g.id].style.opacity = String(v);
      if (lensEls[g.id]) lensEls[g.id].style.opacity = String(0.25 + v * 0.75);
      if (meters[g.id]) meters[g.id].style.width = `${Math.round(v * 100)}%`;
    }
    if (sky) sky.style.opacity = String(day);
    if (dayEl) dayEl.style.opacity = String(day);
    if (dark) dark.style.opacity = String(0.62 * (1 - Math.min(1, max * 0.9 + day * 0.85)));
    if (dayCtl && dayOverride == null) dayCtl.value = String(Math.round(step.day * 100));
    if (changed) {
      const lit = new Set();
      if (step.event === 'sensor' || step.event === 'daglicht') lit.add('in');
      if (step.event === 'knop' || step.event === 'scene') lit.add('knop');
      const changing = groups.filter((g) => !prev || (prev.levels[g.id] || 'uit') !== (step.levels[g.id] || 'uit')).map((g) => g.id);
      for (const p of sigs) {
        const on = (p.dataset.leg === 'uit' && step.event && changing.includes(p.dataset.g)) || lit.has(p.dataset.leg);
        const sensorOk = !p.dataset.s || p.dataset.s === step.at;
        p.classList.toggle('is-active', Boolean(on && sensorOk));
        if (on && sensorOk) pulse(p, 'is-active');
      }
      for (const se of sensorEls) {
        const hit = (step.event === 'sensor' || step.event === 'daglicht') && (sensorEls.length === 1 || se.dataset.s === step.at);
        se.classList.toggle('is-ping', hit);
        if (hit) pulse(se, 'is-ping');
      }
      const ctrl = svg.querySelector('.rs-ctrl');
      if (ctrl) ctrl.classList.toggle('is-busy', Boolean(step.event));
      const sw = svg.querySelector('.rs-switch');
      if (sw) sw.classList.toggle('is-pressed', step.event === 'knop' || step.event === 'scene');
      flow.forEach((f, k) => {
        f.classList.remove('is-on');
        if (step.event) setTimeout(() => f.classList.add('is-on'), reduce() ? 0 : k * 260);
      });
    }
    nowPos.textContent = `${s.step || 'Stap'} ${i + 1}/${st.length} · `;
    nowLabel.textContent = step.label;
    const tmp = document.createElement('div');
    tmp.innerHTML = step.html;
    tmp.querySelector('strong')?.remove();
    nowText.textContent = ` ${tmp.textContent.trim()}`;
    now.setAttribute('aria-live', announce ? 'polite' : 'off');
    [...phasesEl.children].forEach((li, k) => li.classList.toggle('is-current', k === i));
  }

  function setTime(time, opts) {
    t = Math.max(0, Math.min(total(), time));
    range.value = String(t);
    const i = indexAt(t);
    if (i !== idx || opts?.force) render(i, opts);
  }

  function frame() {
    if (!playing) return;
    const now = Date.now();
    const dt = last ? (now - last) / 1000 : 0;
    last = now;
    t += dt;
    if (t >= total()) {
      if (config.loop) {
        t = 0;
        dayOverride = null;
      } else {
        setTime(total() - 0.001);
        stop();
        return;
      }
    }
    setTime(t);
  }
  function play() {
    if (t >= total() - 0.01) {
      t = 0;
      idx = -1;
      dayOverride = null;
    }
    playing = true;
    started = true;
    last = 0;
    el.classList.add('is-playing');
    playBtn.textContent = s.pause || 'Pauze';
    if (idx < 0) setTime(t, { force: true });
    clearInterval(tick);
    tick = setInterval(frame, 100);
  }
  function stop() {
    playing = false;
    clearInterval(tick);
    el.classList.remove('is-playing');
    playBtn.textContent = t >= total() - 0.01 ? s.replay || 'Opnieuw' : s.play || 'Afspelen';
  }
  const jump = (i) => {
    stop();
    const n = steps().length;
    const k = Math.max(0, Math.min(n - 1, i));
    setTime(startOf(k) + 0.001, { announce: true, force: true });
  };

  function buildPhases() {
    const T = total();
    phasesEl.replaceChildren(
      ...steps().map((st, k) => {
        const li = document.createElement('li');
        li.style.flexGrow = String(st.dur / T);
        li.dataset.phase = st.phase;
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = st.label;
        b.title = st.label;
        b.addEventListener('click', () => jump(k));
        li.append(b);
        return li;
      }),
    );
    range.max = String(T);
    range.value = '0';
  }
  function selectScenario(k) {
    stop();
    sc = k;
    idx = -1;
    t = 0;
    dayOverride = null;
    tabs.forEach((b, i) => b.setAttribute('aria-checked', i === k ? 'true' : 'false'));
    buildPhases();
    setTime(0.001, { force: true, announce: true });
    playBtn.textContent = s.play || 'Afspelen';
  }

  panel.hidden = false;
  el.classList.add('rs-ready');
  playBtn.addEventListener('click', () => (playing ? stop() : play()));
  panel.addEventListener('pointerdown', () => (started = true), { capture: true });
  panel.querySelector('[data-rs="prev"]').addEventListener('click', () => jump(idx - 1));
  panel.querySelector('[data-rs="next"]').addEventListener('click', () => jump(idx + 1));
  range.addEventListener('input', () => {
    stop();
    setTime(Number(range.value), { announce: true });
  });
  tabs.forEach((b, k) => b.addEventListener('click', () => selectScenario(k)));
  for (const box of panel.querySelectorAll('input[type="checkbox"][data-rs]')) {
    box.addEventListener('change', () => el.classList.toggle(`rs--${box.dataset.rs}`, box.checked));
  }
  if (dayCtl) {
    dayCtl.addEventListener('input', () => {
      dayOverride = Number(dayCtl.value) / 100;
      render(idx);
    });
  }

  buildPhases();
  setTime(0.001, { force: true });
  playBtn.textContent = s.play || 'Afspelen';

  if (config.autoplay && !reduce() && 'IntersectionObserver' in window) {
    let autoPaused = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && (!started || (autoPaused && !playing))) {
            autoPaused = false;
            play();
          } else if (!e.isIntersecting && playing) {
            autoPaused = true;
            stop();
          }
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
  }
}
