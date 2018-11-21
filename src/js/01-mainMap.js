//-------------------Take DOM nodes---------------------
const mainMapSection = document.getElementById("main-map");
mainMapSection.zoomin = mainMapSection.querySelector('div[data-id="zoomin"]');
mainMapSection.zoomout = mainMapSection.querySelector('div[data-id="zoomout"]');
mainMapSection.geotag = mainMapSection.querySelector('div[data-id="geotag"]');
mainMapSection.parking = mainMapSection.querySelector('div[data-id="parking"]');
mainMapSection.cafe = mainMapSection.querySelector('div[data-id="cafe"]');
mainMapSection.sight = mainMapSection.querySelector('div[data-id="sight"]');

//---------------------Create empty arrays--------------------
const arrayParkingMarkers = [];
const arrayCafeMarkers = [];
const arraySightMarkers = [];
const arrayGeotagMarkers = [];
const polylines = [];

//-------------------Create global variables-----------------
let map;

let isGeotagMarkerShown = false;
let areParkingMarkersShown = false;
let areSightMarkersShown = false;
let areCafeMarkersShown = false;

let areAllPolylinesShown = false;

let zoomMap = 12;

//****************************INIT MAP******************************

function initMap() {
  //---------------Init a new map----------------
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
  //---------------Create routes and show on the map----------------
  for (let key in routesData) {
    routesData[key].routes.forEach(item => {
      const polyline = new google.maps.Polyline({
        path: item.coords,
        strokeColor: routesData[key].color,
        strokeOpacity: 0.7,
        strokeWeight: 7,
        map: map,
        name: item.name,
        type: key,
        nameRus: item.nameRus
      });
      const polylineObj = { type: key, name: item.name, polyline };
      polylines.push(polylineObj);
    });
  }
  areAllPolylinesShown = true;

  //---------------------Add click listeners to buttons--------------------
  google.maps.event.addDomListener(
    mainMapSection.zoomin,
    "click",
    handleZoomInMap
  );
  google.maps.event.addDomListener(
    mainMapSection.zoomout,
    "click",
    handleZoomOutMap
  );
  google.maps.event.addDomListener(
    mainMapSection.geotag,
    "click",
    handleShowingGeotagMarker
  );
  google.maps.event.addDomListener(
    mainMapSection.parking,
    "click",
    handleShowingParkingMarkers
  );
  google.maps.event.addDomListener(
    mainMapSection.cafe,
    "click",
    handleShowingCafeMarkers
  );
  google.maps.event.addDomListener(
    mainMapSection.sight,
    "click",
    handleShowingSightMarkers
  );

  //---------------------Add listeners to polyline START--------------------
  // when "click" polyline open routeinfo title
  polylines.map(item =>
    google.maps.event.addListener(item.polyline, "click", function() {
      const handlePolyline = item.polyline;
      handlePolylineRoutesItemClick(handlePolyline);
    })
  );

  const arrayPolylineInfoWindowMarkers = [];
  // when "mouseover" polyline open InfoWindow
  polylines.map(item =>
    google.maps.event.addListener(item.polyline, "mouseover", function() {
      const handlePolyline = item.polyline;
      let lat = (item.polyline.De.bounds.U + item.polyline.De.bounds.Y) / 2;
      let lng = (item.polyline.De.bounds.W + item.polyline.De.bounds.Z) / 2;
      deleteMarkersFromTheMap(arrayPolylineInfoWindowMarkers);
      var contentString = `
      <div style="width: 193px;"><span style="font-weight: 700;">${
        handlePolyline.nameRus
      }</span>.<div style="display: flex; juctify-content: center;"><div>Кликай на линию маршрута</div><img style="display: block; margin-left: 5px; width: 20px; height: 20px;"src="./../img/clicker.svg" alt="Кликай на линию маршрута"></div></div>`;
      console.log("handlePolyline: ", handlePolyline);
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: handlePolyline.nameRus,
        icon: {
          scaledSize: new google.maps.Size(1, 1), // scaled size icon 1px( it is delete icon)
          url: "./img/point.svg"
        }
      });
      arrayPolylineInfoWindowMarkers.push(marker);
      infowindow.open(map, marker);
    })
  );

  // when "mouseout" polyline delete InfoWindow
  polylines.map(item =>
    google.maps.event.addListener(item.polyline, "mouseout", function() {
      deleteMarkersFromTheMap(arrayPolylineInfoWindowMarkers);
    })
  );

  //---------------------Add listeners to polyline END--------------------
}

//**************************AUX FUNCTIONS****************************/

function handleZoomInMap() {
  let currentZoomLevel = map.getZoom();
  if (currentZoomLevel != 0) {
    map.setZoom(currentZoomLevel - 1);
  }
}

function handleZoomOutMap() {
  let currentZoomLevel = map.getZoom();
  if (currentZoomLevel != 21) {
    map.setZoom(currentZoomLevel + 1);
  }
}

function handleShowingGeotagMarker() {
  if (!isGeotagMarkerShown) {
    const icon = {
      scaledSize: new google.maps.Size(30, 30), // scaled size icon
      url: "./img/yourlocation_on_map.svg"
    };
    addMarkerToTheMap(
      { lat: 50.3574885, lng: 33.2762039 },
      arrayGeotagMarkers,
      icon
    );
    isGeotagMarkerShown = true;
    map.panTo({ lat: 50.3574885, lng: 33.2762039 });
  } else {
    deleteMarkersFromTheMap(arrayGeotagMarkers);
    isGeotagMarkerShown = false;
  }
}

function handleShowingParkingMarkers() {
  if (!areParkingMarkersShown) {
    const icon = {
      scaledSize: new google.maps.Size(33, 33), // scaled size icon
      url: "./img/bikeparking_on_map.svg"
    };
    coordinatesParkingMarkers.map(coordinate =>
      addMarkerToTheMap(coordinate, arrayParkingMarkers, icon)
    );
    areParkingMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arrayParkingMarkers);
    areParkingMarkersShown = false;
  }
}

function handleShowingCafeMarkers() {
  if (!areCafeMarkersShown) {
    const icon = {
      scaledSize: new google.maps.Size(33, 33), // scaled size icon
      url: "./img/cafe_on_map.svg"
    };
    coordinatesCafeMarkers.map(coordinate =>
      addMarkerToTheMap(coordinate, arrayCafeMarkers, icon)
    );
    areCafeMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arrayCafeMarkers);
    areCafeMarkersShown = false;
  }
}

function handleShowingSightMarkers() {
  if (!areSightMarkersShown) {
    const icon = {
      scaledSize: new google.maps.Size(33, 33), // scaled size icon
      url: "./img/tourist_points_on_map.svg"
    };
    coordinatesSightMarkers.map(coordinate =>
      addMarkerToTheMap(coordinate, arraySightMarkers, icon)
    );
    areSightMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arraySightMarkers);
    areSightMarkersShown = false;
  }
}

//---------------------Function add markers on the map--------------------
function addMarkerToTheMap(coordinate, arrayMarkers, icon) {
  const marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: icon
  });
  arrayMarkers.push(marker);
}

//---------------------Function delete markers from the map--------------------
function deleteMarkersFromTheMap(arrayMarkers) {
  arrayMarkers.map(item => item.setMap(null));
}
