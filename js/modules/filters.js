const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterList = typeHouseFilter.children;
const typePriceFilter = document.querySelector('#housing-price');
const typePriceFilterList = typePriceFilter.children;
const typeCapacityFilter = document.querySelector('#housing-rooms');
const typeCapacityFilterList = typeCapacityFilter.children;
const typePersonFilter = document.querySelector('#housing-guests');
const typePersonFilterList = typePersonFilter.children;
const mapFilters = document.querySelector('.map__filters');
const featuresFilter = mapFilters.querySelectorAll('.map__checkbox');

// Фильтр по типу жилья
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

// Фильтр по цене
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

// Фильтр по количеству комнат
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

// Фильтр по количеству гостей
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

// Фильтр по чекбоксам
const checkboxFilter = (marker) => Array.from(featuresFilter)
  .every((filterFeature) => {
    if (!filterFeature.checked) {
      return true;
    }
    if (!marker.offer.features) {
      return false;
    }
    return marker.offer.features.includes(filterFeature.value);
  });

export {setTypeFilter, setPriceFilter, setCapacityFilter, setPersonFilter, checkboxFilter};
