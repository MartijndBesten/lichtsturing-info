export function mount(el) {
  const btns = [...el.querySelectorAll('.sg-btn')];
  const items = [...el.querySelectorAll('.sg-item')];
  if (!btns.length) return;
  el.classList.add('is-enhanced');
  el.querySelector('.sg-pick').hidden = false;
  const pick = (id) => {
    el.dataset.state = id;
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.s === id));
    for (const it of items) it.hidden = it.dataset.s !== id;
  };
  for (const b of btns) b.addEventListener('click', () => pick(b.dataset.s));
  pick(btns[0].dataset.s);
}
