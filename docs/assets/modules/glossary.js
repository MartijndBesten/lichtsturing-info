const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function mount(el, config) {
  const strings = config.strings || {};
  const panel = el.querySelector('[data-glossary-filter]');
  const input = el.querySelector('[data-glossary-q]');
  const status = el.querySelector('[data-glossary-status]');
  const empty = el.querySelector('[data-glossary-empty]');
  const buttons = [...el.querySelectorAll('[data-glossary-type]')];
  const entries = [...el.querySelectorAll('.glossary-entry')].map((node) => ({ node, type: node.dataset.type, text: norm(node.dataset.search || node.textContent) }));
  const groups = [...el.querySelectorAll('.glossary-group')];
  if (config.visual) import('./glossary-visual.js').then((m) => m.enhance(el, config.visual)).catch(() => {});
  if (!panel || !input || !entries.length) return;
  panel.hidden = false;
  let type = '';

  const apply = () => {
    const tokens = norm(input.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const e of entries) {
      const ok = (!type || e.type === type) && tokens.every((tk) => e.text.includes(tk));
      e.node.hidden = !ok;
      if (ok) shown += 1;
    }
    for (const g of groups) g.hidden = !g.querySelector('.glossary-entry:not([hidden])');
    if (empty) empty.hidden = shown > 0;
    const filtered = tokens.length > 0 || type !== '';
    status.textContent = filtered ? String(strings.count || '{n} van {total}').replace('{n}', shown).replace('{total}', entries.length) : '';
  };

  input.addEventListener('input', apply);
  for (const b of buttons) {
    b.addEventListener('click', () => {
      type = b.dataset.glossaryType || '';
      for (const x of buttons) x.setAttribute('aria-pressed', String(x === b));
      apply();
    });
  }
  apply();
}
