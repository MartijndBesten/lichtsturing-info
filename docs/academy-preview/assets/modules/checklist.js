export function mount(el, config = {}) {
  const s = config.strings || {};
  const form = el.querySelector('.checklist-form');
  const out = el.querySelector('.checklist-result');
  if (!form || !out) return;
  const items = [...el.querySelectorAll('.checklist-item')];
  const textOf = (li) => li.querySelector('legend').textContent.trim();
  const list = (title, lis) => {
    const box = document.createElement('div');
    const h = document.createElement('p');
    h.className = 'checklist-result-sub';
    h.textContent = title;
    const ul = document.createElement('ul');
    for (const li of lis) {
      const x = document.createElement('li');
      x.textContent = textOf(li);
      ul.append(x);
    }
    box.append(h, ul);
    return box;
  };
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const val = (li) => li.querySelector('input:checked')?.value || '';
    const nee = items.filter((li) => val(li) === 'nee');
    const onb = items.filter((li) => val(li) === 'onbekend' || val(li) === '');
    const state = nee.length ? 'aandacht' : onb.length ? 'onbekend' : 'groen';
    for (const li of items) li.dataset.state = val(li) || 'open';
    const head = document.createElement('p');
    head.className = `checklist-verdict checklist-verdict--${state}`;
    head.textContent = s[state] || state;
    out.replaceChildren(head);
    if (nee.length) out.append(list(s.listNee || '', nee));
    if (onb.length) out.append(list(s.listOnbekend || '', onb));
    out.hidden = false;
  });
  form.addEventListener('reset', () => {
    out.hidden = true;
    for (const li of items) delete li.dataset.state;
  });
}
