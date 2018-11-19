//-------------------Take DOM nodes---------------------
const menuSection = document.getElementById('menu');
menuSection.showButton = menuSection.querySelector('div[data-id="show-button"]');
menuSection.hamburger = menuSection.querySelector('svg[data-id="hamburger"]');
menuSection.list = menuSection.querySelector('ul[data-id="list"]');
menuSection.menuItems = [...menuSection.querySelectorAll('.menu__item')];
menuSection.menuSubitems = [...menuSection.querySelectorAll('.menu__subitem')];
menuSection.routesItems = [...menuSection.querySelectorAll('.routes__item')];

//-------------------Create global variables-----------------
let isMenuShown = false;

//---------------------Add listeners to the DOM elements--------------------


menuSection.showButton.addEventListener('click', handleShowButtonClick);
menuSection.menuItems.forEach(item => {item.addEventListener('click', handleMenuItemClick)});
menuSection.routesItems.forEach(item => {item.addEventListener('click', handleRoutesItemClick)})
document.body.addEventListener('click', handleBodyClick);


function handleShowButtonClick() {
  if (!isMenuShown) {
    menuSection.showButton.classList.remove('menu__show-button--closed');
    menuSection.list.classList.remove('menu__list--hidden');
    menuSection.hamburger.classList.add('active');
    isMenuShown = true;
  } else {
    hideMenu();
    //showAllPolylines();
    //hideRouteInfo();
  }
}

function handleBodyClick( {target} ) {
  if (!target.matches('#menu *')) {
    hideMenu();
    //showAllPolylines();
    //hideRouteInfo();
    return;
  }
}

function handleMenuItemClick( {target} ) {
  //for those items which have submenu
  const chosenSubitem = menuSection.menuSubitems.find(subitem => subitem.getAttribute('data-id') === target.getAttribute('data-id'));
    if (chosenSubitem){
      // If any subitem is opened it is necessary to hide it first
      hideMenuSubitems();
      chosenSubitem.classList.remove('menu__subitem--hidden');
      leaveOnlyOneTypeOfRoutes(target.getAttribute('data-id'));
      return;
    }
    // for other items

    if (target.matches('li[data-id="all"]')){
      hideMenuSubitems();
      showAllPolylines();
      hideRouteInfo();
      return;
    }

    if (target.matches('li[data-id="traffic-rules"]')){
      document 
      .getElementById("control-section")
      .classList.remove("traffic--hidden");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      hideMenu();
      showAllPolylines();
      hideRouteInfo();
      return;
    }

    if (target.matches('li[data-id="traffic-accidents"]')){
      document 
      .getElementById("accident-section")
      .classList.remove("traffic--hidden");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      hideMenu();
      showAllPolylines();
      hideRouteInfo();
      return;
    }

  }

  function handleRoutesItemClick( {target} ) {
    removeAllButOneRoute(target.getAttribute('data-id'));
  }

  function hideMenuSubitems() {
    menuSection.menuSubitems.forEach(subitem => {subitem.classList.add('menu__subitem--hidden');});
  }

  function hideMenu() {
    menuSection.showButton.classList.add('menu__show-button--closed');
    menuSection.list.classList.add('menu__list--hidden');
    menuSection.hamburger.classList.remove('active');
    hideMenuSubitems();
    isMenuShown = false;
  }

