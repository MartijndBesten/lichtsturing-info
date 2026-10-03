export function wireCheck(check, strings = {}) {
  const feedback = check.querySelector('.check-feedback');
  const answer = check.querySelector('.check-answer');
  const options = [...check.querySelectorAll('.check-options li')];
  const right0 = check.querySelector('.check-options li[data-correct]')?.textContent.trim() ?? '';
  hideMore(answer);
  for (const li of options) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'check-option';
    btn.setAttribute('aria-pressed', 'false');
    while (li.firstChild) btn.appendChild(li.firstChild);
    li.appendChild(btn);
    btn.addEventListener('click', () => {
      const right = li.hasAttribute('data-correct');
      for (const other of options) {
        const b = other.querySelector('button');
        b.setAttribute('aria-pressed', String(other === li));
        other.classList.toggle('is-chosen', other === li);
        other.classList.toggle('is-right', other === li && right);
        other.classList.toggle('is-wrong', other === li && !right);
      }
      showFeedback(feedback, { right, label: right ? strings.right : strings.wrong, text: right ? '' : `${strings.rightIs || ''} ${right0}`.trim() });
      check.classList.toggle('is-answered', true);
      showMore(answer, strings.more);
    });
  }
}

export function hideMore(details) {
  if (details) details.hidden = true;
}
export function showMore(details, label) {
  if (!details) return;
  details.hidden = false;
  const sum = details.querySelector('summary');
  if (sum && label) sum.textContent = label;
}

export function showFeedback(el, { right = null, label = '', qual = '', text = '' } = {}) {
  if (!el) return;
  const part = (cls, value) => {
    const span = document.createElement('span');
    span.className = cls;
    span.textContent = value;
    return span;
  };
  const parts = [];
  if (label) parts.push(part('fb-label', label));
  if (qual) parts.push(part('fb-qual', qual));
  if (text) parts.push(part('fb-text', text));
  el.replaceChildren(...parts);
  el.classList.toggle('is-right', right === true);
  el.classList.toggle('is-wrong', right === false);
}
