import { prepare, search } from './search-core.js';

const config = JSON.parse(document.getElementById('search-config').textContent);
const form = document.querySelector('[data-search]');
const input = form.querySelector('input[type="search"]');
const statusEl = document.querySelector('.search-status');
const results = document.querySelector('.search-results');
let index = null;

async function loadIndex() {
  if (index) return index;
  const res = await fetch(config.index);
  if (!res.ok) throw new Error(String(res.status));
  index = prepare(await res.json());
  return index;
}

const el = (tag, cls, text) => Object.assign(document.createElement(tag), cls ? { className: cls } : {}, text ? { textContent: text } : {});

function render(hits) {
  results.replaceChildren();
  statusEl.textContent = hits.length ? config.strings.results.replace('{count}', hits.length) : config.strings.empty;
  for (const { entry, via } of hits) {
    const li = el('li', 'search-result');
    const a = Object.assign(el('a', 'search-result-title', entry.t), { href: config.base + entry.u });
    li.append(el('p', 'search-result-meta', [entry.y, entry.g].filter(Boolean).join(' · ')), a);
    if (entry.s) li.append(el('p', 'search-result-text', entry.s));
    if (via) li.append(el('p', 'search-result-via', config.strings.via.replace('{term}', via)));
    results.append(li);
  }
}

async function run(q) {
  if (!q.trim()) return render([]);
  try {
    render(search(await loadIndex(), q));
  } catch {
    statusEl.textContent = config.strings.error;
  }
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const q = input.value;
  history.replaceState(null, '', `?q=${encodeURIComponent(q)}`);
  run(q);
});

const initial = new URLSearchParams(location.search).get('q');
if (initial) {
  input.value = initial;
  run(initial);
}
