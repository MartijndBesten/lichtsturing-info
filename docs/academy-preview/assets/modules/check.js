export function wireCheck(check, strings = {}) {
  const feedback = check.querySelector('.check-feedback');
  const answer = check.querySelector('.check-answer');
  const options = [...check.querySelectorAll('.check-options li')];
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
      if (feedback) feedback.textContent = right ? strings.right || '' : strings.wrong || '';
      check.classList.toggle('is-answered', true);
      if (answer) answer.open = true;
    });
  }
}
