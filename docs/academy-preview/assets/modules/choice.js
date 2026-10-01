import { applies, esc, evaluateZone, matchPatterns, partsHtml } from './projectwijzer-core.js';

export function mount(el, config = {}) {
  const { model, strings: s = {} } = config;
  const form = el.querySelector('.choice-form');
  const out = el.querySelector('.choice-result');
  if (!model || !form || !out) return;
  el.classList.add('is-enhanced');
  const answers = () => {
    const a = {};
    for (const q of model.questions) {
      const picked = [...form.querySelectorAll(`[data-q="${q.id}"] input:checked`)].map((i) => i.value);
      if (picked.length) a[q.id] = picked;
    }
    return a;
  };
  const reasons = (route, a, effects) => route.criteria.filter((c) => effects.includes(c.effect) && applies(c, a)).map((c) => `<li>${partsHtml(c.reason)}</li>`).join('');
  const link = (r) => (r.url ? ` <a href="${esc(r.url)}">${esc(s.more || '')} ${esc(r.title)}</a>` : '');
  const card = (r, a, cls, label) => `<section class="choice-route ${cls}"><p class="choice-route-label">${esc(label)}</p><h4>${esc(r.title)}</h4>
${reasons(r, a, ['past']) ? `<p class="choice-sub">${esc(s.why || '')}</p><ul>${reasons(r, a, ['past'])}</ul>` : ''}
${reasons(r, a, ['controleren', 'minder']) ? `<p class="choice-sub">${esc(s.check || '')}</p><ul class="choice-check">${reasons(r, a, ['controleren', 'minder'])}</ul>` : ''}
<p>${link(r)}</p></section>`;
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const a = answers();
    if (Object.keys(a).length < 2) {
      out.hidden = false;
      out.innerHTML = `<p class="choice-note">${esc(s.incomplete || '')}</p>`;
      return;
    }
    const res = evaluateZone(model, a);
    const logical = res.logical[0]?.route ?? null;
    const alts = res.alternatives.map((row) => row.route);
    const shown = new Set([logical, ...alts].filter(Boolean).map((r) => r.id));
    const less = model.routes.filter((r) => !shown.has(r.id)).map((r) => ({ r, why: reasons(r, a, ['afraden', 'uitsluiten', 'minder']) })).filter((x) => x.why);
    const patterns = matchPatterns(model, [a]);
    out.hidden = false;
    out.innerHTML = `${logical ? card(logical, a, 'choice-route--main', s.logical) : `<p class="choice-note">${esc(s.none || '')}</p>`}
${alts.map((r) => card(r, a, 'choice-route--alt', s.also)).join('')}
${patterns.length ? `<section class="choice-patterns"><p class="choice-sub">${esc(s.patterns || '')}</p><ul>${patterns.map((p) => `<li>${p.url ? `<a href="${esc(p.url)}">${esc(p.title)}</a>` : esc(p.title)}${p.summary ? ` — ${partsHtml(p.summary)}` : ''}</li>`).join('')}</ul></section>` : ''}
${less.length ? `<details class="choice-less"><summary>${esc(s.less || '')}</summary>${less.map((x) => `<p><strong>${esc(x.r.title)}</strong></p><ul>${x.why}</ul>`).join('')}</details>` : ''}`;
    out.focus?.();
  });
  form.addEventListener('reset', () => {
    out.hidden = true;
    out.innerHTML = '';
  });
}
