const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function asButton(node) {
  const b = document.createElement('button');
  b.type = 'button';
  for (const at of node.attributes) b.setAttribute(at.name, at.value);
  b.append(...node.childNodes);
  node.replaceWith(b);
  return b;
}

function schema(el) {
  const sch = el.querySelector('.ux-sch');
  const steps = [...el.querySelectorAll('.ux-cy')].map(asButton);
  const texts = [...el.querySelectorAll('.ux-sch-cyt li')];
  if (!sch || !steps.length) return;
  let i = -1;
  let timer = 0;
  let manual = false;
  const pick = (n) => {
    i = n;
    for (const b of steps) b.setAttribute('aria-pressed', String(Number(b.dataset.i) === n));
    for (const t of texts) t.hidden = Number(t.dataset.i) !== n;
    sch.dataset.dir = steps[n].dataset.dir || '';
  };
  const stop = () => clearTimeout(timer);
  const auto = () => {
    stop();
    if (manual || reduce()) return;
    timer = setTimeout(() => { pick((i + 1) % steps.length); auto(); }, 2800);
  };
  for (const b of steps) b.addEventListener('click', () => { manual = true; stop(); pick(Number(b.dataset.i)); });
  pick(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => { for (const e of es) (e.isIntersecting ? auto : stop)(); }, { threshold: 0.4 }).observe(sch);
  }
}

function lijst(el, s) {
  const list = el.querySelector('.ux-l');
  const items = [...el.querySelectorAll('.ux-li')];
  if (!list || !items.length) return;
  const all = document.createElement('button');
  all.type = 'button';
  all.className = 'ux-l-all';
  list.before(all);
  const set = (li, on) => {
    li.querySelector('.ux-ans-wrap').hidden = !on;
    li.querySelector('.ux-claim').setAttribute('aria-expanded', String(on));
    li.classList.toggle('is-open', on);
  };
  const sync = () => {
    const open = items.filter((li) => li.classList.contains('is-open')).length;
    all.textContent = open === items.length ? s.allHide || '' : s.all || '';
    all.setAttribute('aria-pressed', String(open === items.length));
  };
  for (const li of items) {
    const b = asButton(li.querySelector('.ux-claim'));
    const w = li.querySelector('.ux-ans-wrap');
    w.id = `${li.id}-antwoord`;
    b.setAttribute('aria-controls', w.id);
    const hint = document.createElement('span');
    hint.className = 'ux-claim-hint';
    hint.textContent = s.reveal || '';
    b.append(hint);
    set(li, false);
    b.addEventListener('click', () => { set(li, !li.classList.contains('is-open')); sync(); });
  }
  all.addEventListener('click', () => {
    const on = items.some((li) => !li.classList.contains('is-open'));
    for (const li of items) set(li, on);
    sync();
  });
  sync();
}

function schaal(el) {
  const sc = el.querySelector('.ux-sc');
  if (!sc) return;
  const keys = [...el.querySelectorAll('.ux-sc-k')].map(asButton);
  for (const b of keys) {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      for (const k of keys) k.setAttribute('aria-pressed', String(on && k === b));
      sc.dataset.hi = on ? b.dataset.k : '';
    });
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es, o) => { for (const e of es) if (e.isIntersecting) { sc.classList.add('is-seen'); o.disconnect(); } }, { threshold: 0.3 }).observe(sc);
  } else sc.classList.add('is-seen');
}

export function mount(el, config = {}) {
  const s = config.strings || {};
  el.classList.add('is-enhanced');
  if (el.classList.contains('ux--schema')) schema(el);
  if (el.classList.contains('ux--lijst')) lijst(el, s);
  if (el.classList.contains('ux--schaal')) schaal(el);
}
