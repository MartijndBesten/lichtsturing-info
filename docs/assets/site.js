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
