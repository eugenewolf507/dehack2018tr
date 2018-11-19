//-------------------Take DOM nodes---------------------
const routeInfoSection = document.getElementById('route-info');

routeInfoSection.openButton = routeInfoSection.querySelector('button[data-id="open-button"]');
routeInfoSection.closeButton = routeInfoSection.querySelector('button[data-id="close-button"]');

//---------------------Add click listeners to buttons--------------------
routeInfoSection.openButton.addEventListener("click", handleOpenBtnClick);
routeInfoSection.closeButton.addEventListener("click", handleCloseBtnClick);


function handleOpenBtnClick() {
  routeInfoSection.classList.remove('route-info--header-shown');
  //hideMenu();
  //showAllPolylines();
}

function handleCloseBtnClick() {
  hideRouteInfo();
}

function hideRouteInfo() {
  routeInfoSection.classList.remove('route-info--header-shown');
  routeInfoSection.classList.add('route-info--fully-hidden');
}