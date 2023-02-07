/* eslint-disable no-undef */
import { activePage, nonActivePage } from './disable.js';
import { createBalloon } from './ballon.js';
import { setTypeFilter, setPriceFilter, setCapacityFilter, setPersonFilter, checkboxFilter } from './filters.js';
import { getRandomArrayElement } from './utils.js';

nonActivePage();

const mapFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');
address.value = '35.68596, 139.729518';

const map = L.map('map-canvas')
  .setView({
    lat: 35.68596,
    lng: 139.729518
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

map.addEventListener('load', activePage());

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const usualPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const mainPinMarker = L.marker(
  {
    lat: 35.68596,
    lng: 139.729518
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const object = evt.target.getLatLng();
  address.value = `${object.lat.toFixed(5)}, ${object.lng.toFixed(5)}`;
});

const POINTERS_COUNT = 10;
const markersArr = [];

const renderMap = (element) => {
  let pointer = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng
    },
    {
      draggable: true,
      icon: usualPinIcon
    }
  );

  mainPinMarker.addTo(map);
  pointer.addTo(map).bindPopup(createBalloon(element));
};

function getMarkers(markers) {
  for (let i = 0; i < POINTERS_COUNT; i++) {
    markersArr.push((getRandomArrayElement(markers)));
  };
  markersArr.forEach(item => renderMap(item));
}

mapFilters.addEventListener('change', function(evt) {
  if (evt.target) {
    const pane = document.querySelector('.map__canvas').children[0].children[3];
    pane.innerHTML = '';
    let newArr = markersArr
      .filter(marker => setTypeFilter(marker) && setPriceFilter(marker) && setCapacityFilter(marker) && setPersonFilter(marker) && checkboxFilter(marker))
      .forEach((element) => {
        let pointer = L.marker(
          {
            lat: element.location.lat,
            lng: element.location.lng
          },
          {
            draggable: true,
            icon: usualPinIcon
          }
        );
        pointer.addTo(map).bindPopup(createBalloon(element));
      }
      );
  }
});

// Фильтрация

export { getMarkers };
