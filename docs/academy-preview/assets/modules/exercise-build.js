import { showFeedback } from './check.js';

export function buildQuestion(q, el, s) {
  const fig = el.querySelector('.arch');
  if (!fig) return;
  fig.dataset.select = q.dataset.q;
  const rows = [...q.querySelectorAll('.build-row')];
  const selects = rows.map((r) => r.querySelector('select'));
  const chips = [...q.querySelectorAll('.build-chip')];
  const spots = [...fig.querySelectorAll('.arch-slot, .arch-link[data-blank]')];
  const feedback = q.querySelector('.ex-feedback');
  const answer = q.querySelector('.ex-answer');
  const actions = q.querySelector('.ex-select-actions');
  if (actions) actions.hidden = false;
  for (const c of chips) c.disabled = false;
  const idOf = (g) => g.dataset.node || g.dataset.link;
  const places = (id) => spots.filter((g) => idOf(g) === id);
  const selOf = (id) => selects.find((x) => x.dataset.plek === id);
  let armedChip = null;
  let armedPlace = null;
  const setChip = (c) => {
    armedChip = c;
    for (const x of chips) x.setAttribute('aria-pressed', String(x === c));
  };
  const setPlace = (id) => {
    armedPlace = id;
    for (const g of spots) g.classList.toggle('is-selected', idOf(g) === id);
    for (const r of rows) r.classList.toggle('is-selecting', r.dataset.plek === id);
  };
  const wrapText = (text, g) => {
    const max = g.closest('.arch-svg--v') ? 44 : 17;
    const lines = [''];
    for (const w of text.split(' ')) {
      const last = lines[lines.length - 1];
      if (last && `${last} ${w}`.length > max) lines.push(w);
      else lines[lines.length - 1] = `${last} ${w}`.trim();
    }
    if (lines.length > 2) {
      lines.length = 2;
      lines[1] = `${lines[1].slice(0, max - 1)}…`;
    }
    return lines;
  };
  const paint = (sel) => {
    const v = sel.value;
    const medium = v ? sel.selectedOptions[0]?.dataset.medium : null;
    for (const g of places(sel.dataset.plek)) {
      g.classList.toggle('is-filled', Boolean(v));
      g.classList.remove('is-right', 'is-wrong');
      const text = g.querySelector('text');
      if (sel.dataset.kind === 'node') {
        const lines = v ? wrapText(v, g) : [g.dataset.slot];
        if (!text.dataset.y) text.dataset.y = text.getAttribute('y');
        text.setAttribute('y', String(Number(text.dataset.y) - (lines.length > 1 ? 6 : 0)));
        text.replaceChildren(...lines.map((ln, k) => {
          const ts = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          ts.setAttribute('x', text.getAttribute('x'));
          ts.setAttribute('dy', k ? '12' : '0');
          ts.textContent = ln;
          return ts;
        }));
      } else {
        text.textContent = v || g.dataset.blank;
        g.querySelector('.ch-line').setAttribute('class', `ch-line ch-line--${medium || 'blank'}`);
        text.setAttribute('class', `arch-link-label arch-link-label--${medium || 'blank'}`);
      }
    }
    const row = sel.closest('.build-row');
    row.classList.remove('is-right', 'is-wrong');
    row.querySelector('.build-correct').hidden = true;
    for (const c of chips) c.classList.toggle('is-used', selects.some((x) => x.dataset.kind === c.dataset.kind && x.value === c.dataset.value));
  };
  const assign = (id, value) => {
    const sel = selOf(id);
    if (!sel) return;
    sel.value = value;
    paint(sel);
    setChip(null);
    setPlace(null);
  };
  for (const sel of selects) sel.addEventListener('change', () => paint(sel));
  for (const c of chips) {
    c.addEventListener('click', () => {
      if (armedPlace && selOf(armedPlace)?.dataset.kind === c.dataset.kind) assign(armedPlace, c.dataset.value);
      else setChip(armedChip === c ? null : c);
    });
  }
  for (const g of spots) {
    const id = idOf(g);
    const kind = g.dataset.node ? 'node' : 'link';
    g.addEventListener('click', () => {
      if (armedChip && armedChip.dataset.kind === kind) assign(id, armedChip.dataset.value);
      else setPlace(armedPlace === id ? null : id);
    });
  }
  for (const r of rows) r.addEventListener('focusin', () => setPlace(r.dataset.plek));
  q.querySelector('[data-check-build]')?.addEventListener('click', () => {
    let ok = true;
    let filled = true;
    for (const sel of selects) {
      const row = sel.closest('.build-row');
      const want = row.dataset.answer;
      const right = sel.value === want;
      if (!sel.value) filled = false;
      ok = ok && right;
      row.classList.toggle('is-right', right);
      row.classList.toggle('is-wrong', !right);
      const corr = row.querySelector('.build-correct');
      corr.hidden = right;
      corr.textContent = right ? '' : `${s.buildCorrect || ''} ${want}`;
      for (const g of places(sel.dataset.plek)) {
        g.classList.toggle('is-right', right);
        g.classList.toggle('is-wrong', !right);
      }
    }
    setChip(null);
    setPlace(null);
    showFeedback(feedback, { right: ok, label: ok ? s.right : s.wrong, text: ok ? s.buildRight : filled ? s.buildWrong : s.buildIncomplete });
    q.classList.add('is-answered');
    if (answer) answer.open = true;
  });
  q.querySelector('[data-reset-build]')?.addEventListener('click', () => {
    for (const sel of selects) {
      sel.value = '';
      paint(sel);
    }
    setChip(null);
    setPlace(null);
    showFeedback(feedback, {});
  });
}
