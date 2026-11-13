
const mark = (btns, chosen, answer, attr) => {
  for (const b of btns) {
    const id = b.dataset[attr];
    b.setAttribute('aria-pressed', String(b === chosen));
    b.classList.toggle('is-right', b === chosen && id === answer);
    b.classList.toggle('is-wrong', b === chosen && id !== answer);
    b.classList.toggle('is-answer', b !== chosen && id === answer);
  }
};
const verdict = (el, ok, s) => {
  el.textContent = ok ? s.right : s.wrong;
  el.className = `sn-verdict sn-verdict--${ok ? 'goed' : 'niet'}`;
};

export function predict(el, cfg, s, done) {
  const box = el.querySelector('.sn-predict');
  if (!box) return done?.();
  el.classList.add('is-predicting');
  box.querySelector('.sn-predict-static').hidden = true;
  const btns = [...box.querySelectorAll('.sn-pred')];
  for (const b of btns) {
    b.disabled = false;
    b.addEventListener('click', () => {
      mark(btns, b, cfg.answer, 'opt');
      const fb = box.querySelector('.sn-predict-fb');
      fb.hidden = false;
      verdict(fb.querySelector('[data-slot="pv"]'), b.dataset.opt === cfg.answer, s);
      fb.querySelector('[data-slot="pt"]').textContent = b.dataset.opt === cfg.answer ? '' : s.instead;
      const first = el.classList.contains('is-predicting');
      el.classList.remove('is-predicting');
      box.querySelector('.sn-predict-next').hidden = false;
      if (first) done?.();
    });
  }
}

export function sort(el, c) {
  for (const li of el.querySelectorAll('.sn-sort-item')) {
    const btns = [...li.querySelectorAll('.sn-cat')];
    li.querySelector('.sn-answer').hidden = true;
    for (const b of btns) {
      b.disabled = false;
      b.addEventListener('click', () => {
        mark(btns, b, li.dataset.answer, 'cat');
        const fb = li.querySelector('.sn-sort-fb');
        fb.hidden = false;
        verdict(fb.querySelector('[data-slot="v"]'), b.dataset.cat === li.dataset.answer, c.strings);
      });
    }
  }
}

export function pick(el) {
  for (const li of el.querySelectorAll('.sn-pickcase')) {
    const btns = [...li.querySelectorAll('.sn-pick')];
    const box = li.querySelector('.sn-pick-fb');
    li.querySelector('.sn-answer').hidden = true;
    for (const b of btns) {
      b.disabled = false;
      b.addEventListener('click', () => {
        mark(btns, b, li.dataset.answer, 'pos');
        box.hidden = false;
        for (const f of box.querySelectorAll('.sn-feedback')) f.hidden = f.dataset.opt !== b.dataset.pos;
      });
    }
  }
}

export function spot(el, c) {
  for (const li of el.querySelectorAll('.sn-spot')) {
    const btns = [...li.querySelectorAll('.sn-spotbtn')];
    li.querySelector('.sn-answer').hidden = true;
    for (const b of btns) {
      b.disabled = false;
      b.addEventListener('click', () => {
        mark(btns, b, li.dataset.answer, 'opt');
        const fb = li.querySelector('.sn-spot-fb');
        fb.hidden = false;
        verdict(fb.querySelector('[data-slot="v"]'), b.dataset.opt === li.dataset.answer, c.strings);
      });
    }
  }
}
