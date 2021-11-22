
let slider = document.querySelector('#filters__price');
if (slider) {
  noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      }
  });
}

// ==============================================================

const btnToTop = document.querySelector(".footer__gotop");
let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

btnToTop.addEventListener("click", scrollToTop);


// ==============================================================

const btnSearch = document.querySelector('.nav__mobile-search');
const inputSearch = document.querySelector('.nav__search');

btnSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('hide');
});

// ===============================================================

let select = NiceSelect.bind(document.getElementById("rating"));

// ===============================================================
