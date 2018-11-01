//---------------------The appearance and disappearance of the menu when you click menu button START--------------------
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
//---------------------The appearance and disappearance of the menu when you click menu button END--------------------

//---------------------Remove the menu when clicking on the map START--------------------
function mapClickHandlerRemoveMenu() {
  menu.classList.remove("hidden");
  if (menuHandle) {
    menuButton.style.backgroundImage = "url('../img/menu.svg')";
    menuHandle = false;
  }
}
const map = document.getElementById("map");
map.addEventListener("click", mapClickHandlerRemoveMenu);
//---------------------Remove the menu when clicking on the map END--------------------


