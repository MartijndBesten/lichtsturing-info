export const LEVELS = ['vol', 'voorloop', 'basis', 'uit'];

export function levelsFor(count, pos, { basislicht = true, drempel = false } = {}) {
  const rest = basislicht ? 'basis' : 'uit';
  return Array.from({ length: count }, (_, i) => {
    if (drempel || pos == null || pos < 0) return rest;
    if (i === pos) return 'vol';
    if (Math.abs(i - pos) === 1) return 'voorloop';
    return rest;
  });
}
