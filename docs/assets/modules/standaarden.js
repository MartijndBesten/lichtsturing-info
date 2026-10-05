const STEP_MS = 5200;
const DIM = { dali: ['nlc', 'gateway'], 'dali-2': ['nlc', 'gateway'], d4i: ['nlc', 'gateway'], 'dali-plus': ['nlc', 'gateway'], nlc: ['dali', 'dali-2', 'd4i', 'dali-plus'], gateway: [] };

export function mount(el, config = {}) {
  const $ = (s) => el.querySelector(s);
  const $$ = (s) => [...el.querySelectorAll(s)];
  const sets = $$('.sd-set');
  const cards = $$('.sd-card');
  const pick = $('.sd-pick');
  const pickBtns = pick ? [...pick.querySelectorAll('button')] : [];
  const fnPick = $('.sd-fn-pick');
  const fnBtns = fnPick ? [...fnPick.querySelectorAll('button')] : [];
  const steps = $$('.sd-steps > li');
  const transport = $('.sd-transport');
  const playBtn = $('[data-sd="play"]');
  const pos = $('.sd-pos');
  const s = config.strings ?? {};
  let step = -1;
  let timer = 0;

  function focus(item, { run = false } = {}) {
    el.dataset.focus = item;
    const dim = DIM[item] ?? [];
    for (const g of sets) {
      g.classList.toggle('is-focus', g.dataset.item === item);
      g.classList.toggle('is-dim', dim.includes(g.dataset.item));
    }
    for (const c of cards) c.hidden = c.dataset.item !== item;
    for (const b of pickBtns) b.setAttribute('aria-pressed', b.dataset.item === item ? 'true' : 'false');
    if (run) {
      el.classList.remove('sd-run');
      void el.getBoundingClientRect();
      el.classList.add('sd-run');
    }
  }

  function fn(id) {
    const on = el.dataset.fn === id ? '' : id;
    if (on) el.dataset.fn = on;
    else delete el.dataset.fn;
    for (const b of fnBtns) b.setAttribute('aria-pressed', b.dataset.fn === on ? 'true' : 'false');
    for (const g of $$('.sd-badge')) g.classList.toggle('is-on', g.dataset.fn === on);
    for (const tr of $$('.sd-table--fn tbody tr')) tr.classList.toggle('is-on', tr.dataset.fn === on);
  }

  function showStep(i, { auto = false } = {}) {
    step = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((li, k) => {
      li.classList.toggle('is-current', k === step);
      li.classList.toggle('is-done', k < step);
    });
    if (pos && s.step) pos.textContent = s.step.replace('{current}', String(step + 1)).replace('{total}', String(steps.length));
    focus(steps[step].dataset.focus, { run: true });
    clearTimeout(timer);
    if (auto && step < steps.length - 1) timer = setTimeout(() => showStep(step + 1, { auto: true }), STEP_MS);
    else stopLabel();
  }

  function playing() {
    return playBtn?.dataset.state === 'playing';
  }
  function stopLabel() {
    if (!playBtn) return;
    if (step >= steps.length - 1 || !timer) {
      playBtn.dataset.state = '';
      playBtn.textContent = s.play ?? playBtn.textContent;
    }
  }
  function play() {
    if (playing()) {
      clearTimeout(timer);
      timer = 0;
      playBtn.dataset.state = '';
      playBtn.textContent = s.play ?? playBtn.textContent;
      return;
    }
    playBtn.dataset.state = 'playing';
    playBtn.textContent = s.pause ?? playBtn.textContent;
    showStep(step < 0 || step >= steps.length - 1 ? 0 : step + 1, { auto: true });
    if (playBtn.dataset.state === 'playing' && step >= steps.length - 1) {
      playBtn.dataset.state = '';
      playBtn.textContent = s.play ?? playBtn.textContent;
    }
  }
  function manual(i) {
    clearTimeout(timer);
    timer = 0;
    if (playBtn) {
      playBtn.dataset.state = '';
      playBtn.textContent = s.play ?? playBtn.textContent;
    }
    showStep(i);
  }

  for (const g of sets) g.addEventListener('click', () => focus(g.dataset.item, { run: true }));
  for (const b of pickBtns) b.addEventListener('click', () => focus(b.dataset.item, { run: true }));
  for (const b of fnBtns) b.addEventListener('click', () => fn(b.dataset.fn));
  for (const tr of $$('.sd-table--fn tbody tr')) tr.addEventListener('click', () => fn(tr.dataset.fn));
  steps.forEach((li, i) => li.addEventListener('click', () => manual(i)));
  $('[data-sd="prev"]')?.addEventListener('click', () => manual(step <= 0 ? 0 : step - 1));
  $('[data-sd="next"]')?.addEventListener('click', () => manual(step + 1));
  playBtn?.addEventListener('click', play);

  el.classList.add('sd-ready');
  if (pick) pick.hidden = false;
  if (fnPick) fnPick.hidden = false;
  if (transport) transport.hidden = false;
  focus(config.start || el.dataset.focus || 'dali');
}
