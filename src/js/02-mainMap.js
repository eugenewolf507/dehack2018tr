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
let zoomMap = 12.9;

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#675a4b"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffebc5"
      },
      {
        lightness: "-10"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#675a4b"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b70046"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#675a4b"
      },
      {
        weight: "0.50"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#675a4b"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ff850a"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: "-71"
      },
      {
        lightness: "-2"
      },
      {
        color: "#ffebc5"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#70bfaf"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#675a4c"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#675a4b"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#675a4b"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7ccff0"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#cfeae4"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#109579"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

//****************************INIT MAP******************************

function initMap() {
  //---------------Init a new map----------------
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap, // center of map
    zoom: zoomMap,
    disableDefaultUI: true,
    styles: mapStyles
    // [
    //   {
    //     featureType: "poi",
    //     stylers: [{ visibility: "off" }]
    //   }
    // ]
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
        nameRus: item.nameRus,
        route: routesData[key].routes.filter(elem => elem.name === item.name)[0]
          .coords
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
  // when "mouseover" polyline open InfoWindow
  const arrayPolylineInfoWindowMarkers = [];
  let j = 0;
  let arrayDistance = [];
  let distance = 0;
  polylines.map(item =>
    google.maps.event.addListener(item.polyline, "mouseover", function() {
      j = 0;
      arrayDistance = [];
      const handlePolyline = item.polyline;
      let lat = item.polyline.route[1].lat;
      let lng = item.polyline.route[1].lng;
      // calculation of distance route
      for (let i = 0; i < item.polyline.route.length; i += 1) {
        j = j + 1;
        if (j < item.polyline.route.length) {
          let fromLat = item.polyline.route[i].lat;
          let fromLng = item.polyline.route[i].lng;
          let toLat = item.polyline.route[j].lat;
          let toLng = item.polyline.route[j].lng;
          let routeDistance = (
            calcDistance(fromLat, fromLng, toLat, toLng) / 1000
          ).toFixed(4);
          arrayDistance.push(+routeDistance);
          distance = arrayDistance.reduce((acc, value) => acc + value, 0);
          distance = distance.toFixed(2);
        }
      }
      deleteMarkersFromTheMap(arrayPolylineInfoWindowMarkers);
      var contentString = `
      <div style="width: 193px;"><span style="font-weight: 700;">${
        handlePolyline.nameRus
      }</span>.<div>Довжина маршрута: ${distance}км.</div><div style="display: flex; juctify-content: center;"><div>Клiкай на лiнiю маршрута</div><img style="display: block; margin-left: 5px; width: 20px; height: 20px;"src="./img/clicker.svg" alt="Кликай на линию маршрута"></div></div>`;
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
function calcDistance(fromLat, fromLng, toLat, toLng) {
  return google.maps.geometry.spherical.computeDistanceBetween(
    new google.maps.LatLng(fromLat, fromLng),
    new google.maps.LatLng(toLat, toLng)
  );
}

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
  createListenerAndInfoWindowOfMarker(coordinate, marker);
}

//---------------------Function delete markers from the map--------------------
function deleteMarkersFromTheMap(arrayMarkers) {
  arrayMarkers.map(item => item.setMap(null));
}

//---------------------Function create Listener and InfoWindow of markers --------------------
function createListenerAndInfoWindowOfMarker(coordinate, marker) {
  marker.addListener("click", function() {
    if (!coordinate.nameRus) {
      return;
    }
    let name = coordinate.nameRus;
    let pictureUrl = coordinate.picture;
    let contentInfoWindow = `<div1 class="Heading">${name}</div><img style="max-width: 100px;"src="${pictureUrl}" alt="${name}">`;
    let infowindow = new google.maps.InfoWindow({
      content: contentInfoWindow
    });
    infowindow.open(map, marker);
  });
}
