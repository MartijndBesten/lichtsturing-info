
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const LV = { uit: 0, min: 0.18, basis: 0.24, laag: 0.3, gedimd: 0.55, vol: 1 };
const ACTS = {
  switch: ['schakel'],
  pushdim: ['kort', 'lang'],
  rotary: ['drukken', 'draai'],
  sensor: ['binnen', 'weg', 'day'],
  broadcast: ['binnen', 'weg', 'day'],
  systeem: ['binnen', 'weg', 'knop', 'day'],
  lms: ['binnen', 'weg', 'scene', 'tijd', 'storing', 'day'],
  draadloos: ['binnen', 'weg', 'knop'],
  hybride: ['binnen', 'weg', 'knop'],
  gebouw: ['binnen', 'melden', 'storing', 'gbs'],
};
const MANUAL = ['switch', 'pushdim', 'rotary'];
const VIA_CTRL = ['systeem', 'lms', 'gebouw'];

export function mount(el, config) {
  const s = config.strings || {};
  const svg = el.querySelector('.ld-svg');
  if (!svg) return;
  const q = (sel) => svg.querySelector(sel);
  const qa = (sel) => [...svg.querySelectorAll(sel)];
  const zones = ['a', 'b'].map((z) => [q(`.ld-g[data-z="${z}"]`), q(`.ld-lens[data-z="${z}"]`)]);
  const sky = q('.rs-sky');
  const dayEl = q('.rs-day');
  const dark = q('.ld-dark');
  const actor = q('.rs-actor');
  const sensor = q('.rs-sensor');
  const radios = [...el.querySelectorAll('.ld-levels input')];
  const pos = config.positions || {};
  let st = {};
  let timers = [];

  const later = (ms, fn) => timers.push(setTimeout(fn, ms));
  const level = () => radios.find((r) => r.checked)?.value;
  const section = () => el.querySelector(`.ld-level[data-lv="${level()}"]`);
  const kind = () => section()?.querySelector('.ld-actions')?.dataset.kind || '';
  const visible = (sel) => qa(sel).filter((n) => (n.closest('[data-on]')?.dataset.on || '').split(' ').includes(level()));
  const status = (key) => {
    const out = section()?.querySelector('.ld-status');
    if (out) out.textContent = s[key] || '';
  };
  const restart = (node, cls) => {
    if (!node) return;
    node.classList.remove(cls);
    void node.getBoundingClientRect();
    node.classList.add(cls);
  };
  const flag = (sel, ms) => visible(sel).forEach((n) => {
    n.classList.add('is-on');
    if (ms) later(ms, () => n.classList.remove('is-on'));
  });

  function paint() {
    const day = st.day;
    const dim = (v, f) => (st.auto && v >= LV.gedimd ? Math.max(LV.min, v * (1 - day * f)) : v);
    let a = dim(st.a, 0.8);
    let b = dim(st.b, 0.35);
    if (st.broadcast) a = b = dim(Math.max(st.a, st.b), 0.55);
    [a, b].forEach((v, i) => {
      const [g, l] = zones[i];
      if (g) g.style.opacity = String(v);
      if (l) l.style.opacity = String(0.25 + v * 0.75);
    });
    if (sky) sky.style.opacity = String(day);
    if (dayEl) dayEl.style.opacity = String(day);
    if (dark) dark.style.opacity = String(0.6 * (1 - Math.min(1, Math.max(a, b) * 0.9 + day * 0.85)));
  }
  const both = (v) => {
    st.a = v;
    st.b = v;
  };

  function place(key) {
    const p = pos[key];
    if (!actor || !p) return;
    const moved = Boolean(actor.dataset.key) && actor.dataset.key !== key;
    actor.dataset.key = key;
    actor.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.s})`;
    actor.style.opacity = p.out ? '0' : '1';
    actor.dataset.pose = moved && !reduce() ? 'walk' : 'stand';
    if (moved && !reduce()) later(1500, () => (actor.dataset.pose = 'stand'));
  }

  function flash(name, delay = 0) {
    later(delay, () => {
      for (const p of qa(`.ld-sig[data-sig="${name}"]`)) restart(p, 'is-active');
      later(2600, () => qa(`.ld-sig[data-sig="${name}"]`).forEach((p) => p.classList.remove('is-active')));
    });
  }
  function busy(delay) {
    later(delay, () => visible('.rs-ctrl').forEach((c) => {
      c.classList.add('is-busy');
      later(1600, () => c.classList.remove('is-busy'));
    }));
  }
  function send(src) {
    const k = kind();
    if (k === 'switch' || k === 'pushdim') return flash('w230'), 300;
    if (k === 'rotary') return flash('draai'), 300;
    if (k === 'sensor' || k === 'broadcast') return flash('sensor'), 400;
    if (k === 'draadloos' || k === 'hybride') {
      visible('.ld-arcs').forEach((a, i) => later(i * 90, () => restart(a, 'is-ping')));
      if (k === 'hybride') flash('gw', 500);
      return 500;
    }
    if (src !== 'ctrl') flash(src === 'knop' ? 'meld-knop' : 'meld-sensor');
    busy(src === 'ctrl' ? 0 : 900);
    flash('opdracht', src === 'ctrl' ? 0 : 1100);
    return src === 'ctrl' ? 500 : 1500;
  }
  const apply = (src, fn, key) => later(send(src), () => {
    fn();
    paint();
    if (key) status(key);
  });
  function press() {
    for (const c of visible('.ld-ctl')) {
      restart(c, 'is-pressed');
      later(700, () => c.classList.remove('is-pressed'));
    }
  }
  const toggle = () => {
    press();
    st.on = !st.on;
    apply('knop', () => both(st.on ? st.lvl : LV.uit), st.on ? 'aan' : 'uit');
  };

  const act = {
    schakel: toggle,
    kort: toggle,
    drukken: toggle,
    lang() {
      press();
      if (!st.on) {
        st.on = true;
        st.dir = 1;
        both(LV.min);
        paint();
      }
      const up = st.dir > 0;
      st.lvl = up ? LV.vol : LV.laag;
      st.dir = -st.dir;
      apply('knop', () => both(st.lvl), up ? 'dimOp' : 'dimAf');
    },
    draai(v, done) {
      st.lvl = Math.max(0.12, v / 100);
      st.on = true;
      both(st.lvl);
      paint();
      if (done) flash('draai');
    },
    binnen() {
      st.gen++;
      place('binnen');
      if (!['draadloos', 'hybride'].includes(kind())) restart(sensor, 'is-ping');
      apply('sensor', () => {
        st.auto = true;
        both(LV.vol);
      }, 'aanwezig');
    },
    weg() {
      const g = ++st.gen;
      place('buiten');
      status('nalooptijd');
      const via = VIA_CTRL.includes(kind());
      if (via) flash('meld-sensor');
      later(3000, () => g === st.gen && apply(via ? 'ctrl' : 'sensor', () => both(LV.basis), 'basis'));
      later(6500, () => g === st.gen && apply(via ? 'ctrl' : 'sensor', () => both(LV.uit), 'uit'));
    },
    knop() {
      press();
      st.gen++;
      const lit = Math.max(st.a, st.b) > 0;
      apply('knop', () => {
        st.auto = !lit;
        both(lit ? LV.uit : LV.vol);
      }, lit ? 'uit' : 'aan');
    },
    scene() {
      press();
      st.gen++;
      apply('knop', () => {
        st.auto = false;
        st.a = LV.uit;
        st.b = LV.gedimd;
      }, 'sceneAan');
    },
    tijd() {
      const g = ++st.gen;
      apply('ctrl', () => both(LV.basis), 'tijdschema');
      later(3500, () => g === st.gen && apply('ctrl', () => both(LV.uit), 'uit'));
    },
    storing() {
      const gbs = kind() === 'gebouw';
      flag('.ld-fault', 9000);
      flash('storing');
      flash('net', 1200);
      if (gbs) flash('gbs', 2400);
      later(gbs ? 3400 : 2200, () => {
        visible('.ld-alert').forEach((n) => n.classList.add('is-on'));
        status(gbs ? 'storingGbs' : 'storingGemeld');
      });
      later(9000, () => qa('.ld-alert').forEach((n) => n.classList.remove('is-on')));
    },
    melden() {
      busy(0);
      flash('net', 200);
      flash('gbs', 1400);
      later(2400, () => {
        flag('.ld-gbs-on', 4000);
        status('statusGbs');
      });
    },
    gbs() {
      st.gen++;
      flash('gbs-terug');
      flash('net-terug', 1100);
      later(2200, () => apply('ctrl', () => {
        st.auto = false;
        both(LV.basis);
      }, 'opdrachtGbs'));
    },
    day(v, done) {
      st.day = v / 100;
      paint();
      if (done && st.auto && Math.max(st.a, st.b) >= LV.gedimd) {
        const via = VIA_CTRL.includes(kind());
        flash(via ? 'meld-sensor' : 'sensor');
        if (via) flash('opdracht', 1100);
      }
    },
  };

  function build(sec, k) {
    const box = sec.querySelector('.ld-actions');
    if (!box || box.dataset.built) return;
    box.dataset.built = '1';
    for (const a of ACTS[k] || []) {
      if (a === 'day' || a === 'draai') {
        const label = document.createElement('label');
        label.className = 'ld-range';
        const span = document.createElement('span');
        span.textContent = s[a] || a;
        const input = document.createElement('input');
        input.type = 'range';
        input.min = a === 'day' ? '0' : '10';
        input.max = '100';
        input.dataset.act = a;
        input.addEventListener('input', () => act[a](Number(input.value), false));
        input.addEventListener('change', () => act[a](Number(input.value), true));
        label.append(span, input);
        box.append(label);
      } else {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'ld-btn';
        b.textContent = s[a] || a;
        b.addEventListener('click', () => act[a]());
        box.append(b);
      }
    }
    const out = document.createElement('p');
    out.className = 'ld-status';
    out.setAttribute('aria-live', 'polite');
    box.after(out);
    box.hidden = false;
  }

  function reset() {
    timers.forEach(clearTimeout);
    timers = [];
    qa('.is-active, .is-ping, .is-on, .is-busy, .is-pressed').forEach((n) => n.classList.remove('is-active', 'is-ping', 'is-on', 'is-busy', 'is-pressed'));
    const k = kind();
    const manual = MANUAL.includes(k);
    st = { on: manual, lvl: LV.vol, dir: -1, day: 0, auto: false, broadcast: k === 'broadcast', gen: 0, a: manual ? LV.vol : LV.uit, b: manual ? LV.vol : LV.uit };
    const sec = section();
    if (sec) {
      build(sec, k);
      sec.querySelectorAll('input[type="range"]').forEach((r) => (r.value = r.dataset.act === 'day' ? '0' : '100'));
    }
    place(manual ? 'binnen' : 'buiten');
    paint();
    status(manual ? 'aan' : 'leeg');
  }
  const choose = (lv) => {
    const r = radios.find((x) => x.value === lv);
    if (!r) return;
    r.checked = true;
    reset();
  };

  const cur = el.querySelector('.ld-current');
  if (cur) {
    const step = (d) => {
      const i = radios.findIndex((r) => r.checked) + d;
      if (radios[i]) choose(radios[i].value);
    };
    const btn = (d, label, txt) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ld-step';
      b.setAttribute('aria-label', label);
      b.textContent = txt;
      b.addEventListener('click', () => step(d));
      return b;
    };
    cur.prepend(btn(-1, s.prev || '', '‹'));
    cur.append(btn(1, s.next || '', '›'));
  }

  el.querySelector('.ld-levels')?.addEventListener('change', () => {
    reset();
    history.replaceState(null, '', `#niveau-${level()}`);
  });
  el.classList.add('ld-ready');
  const fromHash = () => {
    const m = /^#niveau-([a-z-]+)$/.exec(location.hash);
    return m && radios.some((r) => r.value === m[1]) ? m[1] : null;
  };
  window.addEventListener('hashchange', () => fromHash() && choose(fromHash()));
  if (fromHash()) choose(fromHash());
  else reset();
}
