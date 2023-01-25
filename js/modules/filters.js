import { markers, map } from './map.js';

const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterAny = typeHouseFilter.children[0];
const typePriceFilter = document.querySelector('#housing-price');
const typePriceFilterList = typePriceFilter.children;

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
    console.log(numberFromStr);
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

export {typeHouseFilter, typePriceFilter, filterType, filterPrice, typePriceFilterList};

