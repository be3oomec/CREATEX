
  const cartBtn = document.querySelector('.header__btn--cart');
  const miniCart = document.querySelector('.mini-cart');

  cartBtn.addEventListener('click', () => {
    miniCart.classList.add('mini-cart--visible');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('header__btn--cart')) {
      miniCart.classList.remove('mini-cart--visible');
    }
  });