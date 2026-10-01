const root = document.querySelector('[data-film-hero]');
if (root) {
  const src = new URL(root.dataset.filmSrc, document.baseURI).href;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const play = root.querySelector('[data-film-play]');
  const webgl = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
  const still = () => {
    root.classList.add('is-static');
    for (const el of root.querySelectorAll('.home-film-poster [data-still]')) { if (el.tagName === 'SOURCE') el.srcset = el.dataset.still; else el.src = el.dataset.still; }
  };
  const load = (autoplay) => import(src).then((m) => m.mount(root, { autoplay })).catch(still);
  if (!webgl) still();
  else if (reduce) {
    if (play) {
      play.hidden = false;
      play.addEventListener('click', () => { play.disabled = true; root.classList.add('is-loading'); load(true); }, { once: true });
    }
  } else {
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300));
    const go = () => idle(() => load(true), { timeout: 1500 });
    if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
  }
}
