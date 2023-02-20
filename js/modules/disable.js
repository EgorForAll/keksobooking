import { priceSlider } from './slider.js';

// Состояние старницы с заблокированными полями формы
const nonActivePage = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  Array.from(document.querySelector('.ad-form').children).forEach(field => {
    field.disabled = true;
  });
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  Array.from(document.querySelector('.map__filters').children).forEach(field => {
    field.disabled = true;
  });
  const checkboxField = document.querySelector('#housing-features');
  checkboxField.classList.add('map__filters--disabled');
  Array.from(checkboxField.querySelectorAll('input')).forEach(checkbox => {
    checkbox.disabled = true;
  });

  priceSlider.disabled = true;
};

// Состояние страницы с разблокированными полями формы
const activateForm = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  Array.from(document.querySelector('.ad-form').children).forEach(field => {
    field.disabled = false;
  });
};

// Состояние страницы с разблокированными фильтрами
const activateFilters = () => {
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  Array.from(document.querySelector('.map__filters').children).forEach(field => {
    field.disabled = false;
  });
  const checkboxField = document.querySelector('#housing-features');
  checkboxField.classList.remove('map__filters--disabled');
  Array.from(checkboxField.querySelectorAll('input')).forEach(checkbox => {
    checkbox.disabled = false;
  });
};

export {activateForm, activateFilters, nonActivePage};
