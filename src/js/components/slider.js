// =========================== \\
// ========== SWIPER ========= \\
// ======= npm i swiper ====== \\
// =========================== \\

const swiper = new Swiper('.arrivals__slider', {
  // option
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // Pagination, dots
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },

  },
});