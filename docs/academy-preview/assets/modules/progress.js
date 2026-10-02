const KEY = 'lichtsturing-academy-voortgang';
const empty = () => ({ v: 1, lessons: {}, modules: {}, last: null });

export function read() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null');
    return d && d.v === 1 ? { ...empty(), ...d } : empty();
  } catch {
    return empty();
  }
}

function write(d) {
  try {
    localStorage.setItem(KEY, JSON.stringify(d));
    return true;
  } catch {
    return false;
  }
}

export function markLesson(slug) {
  const d = read();
  d.lessons[slug] = true;
  write(d);
}

export function setLast(module, url, title) {
  const d = read();
  d.last = { module, url, title };
  write(d);
}

export function finishModule(module) {
  const d = read();
  d.modules[module] = { done: true };
  if (d.last?.module === module) d.last = null;
  write(d);
}

export function resetModule(module, lessons) {
  const d = read();
  delete d.modules[module];
  for (const l of lessons) delete d.lessons[l];
  if (d.last?.module === module) d.last = null;
  write(d);
}

export function status(d, module, lessons) {
  return { done: lessons.filter((l) => d.lessons[l]).length, total: lessons.length, finished: Boolean(d.modules[module]?.done) };
}

export function homeProgress(s) {
  const cards = [...document.querySelectorAll('[data-progress-module]')];
  if (!cards.length) return;
  const d = read();
  let any = false;
  for (const a of cards) {
    const st = status(d, a.dataset.progressModule, a.dataset.lessons.split(' ').filter(Boolean));
    const tag = a.querySelector('.academy-card-progress');
    if (!tag || (!st.done && !st.finished)) continue;
    any = true;
    tag.hidden = false;
    tag.textContent = st.finished ? s.cardDone || '' : (s.cardPart || '{n}/{total}').replace('{n}', st.done).replace('{total}', st.total);
    a.classList.toggle('is-finished', st.finished);
  }
  for (const li of document.querySelectorAll('.academy-index li[data-lesson]')) li.classList.toggle('is-completed', Boolean(d.lessons[li.dataset.lesson]));
  const resume = document.querySelector('[data-resume]');
  if (resume && d.last?.url) {
    const link = resume.querySelector('a');
    link.href = d.last.url;
    link.textContent = d.last.title || d.last.url;
    resume.hidden = false;
  }
  const note = document.querySelector('[data-progress-note]');
  if (note) note.hidden = !any;
}

export function lessonProgress(p) {
  if (!read().modules[p.module]?.done) setLast(p.module, location.pathname, p.title);
  document.querySelector('[data-next-lesson]')?.addEventListener('click', () => markLesson(p.lesson));
  document.querySelector('[data-finish-lesson]')?.addEventListener('click', () => {
    markLesson(p.lesson);
    finishModule(p.module);
  });
}

