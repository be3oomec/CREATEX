const swiper = new Swiper('.sale__content', {
  // option
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-b-next',
    prevEl: '.swiper-b-prev',
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