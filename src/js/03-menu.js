//-------------------Take DOM nodes---------------------
const menuSection = document.querySelector("#menu");
menuSection.showButton = menuSection.querySelector(".menu__show-button");
menuSection.hamburger = menuSection.querySelector(".ham");
menuSection.list = menuSection.querySelector(".menu__list");

const wrapperMenuSubitem = document.querySelector(".wrapper-menu__subitem");
const menuSubitem = document.querySelectorAll(".menu__subitem");
const menuSubitemHidden = document.querySelectorAll(".menu__subitem--hidden");

menuSection.menuItems = Array.from(menuSection.querySelectorAll(".menu__item"));
menuSection.menuSubitems = Array.from(
  menuSection.querySelectorAll(".menu__subitem")
);
menuSection.routesItems = Array.from(
  menuSection.querySelectorAll(".routes__item")
);
//-------------------Create global variables-----------------
let isMenuShown = false;
//---------------------Add listeners to the DOM elements--------------------

// document.body.addEventListener("keydown", handleBodysClick);
// function handleBodysClick(event) {
//   console.log('event: ', event.target);
// }

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

    menuSection.menuSubitems.forEach(subitem => {
      subitem.classList.remove("menu__subitem--display-none");
    });

    menuSubitem.forEach(item => {
      item.style.position = "absolute";
    });
    wrapperMenuSubitem.classList.remove("wrapper-menu__subitem--absolute");
    chosenSubitem.classList.remove("menu__subitem--hidden");
    leaveOnlyOneTypeOfRoutes(target.getAttribute("data-id"));
    changeColorBackgroundOnClickMenuItems(event);
    closeRouteInfo();
    return;
  }
  // for other items
  if (target.matches('[data-id="all"]')) {
    hideMenuSubitems();
    showAllPolylines();
    showAllRoutesSubitemInMenu();
    closeRouteInfo();
    changeColorBackgroundOnClickMenuItems(event);
    return;
  }

  if (target.matches('[data-id="traffic-rules"]')) {
    document
      .getElementById("control-section")
      .classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }

  if (target.matches('[data-id="traffic-accidents"]')) {
    document
      .getElementById("accident-section")
      .classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }
}

function showAllRoutesSubitemInMenu() {
  menuSubitem.forEach(item => {
    item.classList.remove("menu__subitem--hidden");
  });
  wrapperMenuSubitem.classList.add("wrapper-menu__subitem--absolute");
  menuSubitem.forEach(item => {
    item.style.position = "static";
  });
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
