//---------------------The appearance and disappearance of the menu when you click menu button START--------------------
const menuButton = document.querySelector(".box-shadow-menu--closed");
const menu = document.querySelector(".burger-list");
const menuSvg = document.querySelector(".ham");
const menuItem = document.querySelector(".burger-list__item");
const subMenu = document.querySelector(".subrotes");
const subMenusArr = document.querySelectorAll(".subrotes");
const subMenuItem = document.querySelectorAll(".subrotes__item");

let menuHandle = false;
function menuButtonClickHandler() {
  menu.classList.toggle("hidden-menu");
}
menuButton.addEventListener("click", menuButtonClickHandler);
//---------------------The appearance and disappearance of the menu when you click menu button END--------------------

//---------------------Remove the menu when clicking on the map START--------------------
function mapClickHandlerRemoveMenu() {
  menu.classList.remove("hidden-menu");
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

  if (target.matches(".subrotes__item") || target.matches(".burger-list__item--pdr") || target.matches(".burger-list__item--dtp")) {
    return;
  }

  if (!target.firstElementChild.hasAttribute('hidden')) {
  subMenusArr.forEach(elem => elem.setAttribute('hidden', true))
  }
  else {
  subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
  target.firstElementChild.removeAttribute('hidden')
  };
};

menu.addEventListener("click", menuItemClickHandler);

//--Hadling array polylines on click to sumbenu----

let polylinesHidden = false;

function removeAllButOnePolyline(type, idx) {
  polylines.forEach(item => {
    if (!(item.type === type && item.index === idx)) {
      item.poly.setMap(null);
    };
    polylinesHidden = true;
  });
};

function showAllPolylines() {
  if (!polylinesHidden) {
    return;
  }
  polylines.forEach(item => {
    item.poly.setMap(map);
  });
  polylinesHidden = false;
};
//-----------------------
function subMenuItemClickHandler({target}) {
  let counter = 0;
  removeAllButOnePolyline('highwayRoutes', 3);

  polylines.forEach(elem => {
    counter += 1;
  });
};
subMenuItem.forEach(item => item.addEventListener("click", subMenuItemClickHandler));
