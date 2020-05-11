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
