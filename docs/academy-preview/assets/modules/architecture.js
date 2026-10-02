export function mount(el, config = {}) {
  const s = config.strings || {};
  const svgs = [...el.querySelectorAll('.arch-svg')];
  if (!svgs.length) return;
  const nodes = svgs.flatMap((v) => [...v.querySelectorAll('.arch-node')]);
  const links = svgs.flatMap((v) => [...v.querySelectorAll('.arch-link')]);
  const parts = [...el.querySelectorAll('.arch-part')];
  const keys = [...el.querySelectorAll('.arch-key')];
  el.classList.add('is-enhanced');

  let current = null;
  let stepParts = null;
  const syncParts = () => {
    for (const p of parts) {
      const ids = p.dataset.nodes.split(' ');
      p.hidden = current ? !ids.includes(current) : stepParts ? !ids.some((id) => stepParts.has(id)) : false;
    }
  };
  function pick(id) {
    current = current === id ? null : id;
    for (const n of nodes) n.classList.toggle('is-picked', n.dataset.node === current);
    el.classList.toggle('has-pick', Boolean(current));
    syncParts();
  }
  const clearPick = () => {
    if (current) pick(current);
  };
  for (const v of svgs) {
    const own = [...v.querySelectorAll('.arch-node')];
    own.forEach((n, i) => roving(n, i, own));
  }
  function roving(n, i, nodes) {
    n.setAttribute('role', 'button');
    n.tabIndex = i === 0 ? 0 : -1;
    n.addEventListener('click', () => (el.dataset.select ? null : pick(n.dataset.node)));
    n.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        n.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      } else if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(ev.key)) {
        ev.preventDefault();
        ev.stopPropagation();
        const j = (i + (['ArrowRight', 'ArrowDown'].includes(ev.key) ? 1 : nodes.length - 1)) % nodes.length;
        n.tabIndex = -1;
        nodes[j].tabIndex = 0;
        nodes[j].focus();
      }
    });
  }

  for (const k of keys) {
    k.disabled = false;
    k.addEventListener('click', () => {
      const on = k.getAttribute('aria-pressed') !== 'true';
      for (const o of keys) o.setAttribute('aria-pressed', String(o === k && on));
      for (const svg of svgs) {
        if (on) svg.dataset.focus = k.dataset.medium;
        else delete svg.dataset.focus;
      }
      for (const l of links) l.classList.toggle('is-lit', on && l.dataset.medium === k.dataset.medium);
      const lit = new Set(links.filter((l) => l.classList.contains('is-lit')).flatMap((l) => l.dataset.ends.split(' ')));
      for (const n of nodes) n.classList.toggle('is-lit', lit.has(n.dataset.node));
    });
  }

  const stepItems = [...el.querySelectorAll('[data-step-text]')];
  const stepped = svgs.flatMap((v) => [...v.querySelectorAll('[data-step]')]);
  if (stepItems.length > 1) {
    let at = stepItems.length - 1;
    const bar = document.createElement('div');
    bar.className = 'arch-stepbar';
    const prev = Object.assign(document.createElement('button'), { type: 'button', className: 'arch-stepbtn', textContent: s.prev || '‹' });
    const next = Object.assign(document.createElement('button'), { type: 'button', className: 'arch-stepbtn', textContent: s.next || '›' });
    const all = Object.assign(document.createElement('button'), { type: 'button', className: 'arch-stepbtn', textContent: s.all || 'Alles' });
    const pos = Object.assign(document.createElement('span'), { className: 'arch-steppos' });
    pos.setAttribute('aria-live', 'polite');
    const start = Object.assign(document.createElement('button'), { type: 'button', className: 'arch-stepbtn arch-stepbtn--start', textContent: s.start || '' });
    let stepping = false;
    start.addEventListener('click', () => {
      stepping = true;
      show(0);
    });
    bar.append(start, prev, pos, next, all);
    el.querySelector('.arch-steps')?.before(bar);
    const show = (i) => {
      at = Math.max(0, Math.min(stepItems.length - 1, i));
      clearPick();
      stepParts = stepping ? new Set(stepped.filter((e) => Number(e.dataset.step) === at && e.dataset.node).map((e) => e.dataset.node)) : null;
      el.classList.toggle('is-stepping', stepping);
      syncParts();
      for (const e of stepped) e.classList.toggle('is-later', Number(e.dataset.step) > at);
      for (const e of stepped) e.classList.toggle('is-new', Number(e.dataset.step) === at && at > 0);
      stepItems.forEach((li, k) => li.classList.toggle('is-current', k === at));
      pos.textContent = (s.step || '{n}/{total}').replace('{n}', at + 1).replace('{total}', stepItems.length);
      prev.disabled = at === 0;
      next.disabled = at === stepItems.length - 1;
    };
    prev.addEventListener('click', () => show(at - 1));
    next.addEventListener('click', () => show(at + 1));
    all.addEventListener('click', () => {
      stepping = false;
      show(stepItems.length - 1);
    });
    el.archStep = show;
    show(stepItems.length - 1);
  }
}
