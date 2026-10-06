export function mount(el, config = {}) {
  const s = config.strings || {};
  const $ = (q) => el.querySelector(q);
  const $$ = (q) => [...el.querySelectorAll(q)];
  const out = $('.am-out');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  let driver = config.drivers[0].id;
  let mod = config.modules[0].id;
  const flow = $$('.ix-flow li');
  let steps = [];
  const stopFlow = () => {
    steps.forEach(clearTimeout);
    steps = [];
    el.classList.remove('ix-ask', 'ix-answer', 'is-reading', 'is-read');
    for (const li of flow) li.classList.remove('is-on');
    for (const g of $$('.am-slot')) g.classList.remove('is-answer');
  };
  const at = (ms, fn) => (calm.matches ? fn() : steps.push(setTimeout(fn, ms)));
  const on = (k) => flow[k]?.classList.add('is-on');
  el.classList.add('is-enhanced');
  $('.am-controls').hidden = false;
  $('.am-actions').hidden = false;
  const must = (p) => p.mandatory.includes(driver);
  const power = config.parts.find((p) => p.power);
  const data = config.parts.filter((p) => !p.power);
  const show = (lines) => {
    out.replaceChildren();
    setTimeout(() => out.replaceChildren(...lines.map((t) => Object.assign(document.createElement('p'), { textContent: t }))), 30);
  };
  for (const li of $$('.am-parts li')) {
    const name = li.querySelector('.am-part-name');
    const b = Object.assign(document.createElement('button'), { type: 'button', className: 'am-part' });
    b.dataset.part = li.dataset.part;
    b.setAttribute('aria-pressed', 'false');
    b.append(...name.childNodes);
    name.replaceWith(b);
  }
  const unpick = () => {
    for (const b of $$('.am-part')) b.setAttribute('aria-pressed', 'false');
    for (const g of $$('.am-slot')) g.classList.remove('is-picked');
  };
  function paint() {
    el.dataset.driver = driver;
    for (const p of config.parts) $(`.am-slot[data-part="${p.id}"]`).classList.toggle('is-optional', !must(p));
    for (const n of $$('.am-driver-label, .am-key-driver')) n.textContent = config.drivers.find((d) => d.id === driver).label;
    for (const n of $$('.am-module-label, .am-key-module')) n.textContent = config.modules.find((m) => m.id === mod).short;
    stopFlow();
    unpick();
  }
  const press = (sel, attr, value) => {
    for (const b of $$(sel)) b.setAttribute('aria-pressed', String(b.dataset[attr] === value));
  };
  for (const b of $$('[data-driver]')) {
    b.addEventListener('click', () => {
      driver = b.dataset.driver;
      press('[data-driver]', 'driver', driver);
      paint();
      show([]);
    });
  }
  for (const b of $$('[data-mod]')) {
    b.addEventListener('click', () => {
      mod = b.dataset.mod;
      press('[data-mod]', 'mod', mod);
      paint();
      show([]);
    });
  }
  for (const b of $$('.am-part')) {
    b.addEventListener('click', () => {
      const p = config.parts.find((x) => x.id === b.dataset.part);
      stopFlow();
      press('.am-part', 'part', p.id);
      for (const g of $$('.am-slot')) g.classList.toggle('is-picked', g.dataset.part === p.id);
      show([`${p.id} ${p.label}: ${p.text}`, `${config.drivers.find((d) => d.id === driver).label}: ${must(p) ? s.verplicht : s.nietVerplicht}.`]);
    });
  }
  $('.am-read').addEventListener('click', () => {
    const m = config.modules.find((x) => x.id === mod);
    const lines = [];
    stopFlow();
    show([]);
    on(0);
    if (!m.reads) {
      lines.push(s.readSensor);
      if (power) lines.push(must(power) ? s.powerOwn : s.powerSeparate);
      return show(lines);
    }
    const sure = data.filter(must);
    const maybe = data.filter((p) => !must(p));
    lines.push(maybe.length ? s.readDali2 : s.readD4i);
    if (sure.length) lines.push(sure.map((p) => `${p.id} ${p.label}`).join(' · '));
    if (maybe.length) lines.push(`${s.ifPresent} ${maybe.map((p) => `${p.id} ${p.label}`).join(' · ')}`);
    if (power) lines.push(must(power) ? s.powerOwn : s.powerSeparate);
    for (const c of $$('.am-packet')) c.classList.toggle('is-go', sure.some((p) => p.id === c.dataset.part));
    at(450, () => { on(1); el.classList.add('ix-ask'); });
    at(900, () => {
      on(2);
      el.classList.replace('ix-ask', 'ix-answer');
      el.classList.add('is-read');
      for (const g of $$('.am-slot')) g.classList.toggle('is-answer', sure.some((p) => p.id === g.dataset.part));
      if (!calm.matches && sure.length) {
        el.classList.add('is-reading');
        for (const c of $$('.am-packet.is-go')) c.querySelector('animateMotion').beginElement();
      }
    });
    at(sure.length ? 2100 : 1350, () => {
      on(3);
      el.classList.remove('ix-answer', 'is-reading');
      show(lines);
    });
  });
  paint();
}
