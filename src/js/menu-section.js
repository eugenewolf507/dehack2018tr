const menuButton = document.querySelector(".box-shadow-menu--closed");
const menu = document.querySelector(".burger-list");

let menuHandle = false;
function menuButtonClickHandler() {
  menu.classList.toggle("hidden");
  if (!menuHandle) {
    menuButton.style.backgroundImage = "url('../img/X.svg')";
    menuHandle = true;
  } else {
    menuButton.style.backgroundImage = "url('../img/menu.svg')";
    menuHandle = false;
  }
}
menuButton.addEventListener("click", menuButtonClickHandler);
