/* eslint-disable no-undef */
import { activePage, nonActivePage } from './disable.js';
import { createBalloon } from './ballon.js';
import { setTypeFilter, setPriceFilter, setCapacityFilter, setPersonFilter, checkboxFilter } from './filters.js';
import { getRandomArrayElement, debounce } from './utils.js';

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

// Создание слоя с группой меток
const markerGroup = L.layerGroup().addTo(map);

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

mainPinMarker.addTo(markerGroup);

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
  mainPinMarker.addTo(markerGroup);
  pointer.addTo(markerGroup).bindPopup(createBalloon(element), {
    keepInView: true
  });
};

// Очищение слоя с метками объявлений
const clearMarker = () => markerGroup.clearLayers();

function getMarkers(markers) {
  for (let i = 0; i < POINTERS_COUNT; i++) {
    markersArr.push((getRandomArrayElement(markers)));
  };
  markersArr.forEach(item => renderMap(item));
}

// Фильтрация
function setFilterAll() {
  clearMarker();
  let newArr = markersArr
    .filter(marker => setTypeFilter(marker) && setPriceFilter(marker) && setCapacityFilter(marker) && setPersonFilter(marker) && checkboxFilter(marker));
  newArr.forEach((element) => renderMap(element), 500);
}

const filterAll = (cb) => {
  mapFilters.addEventListener('change', function(evt) {
    if (evt.target) {
      cb();
    }
  });
};

// Вешаем debounce
const TIMEOUT_DELAY = 500;

filterAll(debounce(setFilterAll, TIMEOUT_DELAY));

export { getMarkers };
