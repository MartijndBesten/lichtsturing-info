const STEP_MS = 1900;

export function mount(el, config) {
  const states = config.states || [];
  const s = config.strings || {};
  const bar = el.querySelector('.hero-controls');
  const toggle = bar?.querySelector('[data-hero="toggle"]');
  const replay = bar?.querySelector('[data-hero="replay"]');
  const items = [...el.querySelectorAll('.hero-steps li[data-step]')];
  if (!states.length || !toggle || !replay) return;
  const last = states.length - 1;
  let i = last;
  let timer = null;
  let playing = false;
  let started = false;

  const controls = () => {
    toggle.textContent = playing ? s.pause || 'Pauze' : s.play || 'Afspelen';
    toggle.hidden = started && !playing && i >= last && !el.classList.contains('is-playing');
    replay.hidden = !started;
  };
  const show = (k) => {
    i = k;
    el.dataset.state = states[k];
    for (const li of items) {
      if (li.dataset.step === states[k]) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
    }
  };
  const stop = () => {
    clearTimeout(timer);
    timer = null;
    playing = false;
    controls();
  };
  const finish = () => {
    clearTimeout(timer);
    timer = null;
    playing = false;
    el.classList.remove('is-playing');
    el.dataset.state = states[last];
    for (const li of items) li.removeAttribute('aria-current');
    const focused = document.activeElement === toggle;
    controls();
    if (focused) replay.focus();
  };
  const tick = () => {
    if (i >= last) {
      finish();
      return;
    }
    show(i + 1);
    timer = setTimeout(tick, i === 0 ? 500 : STEP_MS);
  };
  const play = () => {
    if (i >= last) i = -1;
    playing = true;
    started = true;
    el.classList.add('is-playing');
    controls();
    tick();
  };

  bar.hidden = false;
  toggle.addEventListener('click', () => (playing ? stop() : play()));
  replay.addEventListener('click', () => {
    stop();
    i = -1;
    play();
  });

  controls();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) play();
}
