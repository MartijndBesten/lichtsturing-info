import { wireCheck } from './check.js';

export function mount(el, config) {
  const s = config.strings || {};
  for (const check of el.querySelectorAll('[data-check]')) wireCheck(check, s);
  if (config.mode === 'filter') filter(el);
  if (config.mode === 'trainer') trainer(el, s, config);
}

function filter(el) {
  const box = el.querySelector('.academy-filter');
  const input = el.querySelector('[data-filter]');
  const items = [...el.querySelectorAll('.academy-index li')];
  const empty = el.querySelector('.academy-empty');
  if (!box || !input) return;
  box.hidden = false;
  input.addEventListener('input', () => {
    const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const li of items) {
      const hit = words.every((w) => li.dataset.terms.includes(w));
      li.hidden = !hit;
      if (hit) shown += 1;
    }
    if (empty) empty.hidden = shown > 0;
  });
}

function trainer(el, s, config) {
  const picks = [...el.querySelectorAll('[data-pick]')];
  const titleOf = new Map(picks.map((p) => [p.value, p.closest('label').querySelector('.compose-title').textContent]));
  const set = el.querySelector('.compose-set');
  const list = el.querySelector('[data-list]');
  const empty = el.querySelector('[data-empty]');
  const status = el.querySelector('[data-feedback]');
  const buttons = ['[data-start]', '[data-copy]', '[data-clear]'].map((q) => el.querySelector(q));
  const presenter = el.querySelector('.presenter');
  const sources = config.lessons || {};
  const stage = presenter.querySelector('.presenter-stage');
  const decks = new Map();
  const known = { has: (id) => Object.hasOwn(sources, id) };
  const pos = presenter.querySelector('.presenter-pos');
  const bar = presenter.querySelector('.presenter-progress span');
  const notesBtn = presenter.querySelector('[data-notes]');
  el.classList.add('is-enhanced');
  set.hidden = false;
  for (const b of el.querySelectorAll('[data-preset]')) b.hidden = false;

  const params = new URLSearchParams(location.search);
  let chosen = (params.get('les') || '').split(',').filter((id) => known.has(id));
  chosen = [...new Set(chosen)];

  function sync() {
    for (const p of picks) p.checked = chosen.includes(p.value);
    list.replaceChildren(...chosen.map((id, i) => {
      const li = document.createElement('li');
      const name = document.createElement('span');
      name.textContent = titleOf.get(id) || id;
      li.append(name);
      for (const [label, act, off] of [[s.up, 'up', i === 0], [s.down, 'down', i === chosen.length - 1], [s.remove, 'remove', false]]) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = `compose-move compose-move--${act}`;
        b.textContent = label;
        b.disabled = off;
        b.addEventListener('click', () => {
          if (act === 'remove') chosen.splice(i, 1);
          else {
            const j = act === 'up' ? i - 1 : i + 1;
            [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
          }
          sync();
        });
        li.append(b);
      }
      return li;
    }));
    empty.hidden = chosen.length > 0;
    for (const b of buttons) b.disabled = chosen.length === 0;
    history.replaceState(null, '', `${location.pathname}${chosen.length ? `?les=${chosen.join(',')}` : ''}${location.hash}`);
  }

  for (const p of picks) {
    p.addEventListener('change', () => {
      if (p.checked && !chosen.includes(p.value)) chosen.push(p.value);
      if (!p.checked) chosen = chosen.filter((id) => id !== p.value);
      sync();
    });
  }
  for (const b of el.querySelectorAll('[data-preset]')) {
    b.addEventListener('click', () => {
      chosen = b.dataset.preset.split(',').filter((id) => known.has(id));
      sync();
      set.scrollIntoView({ block: 'nearest' });
      if (status) status.textContent = '';
    });
  }
  buttons[1].addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      if (status) status.textContent = s.copied || '';
    } catch {
      if (status) status.textContent = location.href;
    }
  });
  buttons[2].addEventListener('click', () => {
    chosen = [];
    sync();
  });

  let slides = [];
  let at = 0;
  let notes = false;
  let opener = null;

  const v = document.documentElement.dataset.v || '';
  const base = document.documentElement.dataset.base || '/';
  async function load(id) {
    if (decks.has(id)) return decks.get(id);
    const res = await fetch(`${base}${sources[id]}`);
    if (!res.ok) throw new Error(`${res.status}`);
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    const tpl = doc.querySelector(`template.deck-tpl[data-lesson="${id}"]`);
    if (!tpl) throw new Error('geen dia-reeks');
    const deck = document.importNode(tpl.content, true).querySelector('.deck');
    stage.append(deck);
    for (const m of deck.querySelectorAll('[data-module]')) {
      const name = m.dataset.module;
      if (!/^[a-z0-9-]+$/.test(name)) continue;
      let cfg = {};
      try { cfg = JSON.parse(m.querySelector(':scope > script.module-config')?.textContent || '{}'); } catch { cfg = {}; }
      import(`${base}assets/modules/${name}.js${v ? `?v=${v}` : ''}`).then((mod) => mod.mount(m, cfg)).catch(() => {});
    }
    for (const c of deck.querySelectorAll('[data-check]')) wireCheck(c, s);
    decks.set(id, deck);
    return deck;
  }
  async function build() {
    slides = [];
    const loaded = await Promise.all(chosen.map((id) => load(id).catch(() => null)));
    chosen.forEach((id, k) => {
      if (!loaded[k]) return;
      for (const sl of loaded[k].querySelectorAll('.slide')) slides.push({ id, k, sl });
    });
  }
  function show(i) {
    if (!slides.length) return;
    at = Math.max(0, Math.min(slides.length - 1, i));
    const cur = slides[at];
    for (const [id, d] of decks) {
      d.hidden = id !== cur.id;
      const n = d.querySelector('.deck-notes');
      if (n) n.hidden = !(notes && id === cur.id);
    }
    for (const { sl } of slides) sl.classList.toggle('is-current', sl === cur.sl);
    pos.textContent = (s.position || '{n}/{total}').replace('{n}', cur.k + 1).replace('{total}', chosen.length).replace('{lesson}', titleOf.get(cur.id) || '');
    bar.style.width = `${Math.round(((at + 1) / slides.length) * 100)}%`;
    cur.sl.scrollTop = 0;
  }
  async function open() {
    if (!chosen.length) return;
    opener = document.activeElement;
    presenter.hidden = false;
    document.documentElement.classList.add('is-presenting');
    pos.textContent = s.loading || '';
    presenter.focus();
    await build();
    if (!slides.length) {
      pos.textContent = s.failed || '';
      return;
    }
    show(0);
  }
  function close() {
    presenter.hidden = true;
    document.documentElement.classList.remove('is-presenting');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    opener?.focus?.();
  }
  function full() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else presenter.requestFullscreen?.().catch(() => {});
  }
  function reveal() {
    const d = slides[at]?.sl.querySelector('.check-answer');
    if (d) d.open = !d.open;
  }

  buttons[0].addEventListener('click', () => {
    open();
    full();
  });
  presenter.querySelector('[data-close]').addEventListener('click', close);
  presenter.querySelector('[data-full]').addEventListener('click', full);
  presenter.querySelector('[data-prev]').addEventListener('click', () => show(at - 1));
  presenter.querySelector('[data-next]').addEventListener('click', () => show(at + 1));
  notesBtn.addEventListener('click', () => {
    notes = !notes;
    notesBtn.setAttribute('aria-pressed', String(notes));
    show(at);
  });
  presenter.addEventListener('keydown', (ev) => {
    if (ev.target.closest('input, textarea, select') || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const k = ev.key;
    const onButton = ev.target.closest('button');
    if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(k) || (k === ' ' && !onButton)) show(at + 1);
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) show(at - 1);
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'n' || k === 'N') notesBtn.click();
    else if (k === 'f' || k === 'F') full();
    else if (k === 'a' || k === 'A') reveal();
    else if (k === 'Escape' && !document.fullscreenElement) close();
    else return;
    ev.preventDefault();
  });

  sync();
  if (params.get('start') === '1' && chosen.length) open();
}
