const base = document.documentElement.dataset.base || '/';

for (const el of document.querySelectorAll('[data-module]')) {
  const name = el.dataset.module;
  if (!/^[a-z0-9-]+$/.test(name)) continue;
  let config = {};
  const node = el.querySelector(':scope > script.module-config');
  if (node) {
    try {
      config = JSON.parse(node.textContent);
    } catch {
      config = {};
    }
  }
  import(`${base}assets/modules/${name}.js`)
    .then((mod) => mod.mount(el, config))
    .catch((err) => console.error(`Module ${name} kon niet laden`, err));
}

const openTarget = () => {
  const el = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
  const d = el?.closest('details');
  if (d && !d.open) d.open = true;
};
openTarget();
addEventListener('hashchange', openTarget);
