export function mount(el, config) {
  const s = config.strings || {};
  const list = el.querySelector('ol.illustration-steps--ports');
  const items = list ? [...list.querySelectorAll(':scope > li[data-port]')] : [];
  const groups = [...el.querySelectorAll('svg [data-port]')];
  if (items.length < 2) return;

  const bar = document.createElement('div');
  bar.className = 'ports-choose';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', s.choose || '');
  const all = Object.assign(document.createElement('button'), { type: 'button', textContent: s.all || '…' });
  all.dataset.port = '';
  bar.append(all);
  for (const li of items) {
    const b = Object.assign(document.createElement('button'), { type: 'button' });
    b.dataset.port = li.dataset.port;
    b.textContent = li.dataset.short || li.querySelector('.pt-item-title')?.textContent.trim() || li.dataset.port;
    bar.append(b);
  }
  const detail = document.createElement('div');
  detail.className = 'ports-detail';
  detail.setAttribute('aria-live', 'polite');
  const hint = Object.assign(document.createElement('p'), { className: 'ports-hint', textContent: s.hint || '' });
  list.before(hint, bar);
  list.after(detail);
  el.classList.add('is-enhanced');

  function select(id) {
    for (const b of bar.querySelectorAll('button')) b.setAttribute('aria-pressed', String(b.dataset.port === (id || '')));
    for (const g of groups) {
      g.classList.toggle('is-selected', Boolean(id) && g.dataset.port === id);
      g.classList.toggle('is-dim', Boolean(id) && g.dataset.port !== id);
    }
    list.hidden = Boolean(id);
    detail.replaceChildren();
    if (!id) return;
    const li = items.find((x) => x.dataset.port === id);
    if (!li) return;
    const copy = document.createElement('p');
    copy.className = 'ports-detail-text';
    for (const node of li.childNodes) copy.append(node.cloneNode(true));
    detail.append(copy);
  }

  bar.addEventListener('click', (ev) => {
    const b = ev.target.closest('button');
    if (b) select(b.dataset.port);
  });
  for (const g of groups) {
    g.addEventListener('click', () => {
      const id = g.dataset.port;
      const on = bar.querySelector(`button[aria-pressed="true"]`)?.dataset.port === id;
      select(on ? '' : id);
    });
  }
  select('');
}
