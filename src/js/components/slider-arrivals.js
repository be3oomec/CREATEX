// =========================== \\
// ========== SWIPER ========= \\
// ======= npm i swiper ====== \\
// =========================== \\

const swiper = new Swiper('.arrivals__slider', {
  // option
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,

  // Pagination, dots
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
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