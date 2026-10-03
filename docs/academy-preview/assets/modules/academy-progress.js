
export const CONTEXTS = ['learner', 'trainer', 'preview'];
export const STATES = ['not_started', 'in_progress', 'completed'];
const ID = /^[a-z_]+\.[a-z0-9-]+$/;

export class ProgressError extends Error {}

export function createProgress({ adapter, context = 'learner', catalog = null, now = () => new Date().toISOString() }) {
  if (!CONTEXTS.includes(context)) throw new ProgressError(`onbekende context ${context}`);
  const writes = context === 'learner';
  const known = (id, kind) => {
    if (!ID.test(id)) throw new ProgressError(`ongeldig id ${id}`);
    if (catalog && !(kind === 'module' ? catalog.modules[id] : catalog.objects[id])) return false;
    return true;
  };
  const versionOf = (id, kind) => (kind === 'module' ? catalog?.modules[id]?.version : catalog?.objects[id]?.version) ?? null;
  const skipped = (reason) => ({ written: false, reason });

  const api = {
    context,
    getModuleProgress(moduleId) {
      known(moduleId, 'module');
      const objects = catalog?.modules[moduleId]?.objects ?? [];
      const state = adapter.read();
      const per = Object.fromEntries(objects.map((id) => [id, objectView(state.objects[id], versionOf(id, 'object'))]));
      const m = state.modules[moduleId];
      return {
        moduleId,
        objects: per,
        done: Object.values(per).filter((x) => x.state === 'completed').length,
        total: objects.length,
        completed: Boolean(m?.completedAt),
        outdated: Boolean(m?.completedAt && m.version && versionOf(moduleId, 'module') && m.version !== versionOf(moduleId, 'module')),
      };
    },
    startLearningObject(objectId) {
      if (!writes) return skipped(context);
      if (!known(objectId, 'object')) return skipped('unknown-object');
      return adapter.update((s) => {
        const o = s.objects[objectId] ?? { state: 'not_started' };
        s.objects[objectId] = { ...o, state: o.state === 'completed' ? 'completed' : 'in_progress', startedAt: o.startedAt ?? now(), lastActivity: now() };
      });
    },
    completeInteraction(objectId, interactionId) {
      if (!writes) return skipped(context);
      if (!known(objectId, 'object')) return skipped('unknown-object');
      if (!/^[a-z0-9-]+$/.test(interactionId)) throw new ProgressError(`ongeldige interactie ${interactionId}`);
      return adapter.update((s) => {
        const o = s.objects[objectId] ?? { state: 'in_progress', startedAt: now() };
        const set = new Set(o.interactions ?? []);
        set.add(interactionId);
        s.objects[objectId] = { ...o, state: o.state === 'completed' ? 'completed' : 'in_progress', interactions: [...set].sort(), lastActivity: now() };
      });
    },
    recordKnowledgeCheck(checkId, { correct }) {
      if (!writes) return skipped(context);
      if (!ID.test(checkId) || !checkId.startsWith('knowledge_check.')) throw new ProgressError(`ongeldige kennischeck ${checkId}`);
      if (typeof correct !== 'boolean') throw new ProgressError('correct moet true of false zijn');
      return adapter.update((s) => {
        const c = s.checks[checkId] ?? { attempts: 0 };
        s.checks[checkId] = { attempts: c.attempts + 1, lastCorrect: correct, lastAt: now() };
      });
    },
    completeLearningObject(objectId) {
      if (!writes) return skipped(context);
      if (!known(objectId, 'object')) return skipped('unknown-object');
      return adapter.update((s) => {
        const o = s.objects[objectId] ?? { startedAt: now() };
        s.objects[objectId] = { ...o, state: 'completed', completedAt: o.completedAt ?? now(), lastActivity: now(), version: versionOf(objectId, 'object') };
      });
    },
    completeModule(moduleId) {
      if (!writes) return skipped(context);
      if (!known(moduleId, 'module')) return skipped('unknown-module');
      return adapter.update((s) => {
        s.modules[moduleId] = { completedAt: s.modules[moduleId]?.completedAt ?? now(), version: versionOf(moduleId, 'module') };
      });
    },
    resetModule(moduleId) {
      if (!writes) return skipped(context);
      known(moduleId, 'module');
      const objects = catalog?.modules[moduleId]?.objects ?? [];
      return adapter.update((s) => {
        delete s.modules[moduleId];
        for (const id of objects) delete s.objects[id];
      });
    },
  };
  return Object.freeze(api);
}

function objectView(o, version) {
  if (!o) return { state: 'not_started' };
  const outdated = Boolean(o.state === 'completed' && o.version && version && o.version !== version);
  return { state: STATES.includes(o.state) ? o.state : 'not_started', completedAt: o.completedAt ?? null, interactions: o.interactions ?? [], outdated };
}

export const emptyState = () => ({ v: 2, objects: {}, modules: {}, checks: {} });

export function sanitize(raw) {
  const out = emptyState();
  if (!raw || typeof raw !== 'object' || raw.v !== 2) return out;
  const iso = (x) => (typeof x === 'string' && !Number.isNaN(Date.parse(x)) ? x : undefined);
  for (const [id, o] of Object.entries(raw.objects ?? {})) {
    if (!ID.test(id) || !o || typeof o !== 'object' || !STATES.includes(o.state)) continue;
    out.objects[id] = { state: o.state, startedAt: iso(o.startedAt), lastActivity: iso(o.lastActivity), completedAt: iso(o.completedAt), version: typeof o.version === 'string' ? o.version.slice(0, 64) : undefined, interactions: Array.isArray(o.interactions) ? o.interactions.filter((x) => typeof x === 'string' && /^[a-z0-9-]+$/.test(x)).slice(0, 50) : undefined };
  }
  for (const [id, m] of Object.entries(raw.modules ?? {})) if (ID.test(id) && m && iso(m.completedAt)) out.modules[id] = { completedAt: m.completedAt, version: typeof m.version === 'string' ? m.version.slice(0, 64) : undefined };
  for (const [id, c] of Object.entries(raw.checks ?? {})) if (/^knowledge_check\.[a-z0-9-]+$/.test(id) && c && Number.isInteger(c.attempts) && c.attempts > 0 && typeof c.lastCorrect === 'boolean') out.checks[id] = { attempts: Math.min(c.attempts, 999), lastCorrect: c.lastCorrect, lastAt: iso(c.lastAt) };
  return JSON.parse(JSON.stringify(out));
}
