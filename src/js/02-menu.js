//-------------------Take DOM nodes---------------------
const menuSection = document.getElementById('menu');
menuSection.showButton = menuSection.querySelector('div[data-id="show-button"]');
menuSection.hamburger = menuSection.querySelector('svg[data-id="hamburger"]');
menuSection.list = menuSection.querySelector('ul[data-id="list"]');
menuSection.list.items = [];
menuSection.list.items[0] = menuSection.list.querySelector('li[data-id="recreation"]');
menuSection.list.items[1] = menuSection.list.querySelector('li[data-id="magistral"]');
menuSection.list.items[2] = menuSection.list.querySelector('li[data-id="touristic"]');
menuSection.list.items[3] = menuSection.list.querySelector('li[data-id="traffic-rules"]');
menuSection.list.items[4] = menuSection.list.querySelector('li[data-id="traffic-accidents"]');

//-------------------Create global variables-----------------
let isMenuShown = false;

//---------------------Add listeners to the DOM elements--------------------


menuSection.showButton.addEventListener('click', handleShowingMenu);
menuSection.list.addEventListener('click', handleListClick);
document.body.addEventListener('click', handleClickingOnBody);





function handleShowingMenu() {
  if (!isMenuShown) {
    menuSection.showButton.classList.remove('menu__show-button--closed');
    menuSection.list.classList.remove('menu__list--hidden');
    menuSection.hamburger.classList.add('active');
    isMenuShown = true;
  } else {
    hideMenu();
  }
}

function handleClickingOnBody( {target} ) {
  if (!target.matches('#menu *')) {
    hideMenu();
    return;
  }
}

function handleListClick( {target} ) {

  if(!target.matches('.menu__item')) {
    return;
  }

    // If any subitem is opened it is necessary to hide it first
    hideMenuSubitems();

    const chosenSubitem = target.querySelector('.menu__subitem');
    if (chosenSubitem){
      chosenSubitem.classList.remove('menu__subitem--hidden');
      return;
    }

    if (target.matches('li[data-id="traffic-rules"]')){
      document 
      .getElementById("accident-section")
      .classList.remove("traffic--hidden");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      hideMenu();
      return;
    }

    if (target.matches('li[data-id="traffic-accidents"]')){
      document 
      .getElementById("control-section")
      .classList.remove("traffic--hidden");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      hideMenu();
      return;
    }

  }

  function hideMenuSubitems() {
    menuSection.list.items.forEach(element => {
      const subitem = element.querySelector('.menu__subitem');
      if (subitem) {
        subitem.classList.add('menu__subitem--hidden');
      } 
    });
  }

  function hideMenu() {
    menuSection.showButton.classList.add('menu__show-button--closed');
    menuSection.list.classList.add('menu__list--hidden');
    menuSection.hamburger.classList.remove('active');
    hideMenuSubitems();
    isMenuShown = false;
  }




// //---------------------The appearance and disappearance of the menu when you click menu button START--------------------
// const menuButton = document.querySelector(".menu__show-button");
// const menu = document.querySelector(".burger-list");
// const menuSvg = document.querySelector(".ham");
// const menuItem = document.querySelector(".burger-list__item");
// const subMenu = document.querySelector(".subrotes");
// const subMenusArr = document.querySelectorAll(".subrotes");
// const subMenuItem = document.querySelectorAll(".subrotes__item");

// let menuHandle = false;
// function menuButtonClickHandler() {
//   menu.classList.toggle("hidden-menu");
// }
// //menuButton.addEventListener("click", menuButtonClickHandler);
// //---------------------The appearance and disappearance of the menu when you click menu button END--------------------

// //---------------------Remove the menu when clicking on the map START--------------------
// function mapClickHandlerRemoveMenu() {
//   menu.classList.remove("hidden-menu");
//   subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
//   if (menuSvg.classList.contains("active")) {
//     menuSvg.classList.remove("active");
//   }
// }
// const map = document.getElementById("map");
// map.addEventListener("click", mapClickHandlerRemoveMenu);
// //---------------------Remove the menu when clicking on the map END--------------------

// //-------------------The appearance and disappearance submenu----------

// function menuItemClickHandler({target}) {

//   if (target.matches(".subrotes__item") || target.matches(".burger-list__item--pdr") || target.matches(".burger-list__item--dtp")) {
//     return;
//   }

//   if (!target.firstElementChild.hasAttribute('hidden')) {
//   subMenusArr.forEach(elem => elem.setAttribute('hidden', true))
//   }
//   else {
//   subMenusArr.forEach(elem => elem.setAttribute('hidden', true));
//   target.firstElementChild.removeAttribute('hidden')
//   };
// };

// menu.addEventListener("click", menuItemClickHandler);

// //--Hadling array polylines on click to sumbenu----


// //-----------------------
// function subMenuItemClickHandler({target}) {
//   let counter = 0;
//   removeAllButOnePolyline('highwayRoutes', 3);

//   polylines.forEach(elem => {
//     counter += 1;
//   });
// };
// subMenuItem.forEach(item => item.addEventListener("click", subMenuItemClickHandler));
