function unfold(d, tag) {
  const a = document.createElement(tag);
  for (const at of d.attributes) a.setAttribute(at.name, at.value);
  const sm = d.querySelector(':scope > summary');
  a.append(...(sm ? sm.childNodes : []), ...[...d.childNodes].filter((n) => n !== sm));
  d.replaceWith(a);
  return a;
}
export function mount(el, config = {}) {
  const s = config.strings || {};
  const m = config.model;
  if (!m) return;
  const $ = (sel) => el.querySelector(sel);
  const $$ = (sel) => [...el.querySelectorAll(sel)];
  for (const d of $$('details.wz-r')) unfold(d, 'article');
  const run = $('.wz-run');
  const pos = $('.wz-pos');
  const top = $('.wz-top');
  const back = $('.wz-back');
  const live = $('.wz-live');
  const done = $('.wz-done');
  const answersBox = $('.wz-answers');
  const actions = $('.wz-actions');
  const none = $('.wz-none');
  const fs = new Map($$('.wz-q').map((f) => [f.dataset.q, f]));
  const cards = new Map($$('.wz-r').map((c) => [c.dataset.r, c]));
  const groups = new Map($$('.wz-group').map((g) => [g.dataset.g, g]));
  let answers = {};
  let path = [];
  el.classList.add('is-enhanced');
  run.hidden = false;
  const ok = (when) => (when || []).every((c) => c.any.includes(answers[c.q]));
  const asked = () => m.questions.filter((q) => ok(q.when));
  const possible = () => m.questions.filter((q) => (q.when || []).every((c) => !(c.q in answers) || c.any.includes(answers[c.q])));
  const say = (text) => { live.textContent = ''; setTimeout(() => { live.textContent = text; }, 30); };
  const fmt = (str, n, total) => String(str || '').replace('{n}', n).replace('{total}', total);

  function showResults(on) {
    for (const g of groups.values()) g.hidden = !on;
    for (const c of cards.values()) c.hidden = !on;
    done.hidden = answersBox.hidden = actions.hidden = !on;
    none.hidden = true;
  }

  function ask(id, quiet = false) {
    for (const [k, f] of fs) f.hidden = k !== id;
    showResults(false);
    const list = possible();
    const i = list.findIndex((q) => q.id === id);
    pos.textContent = fmt(s.pos, i + 1, list.length);
    back.hidden = path.length === 0;
    pos.hidden = false;
    top.hidden = false;
    const f = fs.get(id);
    for (const b of f.querySelectorAll('.wz-opt')) b.setAttribute('aria-pressed', String(answers[id] === b.dataset.o));
    if (quiet) return;
    f.querySelector('.wz-qt').focus({ preventScroll: true });
    say(pos.textContent);
  }

  function next(from) {
    const list = asked();
    const i = list.findIndex((q) => q.id === from);
    const q = list[i + 1];
    if (q) return ask(q.id);
    finish();
  }

  function finish() {
    for (const f of fs.values()) f.hidden = true;
    top.hidden = true;
    back.hidden = true;
    showResults(true);
    const ids = new Set(asked().map((q) => q.id));
    for (const li of answersBox.querySelectorAll('li')) {
      const q = li.dataset.q;
      li.hidden = !ids.has(q);
      if (ids.has(q)) li.querySelector('.wz-av').textContent = fs.get(q).querySelector(`.wz-opt[data-o="${answers[q]}"] .wz-ol`)?.textContent ?? '';
    }
    let shown = 0;
    for (const g of m.groups) {
      const hits = m.results.filter((r) => r.group === g.id && ok(r.when) && (!(r.anyOf || []).length || r.anyOf.some((c) => c.any.includes(answers[c.q]))));
      const keep = new Set((g.pick === 'first' ? hits.slice(0, 1) : hits).map((r) => r.id));
      for (const r of m.results.filter((x) => x.group === g.id)) cards.get(r.id).hidden = !keep.has(r.id);
      groups.get(g.id).hidden = keep.size === 0;
      shown += keep.size;
    }
    none.hidden = shown > 0;
    done.focus({ preventScroll: false });
    say(s.done);
  }

  for (const [id, f] of fs) {
    for (const b of f.querySelectorAll('.wz-opt')) {
      b.addEventListener('click', () => {
        answers[id] = b.dataset.o;
        for (const q of m.questions) if (answers[q.id] && !ok(q.when)) delete answers[q.id];
        path.push(id);
        next(id);
      });
    }
  }
  back.addEventListener('click', () => {
    const prev = path.pop();
    if (prev) ask(prev);
  });
  for (const c of $$('.wz-change')) c.addEventListener('click', () => { path = path.filter((q) => q !== c.dataset.q); ask(c.dataset.q); });
  $('.wz-again').addEventListener('click', () => {
    answers = {};
    path = [];
    ask(asked()[0].id);
  });
  ask(asked()[0].id, true);
}
