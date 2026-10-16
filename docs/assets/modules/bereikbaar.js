const TIMEOUT_MS = 6000;

export function mount(el, config = {}) {
  const text = { busy: '', down: '', retry: '', anyway: '', ...config };
  const links = [...el.querySelectorAll('a[href^="https://"]')];
  if (!links.length || !text.down) return;

  const status = document.createElement('div');
  status.className = 'pf-reach';
  status.setAttribute('role', 'status');
  status.hidden = true;
  el.after(status);

  let busy = false;

  function show(state, link) {
    status.hidden = false;
    status.dataset.state = state;
    status.replaceChildren();
    const p = document.createElement('p');
    p.textContent = state === 'busy' ? text.busy : text.down;
    status.append(p);
    if (state !== 'down') return;
    const actions = document.createElement('p');
    actions.className = 'pf-reach-actions';
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'pf-reach-retry';
    retry.textContent = text.retry;
    retry.addEventListener('click', () => go(link));
    const anyway = document.createElement('a');
    anyway.className = 'pf-link';
    anyway.href = link.href;
    anyway.rel = 'noopener';
    anyway.textContent = text.anyway;
    actions.append(retry, ' ', anyway);
    status.append(actions);
  }

  function reset() {
    busy = false;
    status.hidden = true;
    status.replaceChildren();
    for (const a of links) a.removeAttribute('aria-busy');
  }

  async function go(link) {
    if (busy) return;
    busy = true;
    link.setAttribute('aria-busy', 'true');
    show('busy', link);
    const ok = await reachable(link.href);
    if (ok) {
      location.assign(link.href);
      return;
    }
    busy = false;
    link.removeAttribute('aria-busy');
    show('down', link);
  }

  for (const a of links) {
    a.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      go(a);
    });
  }
  addEventListener('pageshow', (e) => {
    if (e.persisted) reset();
  });
}

export async function reachable(href, fetchImpl = fetch, timeout = TIMEOUT_MS) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetchImpl(new URL('/health', href).href, { mode: 'cors', credentials: 'omit', cache: 'no-store', referrerPolicy: 'no-referrer', signal: ctrl.signal });
    if (!res.ok) return false;
    const body = await res.json();
    return body?.status === 'ok';
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}
