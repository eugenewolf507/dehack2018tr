const parkingMarkers = [];
const cafeMarkers = [];
const sightMarkers = [];
const geotagMarkers = [];

function addMarker(location, arrayMarkers, icon) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: icon
  });
  arrayMarkers.push(marker);
}

function delateMarkers(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].setMap(null);
  }
}

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

  // click listeners START
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
      addMarker({ lat: 50.3574885, lng: 33.2762039 }, geotagMarkers, icon);
      geotagHandle = true;
      map.panTo({ lat: 50.3574885, lng: 33.2762039 });
    } else {
      delateMarkers(geotagMarkers);
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
      coordinatesParkingMarkers.map(parking =>
        addMarker(parking, parkingMarkers, icon)
      );
      parkingHandle = true;
    } else {
      delateMarkers(parkingMarkers);
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
      coordinatesCafeMarkers.map(cafe => addMarker(cafe, cafeMarkers, icon));
      cafeHandle = true;
    } else {
      delateMarkers(cafeMarkers);
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
      coordinatesSightMarkers.map(sight =>
        addMarker(sight, sightMarkers, icon)
      );
      sightHandle = true;
    } else {
      delateMarkers(sightMarkers);
      sightHandle = false;
    }
  });
  // click listeners END

  //----------------------Добавление полилиний в самом начале----------------------------
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
  //---------------------Убрать все полилинии кроме одной--------------------

  function removeAllButOnePolyline(type, idx) {
    polylines.forEach(item => {
      if (!(item.type === type && item.index === idx)) {
        item.poly.setMap(null);
      }
    });
  }

  //----------------------Восстановить отображение всех линий----------------------

  function showAllPolylines() {
    polylines.forEach(item => {
      item.poly.setMap(map);
    });
  }
  //---------------------Функция для тестирования------------------------------------
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
