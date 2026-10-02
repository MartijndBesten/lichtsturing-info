import { callScene, fill, initialState, levelsText, roomSvg } from './control-core.js';

const levelsOf = (state) => Object.fromEntries(Object.entries(state.groups).map(([k, v]) => [k, v.level]));

export const fbClass = (el, kind) => {
  el.className = `ct-fb ct-fb--${kind}`;
};

export const M = {
  scenes(el, c) {
    const m = c.model;
    const saved = Object.fromEntries(m.scenes.map((s) => [s.id, Object.fromEntries(s.levels.map((l) => [l.group, l.level]))]));
    let current = m.scenes[0].id;
    let state = callScene(m, initialState(m), current);
    el.querySelector('.ct-editor').hidden = false;
    el.querySelector('.ct-static').hidden = true;
    const room = el.querySelector('.ct-editor [data-slot="room"]');
    const status = el.querySelector('.ct-editor [data-slot="status"]');
    const savedMsg = el.querySelector('[data-slot="saved"]');
    const rules = el.querySelector('[data-slot="rules"]');
    const sliders = [...el.querySelectorAll('.ct-slider input')];
    const model = () => ({ ...m, scenes: m.scenes.map((s) => ({ ...s, levels: Object.entries(saved[s.id]).map(([group, level]) => ({ group, level })) })) });
    const draw = (levels) => {
      room.innerHTML = roomSvg(m, levels, { title: c.strings.roomAria, uid: `${c.slug}-r` });
      status.textContent = levelsText(m, levels);
    };
    const load = (id) => {
      current = id;
      for (const b of el.querySelectorAll('.ct-chip[data-scene]')) b.setAttribute('aria-pressed', String(b.dataset.scene === id));
      for (const s of sliders) {
        const v = saved[id][s.dataset.group];
        s.disabled = v == null;
        s.value = String(v ?? 0);
        el.querySelector(`output[data-group="${s.dataset.group}"]`).textContent = v == null ? '—' : `${v} %`;
      }
      rules.textContent = c.rules[id] ? fill(c.strings.rules, { rules: c.rules[id] }) : '';
      savedMsg.textContent = '';
      draw(Object.fromEntries(sliders.map((s) => [s.dataset.group, Number(s.value)])));
    };
    for (const b of el.querySelectorAll('.ct-chip[data-scene]')) b.addEventListener('click', () => load(b.dataset.scene));
    for (const s of sliders) {
      s.addEventListener('input', () => {
        el.querySelector(`output[data-group="${s.dataset.group}"]`).textContent = `${s.value} %`;
        savedMsg.textContent = '';
        draw(Object.fromEntries(sliders.map((x) => [x.dataset.group, Number(x.value)])));
      });
    }
    el.querySelector('[data-act="save"]').addEventListener('click', () => {
      for (const s of sliders) if (!s.disabled) saved[current][s.dataset.group] = Number(s.value);
      savedMsg.textContent = fill(c.strings.saved, { scene: m.scenes.find((s) => s.id === current).label });
    });
    el.querySelector('[data-act="call"]').addEventListener('click', () => {
      state = callScene(model(), state, current);
      draw(levelsOf(state));
      savedMsg.textContent = fill(c.strings.called, { scene: m.scenes.find((s) => s.id === current).label });
    });
    if (c.task) {
      el.querySelector('.ct-task [data-act="check"]').addEventListener('click', () => {
        const fb = el.querySelector('.ct-task .ct-task-fb');
        const k = fb.querySelector('[data-slot="k"]');
        const lv = saved[c.task.scene];
        const ok = c.task.rules.every((r) => (r.min == null || lv[r.group] >= r.min) && (r.max == null || lv[r.group] <= r.max));
        fb.hidden = false;
        k.textContent = ok ? c.strings.right : c.strings.wrong;
        fbClass(k, ok ? 'werkt' : 'logisch');
        fb.querySelector('[data-slot="why"]').textContent = ok ? c.task.done : `${fill(c.strings.wrongScene, { scene: m.scenes.find((s) => s.id === c.task.scene).label })} ${c.task.hint}`;
      });
    }
    load(current);
  },

  sequence(el, c) {
    const steps = [...el.querySelectorAll('.ct-step')];
    const times = [...el.querySelectorAll('.ct-times li')];
    const ctl = el.querySelector('.ct-seq-ctl');
    const pos = el.querySelector('.ct-seq-pos');
    el.querySelector('.ct-times').hidden = false;
    ctl.hidden = false;
    el.classList.add('is-enhanced');
    let i = 0;
    const answered = new Set();
    const go = (k) => {
      i = Math.max(0, Math.min(steps.length - 1, k));
      steps.forEach((s, j) => s.classList.toggle('is-current', j === i));
      times.forEach((t, j) => {
        t.classList.toggle('is-current', j === i);
        t.classList.toggle('is-done', answered.has(j));
      });
      pos.textContent = fill(c.strings.pos, { n: i + 1, total: steps.length });
      ctl.querySelector('[data-act="prev"]').disabled = i === 0;
      ctl.querySelector('[data-act="next"]').disabled = i === steps.length - 1 || !answered.has(i);
    };
    steps.forEach((s, j) => {
      s.querySelector('.ct-reveal').hidden = true;
      const btns = [...s.querySelectorAll('.ct-pred')];
      for (const b of btns) {
        b.disabled = false;
        b.addEventListener('click', () => {
          const ok = b.dataset.opt === s.dataset.answer;
          for (const x of btns) {
            x.setAttribute('aria-pressed', String(x === b));
            x.classList.toggle('is-right', x === b && ok);
            x.classList.toggle('is-wrong', x === b && !ok);
            x.classList.toggle('is-answer', x !== b && x.dataset.opt === s.dataset.answer);
          }
          const rv = s.querySelector('.ct-reveal');
          rv.hidden = false;
          rv.open = true;
          const line = rv.querySelector('.ct-verdict-line');
          line.hidden = false;
          const v = line.querySelector('[data-slot="v"]');
          v.textContent = ok ? c.strings.right : c.strings.wrong;
          fbClass(v, ok ? 'werkt' : 'logisch');
          answered.add(j);
          go(j);
        });
      }
    });
    ctl.querySelector('[data-act="prev"]').addEventListener('click', () => go(i - 1));
    ctl.querySelector('[data-act="next"]').addEventListener('click', () => {
      go(i + 1);
      steps[i].querySelector('.ct-pred')?.focus();
    });
    ctl.querySelector('[data-act="again"]').addEventListener('click', () => {
      answered.clear();
      for (const s of steps) {
        s.querySelector('.ct-reveal').hidden = true;
        for (const x of s.querySelectorAll('.ct-pred')) {
          x.setAttribute('aria-pressed', 'false');
          x.classList.remove('is-right', 'is-wrong', 'is-answer');
        }
      }
      go(0);
    });
    go(0);
  },

  sources(el, c) {
    const scene = el.querySelector('[data-slot="scene"]');
    const log = el.querySelector('[data-slot="log"]');
    let n = 0;
    for (const b of el.querySelectorAll('.ct-src')) {
      b.disabled = false;
      b.addEventListener('click', () => {
        n += 1;
        const label = c.scenes[b.dataset.calls];
        scene.textContent = label;
        log.hidden = false;
        const li = document.createElement('li');
        li.textContent = fill(c.strings.log, { source: b.querySelector('.ct-src-k').textContent, scene: label });
        log.prepend(li);
        while (log.children.length > 5) log.lastElementChild.remove();
        for (const x of el.querySelectorAll('.ct-src')) x.classList.toggle('is-last', x === b);
        el.querySelector('.ct-zone').classList.remove('is-flash');
        void el.offsetWidth;
        el.querySelector('.ct-zone').classList.add('is-flash');
      });
    }
  },

  branches(el) {
    const ctl = el.querySelector('.ct-lanes-ctl');
    ctl.hidden = false;
    for (const b of ctl.querySelectorAll('.ct-chip')) {
      b.addEventListener('click', () => {
        for (const x of ctl.querySelectorAll('.ct-chip')) x.setAttribute('aria-pressed', String(x === b));
        for (const l of el.querySelectorAll('.ct-lane')) l.classList.toggle('is-dim', Boolean(b.dataset.lane) && l.dataset.lane !== b.dataset.lane);
      });
    }
  },
};
