  const cartBtn = document.querySelector('.nav__btn');
  const miniCart = document.querySelector('.mini-cart');

  cartBtn.addEventListener('click', () => {
    miniCart.classList.add('mini-cart--visible');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('nav__btn')) {
      miniCart.classList.remove('mini-cart--visible');
    }
  });