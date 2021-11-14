const swiper = new Swiper('.trending__content', {
  // option
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
  },
});