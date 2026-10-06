export function mount(el, config = {}) {
  const s = config.strings || {};
  const $ = (q) => el.querySelector(q);
  const $$ = (q) => [...el.querySelectorAll(q)];
  const out = $('.am-out');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  let driver = config.drivers[0].id;
  let mod = config.modules[0].id;
  let timer = null;
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
    $('.am-driver-label').textContent = config.drivers.find((d) => d.id === driver).label;
    $('.am-module-label').textContent = config.modules.find((m) => m.id === mod).short;
    el.classList.remove('is-reading', 'is-read');
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
      press('.am-part', 'part', p.id);
      for (const g of $$('.am-slot')) g.classList.toggle('is-picked', g.dataset.part === p.id);
      show([`${p.id} ${p.label}: ${p.text}`, `${config.drivers.find((d) => d.id === driver).label}: ${must(p) ? s.verplicht : s.nietVerplicht}.`]);
    });
  }
  $('.am-read').addEventListener('click', () => {
    const m = config.modules.find((x) => x.id === mod);
    const lines = [];
    if (!m.reads) lines.push(s.readSensor);
    else {
      const sure = data.filter(must);
      const maybe = data.filter((p) => !must(p));
      lines.push(maybe.length ? s.readDali2 : s.readD4i);
      if (sure.length) lines.push(sure.map((p) => `${p.id} ${p.label}`).join(' · '));
      if (maybe.length) lines.push(`${s.ifPresent} ${maybe.map((p) => `${p.id} ${p.label}`).join(' · ')}`);
      clearTimeout(timer);
      el.classList.add('is-read');
      for (const c of $$('.am-packet')) c.classList.toggle('is-go', sure.some((p) => p.id === c.dataset.part));
      if (!calm.matches && sure.length) {
        el.classList.add('is-reading');
        for (const c of $$('.am-packet.is-go')) c.querySelector('animateMotion').beginElement();
        timer = setTimeout(() => el.classList.remove('is-reading'), 1600);
      }
    }
    if (power) lines.push(must(power) ? s.powerOwn : s.powerSeparate);
    show(lines);
  });
  paint();
}
