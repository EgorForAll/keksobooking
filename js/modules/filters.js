import { markers, map } from './map.js';

const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterAny = typeHouseFilter.children[0];
const typePriceFilter = document.querySelector('#housing-price');
const typePriceFilterList = typePriceFilter.children;
const typeCapacityFilter = document.querySelector('#housing-rooms');
const typeCapacityList = typeCapacityFilter.children;
const typePersonsFilter = document.querySelector('#housing-guests');
const typePersonsList = typePersonsFilter.children;
const checkboxWifi = document.querySelector('#filter-wifi');
const checkboxDishwasher = document.querySelector('#filter-dishwasher');
const checkboxWasher = document.querySelector('#filter-washer');
const checkboxParking = document.querySelector('#filter-parking');
const checkboxElevator = document.querySelector('#filter-elevator');
const checkboxConditioner = document.querySelector('#filter-conditioner');

function filterType() {
  markers.forEach((marker) => {
    if (typeHouseFilter.value !== marker._popup._content.children[4].textContent) {
      marker.remove();
    } else {
      marker.addTo(map);
    }
    if (typeHouseFilter.value === typeHouseFilterAny.value) {
      marker.addTo(map);
    }
  });
};

function filterPrice() {
  markers.forEach((marker) => {
    let markerTextArr = Array.from(marker._popup._content.children[3].textContent);
    let markerNewArr = markerTextArr.slice(0, markerTextArr.indexOf(' '));
    let numberFromStr = Number(markerNewArr.join(''));
    if (typePriceFilter.value === typePriceFilterList[3].value && numberFromStr > 50000) {
      marker.addTo(map);
    } else if (typePriceFilter.value === typePriceFilterList[2].value && numberFromStr < 10000) {
      marker.addTo(map);
    } else if (typePriceFilter.value === typePriceFilterList[1].value && numberFromStr >= 10000 && numberFromStr <= 50000) {
      marker.addTo(map);
    } else if (typePriceFilter.value === typePriceFilterList[0].value) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });
};

function filterCapacity() {
  markers.forEach((marker) => {
    let markerTextArr = Array.from(marker._popup._content.children[5].textContent);
    let markerNewArr = markerTextArr.slice(0, markerTextArr.indexOf(' '));
    let numberFromStr = Number(markerNewArr.join(''));
    if (typeCapacityFilter.value === typeCapacityList[3].value && numberFromStr === 3) {
      marker.addTo(map);
    } else if (typeCapacityFilter.value === typeCapacityList[2].value && numberFromStr === 2) {
      marker.addTo(map);
    } else if (typeCapacityFilter.value === typeCapacityList[1].value && numberFromStr === 1) {
      marker.addTo(map);
    } else if (typeCapacityFilter.value === typeCapacityList[0].value) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });
}

function filterPersons() {
  markers.forEach((marker) => {
    let markerTextArr = Array.from(marker._popup._content.children[5].textContent);
    let markerNewArr = markerTextArr.slice(12, markerTextArr.lastIndexOf(' '));
    let numberFromStr = Number(markerNewArr.join(''));
    if (typePersonsFilter.value === typePersonsList[0].value) {
      marker.addTo(map);
    } else if (typePersonsFilter.value === typePersonsList[1].value && numberFromStr === 2) {
      marker.addTo(map);
    } else if (typePersonsFilter.value === typePersonsList[2].value && numberFromStr === 1) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });
};

function checkboxFilter() {
  markers.forEach(marker => {
    let featureArr = Array.from(marker._popup._content.children[7].children);
    let classNameWifi, classNameWasher, classNameDishwasher, classNameElevator, classNameParking, classNameConditioner;
    for (let i = 0; i < featureArr.length; i++) {
      if (featureArr[i].className.includes('popup__feature popup__feature--wifi')) {
        classNameWifi = true;
      } else if (featureArr[i].className.includes('popup__feature popup__feature--washer')) {
        classNameWasher = true;
      } else if (featureArr[i].className.includes('popup__feature popup__feature--dishwasher')) {
        classNameDishwasher = true;
      } else if (featureArr[i].className.includes('popup__feature popup__feature--elevator')) {
        classNameElevator = true;
      } else if (featureArr[i].className.includes('popup__feature popup__feature--parking')) {
        classNameParking = true;
      } else if (featureArr[i].className.includes('popup__feature popup__feature--conditioner')) {
        classNameConditioner = true;
      }
    }

    if (checkboxWifi.checked === true && classNameWifi !== true) {
      marker.remove();
    } else if (checkboxDishwasher.checked === true && classNameDishwasher !== true) {
      marker.remove();
    } else if (checkboxWasher.checked === true && classNameWasher !== true) {
      marker.remove();
    } else if (checkboxParking.checked === true && classNameParking !== true) {
      marker.remove();
    } else if (checkboxElevator.checked === true && classNameElevator !== true) {
      marker.remove();
    } else if (checkboxConditioner.checked === true && classNameConditioner !== true) {
      marker.remove();
    } else {
      marker.addTo(map);
    }
  });
};

export {typeHouseFilter, typePriceFilter, filterType, filterPrice, typePriceFilterList, filterCapacity, typeCapacityFilter, filterPersons, typePersonsFilter, checkboxFilter, checkboxWifi};

