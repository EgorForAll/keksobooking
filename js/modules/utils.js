import { CENTER_TOKYO, mainPinMarker, map } from './map.js';
import { priceSlider } from './slider.js';

// Случайное целое число
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функий по получению случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Очистка полей формы
const clearFields = () => {
  document.querySelector('.map__filters').reset();
  document.querySelector('.ad-form').reset();
  document.querySelector('.ad-form-header__preview').querySelector('img').src = 'img/muffin-grey.svg';
  document.querySelector('.ad-form__photo').innerHTML = '';
  priceSlider.noUiSlider.set(0);
  document.querySelector('#address').value = '35.68596, 139.729518';
  document.querySelector('.leaflet-popup-pane').innerHTML = '';
  map.setView(CENTER_TOKYO, 10);
  mainPinMarker.setLatLng(CENTER_TOKYO);
};

// Устранения дребезга
function debounce(callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomArrayElement, getRandomPositiveInteger, clearFields, debounce};
