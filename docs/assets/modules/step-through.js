export function mount(el, config) {
  const list = el.querySelector('ol.steps');
  if (!list) return;
  const steps = [...list.children];
  if (steps.length < 2) return;
  const s = config.strings || {};
  let current = 0;

  const controls = document.createElement('div');
  controls.className = 'step-controls';
  const prev = Object.assign(document.createElement('button'), { type: 'button', textContent: s.prev || '←' });
  const next = Object.assign(document.createElement('button'), { type: 'button', textContent: s.next || '→' });
  const status = document.createElement('span');
  status.setAttribute('aria-live', 'polite');
  controls.append(prev, next, status);
  list.after(controls);
  list.dataset.enhanced = '';

  const render = () => {
    steps.forEach((li, i) => {
      li.hidden = i !== current;
    });
    prev.disabled = current === 0;
    next.disabled = current === steps.length - 1;
    status.textContent = (s.position || '{current}/{total}').replace('{current}', current + 1).replace('{total}', steps.length);
  };
  prev.addEventListener('click', () => {
    current = Math.max(0, current - 1);
    render();
  });
  next.addEventListener('click', () => {
    current = Math.min(steps.length - 1, current + 1);
    render();
  });
  render();
}
