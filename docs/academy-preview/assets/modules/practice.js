import { wireCheck } from './check.js';

export const STORAGE_KEY = 'kh-oefenvragen';

const read = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'aan';
  } catch {
    return false;
  }
};
const write = (on) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, on ? 'aan' : 'uit');
  } catch {
  }
};

export function mount(el, config) {
  const toggles = [...document.querySelectorAll('[data-practice-toggle]')];
  if (!toggles.length) return;
  for (const check of el.querySelectorAll('[data-check]')) wireCheck(check, config.strings || {});
  let on = read();
  const tocItems = [...document.querySelectorAll('[data-practice-toc]')];
  const apply = () => {
    el.hidden = !on;
    for (const li of tocItems) li.hidden = !on;
    for (const b of toggles) b.setAttribute('aria-pressed', String(on));
  };
  for (const b of toggles) {
    b.hidden = false;
    b.setAttribute('aria-controls', el.id);
    b.addEventListener('click', () => {
      on = !on;
      write(on);
      apply();
    });
  }
  apply();
}
