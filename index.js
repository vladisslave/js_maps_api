"use strict";

let map;

const createContent = (name, link) => {
  const nameTag = `<h4>${name}</h4>'`;
  const linkTag = `<a href="${link}" target="_blank">Info</a>`;
  return nameTag + linkTag;
};

const createCoords = (lat, lng) => ({ lat, lng });

const preparedMarkers = [
  {
    content: createContent("Dorm #1", "https://studmisto.knu.ua/dormitory-1-1"),
    coords: createCoords(50.3890729751771, 30.479656826676276),
    label: "1",
  },
  {
    content: createContent("Dorm #2", "https://studmisto.knu.ua/dormitory-2-1"),
    coords: createCoords(50.38889427667225, 30.47848235650213),
    label: "2",
  },
  {
    content: createContent("Dorm #3", "https://studmisto.knu.ua/dormitory-3-1"),
    coords: createCoords(50.388768186008086, 30.477405122940784),
    label: "3",
  },
  {
    content: createContent("Dorm #4", "https://studmisto.knu.ua/dormitory-4-1"),
    coords: createCoords(50.38859017139606, 30.47636396868277),
    label: "4",
  },
  {
    content: createContent("Dorm #5", "https://studmisto.knu.ua/dormitory-5-1"),
    coords: createCoords(50.38844087850764, 30.475381233858197),
    label: "5",
  },
  {
    content: createContent("Dorm #6", "https://studmisto.knu.ua/dormitory-6-1"),
    coords: createCoords(50.3880058956141, 30.473061802640604),
    label: "6",
  },
  {
    content: createContent("Dorm #7", "https://studmisto.knu.ua/dormitory-7-1"),
    coords: createCoords(50.387447567483356, 30.472315739821465),
    label: "7",
  },
  {
    content: createContent("Dorm #8", "https://studmisto.knu.ua/dormitory-8-1"),
    coords: createCoords(50.38748209250973, 30.47389390906746),
    label: "8",
  },
  {
    content: createContent("Dorm #9", "https://studmisto.knu.ua/dormitory-9-1"),
    coords: createCoords(50.38699959350506, 30.474362127971553),
    label: "9",
  },
  {
    content: createContent(
      "Dorm #10",
      "https://studmisto.knu.ua/dormitory-10-1"
    ),
    coords: createCoords(50.387105159813935, 30.47699288809707),
    label: "10",
  },
  {
    content: createContent(
      "Dorm #11",
      "https://studmisto.knu.ua/dormitory-11-1"
    ),
    coords: createCoords(50.386936227558515, 30.477889952765818),
    label: "11",
  },
  {
    content: createContent(
      "Dorm #12",
      "https://studmisto.knu.ua/dormitory-12-1"
    ),
    coords: createCoords(50.38743037026067, 30.478453332180123),
    label: "12",
  },
  {
    content: createContent(
      "Dorm #13",
      "https://studmisto.knu.ua/dormitory-13-1"
    ),
    coords: createCoords(50.38809674526464, 30.47844098679262),
    label: "13",
  },
  {
    content: createContent(
      "Dorm #14",
      "https://studmisto.knu.ua/dormitory-14-1"
    ),
    coords: createCoords(50.42514438436226, 30.461327871628704),
    label: "14",
  },
  {
    content: createContent(
      "Dorm #15",
      "https://studmisto.knu.ua/dormitory-15-1"
    ),
    coords: createCoords(50.38462471219808, 30.465078398655645),
    label: "15",
  },
  {
    content: createContent(
      "Dorm #16",
      "https://studmisto.knu.ua/dormitory-16-1"
    ),
    coords: createCoords(50.38860303116373, 30.489852109415228),
    label: "16",
  },
  {
    content: createContent(
      "Dorm #17",
      "https://studmisto.knu.ua/dormitory-17-1"
    ),
    coords: createCoords(50.388640382746324, 30.490644326938224),
    label: "17",
  },
  {
    content: createContent(
      "Dorm #18",
      "https://studmisto.knu.ua/dormitory-18-1"
    ),
    coords: createCoords(50.43479407522525, 30.46249273592507),
    label: "18",
  },
  {
    content: createContent(
      "Dorm #19",
      "https://studmisto.knu.ua/dormitory-19-1"
    ),
    coords: createCoords(50.38562147762822, 30.47849699810782),
    label: "19",
  },
  {
    content: createContent(
      "Dorm #20",
      "https://studmisto.knu.ua/dormitory-20-1"
    ),
    coords: createCoords(50.47179156509345, 30.466115883918604),
    label: "20",
  },
  {
    content: createContent(
      "Dorm #22",
      "https://studmisto.knu.ua/hurtozhytok-22"
    ),
    coords: createCoords(50.42639313723631, 30.525403261300923),
    label: "22",
  },
  {
    content: createContent(
      "Dorm #23",
      "https://studmisto.knu.ua/dormitories/444-hurtozhytok-23"
    ),
    coords: createCoords(50.46086119914678, 30.434500195585063),
    label: "23",
  },
];

const kyivCoords = createCoords(50.38771240306251, 30.48308490609861);

const zoomOptions = {
  world: 1,
  continent: 5,
  city: 10,
  street: 15,
  building: 20,
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: kyivCoords,
    zoom: zoomOptions.street,
  });

  let markers = [];

  const createMarker = (markerProps) => {
    const marker = new google.maps.Marker({
      position: markerProps.coords,
      map: map,
    });

    if (markerProps?.label) {
      marker.setLabel(markerProps.label);
    }

    if (markerProps?.icon) {
      marker.setIcon(markerProps.icon);
    }

    if (markerProps?.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: markerProps.content,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));
    }
    if (!markerProps?.irremovable) {
      markers.push(marker);
    }
    return marker;
  };

  let button = document.getElementById("add-marker-btn");

  const removeEvents = () => {
    button.replaceWith(button.cloneNode(true));
    button = document.getElementById("add-marker-btn");
  };

  const addByClick = (nameElem, infoElem, coords) => {
    createMarker({
      content: createContent(nameElem.value, infoElem.value || "#"),
      coords: coords,
      icon: "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|00FF00",
    });
  };

  preparedMarkers.forEach((m) => createMarker({ ...m, irremovable: true }));

  const pointMarker = createMarker({
    coords: { lat: 0, lng: 0 },
    irremovable: true,
    icon: "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF0000",
  });

  google.maps.event.addListener(map, "click", (event) => {
    removeEvents();

    const coordsMenuElem = document.getElementById("lat-lng");

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const coords = { lat, lng };
    pointMarker.setPosition(coords);
    pointMarker.setMap(map);

    coordsMenuElem.innerHTML = "Latitude: " + lat + "\n" + "Longtitude: " + lng;

    const nameElem = document.getElementById("name");
    const infoElem = document.getElementById("info");
    console.log("sho");

    button.addEventListener("click", () =>
      addByClick(nameElem, infoElem, coords)
    );
  });

  const setMapOnAll = (map) => {
    markers.forEach((m) => m.setMap(map));
    pointMarker.setMap(map);
  };

  const hideMarkers = () => {
    pointMarker.setMap(null);
    setMapOnAll(null);
  };

  const showMarkers = () => {
    setMapOnAll(map);
  };

  const deleteMarkers = () => {
    hideMarkers();
    markers = [];
  };

  document
    .getElementById("show-markers")
    .addEventListener("click", showMarkers);
  document
    .getElementById("hide-markers")
    .addEventListener("click", hideMarkers);
  document
    .getElementById("delete-markers")
    .addEventListener("click", deleteMarkers);
}
