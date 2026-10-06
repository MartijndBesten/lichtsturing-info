export function mount(el, config = {}) {
  const s = config.strings || {};
  el.classList.add('is-enhanced');
  for (const c of el.querySelectorAll('.vd-case')) {
    const opts = [...c.querySelectorAll('.vd-opt')];
    const fb = c.querySelector('.vd-feedback');
    const answer = c.querySelector('.vd-answer');
    for (const b of opts) {
      b.disabled = false;
      b.addEventListener('click', () => {
        const right = b.dataset.opt === c.dataset.answer;
        for (const o of opts) {
          o.setAttribute('aria-pressed', String(o === b));
          o.classList.toggle('is-right', o === b && right);
          o.classList.toggle('is-wrong', o === b && !right);
          o.classList.toggle('is-answer', !right && o.dataset.opt === c.dataset.answer);
        }
        c.classList.toggle('is-right', right);
        c.classList.toggle('is-wrong', !right);
        fb.innerHTML = '';
        const head = document.createElement('p');
        head.className = `vd-verdict vd-verdict--${right ? 'right' : 'wrong'}`;
        head.textContent = right ? s.right : s.wrong;
        fb.append(head);
        for (const p of answer.querySelectorAll('.vd-right, .vd-principle')) fb.append(p.cloneNode(true));
        fb.hidden = false;
        answer.hidden = true;
      });
    }
  }
}
