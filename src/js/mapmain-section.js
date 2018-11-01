  //---------------------Create empty array markers--------------------
const arrayParkingMarkers = [];
const arrayCafeMarkers = [];
const arraySightMarkers = [];
const arrayGeotagMarkers = [];

  //---------------------Function add markers on map--------------------
function addMarker(coordinate, arrayMarkers, icon) {
  const marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: icon
  });
  arrayMarkers.push(marker);
}

  //---------------------Function delete markers from map--------------------
function delateMarkers(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].setMap(null);
  }
}

  //---------------------Init map--------------------
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.3574885, lng: 33.2762039 },
    zoom: 12,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  //---------------------Click listeners START--------------------
  google.maps.event.addDomListener(zoomin, "click", function() {
    let currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 0) {
      map.setZoom(currentZoomLevel - 1);
    }
  });

  google.maps.event.addDomListener(zoomout, "click", function() {
    let currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 21) {
      map.setZoom(currentZoomLevel + 1);
    }
  });

  let geotagHandle = false;
  google.maps.event.addDomListener(geotag, "click", function() {
    if (!geotagHandle) {
      const icon = {
        scaledSize: new google.maps.Size(30, 30), // scaled size
        url: "../img/your location_on_map.svg"
      };
      addMarker({ lat: 50.3574885, lng: 33.2762039 }, arrayGeotagMarkers, icon);
      geotagHandle = true;
      map.panTo({ lat: 50.3574885, lng: 33.2762039 });
    } else {
      delateMarkers(arrayGeotagMarkers);
      geotagHandle = false;
    }
  });

  let parkingHandle = false;
  google.maps.event.addDomListener(parking, "click", function() {
    if (!parkingHandle) {
      const icon = {
        scaledSize: new google.maps.Size(33, 33), // scaled size icon
        url: "./img/bikeparking_on_map.svg"
      };
      coordinatesParkingMarkers.map(coordinate =>
        addMarker(coordinate, arrayParkingMarkers, icon)
      );
      parkingHandle = true;
    } else {
      delateMarkers(arrayParkingMarkers);
      parkingHandle = false;
    }
  });

  let cafeHandle = false;
  google.maps.event.addDomListener(cafe, "click", function() {
    if (!cafeHandle) {
      const icon = {
        scaledSize: new google.maps.Size(33, 33), // scaled size icon
        url: "./img/cafe_on_map.svg"
      };
      coordinatesCafeMarkers.map(coordinate =>
        addMarker(coordinate, arrayCafeMarkers, icon)
      );
      cafeHandle = true;
    } else {
      delateMarkers(arrayCafeMarkers);
      cafeHandle = false;
    }
  });

  let sightHandle = false;
  google.maps.event.addDomListener(sight, "click", function() {
    if (!sightHandle) {
      const icon = {
        scaledSize: new google.maps.Size(33, 33), // scaled size icon
        url: "./img/tourist_points_on_map.svg"
      };
      coordinatesSightMarkers.map(coordinate =>
        addMarker(coordinate, arraySightMarkers, icon)
      );
      sightHandle = true;
    } else {
      delateMarkers(arraySightMarkers);
      sightHandle = false;
    }
  });
  //---------------------Click listeners END--------------------


  //---------------------Added polylines--------------------
  const polylines = [];

  for (let key in routes) {
    routes[key].coords.forEach((item, idx) => {
      const poly = new google.maps.Polyline({
        path: item,
        strokeColor: routes[key].color,
        strokeOpacity: 0.7,
        strokeWeight: 3,
        map: map
      });
      const obj = { type: key, index: idx, poly };
      polylines.push(obj);
    });
  }
  let polylinesHidden = false;

  //---------------------Remove all polylines except one--------------------
  function removeAllButOnePolyline(type, idx) {
    polylines.forEach(item => {
      if (!(item.type === type && item.index === idx)) {
        item.poly.setMap(null);
      }
    });
  }

  //----------------------Restore display of all polylines----------------------
  function showAllPolylines() {
    polylines.forEach(item => {
      item.poly.setMap(map);
    });
  }

  //---------------------function for test------------------------------------
  // document.getElementById('hide').addEventListener('click', () => {
  //   if (polylinesHidden) {
  //     showAllPolylines();
  //     polylinesHidden = false;
  //   } else {
  //     removeAllButOnePolyline('arterialRoutes', 2);
  //     polylinesHidden = true;
  //   }

  // })
}
