import { createProgress } from './academy-progress.js';
import { localAdapter } from './progress-local.js';

const LAST = 'lichtsturing-academy-laatst';
const progress = () => createProgress({ adapter: localAdapter(), context: 'learner' });
const slug = (id) => id.split('.')[1];

function readLast() {
  try {
    const l = JSON.parse(localStorage.getItem(LAST) || 'null');
    if (l && typeof l.module === 'string' && typeof l.url === 'string' && l.url.startsWith('/')) return l;
    const v1 = JSON.parse(localStorage.getItem('lichtsturing-academy-voortgang') || 'null'); // overname uit v1
    return v1?.last?.url?.startsWith('/') ? v1.last : null;
  } catch {
    return null;
  }
}
function writeLast(l) {
  try {
    if (l) localStorage.setItem(LAST, JSON.stringify(l));
    else localStorage.removeItem(LAST);
  } catch {
  }
}

export function read() {
  let s;
  try {
    s = localAdapter().read();
  } catch {
    s = { objects: {}, modules: {} };
  }
  const lessons = {};
  for (const [id, o] of Object.entries(s.objects)) if (id.startsWith('lesson.') && o.state === 'completed') lessons[slug(id)] = true;
  const modules = {};
  for (const [id, m] of Object.entries(s.modules)) if (id.startsWith('learning_path.') && m.completedAt) modules[slug(id)] = { done: true };
  return { v: 1, lessons, modules, last: readLast() };
}

export function markLesson(s) {
  progress().completeLearningObject(`lesson.${s}`);
}

export function setLast(module, url, title) {
  writeLast({ module, url, title });
}

export function finishModule(module) {
  progress().completeModule(`learning_path.${module}`);
  if (readLast()?.module === module) writeLast(null);
}

export function resetModule(module, lessons) {
  const p = progress();
  p.resetModule(`learning_path.${module}`);
  localAdapter().update((s) => {
    for (const l of lessons) delete s.objects[`lesson.${l}`];
  });
  if (readLast()?.module === module) writeLast(null);
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
  progress().startLearningObject(`lesson.${p.lesson}`);
  document.querySelector('[data-next-lesson]')?.addEventListener('click', () => markLesson(p.lesson));
  document.querySelector('[data-finish-lesson]')?.addEventListener('click', () => {
    markLesson(p.lesson);
    finishModule(p.module);
  });
}
