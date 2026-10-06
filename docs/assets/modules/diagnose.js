export function mount(el, config = {}) {
  const s = config.strings || {};
  const pick = el.querySelector('.dg-pick');
  const paths = [...el.querySelectorAll('.dg-path')];
  const live = el.querySelector('.dg-live');
  el.classList.add('is-enhanced');
  pick.hidden = false;
  const say = (text) => {
    live.textContent = '';
    setTimeout(() => { live.textContent = text; }, 30);
  };
  const button = (label, kind, fn) => {
    const b = Object.assign(document.createElement('button'), { type: 'button', className: `dg-btn dg-btn--${kind}`, textContent: label });
    b.addEventListener('click', fn);
    return b;
  };
  function run(path) {
    const steps = [...path.querySelectorAll('.dg-step')];
    const end = path.querySelector('.dg-end');
    let at = 0;
    function show(focus) {
      steps.forEach((li, i) => {
        li.hidden = i > at;
        li.classList.toggle('is-now', i === at);
        li.classList.toggle('is-ok', i < at);
        li.classList.remove('is-hit');
        li.querySelector('.dg-act')?.remove();
      });
      end.querySelector('.dg-btn')?.remove();
      end.hidden = at < steps.length;
      if (at >= steps.length) {
        end.append(button(s.again, 'again', () => { at = 0; show(true); }));
        if (focus) end.focus();
        return;
      }
      const act = document.createElement('p');
      act.className = 'dg-act';
      const pos = document.createElement('span');
      pos.className = 'dg-pos';
      pos.textContent = (s.pos || '').replace('{n}', String(at + 1)).replace('{total}', String(steps.length));
      act.append(pos, button(s.ok, 'ok', () => { at++; show(true); }), button(s.nok, 'nok', () => {
        steps[at].classList.add('is-hit');
        const again = button(s.again, 'again', () => { at = 0; show(true); });
        act.replaceChildren(Object.assign(document.createElement('strong'), { className: 'dg-hit', textContent: s.hit }), again);
        again.focus(); // de knop met de focus is net vervangen: geef de focus aan „Opnieuw”
        say(s.hit);
      }));
      steps[at].append(act);
      if (focus) steps[at].focus();
    }
    show(false);
  }
  for (const p of paths) p.hidden = true;
  for (const input of pick.querySelectorAll('input')) {
    input.addEventListener('change', () => {
      for (const p of paths) {
        p.hidden = p.dataset.p !== input.value;
        if (!p.hidden) run(p);
      }
    });
  }
}
