import { planScale, planSvg, sectionSvg } from './sensor-plan.js';

function arrowKeys(container, sel, pick) {
  container.addEventListener('keydown', (ev) => {
    const btns = [...container.querySelectorAll(sel)];
    const i = btns.indexOf(document.activeElement);
    if (i < 0) return;
    let k = null;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') k = (i + 1) % btns.length;
    if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') k = (i - 1 + btns.length) % btns.length;
    if (k == null) return;
    ev.preventDefault();
    btns[k].focus();
    pick(btns[k]);
  });
}

export function room(el, c) {
  const ctl = el.querySelector('.sn-ctl--room');
  ctl.hidden = false;
  const state = { pos: c.start, ...c.overlays, uid: `${c.uid}-js` };
  const btns = [...ctl.querySelectorAll('[data-pos]')];
  const fbs = [...el.querySelectorAll('.sn-feedback')];
  const draw = () => {
    el.querySelector('[data-slot="plan"]').innerHTML = planSvg(c.scene, state, c.labels);
    el.querySelector('[data-slot="section"]').innerHTML = sectionSvg(c.scene, state, c.labels);
    for (const b of btns) b.setAttribute('aria-checked', String(b.dataset.pos === state.pos));
    for (const f of fbs) f.hidden = f.dataset.pos !== state.pos;
    const found = el.querySelector('.sn-found');
    if (found) found.hidden = c.scene.positions.find((p) => p.id === state.pos)?.verdict !== 'goed';
    for (const g of el.querySelectorAll('.sn-svg--plan .sn-cand')) {
      g.addEventListener('click', () => {
        state.pos = g.dataset.pos;
        draw();
      });
    }
  };
  for (const b of btns) b.addEventListener('click', () => {
    state.pos = b.dataset.pos;
    draw();
  });
  arrowKeys(ctl.querySelector('[role="radiogroup"]'), '[data-pos]', (b) => {
    state.pos = b.dataset.pos;
    draw();
  });
  const slot = el.querySelector('[data-slot="plan"]');
  const { s: sc, ox, oy } = planScale(c.scene);
  const toScene = (ev) => {
    const svg = slot.querySelector('svg');
    const pt = svg.createSVGPoint();
    pt.x = ev.clientX;
    pt.y = ev.clientY;
    const q = pt.matrixTransform(svg.getScreenCTM().inverse());
    return { x: (q.x - ox) / sc, y: (q.y - oy) / sc };
  };
  const nearest = (p) => c.scene.positions.reduce((a, b) => (Math.hypot(b.x - p.x, b.y - p.y) < Math.hypot(a.x - p.x, a.y - p.y) ? b : a));
  let dragging = false;
  slot.addEventListener('pointerdown', (ev) => {
    dragging = true;
    slot.setPointerCapture(ev.pointerId);
    slot.classList.add('is-dragging');
  });
  slot.addEventListener('pointermove', (ev) => {
    if (!dragging) return;
    const q = toScene(ev);
    const g = slot.querySelector('.sn-svg--plan .sn-sensor-top');
    if (g) g.setAttribute('transform', `translate(${(q.x - nearest(q).x) * sc} ${(q.y - nearest(q).y) * sc})`);
    const n = nearest(q);
    if (n.id !== state.pos) {
      state.pos = n.id;
      draw();
    }
  });
  const drop = (ev) => {
    if (!dragging) return;
    dragging = false;
    slot.classList.remove('is-dragging');
    state.pos = nearest(toScene(ev)).id;
    draw();
  };
  slot.addEventListener('pointerup', drop);
  slot.addEventListener('pointercancel', drop);
  for (const cb of ctl.querySelectorAll('input[data-layer]')) cb.addEventListener('change', () => {
    state[cb.dataset.layer] = cb.checked;
    draw();
  });
  el.classList.add('is-enhanced');
  draw();
}

export function place(el, c) {
  for (const li of el.querySelectorAll('.sn-case')) {
    const sc = c.scenes.find((s) => s.id === li.dataset.scene);
    const picks = [...li.querySelectorAll('.sn-pick')];
    const fbs = [...li.querySelectorAll('.sn-feedback')];
    for (const b of picks) {
      b.disabled = false;
      b.addEventListener('click', () => {
        const id = b.dataset.pos;
        for (const x of picks) {
          x.setAttribute('aria-pressed', String(x === b));
          x.classList.toggle('is-right', x === b && id === li.dataset.answer);
          x.classList.toggle('is-wrong', x === b && id !== li.dataset.answer);
          x.classList.toggle('is-answer', x !== b && x.dataset.pos === li.dataset.answer);
        }
        for (const f of fbs) f.hidden = f.dataset.pos !== id;
        li.querySelector('[data-slot="plan"]').innerHTML = planSvg(sc, { pos: id, detect: true, letters: true, reveal: true, uid: `${c.uid}-js` }, c.labels[sc.id]);
      });
    }
    li.querySelector('.sn-answer')?.classList.add('is-enhanced');
  }
}
