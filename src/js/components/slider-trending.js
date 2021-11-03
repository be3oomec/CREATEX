const swiper = new Swiper('.trending__content', {
  // option
  spaceBetween: 30,
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  // Pagination, dots
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});