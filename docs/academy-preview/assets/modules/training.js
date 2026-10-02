import { wireCheck } from './check.js';

export function mount(el, config) {
  if (config.progress) import('./progress.js').then((pg) => start(el, config, pg)).catch(() => start(el, config, null));
  else start(el, config, null);
}

function start(el, config, pg) {
  const s = config.strings || {};
  const steps = [...el.querySelectorAll('.training-step')];
  if (!steps.length) return;
  const progress = el.querySelector('.training-progress');
  const bar = progress?.querySelector('.training-bar span');
  const label = progress?.querySelector('.training-progress-text');
  const toc = [...el.querySelectorAll('.training-toc a[data-go]')];
  el.classList.add('is-enhanced');
  if (progress) progress.hidden = false;

  const indexOfHash = () => {
    const i = steps.findIndex((st) => `#${st.id}` === location.hash);
    return i < 0 ? 0 : i;
  };

  function show(i, { focus = false, push = false } = {}) {
    const n = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((st, k) => {
      st.hidden = k !== n;
    });
    toc.forEach((a, k) => {
      if (k === n) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
      a.classList.toggle('is-done', k < n);
    });
    if (bar) bar.style.width = `${Math.round(((n + 1) / steps.length) * 100)}%`;
    if (label) label.textContent = (s.count || '{n}/{total}').replace('{n}', n + 1).replace('{total}', steps.length);
    if (push && location.hash !== `#${steps[n].id}`) history.pushState(null, '', `#${steps[n].id}`);
    current = n;
    if (pg && !pg.read().modules[config.progress.module]?.done) pg.setLast(config.progress.module, `${location.pathname}#${steps[n].id}`, steps[n].querySelector('h2')?.textContent.trim() ?? '');
    if (focus) {
      const h = steps[n].querySelector('h2');
      h?.setAttribute('tabindex', '-1');
      h?.focus({ preventScroll: true });
      el.scrollIntoView({ block: 'start' });
    }
  }

  let current = 0;
  const done = el.querySelector('.module-done');
  const meter = el.querySelector('[data-progress]');
  const lessonOf = (i) => config.progress?.steps?.[i] ?? null;
  function paint() {
    if (!pg) return;
    const d = pg.read();
    const list = config.progress.steps.filter(Boolean);
    const st = pg.status(d, config.progress.module, list);
    for (const li of el.querySelectorAll('.training-toc li[data-lesson]')) li.classList.toggle('is-completed', Boolean(d.lessons[li.dataset.lesson]));
    if (meter) {
      meter.hidden = !st.done && !st.finished;
      meter.textContent = st.finished ? s.finished || '' : (s.progress || '{n}/{total}').replace('{n}', st.done).replace('{total}', st.total);
    }
  }
  function finish() {
    if (lessonOf(current)) pg.markLesson(lessonOf(current));
    pg.finishModule(config.progress.module);
    steps.forEach((st) => { st.hidden = true; });
    done.hidden = false;
    if (location.hash !== '#afgerond') history.pushState(null, '', '#afgerond');
    paint();
    done.focus({ preventScroll: true });
    el.scrollIntoView({ block: 'start' });
  }

  el.addEventListener('click', (ev) => {
    if (pg && ev.target.closest('[data-finish]')) {
      ev.preventDefault();
      finish();
      return;
    }
    if (pg && ev.target.closest('[data-restart]')) {
      pg.resetModule(config.progress.module, config.progress.steps.filter(Boolean));
      done.hidden = true;
      show(0, { focus: true, push: true });
      paint();
      return;
    }
    if (pg && ev.target.closest('[data-overview]')) {
      done.hidden = true;
      return;
    }
    const link = ev.target.closest('a[data-go]');
    if (!link || !el.contains(link)) return;
    ev.preventDefault();
    const to = Number(link.dataset.go) - 1;
    if (pg && link.classList.contains('training-next') && to > current && lessonOf(current)) pg.markLesson(lessonOf(current));
    if (done) done.hidden = true;
    show(to, { focus: true, push: true });
    paint();
  });
  window.addEventListener('popstate', () => {
    if (pg && location.hash === '#afgerond') return;
    if (done) done.hidden = true;
    show(indexOfHash(), { focus: true });
  });

  for (const check of el.querySelectorAll('[data-check]')) wireCheck(check, s);

  if (pg && location.hash === '#afgerond' && pg.read().modules[config.progress.module]?.done) {
    steps.forEach((st) => { st.hidden = true; });
    done.hidden = false;
  } else show(indexOfHash());
  paint();
}
