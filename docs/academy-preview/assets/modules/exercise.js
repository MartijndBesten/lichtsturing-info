export function mount(el, config = {}) {
  const s = config.strings || {};
  for (const q of el.querySelectorAll('.ex-q')) (q.dataset.answer ? selectQuestion : choiceQuestion)(q, el, s);
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
      if (feedback) feedback.textContent = `${right ? s.right || '' : s.wrong || ''} ${why ? why.textContent.replace(why.querySelector('strong')?.textContent ?? '', '').trim() : ''}`.trim();
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
      e.classList.toggle('is-selected', chosen.has(id));
    });
  });
  q.querySelector('[data-check-select]')?.addEventListener('click', () => {
    const ok = chosen.size === want.size && [...chosen].every((id) => want.has(id));
    for (const e of items) e.classList.toggle('is-answer', want.has(idOf(e)));
    q.classList.add('is-answered');
    if (feedback) feedback.textContent = ok ? s.selRight || '' : s.selWrong || '';
    if (answer) answer.open = true;
  });
  q.querySelector('[data-reset-select]')?.addEventListener('click', () => {
    chosen.clear();
    for (const e of items) e.classList.remove('is-selected', 'is-answer');
    if (feedback) feedback.textContent = '';
    activate();
  });
  if (q === el.querySelector('.ex-q[data-answer]')) activate();
}
