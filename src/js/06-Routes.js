//---------------------Show/hide routes----------------------------------


function removeAllButOneRoute(name) {
  polylines.forEach(item => {
    if (item.name !== name) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
    }
    areAllPolylinesShown = false;
  });
  showHeaderRouteInfo();
};

function leaveOnlyOneTypeOfRoutes(type) {
  polylines.forEach(item => {
    if (item.type !== type) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
    }
    areAllPolylinesShown = false;
  });
};

function showAllPolylines() {
  if (areAllPolylinesShown) {
    return;
  }
  polylines.forEach(item => {
    item.polyline.setMap(map);
  });
  areAllPolylinesShown = true;
};