export function mount(el) {
  const $$ = (q) => [...el.querySelectorAll(q)];
  const btns = $$('.nd-btn');
  const items = $$('.nd-item');
  const flow = $$('.ix-flow li');
  const strip = el.querySelector('.ix-flow');
  let timers = [];
  el.classList.add('is-enhanced');
  el.querySelector('.nd-pick').hidden = false;
  const pick = (id) => {
    timers.forEach(clearTimeout);
    timers = [];
    for (const b of btns) b.setAttribute('aria-pressed', String(b.dataset.s === id));
    for (const it of items) it.hidden = it.dataset.s !== id;
    for (const li of flow) li.classList.remove('is-on');
    el.classList.remove('ix-signal', 'ix-decide', 'is-done');
    el.dataset.state = id;
    const bus = /test|opvragen/.test(id);
    if (strip) strip.hidden = !bus;
    if (!bus) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = [() => {}, () => el.classList.add('ix-signal'), () => el.classList.replace('ix-signal', 'ix-decide'), () => { el.classList.remove('ix-decide'); el.classList.add('is-done'); }];
    steps.forEach((fn, k) => {
      const go = () => { flow[k]?.classList.add('is-on'); fn(); };
      if (reduce) go();
      else timers.push(setTimeout(go, k * 450));
    });
  };
  for (const b of btns) b.addEventListener('click', () => pick(b.dataset.s));
  pick(btns[0].dataset.s);
}
