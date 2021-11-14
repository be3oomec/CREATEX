const swiper = new Swiper('.arrivals__slider', {
  // option
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination, dots
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },

  },
});