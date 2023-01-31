import { map, markersArr } from './map.js';

const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterList = typeHouseFilter.children;
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

// Фильтрация по типу помещения

function filterType(marker) {
  if (typeHouseFilter.value === typeHouseFilterList[5].value && marker._popup._content.children[4].textContent !== 'palace') {
    marker.remove();
  } else if (typeHouseFilter.value === typeHouseFilterList[4].value && marker._popup._content.children[4].textContent !== 'house') {
    marker.remove();
  } else if (typeHouseFilter.value === typeHouseFilterList[3].value && marker._popup._content.children[4].textContent !== 'hotel') {
    marker.remove();
  } else if (typeHouseFilter.value === typeHouseFilterList[2].value && marker._popup._content.children[4].textContent !== 'flat') {
    marker.remove();
  } else if (typeHouseFilter.value === typeHouseFilterList[1].value && marker._popup._content.children[4].textContent !== 'bungalow') {
    marker.remove();
  } else {
    marker.addTo(map);
  }
};

// Фильтрация по цене

function filterPrice(marker) {
  let markerTextArr = Array.from(marker._popup._content.children[3].textContent);
  let markerNewArr = markerTextArr.slice(0, markerTextArr.indexOf(' '));
  let numberFromStr = Number(markerNewArr.join(''));
  if (typePriceFilter.value === typePriceFilterList[3].value && numberFromStr < 50000) {
    marker.remove();
  } else if (typePriceFilter.value === typePriceFilterList[2].value && numberFromStr > 10000) {
    marker.remove();
  } else if (typePriceFilter.value === typePriceFilterList[1].value && !(numberFromStr > 10000 && numberFromStr < 50000)) {
    marker.remove();
  } else if (typePriceFilter.value === typePriceFilterList[0].value) {
    marker.addTo(map);
  }
};

// Фильтрация по количеству  комнат

function filterCapacity(marker) {
  let markerTextArr = Array.from(marker._popup._content.children[5].textContent);
  let markerNewArr = markerTextArr.slice(0, markerTextArr.indexOf(' '));
  let numberFromStr = Number(markerNewArr.join(''));
  if (typeCapacityFilter.value === typeCapacityList[3].value && numberFromStr !== 3) {
    marker.remove();
  } else if (typeCapacityFilter.value === typeCapacityList[2].value && numberFromStr !== 2) {
    marker.remove();
  } else if (typeCapacityFilter.value === typeCapacityList[1].value && numberFromStr !== 1) {
    marker.remove();
  } else if (typeCapacityFilter.value === typeCapacityList[0].value) {
    marker.addTo(map);
  }
}

// Фильтрация по количеству гостей

function filterPersons(marker) {
  let markerTextArr = Array.from(marker._popup._content.children[5].textContent);
  let markerNewArr = markerTextArr.slice(12, markerTextArr.lastIndexOf(' '));
  let numberFromStr = Number(markerNewArr.join(''));
  if (typePersonsFilter.value === typePersonsList[3].value) {
    marker.remove();
  } else if (typePersonsFilter.value === typePersonsList[2].value && numberFromStr !== 1) {
    marker.remove();
  } else if (typePersonsFilter.value === typePersonsList[1].value && numberFromStr !== 2) {
    marker.remove();
  } else {
    marker.addTo(map);
  }
};

// Фильтрация по удобствам

function checkboxFilter(marker) {
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
};

function filterAll(evt) {
  markersArr.forEach(marker => {
    evt.target === typeHouseFilter ? filterType(marker) :
      evt.target === typePriceFilter ? filterPrice(marker) :
        evt.target === typeCapacityFilter ? filterCapacity(marker) :
          evt.target === typePersonsFilter ? filterPersons(marker) :
            checkboxFilter(marker);
  });

}

export {filterAll};
