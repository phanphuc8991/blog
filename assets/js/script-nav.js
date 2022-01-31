// nav-toggler
let checkIconToggle = true;
const eleIconToggle = $(".nav__toggler");
const eleNavLinkItem = $$(".nav-link__item");
const eleMobileNavLink = $(".nav-link");
eleIconToggle.onclick = function () {
  if (checkIconToggle) {
    eleMobileNavLink.classList.add("active");
    checkIconToggle = false;

    $(".nav-link.active").style.height =
      eleNavLinkItem[0].offsetHeight * 5 + "px";
  } else {
    $(".nav-link.active").style.height = 0;
    eleMobileNavLink.classList.remove("active");
    checkIconToggle = true;
  }
};

let arrayLocation = window.location.href.split("/");
let activeNav = arrayLocation[arrayLocation.length - 1].split(".");
console.log(activeNav);
eleNavLinkItem.forEach((item) => {
  if (
    activeNav[0] === item.children[0].innerText.toLowerCase() ||
    (item.children[0].innerText.toLowerCase() === "home" &&
      activeNav[0] === "index")
  ) {
    item.classList.add("active");
  }
});
