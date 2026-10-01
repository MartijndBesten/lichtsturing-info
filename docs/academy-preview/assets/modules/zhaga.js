export function mount(el, config) {
  const s = config.strings || {};
  const list = el.querySelector('ol.zh-choices');
  const items = list ? [...list.querySelectorAll(':scope > li[data-choice]')] : [];
  const heads = [...el.querySelectorAll('.zh-variant')];
  if (items.length < 2 || !heads.length) return;

  const bar = document.createElement('div');
  bar.className = 'ports-choose';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', s.choose || '');
  const all = Object.assign(document.createElement('button'), { type: 'button', textContent: s.all || '…' });
  all.dataset.choice = '';
  bar.append(all);
  for (const li of items) {
    const b = Object.assign(document.createElement('button'), { type: 'button' });
    b.dataset.choice = li.dataset.choice;
    b.textContent = li.querySelector('.zh-choice-title')?.textContent.trim() || li.dataset.choice;
    bar.append(b);
  }
  const detail = document.createElement('div');
  detail.className = 'ports-detail';
  detail.setAttribute('aria-live', 'polite');
  const hint = Object.assign(document.createElement('p'), { className: 'ports-hint', textContent: s.hint || '' });
  list.before(hint, bar);
  list.after(detail);
  el.classList.add('is-enhanced');

  let current = '';
  function select(id) {
    const li = items.find((x) => x.dataset.choice === id) || null;
    current = li ? id : '';
    const vs = li ? li.dataset.variants.split(' ') : [];
    for (const b of bar.querySelectorAll('button')) b.setAttribute('aria-pressed', String(b.dataset.choice === current));
    for (const h of heads) {
      const on = vs.includes(h.dataset.variant);
      h.classList.toggle('is-match', on);
      h.classList.toggle('is-dim', Boolean(li) && !on);
      for (const p of h.querySelectorAll('.zh-part')) p.classList.toggle('is-on', on && li.dataset[p.dataset.pos] === p.dataset.part);
    }
    list.hidden = Boolean(li);
    detail.replaceChildren();
    if (!li) return;
    const copy = document.createElement('p');
    copy.className = 'ports-detail-text';
    for (const node of li.childNodes) copy.append(node.cloneNode(true));
    detail.append(copy);
  }

  bar.addEventListener('click', (ev) => {
    const b = ev.target.closest('button');
    if (b) select(b.dataset.choice);
  });
  for (const h of heads) {
    h.addEventListener('click', () => {
      const fit = items.filter((li) => li.dataset.variants.split(' ').includes(h.dataset.variant));
      const i = fit.findIndex((li) => li.dataset.choice === current);
      select(i + 1 < fit.length ? fit[i + 1].dataset.choice : '');
    });
  }
  select('');
}
