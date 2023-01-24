import { markers, map } from './map.js';

const typeHouseFilter = document.querySelector('#housing-type');
const typeHouseFilterAny = typeHouseFilter.children[0];
const typePriceFilter = document.querySelector('#housing-price');

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

// function filterPrice() {
//   markers.forEach((marker) => {
//     if (typePriceFilter.value === marker._popup._content.children[4].textContent) {
//       marker.remove();
//       console.log(marker);
//     }
//   });
// };

export {typeHouseFilter, typePriceFilter, filterType};
