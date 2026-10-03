import { emptyState, sanitize } from './academy-progress.js';

export const KEY_V2 = 'lichtsturing-academy-voortgang-v2';
export const KEY_V1 = 'lichtsturing-academy-voortgang';

export function migrateV1(v1, v2, at) {
  const out = sanitize(v2 && v2.v === 2 ? v2 : emptyState());
  if (!v1 || v1.v !== 1) return out;
  for (const [slug, done] of Object.entries(v1.lessons ?? {})) {
    const id = `lesson.${slug}`;
    if (done === true && /^[a-z0-9-]+$/.test(slug) && !out.objects[id]) out.objects[id] = { state: 'completed', completedAt: at, lastActivity: at };
  }
  for (const [slug, m] of Object.entries(v1.modules ?? {})) {
    const id = `learning_path.${slug}`;
    if (m?.done === true && /^[a-z0-9-]+$/.test(slug) && !out.modules[id]) out.modules[id] = { completedAt: at };
  }
  out.migratedFromV1 = true;
  return out;
}

export function localAdapter(storage = globalThis.localStorage, now = () => new Date().toISOString()) {
  const load = () => {
    let v2 = null;
    let v1 = null;
    try {
      v2 = JSON.parse(storage.getItem(KEY_V2) || 'null');
    } catch {
      v2 = null; // corrupt → leeg beginnen, niet crashen
    }
    if (v2?.migratedFromV1) return { ...sanitize(v2), migratedFromV1: true };
    try {
      v1 = JSON.parse(storage.getItem(KEY_V1) || 'null');
    } catch {
      v1 = null;
    }
    return migrateV1(v1, v2, now());
  };
  return {
    kind: 'local',
    read: () => load(),
    update(fn) {
      const s = load();
      fn(s);
      try {
        storage.setItem(KEY_V2, JSON.stringify({ ...sanitize(s), migratedFromV1: true }));
        return { written: true };
      } catch {
        return { written: false, reason: 'storage-unavailable' }; // privévenster, quota: alles werkt verder zonder voortgang
      }
    },
  };
}

export function memoryAdapter() {
  let s = emptyState();
  return { kind: 'memory', read: () => sanitize(JSON.parse(JSON.stringify(s))), update(fn) { const c = sanitize(s); fn(c); s = sanitize(c); return { written: true }; } };
}
