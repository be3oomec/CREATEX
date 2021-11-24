
let select = NiceSelect.bind(document.getElementById("rating"));
let select2 = NiceSelect.bind(document.getElementById("sort2"));
let select3 = NiceSelect.bind(document.getElementById("sort"));

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

// ==============================================================

const btnShow = document.querySelector(".products-filters__btn"),
      filters = document.querySelector(".products-filters__filter"),
      products = document.querySelector(".products-filters__products");


if (btnShow !== null) {
  btnShow.addEventListener("click", () => {
    filters.classList.toggle("hide");
    products.classList.toggle("products-filters__products--full");

    if ( filters.classList.contains("hide") ) {
      btnShow.innerHTML = 'Show filters';
    }
    else {
      btnShow.innerHTML = 'Hide filters';
    }
  });
}
