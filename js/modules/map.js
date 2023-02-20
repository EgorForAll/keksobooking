/* eslint-disable no-undef */
import { activateForm } from './disable.js';
import { createBalloon } from './ballon.js';
import { getAddressCoordinates } from './form.js';

const address = document.querySelector('#address');
const centerOfTokyo = '35.68596, 139.729518';
address.value = centerOfTokyo;

const CENTER_TOKYO = {
  lat: 35.68596,
  lng: 139.729518
};

const ZOOM_MAP = 10;

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

// Инициализация карты
const map = L.map('map-canvas');

const getMap = () => {
  map.on('load', () => {
    activateForm(); // При успешной загрузке карты форма переключается в активное состояние
    getAddressCoordinates(CENTER_TOKYO);
  })
    .setView(CENTER_TOKYO, ZOOM_MAP);

  // добавление open source изображения на созданную карту
  L.tileLayer(LeafletParameters.TILE_LAYER, {
    attribution: LeafletParameters.ATTRIBUTION
  })
    .addTo(map);
};

// Создание слоя с группой меток
const markerGroup = L.layerGroup().addTo(map);

// Добавление главной метки
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

// Добавление обычной метки
const usualPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 52]
});

const mainPinMarker = L.marker(
  CENTER_TOKYO,
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPinMarker.addTo(map);

// Изменение координат в поле адрес при перемещении главной метки
const mainMarkersCoordinates = () => mainPinMarker.on('moveend', (evt) => {
  const object = evt.target.getLatLng();
  address.value = `${object.lat.toFixed(5)}, ${object.lng.toFixed(5)}`;
});

// Функция по дабавлению меток на карту при фильтрации
const renderMarker = (element) => {
  let pinMarker = L.marker(
    element.location, {
      icon: usualPinIcon,
      draggable: true
    }
  );
  pinMarker
    .addTo(markerGroup)
    .bindPopup(
      createBalloon(element), // привязывает балун-объявление к метке
      {
        keepInView: true
      }
    );
};

// Очищение слоя с метками объявлений
const clearMarker = () => markerGroup.clearLayers();

export { renderMarker, getMap, clearMarker, map, mainPinMarker, CENTER_TOKYO, mainMarkersCoordinates };
