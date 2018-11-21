//-------------------Take DOM nodes---------------------
const menuSection = document.getElementById("menu");
menuSection.showButton = menuSection.querySelector(
  'div[data-id="show-button"]'
);
menuSection.hamburger = menuSection.querySelector('svg[data-id="hamburger"]');
menuSection.list = menuSection.querySelector('ul[data-id="list"]');
menuSection.menuItems = [...menuSection.querySelectorAll(".menu__item")];
menuSection.menuSubitems = [...menuSection.querySelectorAll(".menu__subitem")];
menuSection.routesItems = [...menuSection.querySelectorAll(".routes__item")];

//-------------------Create global variables-----------------
let isMenuShown = false;

//---------------------Add listeners to the DOM elements--------------------

menuSection.showButton.addEventListener("click", handleShowButtonClick);
menuSection.menuItems.forEach(item => {
  item.addEventListener("click", handleMenuItemClick);
});
menuSection.routesItems.forEach(item => {
  item.addEventListener("click", handleRoutesItemClick);
});
document.body.addEventListener("click", handleBodyClick);

function handleShowButtonClick() {
  if (!isMenuShown) {
    menuSection.showButton.classList.remove("menu__show-button--closed");
    menuSection.list.classList.remove("menu__list--hidden");
    menuSection.hamburger.classList.add("active");
    isMenuShown = true;

    // reset color menuItems on click menu button
    menuSection.menuItems.forEach(item => {
      item.style.background = "#ffffff";
    });
  } else {
    hideMenu();
  }
}

function handleBodyClick({ target }) {
  if (!target.matches("#menu *")) {
    hideMenu();
  }
}

function handleMenuItemClick(event) {
  const target = event.target;
  //for those items which have submenu
  const chosenSubitem = menuSection.menuSubitems.find(
    subitem =>
      subitem.getAttribute("data-id") === target.getAttribute("data-id")
  );
  if (chosenSubitem) {
    // If any subitem is opened it is necessary to hide it first
    hideMenuSubitems();
    chosenSubitem.classList.remove("menu__subitem--hidden");
    leaveOnlyOneTypeOfRoutes(target.getAttribute("data-id"));
    changeColorBackgroundOnClickMenuItems(event);
    closeRouteInfo();
    return;
  }
  // for other items

  if (target.matches('li[data-id="all"]')) {
    hideMenuSubitems();
    showAllPolylines();
    closeRouteInfo();
    changeColorBackgroundOnClickMenuItems(event);
    return;
  }

  if (target.matches('li[data-id="traffic-rules"]')) {
    document
      .getElementById("control-section")
      .classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }

  if (target.matches('li[data-id="traffic-accidents"]')) {
    document
      .getElementById("accident-section")
      .classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }
}

function handleRoutesItemClick(event) {
  const target = event.target;
  removeAllButOneRoute(target.getAttribute("data-id"));

  // change color background routesItems
  menuSection.routesItems.forEach(item => {
    item.style.background = "#ffffff";
  });
  target.style.background = "#c6dd9a";

  // write routeInfoPreviewTitle
  const routeInfoPreviewTitle = document.querySelector(
    ".route-info__preview-title"
  );
  routeInfoPreviewTitle.textContent = `Що цікавого на маршруті ${
    target.innerHTML
  }?`;
}

function handlePolylineRoutesItemClick(handlePolyline) {
  removeAllButOneRoute(handlePolyline.name);

  // write routeInfoPreviewTitle
  const routeInfoPreviewTitle = document.querySelector(
    ".route-info__preview-title"
  );
  routeInfoPreviewTitle.textContent = `Що цікавого на маршруті ${
    handlePolyline.nameRus
  }?`;
}

//**************************AUX FUNCTIONS****************************/

function hideMenuSubitems() {
  menuSection.menuSubitems.forEach(subitem => {
    subitem.classList.add("menu__subitem--hidden");
  });
}

function hideMenu() {
  menuSection.showButton.classList.add("menu__show-button--closed");
  menuSection.list.classList.add("menu__list--hidden");
  menuSection.hamburger.classList.remove("active");
  hideMenuSubitems();
  isMenuShown = false;
}

function changeColorBackgroundOnClickMenuItems(event) {
  menuSection.menuItems.forEach(item => {
    item.style.background = "#ffffff";
  });
  event.target.style.background = "#c6dd9a";
  menuSection.routesItems.forEach(item => {
    item.style.background = "#ffffff";
  });
}
