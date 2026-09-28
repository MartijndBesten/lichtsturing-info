const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function mount(el, config) {
  const strings = config.strings || {};
  const panel = el.querySelector('.library-filter');
  const input = el.querySelector('[data-library-q]');
  const status = el.querySelector('[data-library-status]');
  const empty = el.querySelector('[data-library-empty]');
  const catButtons = [...el.querySelectorAll('[data-library-category]')];
  const sysButtons = [...el.querySelectorAll('[data-library-system]')];
  const items = [...el.querySelectorAll('.library-item')].map((node) => ({
    node,
    category: node.dataset.category,
    systems: (node.dataset.systems || '').split(' ').filter(Boolean),
    text: norm(node.dataset.search || node.textContent),
  }));
  const groups = [...el.querySelectorAll('.library-group')];
  const jump = el.querySelector('.library-jump');
  if (!panel || !input || !items.length) return;
  panel.hidden = false;
  if (jump) jump.hidden = true;
  let category = '';
  let system = '';

  const apply = () => {
    const tokens = norm(input.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const it of items) {
      const ok = (!category || it.category === category) && (!system || it.systems.includes(system)) && tokens.every((tk) => it.text.includes(tk));
      it.node.hidden = !ok;
      if (ok) shown += 1;
    }
    for (const g of groups) g.hidden = !g.querySelector('.library-item:not([hidden])');
    if (empty) empty.hidden = shown > 0;
    const filtered = tokens.length > 0 || category !== '' || system !== '';
    status.textContent = filtered ? String(strings.count || '{n} van {total}').replace('{n}', shown).replace('{total}', items.length) : '';
  };

  const toggle = (buttons, set) => (b) => {
    b.addEventListener('click', () => {
      set(b.dataset.libraryCategory ?? b.dataset.librarySystem ?? '');
      for (const x of buttons) x.setAttribute('aria-pressed', String(x === b));
      apply();
    });
  };
  catButtons.forEach(toggle(catButtons, (v) => { category = v; }));
  sysButtons.forEach(toggle(sysButtons, (v) => { system = v; }));
  input.addEventListener('input', apply);
  const q = new URLSearchParams(window.location.search).get('q');
  if (q) input.value = q;
  apply();
}
