export function mount(el, config) {
  const s = config.strings || {};
  const filter = el.querySelector('.topology-filter');
  const viewBar = el.querySelector('.topology-views');
  const status = el.querySelector('.topology-status');
  const svg = el.querySelector('.topology-svg');
  const visibleNode = (id) => nodes.find((n) => n.dataset.node === id && n.closest('svg').getClientRects().length) ?? nodes.find((n) => n.dataset.node === id);
  const detail = el.querySelector('.topology-detail');
  const edges = [...el.querySelectorAll('.edge')];
  const nodes = [...el.querySelectorAll('.node')];
  const areas = [...el.querySelectorAll('.area')];
  const parts = [...el.querySelectorAll('.topology-part')];
  const viewItems = [...el.querySelectorAll('.topology-viewlist [data-view]')];
  const compact = el.classList.contains('topology--compact');
  const legendItems = [...el.querySelectorAll('.topology-legend li[data-views]')];
  const layerText = Object.fromEntries([...(filter?.querySelectorAll('button[data-text]') ?? [])].map((b) => [b.dataset.layer, b.dataset.text]));
  if (!filter || !nodes.length) return;
  let viewBoxes = null;
  try {
    viewBoxes = svg?.dataset.viewboxes ? JSON.parse(svg.dataset.viewboxes) : null;
  } catch {
    viewBoxes = null;
  }
  el.classList.add('is-enhanced');
  if (!compact) filter.hidden = false;
  if (viewBar) viewBar.hidden = false;
  const wide = window.matchMedia('(min-width: 64rem)');
  const announce = (text) => {
    status.textContent = text || '';
  };
  const nodeLabel = (id) => (visibleNode(id)?.querySelector('text')?.textContent || id).replace(/\s+/g, ' ').trim();

  function showLayer(layer, kind) {
    if (kind === 'all') {
      for (const x of [...edges, ...nodes]) x.classList.remove('is-dim');
      return;
    }
    const roleNodes = new Set(nodes.filter((n) => n.dataset.role === layer).map((n) => n.dataset.node));
    const activeEdges = new Set(
      edges.filter((e) => (kind === 'verbinding' ? e.dataset.layer === layer : roleNodes.has(e.dataset.from) || roleNodes.has(e.dataset.to))),
    );
    const activeNodes = new Set([...roleNodes]);
    for (const e of activeEdges) activeNodes.add(e.dataset.from).add(e.dataset.to);
    for (const e of edges) e.classList.toggle('is-dim', !activeEdges.has(e));
    for (const n of nodes) n.classList.toggle('is-dim', !activeNodes.has(n.dataset.node));
  }

  function showView(view) {
    const has = (x) => (x.dataset.views || '').split(' ').includes(view);
    const inView = new Set([...nodes, ...areas].filter(has).map((x) => x.dataset.node ?? x.dataset.area));
    for (const n of nodes) n.classList.toggle('is-off', !inView.has(n.dataset.node));
    for (const a of areas) a.classList.toggle('is-off', !has(a));
    for (const e of edges) e.classList.toggle('is-off', !(inView.has(e.dataset.from) && inView.has(e.dataset.to)));
    const scoped = [...filter.querySelectorAll('button[data-views]')];
    for (const b of scoped) b.hidden = !has(b);
    for (const p of parts) if (p.dataset.views) p.hidden = !has(p);
    if (scoped.length) {
      press(filter, filter.querySelector('button[data-kind="all"]'));
      showLayer('all', 'all');
    }
    for (const item of viewItems) item.classList.toggle('is-active', item.dataset.view === view);
    if (viewBoxes?.[view]) svg.setAttribute('viewBox', viewBoxes[view]);
    for (const li of legendItems) li.classList.toggle('is-off', !li.dataset.views.split(' ').includes(view));
    if (viewBar) {
      const btn = viewBar.querySelector(`button[data-view="${view}"]`);
      if (btn) press(viewBar, btn);
    }
    if (selected && !inView.has(selected)) clearSelection();
  }

  const press = (bar, btn) => {
    for (const b of bar.querySelectorAll('button')) b.setAttribute('aria-pressed', String(b === btn));
  };

  filter.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-layer]');
    if (!btn) return;
    stopTour();
    press(filter, btn);
    showLayer(btn.dataset.layer, btn.dataset.kind);
    const extra = layerText[btn.dataset.layer];
    announce(btn.dataset.kind === 'all' ? '' : `${(s.active || '{layer}').replace('{layer}', btn.textContent.trim())}${extra ? ` ${extra}` : ''}`);
  });

  viewBar?.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-view]');
    if (!btn) return;
    stopTour();
    press(viewBar, btn);
    showView(btn.dataset.view);
    announce(btn.textContent.trim());
  });

  let selected = null; // knooppunt-id

  function clearSelection() {
    selected = null;
    for (const n of nodes) n.classList.remove('is-selected');
    for (const e of edges) e.classList.remove('is-linked', 'is-faint');
    for (const p of parts) p.classList.remove('is-selected');
    if (detail) {
      detail.hidden = true;
      detail.replaceChildren();
    }
  }

  function fillDetail(node, part) {
    if (!detail) return;
    detail.replaceChildren();
    const head = document.createElement('div');
    head.className = 'topology-detail-head';
    const icon = part.querySelector('summary .part-icon');
    if (icon) head.append(icon.cloneNode(true));
    const title = document.createElement('h4');
    title.textContent = part.querySelector('summary span')?.textContent.trim() || node.dataset.node;
    title.tabIndex = -1;
    head.append(title);
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'topology-detail-close';
    close.textContent = s.close || '×';
    close.addEventListener('click', () => {
      const id = node.dataset.node;
      clearSelection();
      visibleNode(id)?.querySelector('a.node-link')?.focus({ preventScroll: true });
    });
    head.append(close);
    detail.append(head);
    const dl = part.querySelector('dl');
    if (dl) {
      const copy = dl.cloneNode(true);
      for (const x of copy.querySelectorAll('[id]')) x.removeAttribute('id');
      detail.append(copy);
    }
    const actions = document.createElement('p');
    actions.className = 'topology-detail-actions';
    const link = document.createElement('a');
    link.href = node.dataset.url || `#${part.id}`;
    link.textContent = s.view || 'Bekijk onderdeel';
    if (!node.dataset.url) {
      link.addEventListener('click', () => {
        part.open = true;
      });
    }
    actions.append(link);
    detail.append(actions);
    detail.hidden = false;
    title.focus({ preventScroll: true });
  }

  function select(partId, nodeId, clicked) {
    const node = clicked ?? visibleNode(nodeId) ?? nodes.find((n) => n.dataset.part === partId);
    const part = document.getElementById(partId);
    if (!node || !part) return;
    stopTour();
    if (selected === node.dataset.node) {
      clearSelection();
      part.open = false;
      return;
    }
    clearSelection();
    selected = node.dataset.node;
    for (const n of nodes) if (n.dataset.node === selected) n.classList.add('is-selected');
    for (const e of edges) {
      const linked = e.dataset.from === selected || e.dataset.to === selected;
      e.classList.toggle('is-linked', linked);
      e.classList.toggle('is-faint', !linked);
    }
    for (const p of parts) {
      p.open = p.id === partId;
      p.classList.toggle('is-selected', p.id === partId);
    }
    announce((s.selected || '{part}').replace('{part}', part.querySelector('summary span')?.textContent.trim() || ''));
    if (wide.matches || !detail) {
      part.scrollIntoView({ block: 'nearest' });
      part.querySelector('summary')?.focus({ preventScroll: true });
    } else {
      fillDetail(node, part);
    }
  }

  function selectEdge(edge) {
    stopTour();
    clearSelection();
    for (const e of edges) {
      const on = e.dataset.edge === edge.dataset.edge;
      e.classList.toggle('is-linked', on);
      e.classList.toggle('is-faint', !on);
    }
    const layerBtn = filter.querySelector(`button[data-layer="${edge.dataset.layer}"]`);
    const kind = layerBtn?.textContent.trim() || edge.dataset.layer;
    const extra = layerText[edge.dataset.layer];
    announce(`${(s.edge || '{layer}: {from} – {to}.').replace('{layer}', kind).replace('{from}', nodeLabel(edge.dataset.from)).replace('{to}', nodeLabel(edge.dataset.to))}${extra ? ` ${extra}` : ''}`);
  }

  el.addEventListener('click', (ev) => {
    const link = ev.target.closest('a.node-link');
    if (link) {
      ev.preventDefault();
      const node = link.closest('.node');
      select(link.dataset.part, node?.dataset.node, node);
      return;
    }
    const edge = ev.target.closest('.edge');
    if (edge && !compact) selectEdge(edge);
  });

  let tourCtl = null;
  const tour = { get active() { return Boolean(tourCtl?.active); } };
  function stopTour(reset) {
    tourCtl?.stop(reset);
  }

  if (!compact) {
    for (const n of nodes) {
      n.addEventListener('pointerenter', (ev) => {
        if (ev.pointerType !== 'mouse' || selected || tour.active) return;
        const id = n.dataset.node;
        for (const x of nodes) x.classList.toggle('is-preview', x.dataset.node === id);
        for (const e of edges) e.classList.toggle('is-preview', e.dataset.from === id || e.dataset.to === id);
      });
      n.addEventListener('pointerleave', () => {
        for (const x of [...nodes, ...edges]) x.classList.remove('is-preview');
      });
    }
  }

  el.addEventListener('keydown', (ev) => {
    if (ev.key !== 'Escape') return;
    if (tour.active) {
      stopTour(true);
      return;
    }
    if (selected) {
      const node = visibleNode(selected);
      clearSelection();
      node?.querySelector('a.node-link')?.focus({ preventScroll: true });
    }
  });

  if (el.querySelector('.topology-tour .tour-steps > li[data-nodes]')) {
    import('./topology-tour.js')
      .then((m) => {
        tourCtl = m.mountTour(el, config, { nodes, areas, edges, filter, viewBar, showView, clearSelection, press, announce });
      })
      .catch(() => {});
  }
}
