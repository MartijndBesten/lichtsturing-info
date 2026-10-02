import { showFeedback } from './check.js';

export function mount(el, config = {}) {
  const s = config.strings || {};
  for (const q of el.querySelectorAll('.ex-q')) {
    if (q.hasAttribute('data-seq')) sequenceQuestion(q, s);
    else (q.dataset.answer ? selectQuestion : choiceQuestion)(q, el, s);
  }
  candidates(el);
}

function candidates(el) {
  const marks = [...el.querySelectorAll('[data-candidate]')];
  if (!marks.length) return;
  const q = el.querySelector('.ex-q:not([data-answer]):not([data-seq])');
  if (!q) return;
  for (const m of marks) {
    const btn = () => q.querySelector(`[data-option="${m.dataset.candidate}"] button`);
    m.setAttribute('role', 'button');
    m.tabIndex = 0;
    m.addEventListener('click', () => btn()?.click());
    m.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        btn()?.click();
      }
    });
  }
  q.addEventListener('click', () => {
    const chosen = q.querySelector('.ex-options li.is-chosen');
    for (const m of marks) {
      m.classList.toggle('is-chosen', Boolean(chosen) && m.dataset.candidate === chosen.dataset.option);
      m.classList.toggle('is-right', Boolean(chosen) && m.dataset.candidate === chosen.dataset.option && chosen.classList.contains('is-right'));
    }
  });
}

function sequenceQuestion(q, s) {
  const ol = q.querySelector('.ex-seq');
  const want = ol.dataset.sequence.split(' ');
  const feedback = q.querySelector('.ex-feedback');
  const answer = q.querySelector('.ex-answer');
  const actions = q.querySelector('.ex-select-actions');
  if (actions) actions.hidden = false;
  const items = () => [...ol.children];
  const sync = () => items().forEach((li, i, all) => {
    li.querySelector('[data-move="up"]').disabled = i === 0;
    li.querySelector('[data-move="down"]').disabled = i === all.length - 1;
  });
  for (const li of items()) {
    for (const [dir, label] of [['up', s.up || '↑'], ['down', s.down || '↓']]) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'arch-stepbtn ex-seq-move';
      b.dataset.move = dir;
      b.textContent = label;
      b.setAttribute('aria-label', `${label}: ${li.textContent.trim()}`);
      b.addEventListener('click', () => {
        const sib = dir === 'up' ? li.previousElementSibling : li.nextElementSibling;
        if (!sib) return;
        if (dir === 'up') ol.insertBefore(li, sib);
        else ol.insertBefore(sib, li);
        for (const x of items()) x.classList.remove('is-right', 'is-wrong');
        sync();
        b.focus();
      });
      li.append(b);
    }
  }
  sync();
  q.querySelector('[data-check-seq]')?.addEventListener('click', () => {
    const now = items();
    now.forEach((li, i) => {
      li.classList.toggle('is-right', li.dataset.id === want[i]);
      li.classList.toggle('is-wrong', li.dataset.id !== want[i]);
    });
    const ok = now.every((li, i) => li.dataset.id === want[i]);
    showFeedback(feedback, { right: ok, label: ok ? s.right : s.wrong, text: ok ? s.seqRight : s.seqWrong });
    q.classList.add('is-answered');
    if (answer) answer.open = true;
  });
}

function choiceQuestion(q, el, s) {
  const options = [...q.querySelectorAll('.ex-options li')];
  const feedback = q.querySelector('.ex-feedback');
  const answer = q.querySelector('.ex-answer');
  for (const li of options) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'check-option';
    btn.setAttribute('aria-pressed', 'false');
    while (li.firstChild) btn.appendChild(li.firstChild);
    li.appendChild(btn);
    btn.addEventListener('click', () => {
      const right = li.hasAttribute('data-correct');
      for (const o of options) {
        o.querySelector('button').setAttribute('aria-pressed', String(o === li));
        o.classList.toggle('is-chosen', o === li);
        o.classList.toggle('is-right', o === li && right);
        o.classList.toggle('is-wrong', o === li && !right);
      }
      const why = q.querySelector(`[data-why="${li.dataset.option}"]`);
      showFeedback(feedback, { right, label: right ? s.right : s.wrong, qual: right ? s.qualRight : '', text: why?.querySelector('.ex-why-text')?.textContent.trim() ?? '' });
      for (const w of q.querySelectorAll('[data-why]')) w.classList.toggle('is-chosen', w === why);
      q.classList.add('is-answered');
      if (answer) answer.open = true;
    });
  }
}

function selectQuestion(q, el, s) {
  const fig = el.querySelector('.arch');
  if (!fig) return;
  const want = new Set(q.dataset.answer.split(' '));
  const items = [...fig.querySelectorAll('.arch-node, .arch-link')];
  const idOf = (e) => e.dataset.node || e.dataset.link;
  const actions = q.querySelector('.ex-select-actions');
  const feedback = q.querySelector('.ex-feedback');
  const answer = q.querySelector('.ex-answer');
  const chosen = new Set();
  let active = false;
  const activate = () => {
    for (const other of el.querySelectorAll('.ex-q.is-selecting')) other.classList.remove('is-selecting');
    q.classList.add('is-selecting');
    fig.dataset.select = q.dataset.q;
    active = true;
  };
  if (actions) actions.hidden = false;
  q.addEventListener('focusin', activate);
  q.addEventListener('click', activate);
  items.forEach((e) => {
    e.addEventListener('click', () => {
      if (!active || fig.dataset.select !== q.dataset.q) return;
      const id = idOf(e);
      if (chosen.has(id)) chosen.delete(id);
      else chosen.add(id);
      for (const x of items) x.classList.toggle('is-selected', chosen.has(idOf(x)));
    });
  });
  q.querySelector('[data-check-select]')?.addEventListener('click', () => {
    const ok = chosen.size === want.size && [...chosen].every((id) => want.has(id));
    for (const e of items) e.classList.toggle('is-answer', want.has(idOf(e)));
    q.classList.add('is-answered');
    showFeedback(feedback, { right: ok, label: ok ? s.right : s.wrong, text: ok ? s.selRight : s.selWrong });
    if (answer) answer.open = true;
  });
  q.querySelector('[data-reset-select]')?.addEventListener('click', () => {
    chosen.clear();
    for (const e of items) e.classList.remove('is-selected', 'is-answer');
    showFeedback(feedback, {});
    activate();
  });
  if (q === el.querySelector('.ex-q[data-answer]')) activate();
}
