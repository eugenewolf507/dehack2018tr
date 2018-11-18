//-------------------Take DOM nodes---------------------
const mainMapSection = document.getElementById('main-map');
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

//****************************INIT MAP******************************

function initMap() {
  //---------------Init a new map----------------
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap, // center of map
    zoom: 12,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      }
    ]
  });
  //---------------Create routes and show on the map----------------
  for (let key in routes) {
    routes[key].coords.forEach((item, idx) => {
      const polyline = new google.maps.Polyline({
        path: item,
        strokeColor: routes[key].color,
        strokeOpacity: 0.7,
        strokeWeight: 3,
        map: map
      });
      const polylineObj = { type: key, index: idx, polyline };
      polylines.push(polylineObj);
    });
  }
  areAllPolylinesShown = true;

  //---------------------Add click listeners to buttons--------------------
  google.maps.event.addDomListener(mainMapSection.zoomin, "click", handleZoomInMap);
  google.maps.event.addDomListener(mainMapSection.zoomout, "click", handleZoomOutMap);
  google.maps.event.addDomListener(mainMapSection.geotag, "click", handleShowingGeotagMarker);
  google.maps.event.addDomListener(mainMapSection.parking, "click", handleShowingParkingMarkers);
  google.maps.event.addDomListener(mainMapSection.cafe, "click", handleShowingCafeMarkers);
  google.maps.event.addDomListener(mainMapSection.sight, "click", handleShowingSightMarkers);
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
    addMarkerToTheMap({ lat: 50.3574885, lng: 33.2762039 }, arrayGeotagMarkers, icon);
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
  for (let i = 0; i < arrayMarkers.length; i++) {
    arrayMarkers[i].setMap(null);
  }
}

//---------------------Show/hide polylines----------------------------------


function removeAllButOnePolyline(type, idx) {
  polylines.forEach(item => {
    if (!(item.type === type && item.index === idx)) {
      item.polyline.setMap(null);
    };
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

