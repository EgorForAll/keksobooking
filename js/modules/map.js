/* eslint-disable no-undef */
import { activePage, nonActivePage } from './disable.js';
import { similarObjects } from './app.js';
import { createBalloon } from './ballon.js';

nonActivePage();

const address = document.querySelector('#address');
address.value = '35.68596, 139.729518';
const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterValues = Array.from(typeHouseFilter.children);

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

function createUsualMarkers() {
  similarObjects.forEach((element) => {
    let latValue = element.address.lat;
    let lngValue = element.address.lng;
    let marker = L.marker(
      {
        lat: latValue,
        lng: lngValue
      },
      {
        draggable: true,
        icon: usualPinIcon
      }
    );
    marker.addTo(map).bindPopup(createBalloon(element));
  });
}

createUsualMarkers();

export {createBalloon};
