const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterList = typeHouseFilter.children;
const typePriceFilter = document.querySelector('#housing-price');
const typePriceFilterList = typePriceFilter.children;
const typeCapacityFilter = document.querySelector('#housing-rooms');
const typeCapacityFilterList = typeCapacityFilter.children;
const typePersonFilter = document.querySelector('#housing-guests');
const typePersonFilterList = typePersonFilter.children;
const wifiCheckbox = document.querySelector('#filter-wifi');
const dishwasherCheckbox = document.querySelector('#filter-dishwasher');
const washerCheckbox = document.querySelector('#filter-washer');
const parkingCheckbox = document.querySelector('#filter-parking');
const elevatorCheckbox = document.querySelector('#filter-elevator');
const conditionerCheckbox = document.querySelector('#filter-conditioner');
const checkboxField = document.querySelector('#housing-features');

function setTypeFilter(marker) {
  if (marker.offer.type === 'palace' && typeHouseFilter.value === typeHouseFilterList[5].value) {
    return true;
  } else if (marker.offer.type === 'house' && typeHouseFilter.value === typeHouseFilterList[4].value) {
    return true;
  } else if (marker.offer.type === 'hotel' && typeHouseFilter.value === typeHouseFilterList[3].value) {
    return true;
  } else if (marker.offer.type === 'flat' && typeHouseFilter.value === typeHouseFilterList[2].value) {
    return true;
  } else if (marker.offer.type === 'bungalow' && typeHouseFilter.value === typeHouseFilterList[1].value) {
    return true;
  } else if (typeHouseFilter.value === typeHouseFilterList[0].value) {
    return true;
  }

}

function setPriceFilter(marker) {
  if (marker.offer.price >= 50000 && typePriceFilter.value === typePriceFilterList[3].value) {
    return true;
  } else if (marker.offer.price <= 10000 && typePriceFilter.value === typePriceFilterList[2].value) {
    return true;
  } else if (marker.offer.price > 10000 && marker.offer.price < 50000 && typePriceFilter.value === typePriceFilterList[1].value) {
    return true;
  } else if (typePriceFilter.value === typePriceFilterList[0].value) {
    return true;
  }
}

function setCapacityFilter(marker) {
  if (marker.offer.rooms === 3 && typeCapacityFilter.value === typeCapacityFilterList[3].value) {
    return true;
  } else if (marker.offer.rooms === 2 && typeCapacityFilter.value === typeCapacityFilterList[2].value) {
    return true;
  } if (marker.offer.rooms === 1 && typeCapacityFilter.value === typeCapacityFilterList[1].value) {
    return true;
  } else if (typeCapacityFilter.value === typeCapacityFilterList[0].value) {
    return true;
  }
}

function setPersonFilter(marker) {
  if (marker.offer.guests === 0 && typePersonFilter.value === typePersonFilterList[3].value) {
    return true;
  } else if (marker.offer.guests === 1 && typePersonFilter.value === typePersonFilterList[2].value) {
    return true;
  } else if (marker.offer.guests === 2 && typePersonFilter.value === typePersonFilterList[1].value) {
    return true;
  } else if (typePersonFilter.value === typePersonFilterList[0].value) {
    return true;
  }
}

function checkboxFilter(marker) {
  if (marker.offer.hasOwnProperty('features') && wifiCheckbox.checked === true && marker.offer.features.includes('wifi')) {
    return true;
  } else if (dishwasherCheckbox.checked === true && marker.offer.features.includes('dishwasher')) {
    return true;
  } else if (washerCheckbox.checked === true && marker.offer.features.includes('washer')) {
    return true;
  } else if (elevatorCheckbox.checked === true && marker.offer.features.includes('elevator')) {
    return true;
  } else if (parkingCheckbox.checked === true && marker.offer.features.includes('parking')) {
    return true;
  } else if (conditionerCheckbox.checked === true && marker.offer.features.includes('conditioner')) {
    return true;
  } else {
    return true;
  }
}

export {setTypeFilter, setPriceFilter, setCapacityFilter};
export {setPersonFilter, checkboxFilter};
