import { renderMarker, clearMarker } from './map.js';

const MARKERS_COUNTER = 10;
const DEFAULT_VALUE = 'any';

const priceMapFilter = {
  low: {
    start: 0,
    end: 10000
  },
  middle: {
    start: 10000,
    end: 50000
  },
  high: {
    start: 50000,
    end: 1000000
  }
};

const typeHouseFilter = document.querySelector('#housing-type');
const typePriceFilter = document.querySelector('#housing-price');
const typeCapacityFilter = document.querySelector('#housing-rooms');
const typePersonFilter = document.querySelector('#housing-guests');
const mapFilters = document.querySelector('.map__filters');
const featuresFilter = mapFilters.querySelectorAll('.map__checkbox');

// Фильтр по типу жилья
const setTypeFilter = (marker) => typeHouseFilter.value === marker.offer.type || typeHouseFilter.value === DEFAULT_VALUE;

// Фильтр по цене
const setPriceFilter = (marker) => typePriceFilter.value === DEFAULT_VALUE || (marker.offer.price >= priceMapFilter[typePriceFilter.value].start && marker.offer.price <= priceMapFilter[typePriceFilter.value].end);

// Фильтр по количеству комнат
const setCapacityFilter = (marker) => marker.offer.rooms === +typeCapacityFilter.value || typeCapacityFilter.value === DEFAULT_VALUE;

// Фильтр по количеству гостей
const setPersonFilter = (marker) => marker.offer.guests === +typePersonFilter.value || typePersonFilter.value === DEFAULT_VALUE;

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

const checkAllFilters = (markers) => {
  const filteredData = [];
  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    if (
      setPersonFilter(marker) && setCapacityFilter(marker) && setPriceFilter(marker) && setTypeFilter(marker) && checkboxFilter(marker)
    ) {
      renderMarker(marker);
      filteredData.push(marker);
    }

    if (filteredData.length === MARKERS_COUNTER) {
      break;
    }
  }
  return filteredData;
};

// Перерисовка карты
const changeFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    clearMarker();
    cb();
  });
};

export {checkAllFilters, changeFilters};
