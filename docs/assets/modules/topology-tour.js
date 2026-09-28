import { createPlayer } from './tour-player.js';

export function mountTour(el, config, api) {
  const s = config.strings || {};
  const { nodes, areas = [], edges, filter, viewBar, showView, clearSelection, press, announce } = api;
  const marker = el.dataset.flowMarker;
  const tourBox = el.querySelector('.topology-tour');
  const words = (v) => (v ? v.split(' ') : undefined);
  const steps = [...tourBox.querySelectorAll('.tour-steps > li[data-nodes]')].map((li) => ({
    id: li.dataset.step,
    title: li.querySelector('.tour-step-title')?.textContent.trim() || '',
    text: li.querySelector('.tour-step-text')?.textContent.replace(/\s+/g, ' ').trim() || '',
    nodes: words(li.dataset.nodes) ?? [],
    edges: words(li.dataset.edges),
    flow: words(li.dataset.flow),
    back: words(li.dataset.back),
    light: li.dataset.light ? Object.fromEntries(li.dataset.light.split(' ').map((x) => x.split(':'))) : undefined,
    view: li.dataset.view,
    duration: Number(li.dataset.duration) || 5,
  }));
  const defaultView = el.dataset.defaultView;
  const bar = tourBox?.querySelector('.tour-bar');
  const now = tourBox?.querySelector('.tour-now');
  const lightNodes = () => nodes.filter((n) => n.dataset.light);

  function clearTourMarks() {
    for (const x of [...nodes, ...areas, ...edges]) x.classList.remove('is-tour-on', 'is-tour-dim', 'is-flow', 'is-flow-back');
    for (const n of lightNodes()) delete n.dataset.light;
    for (const f of el.querySelectorAll('.edge-flow, .edge-flow-halo')) f.remove();
  }

  function flowLine(edge, back) {
    const line = edge.querySelector('.edge-line');
    if (!line) return;
    const make = (cls) => {
      const f = line.cloneNode(false);
      f.setAttribute('class', cls);
      f.removeAttribute('marker-start');
      f.removeAttribute('marker-end');
      f.setAttribute('aria-hidden', 'true');
      return f;
    };
    const flow = make(`edge-flow${back ? ' edge-flow--back' : ''}`);
    if (marker) flow.setAttribute(back ? 'marker-start' : 'marker-end', `url(#${marker})`);
    line.after(make('edge-flow-halo'), flow);
  }

  function applyStep(i) {
    const st = steps[i];
    if (!st) return;
    clearSelection();
    clearTourMarks();
    for (const x of [...edges, ...nodes]) x.classList.remove('is-dim');
    if (filter) press(filter, filter.querySelector('button[data-kind="all"]'));
    if (st.view) showView(st.view);
    else if (defaultView && viewBar) showView(defaultView);
    const on = new Set(st.nodes);
    const onEdges = new Set(st.edges ?? edges.filter((e) => on.has(e.dataset.from) && on.has(e.dataset.to)).map((e) => e.dataset.edge));
    for (const n of nodes) {
      n.classList.toggle('is-tour-on', on.has(n.dataset.node));
      n.classList.toggle('is-tour-dim', !on.has(n.dataset.node));
      const level = st.light?.[n.dataset.node];
      if (level) n.dataset.light = level;
    }
    for (const a of areas) {
      a.classList.toggle('is-tour-on', on.has(a.dataset.area));
      a.classList.toggle('is-tour-dim', !on.has(a.dataset.area));
    }
    for (const e of edges) {
      e.classList.toggle('is-tour-on', onEdges.has(e.dataset.edge));
      e.classList.toggle('is-tour-dim', !onEdges.has(e.dataset.edge));
      const fwd = (st.flow ?? []).includes(e.dataset.edge);
      const back = (st.back ?? []).includes(e.dataset.edge);
      if (fwd || back) {
        e.classList.add(back ? 'is-flow-back' : 'is-flow');
        flowLine(e, back);
      }
    }
    if (now) {
      now.replaceChildren();
      const kind = st.flow?.length ? s.flow : st.back?.length ? s.back : '';
      if (kind) {
        const k = document.createElement('p');
        k.className = `tour-now-key${st.flow?.length ? '' : ' tour-now-key--back'}`;
        k.textContent = kind;
        now.append(k);
      }
      const p = document.createElement('p');
      p.textContent = st.text;
      now.append(p);
      now.hidden = false;
    }
    for (const li of tourBox?.querySelectorAll('.tour-steps > li') ?? []) li.classList.toggle('is-current', li.dataset.step === st.id);
  }

  if (!bar || !steps.length) return { active: false, stop() {} };
  tourBox.classList.add('is-enhanced');
  const player = createPlayer(el, bar, {
    total: () => steps.length,
    strings: s,
    durationOf: (i) => steps[i]?.duration ?? 5,
    onStep: applyStep,
    onStop(reset) {
      clearTourMarks();
      if (now) now.hidden = true;
      if (defaultView && viewBar) showView(defaultView);
      for (const li of tourBox.querySelectorAll('.tour-steps > li')) li.classList.remove('is-current');
      if (reset) announce(s.stopped || '');
    },
  });

  return {
    get active() {
      return player.active;
    },
    stop: player.stop,
  };
}
