export function mount(el, config) {
  const s = config.strings || {};
  const lists = { mode: el.querySelector('ol.hz-modes'), head: el.querySelector('ol.hz-heads') };
  if (!lists.mode || !lists.head) return;
  const items = (k) => [...lists[k].querySelectorAll(`:scope > li[data-${k}]`)];
  if (items('mode').length < 2 || items('head').length < 2) return;
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const detail = document.createElement('div');
  detail.className = 'ports-detail hz-detail';
  detail.setAttribute('aria-live', 'polite');
  const hint = Object.assign(document.createElement('p'), { className: 'ports-hint', textContent: s.hint || '' });
  const bars = {};
  for (const k of ['mode', 'head']) {
    const bar = document.createElement('div');
    bar.className = 'ports-choose hz-choose';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', s[`${k}s`] || '');
    for (const li of items(k)) {
      const b = Object.assign(document.createElement('button'), { type: 'button' });
      b.dataset[k] = li.dataset[k];
      b.textContent = li.querySelector('.hz-item-title')?.textContent.trim() || li.dataset[k];
      bar.append(b);
    }
    bar.addEventListener('click', (ev) => {
      const b = ev.target.closest('button');
      if (b) select(k, b.dataset[k]);
    });
    bars[k] = bar;
    lists[k].hidden = true;
  }
  lists.mode.before(hint, bars.mode, bars.head, detail);
  el.classList.add('is-enhanced');

  let timer = null;
  function pulse() {
    if (!motion) return;
    clearTimeout(timer);
    const flows = [...el.querySelectorAll('.hz-flow')];
    for (const f of flows) f.classList.remove('edge-flow');
    void el.offsetWidth;
    for (const f of flows) f.classList.add('edge-flow');
    timer = setTimeout(() => flows.forEach((f) => f.classList.remove('edge-flow')), 5600);
  }
  function select(k, id) {
    const li = items(k).find((x) => x.dataset[k] === id);
    if (!li) return;
    el.dataset[k] = id;
    for (const b of bars[k].querySelectorAll('button')) b.setAttribute('aria-pressed', String(b.dataset[k] === id));
    detail.replaceChildren();
    for (const key of ['mode', 'head']) {
      const cur = items(key).find((x) => x.dataset[key] === el.dataset[key]);
      if (!cur) continue;
      const p = document.createElement('p');
      p.className = 'ports-detail-text';
      for (const node of cur.childNodes) p.append(node.cloneNode(true));
      detail.append(p);
    }
    pulse();
  }
  select('mode', el.dataset.mode || 'remote');
  select('head', el.dataset.head || 'controller');
  for (const f of el.querySelectorAll('.hz-flow')) f.classList.remove('edge-flow');
}
