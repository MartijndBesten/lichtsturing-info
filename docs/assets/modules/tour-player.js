export function createPlayer(root, bar, { total, strings: s = {}, durationOf = () => 5, onStep, onStop, initial }) {
  const btnPlay = bar.querySelector('[data-tour="play"]');
  const btnPrev = bar.querySelector('[data-tour="prev"]');
  const btnNext = bar.querySelector('[data-tour="next"]');
  const count = bar.querySelector('.tour-count');
  const playLabel = btnPlay?.textContent.trim() || '';
  const st = { active: false, playing: false, index: -1, timer: null, touched: false };
  const last = () => st.index >= total() - 1;

  function show(i) {
    st.index = i;
    onStep(i);
    if (count) count.textContent = (s.step || '{n}/{total}').replace('{n}', String(i + 1)).replace('{total}', String(total()));
    if (btnPrev) btnPrev.disabled = i <= 0;
    if (btnNext) btnNext.disabled = last();
  }

  function setPlaying(on) {
    st.playing = on;
    clearTimeout(st.timer);
    if (btnPlay) {
      btnPlay.setAttribute('aria-pressed', String(on));
      btnPlay.textContent = on ? s.pause || '❚❚' : st.active && last() ? s.replay || playLabel : st.active ? s.resume || playLabel : playLabel;
    }
    if (on) schedule();
  }

  function schedule() {
    clearTimeout(st.timer);
    st.timer = setTimeout(() => {
      if (!st.playing) return;
      if (last()) return setPlaying(false);
      show(st.index + 1);
      schedule();
    }, durationOf(st.index) * 1000);
  }

  function start(from) {
    st.active = true;
    root.classList.add('is-touring');
    bar.dataset.active = 'true';
    show(from);
  }

  function stop(reset) {
    if (!st.active) return;
    setPlaying(false);
    st.active = false;
    st.touched = false;
    st.index = -1;
    root.classList.remove('is-touring');
    delete bar.dataset.active;
    if (count) count.textContent = '';
    if (btnPrev) btnPrev.disabled = true;
    if (btnNext) btnNext.disabled = false;
    if (btnPlay) btnPlay.textContent = playLabel;
    onStop?.(reset);
    if (reset) btnPlay?.focus({ preventScroll: true });
  }

  bar.hidden = false;
  if (btnPrev) btnPrev.disabled = true;
  btnPlay?.addEventListener('click', () => {
    if (st.playing) return setPlaying(false);
    if (!st.active || last() || !st.touched) start(0);
    st.touched = true;
    setPlaying(true);
  });
  btnNext?.addEventListener('click', () => {
    st.touched = true;
    if (!st.active) start(0);
    else if (!last()) show(st.index + 1);
    setPlaying(false);
  });
  btnPrev?.addEventListener('click', () => {
    st.touched = true;
    if (st.active && st.index > 0) show(st.index - 1);
    setPlaying(false);
  });
  bar.addEventListener('keydown', (ev) => {
    const b = { ArrowRight: btnNext, ArrowLeft: btnPrev }[ev.key];
    if (!b) return;
    ev.preventDefault();
    b.click();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      for (const en of entries) if (!en.isIntersecting && st.playing) setPlaying(false);
    }).observe(root);
  }

  if (initial != null) start(initial);

  return {
    get active() {
      return st.active;
    },
    get index() {
      return st.index;
    },
    go(i) {
      st.touched = true;
      if (!st.active) start(i);
      else show(i);
      setPlaying(false);
    },
    pause: () => setPlaying(false),
    stop,
  };
}
