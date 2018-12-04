//-------------------Take DOM nodes---------------------
const routeInfoSection = document.getElementById("route-info");
routeInfoSection.header = routeInfoSection.querySelector(
  'div[data-id="header"]'
);

//-------------------Create global variables-----------------

const routeInfoSectionStates = {
  closed: 0,
  headerShown: 1,
  fullyShown: 2
};

let routeInfoSectionState = routeInfoSectionStates.closed;

//---------------------Add click listeners to buttons--------------------
routeInfoSection.header.addEventListener("click", handleHeaderClick);

function handleHeaderClick() {
  if (routeInfoSectionState === routeInfoSectionStates.headerShown) {
    openRouteInfo();
    return;
  }
  if (routeInfoSectionState === routeInfoSectionStates.fullyShown) {
    closeRouteInfo();
    return;
  }
}

function showHeaderRouteInfo() {
  routeInfoSection.classList.add("route-info--header-shown");
  routeInfoSection.classList.remove("route-info--fully-hidden");
  routeInfoSectionState = routeInfoSectionStates.headerShown;
}

function openRouteInfo() {
  routeInfoSection.classList.remove("route-info--header-shown");
  routeInfoSectionState = routeInfoSectionStates.fullyShown;
}
function closeRouteInfo() {
  routeInfoSection.classList.remove("route-info--header-shown");
  routeInfoSection.classList.add("route-info--fully-hidden");
  routeInfoSectionState = routeInfoSectionStates.closed;
}

$(document).ready(function() {
  $("a.scrollto").click(function() {
     $(".traffic").animate({
        scrollTop: $($(this).attr("href")).offset().top
     }, {
        duration: 1000,
        easing: "swing"
     });
     return false;
  });
});
