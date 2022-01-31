const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/// Top - page
const btnTopPage = $(".top-page");
btnTopPage.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.onscroll = function () {
  if (window.scrollY === 0) {
    btnTopPage.classList.add("hide");
  } else {
    btnTopPage.classList.remove("hide");
  }
};
