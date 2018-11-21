//---------------------Show/hide routes----------------------------------
function removeAllButOneRoute(name) {
  polylines.forEach(item => {
    if (item.name !== name) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);

      // set center of polyline and init map on this center START
      setTimeout(() => {
        // set first and last point of polylines and they lat and lng
        const startLatLng = `lat: ${item.polyline.De.bounds.U}, lng: ${
          item.polyline.De.bounds.W
        }`;
        const endLatLng = `lat: ${item.polyline.De.bounds.Y}, lng: ${
          item.polyline.De.bounds.Z
        }`;

        // set center of polylines
        let lat = (item.polyline.De.bounds.U + item.polyline.De.bounds.Y) / 2;
        let lng = (item.polyline.De.bounds.W + item.polyline.De.bounds.Z) / 2;

        zoomMap = 14;
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng }, // center of map
          zoom: zoomMap,
          disableDefaultUI: true,
          styles: [
            {
              featureType: "poi",
              stylers: [{ visibility: "off" }]
            }
          ]
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
  zoomMap = 12;
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap, // center of map
    zoom: zoomMap,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      }
    ]
  });
}


