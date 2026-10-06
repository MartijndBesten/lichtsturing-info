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
  const show = (lines) => {
    out.hidden = false;
    out.replaceChildren(...lines.map((t) => Object.assign(document.createElement('p'), { textContent: t })));
  };
  function paint() {
    el.dataset.driver = driver;
    for (const p of config.parts) $(`.am-slot[data-part="${p.id}"]`).classList.toggle('is-optional', !must(p));
    $('.am-driver-label').textContent = config.drivers.find((d) => d.id === driver).label;
    $('.am-module-label').textContent = config.modules.find((m) => m.id === mod).short;
    el.classList.remove('is-reading', 'is-read');
  }
  const press = (sel, attr, value) => {
    for (const b of $$(sel)) b.setAttribute('aria-pressed', String(b.dataset[attr] === value));
  };
  for (const b of $$('[data-driver]')) {
    b.addEventListener('click', () => {
      driver = b.dataset.driver;
      press('[data-driver]', 'driver', driver);
      paint();
      out.hidden = true;
    });
  }
  for (const b of $$('[data-mod]')) {
    b.addEventListener('click', () => {
      mod = b.dataset.mod;
      press('[data-mod]', 'mod', mod);
      paint();
      out.hidden = true;
    });
  }
  for (const b of $$('.am-part')) {
    b.disabled = false;
    b.addEventListener('click', () => {
      const p = config.parts.find((x) => x.id === b.dataset.part);
      press('.am-part', 'part', p.id);
      for (const g of $$('.am-slot')) g.classList.toggle('is-picked', g.dataset.part === p.id);
      show([`${p.id} ${p.label}: ${p.text}`, `${config.drivers.find((d) => d.id === driver).label}: ${must(p) ? s.verplicht : s.nietVerplicht}.`]);
    });
  }
  $('.am-read').addEventListener('click', () => {
    const m = config.modules.find((x) => x.id === mod);
    const data = config.parts.slice(1);
    const lines = [];
    if (!m.reads) lines.push(s.readSensor);
    else {
      lines.push(data.every(must) ? s.readD4i : s.readDali2);
      lines.push(data.map((p) => `${p.id} ${p.label}`).join(' · '));
      clearTimeout(timer);
      el.classList.add('is-read');
      if (!calm.matches) {
        el.classList.add('is-reading');
        for (const a of $$('.am-packet animateMotion')) a.beginElement();
        timer = setTimeout(() => el.classList.remove('is-reading'), 1600);
      }
    }
    lines.push(must(config.parts[0]) ? s.powerOwn : s.powerSeparate);
    show(lines);
  });
  paint();
}
