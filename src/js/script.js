const vertuoRed = document.getElementById("vertuoRed");
const vertuoRedColor = document.getElementById("vertuoRedColor");
const vertuoBlackColor = document.getElementById("vertuoBlackColor");

vertuoRedColor.addEventListener("click", () => {
  vertuoRed.style.display = "block";
  vertuoBlack.style.display = "none";
});

vertuoBlackColor.addEventListener("click", () => {
  vertuoBlack.style.display = "block";
  vertuoRed.style.display = "none";
});

const citizRed = document.getElementById("citizRed");
const citizRedColor = document.getElementById("citizRedColor");
const citizGreyColor = document.getElementById("citizGreyColor");

citizGreyColor.addEventListener("click", () => {
  citizGrey.style.display = "block";
  citizRed.style.display = "none";
});

citizRedColor.addEventListener("click", () => {
  citizRed.style.display = "block";
  citizGrey.style.display = "none";
});

//menu on scroll

var menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  var offsetWindow = window.pageYOffset;
  var scrolled = document.body.scrollTop;
  var position = menu.offsetTop;
  const dumbPosition = 3;
  console.log(offsetWindow);
  if (offsetWindow > dumbPosition) {
    menu.classList.add("menu-on-scroll");
  } else {
    menu.classList.remove("menu-on-scroll");
  }
});

//retour haut de page
$(function() {
  $("#goUp").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
