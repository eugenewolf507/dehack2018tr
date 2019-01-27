//---------------------Show/hide routes----------------------------------
function removeAllButOneRoute(name) {
  polylines.forEach(item => {
    if (item.name !== name) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
      let polylineNumberPoints = item.polyline.route.length - 1;
      // set center of polyline and init map on this center START
      setTimeout(() => {
        // set first and last point of polylines and they lat and lng
        const startLatLng = `lat: ${item.polyline.route[0].lat}, lng: ${
          item.polyline.route[0].lng
        }`;
        const endLatLng = `lat: ${
          item.polyline.route[polylineNumberPoints].lat
        }, lng: ${item.polyline.route[polylineNumberPoints].lng}`;
        // set center of polylines
        let lat =
          (item.polyline.route[0].lat +
            item.polyline.route[polylineNumberPoints].lat) /
          2;
        let lng =
          (item.polyline.route[0].lng +
            item.polyline.route[polylineNumberPoints].lng) /
          2;

        zoomMap = 14;
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng }, // center of map
          zoom: zoomMap,
          disableDefaultUI: true,
          styles: mapStyles
        });
        item.polyline.setMap(map);
      }, 0);
      // set center of polyline and init map on this center END
    }
    areAllPolylinesShown = false;
  });
  showHeaderRouteInfo();
}

function leaveOnlyOneTypeOfRoutes(type) {
  if (zoomMap === 14) {
    zoomMapAndRebuild();
  }
  polylines.forEach(item => {
    if (item.type !== type) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
    }
    areAllPolylinesShown = false;
  });
}

function showAllPolylines() {
  if (zoomMap === 14) {
    zoomMapAndRebuild();
  }
  if (areAllPolylinesShown) {
    return;
  }
  polylines.forEach(item => {
    item.polyline.setMap(map);
  });
  areAllPolylinesShown = true;
}

function zoomMapAndRebuild() {
  zoomMap = 12.9;
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap, // center of map
    zoom: zoomMap,
    disableDefaultUI: true,
    styles: mapStyles
  });
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
