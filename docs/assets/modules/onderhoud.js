const K = 1.5;
const X0 = 56;
const X1 = 344;
const Y0 = 196;
const YT = 28;
const PAUSE = 1800;

export function mount(el, config = {}) {
  const s = config.strings || {};
  const need = Number(el.dataset.need);
  const init = Number(el.dataset.init);
  const lo = Number(el.dataset.lo);
  const top = Number(el.dataset.top);
  const range = el.querySelector('.oh-range');
  const read = el.querySelector('.oh-read');
  const play = el.querySelector('.oh-play');
  const marker = el.querySelector('.oh-marker');
  const mline = el.querySelector('.oh-mline');
  const dotMax = el.querySelector('.oh-dot--max');
  const dotLit = el.querySelector('.oh-dot--lit');
  const items = [...el.querySelectorAll('.oh-item')];
  const modes = [...el.querySelectorAll('.oh-mode')];
  if (!range || !items.length) return;
  const at = items.map((li) => Number(li.dataset.at));
  const X = (t) => X0 + t * (X1 - X0);
  const Y = (l) => Y0 - ((l - lo) / (top - lo)) * (Y0 - YT);
  const max = (t) => init - (init - need) * ((1 - Math.exp(-K * t)) / (1 - Math.exp(-K)));
  const r5 = (n) => Math.round(n / 5) * 5;
  let stage = -1;
  let timer = 0;

  el.classList.add('is-enhanced');
  for (const n of el.querySelectorAll('.oh-controls, .oh-time, .oh-read, .oh-btn')) n.hidden = false;
  marker.removeAttribute('hidden');
  read.setAttribute('aria-live', 'polite');

  const stageAt = (v) => at.reduce((k, a, i) => (v >= a ? i : k), 0);
  const titleOf = (i) => items[i].querySelector('.oh-bt').textContent;
  const textOf = (i) => {
    const t = items[i].querySelector(`.oh-t--${el.dataset.mode}`);
    return `${titleOf(i)}: ${t ? t.textContent : ''}`;
  };
  const numbers = (v) => {
    const m = r5(max(v / 100));
    const lit = el.dataset.mode === 'vol' ? m : need;
    return String(s.readout || '').replace('{max}', m).replace('{need}', need).replace('{lit}', lit);
  };
  const move = (node, x, y) => { node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`; };
  const draw = (v, announce) => {
    const t = v / 100;
    move(mline, X(t), 0);
    move(dotMax, X(t), Y(max(t)));
    move(dotLit, X(t), Y(el.dataset.mode === 'vol' ? max(t) : need));
    const k = stageAt(v);
    range.setAttribute('aria-valuetext', `${titleOf(k)} — ${numbers(v)}`);
    for (const [i, li] of items.entries()) li.querySelector('.oh-btn').setAttribute('aria-pressed', String(i === k));
    if (k !== stage || announce) {
      stage = k;
      read.textContent = '';
      read.textContent = `${textOf(k)} ${numbers(v)}`;
    }
  };
  const set = (v, announce) => {
    range.value = String(v);
    draw(Number(v), announce);
  };
  const stop = () => {
    clearTimeout(timer);
    play.removeAttribute('aria-pressed');
    el.classList.remove('is-playing');
  };

  for (const b of modes) {
    b.addEventListener('click', () => {
      el.dataset.mode = b.dataset.m;
      for (const x of modes) x.setAttribute('aria-pressed', String(x === b));
      draw(Number(range.value), true);
    });
  }
  range.addEventListener('input', () => { stop(); el.classList.add('is-dragging'); draw(Number(range.value), false); });
  range.addEventListener('change', () => el.classList.remove('is-dragging'));
  for (const [i, li] of items.entries()) li.querySelector('.oh-btn').addEventListener('click', () => { stop(); el.classList.remove('is-dragging'); set(at[i], true); });
  play.addEventListener('click', () => {
    stop();
    el.classList.remove('is-dragging');
    play.setAttribute('aria-pressed', 'true');
    el.classList.add('is-playing');
    const from = Number(range.value) >= 100 ? 0 : stageAt(Number(range.value)) + (Number(range.value) > at[stageAt(Number(range.value))] ? 1 : 0);
    let i = Math.min(from, at.length - 1);
    const step = () => {
      set(at[i], true);
      if (++i < at.length) timer = setTimeout(step, PAUSE);
      else stop();
    };
    step();
  });
  set(0, true);
}
