//---------------------The appearance and disappearance of the menu when you click menu button START--------------------
const menuButton = document.querySelector(".box-shadow-menu--closed");
const menu = document.querySelector(".burger-list");
const menuSvg = document.querySelector(".ham");
const menuItem = document.querySelector(".burger-list__item");
const subMenu = document.querySelector(".subrotes");
const subMenusArr = document.querySelectorAll(".subrotes");

let menuHandle = false;
function menuButtonClickHandler() {
  menu.classList.toggle("hidden");
}
menuButton.addEventListener("click", menuButtonClickHandler);
//---------------------The appearance and disappearance of the menu when you click menu button END--------------------

//---------------------Remove the menu when clicking on the map START--------------------
function mapClickHandlerRemoveMenu() {
  menu.classList.remove("hidden");
  subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
  if (menuSvg.classList.contains("active")) {
    menuSvg.classList.remove("active");
  }
}
const map = document.getElementById("map");
map.addEventListener("click", mapClickHandlerRemoveMenu);
//---------------------Remove the menu when clicking on the map END--------------------

//-------------------The appearance and disappearance submenu----------

function menuItemClickHandler({target}) {
  subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
  if (target.firstElementChild.hasAttribute('hidden')) {
      target.firstElementChild.removeAttribute('hidden');
  }
  else {target.firstElementChild.setAttribute('hidden', true)}
};

menu.addEventListener("click", menuItemClickHandler);