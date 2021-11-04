// ================================== \\
// ============ ACCORDION =========== \\
// ================================== \\

const accordions = document.querySelectorAll('.footer__item');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const control = self.querySelector('.footer__title');
    const content = self.querySelector('.footer__nav-list');

    self.classList.toggle('open');

    // если открыт аккордеон
    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});