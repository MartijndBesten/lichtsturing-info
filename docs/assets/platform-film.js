const root = document.querySelector('[data-film-hero]');
if (root) {
  const src = new URL(root.dataset.filmSrc, document.baseURI).href;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  const play = root.querySelector('[data-film-play]');
  const webgl = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
  const still = () => {
    root.classList.add('is-static');
    for (const el of root.querySelectorAll('.home-film-poster [data-still]')) { if (el.tagName === 'SOURCE') el.srcset = el.dataset.still; else el.src = el.dataset.still; }
  };
  const load = (autoplay) => import(src).then((m) => m.mount(root, { autoplay })).catch(still);
  const offerPlay = () => {
    if (!play) return;
    play.hidden = false;
    play.addEventListener('click', () => { play.disabled = true; root.classList.add('is-loading'); load(true); }, { once: true });
  };
  if (!webgl) still();
  else if (reduce || saveData) offerPlay();
  else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      load(true);
    }, { rootMargin: '0px 0px 200px 0px' });
    io.observe(root);
  } else load(true);
}
