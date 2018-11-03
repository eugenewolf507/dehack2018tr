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
  if (!target.firstElementChild.hasAttribute('hidden')) {
    subMenusArr.forEach(elem => elem.setAttribute('hidden', true))
  }
  else {
    subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
    target.firstElementChild.removeAttribute('hidden')
  };
  if (target.matches("#burger-list")) {
    return;
  }
};

menu.addEventListener("click", menuItemClickHandler);

//--Hadling array polylines on click to sumbenu----

function removeAllButOnePolyline(type, idx) {
  polylines.forEach(item => {
    if (!(item.type === type && item.index === idx)) {
      item.poly.setMap(null);
    }
  });
}
//-----------------------
function subMenuItemClickHandler({target}) {
  let counter = 0;
  removeAllButOnePolyline('highwayRoutes', 3);
  console.log(target.id);
  polylines.forEach(elem => {
    console.log(elem);
    counter += 1;
  });
};
subMenuItem.forEach(item => item.addEventListener("click", subMenuItemClickHandler));
  // console.log(allRecreationRoutes);