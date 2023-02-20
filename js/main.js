import './modules/form.js';
import './modules/map.js';
import './modules/filters.js';
import './modules/slider.js';
import './modules/photo.js';
import { debounce } from './modules/utils.js';
import { nonActivePage, activateFilters } from './modules/disable.js';
import { getData } from './modules/api.js';
import { clearMarker, getMap, mainMarkersCoordinates } from './modules/map.js';
import { checkAllFilters, changeFilters } from './modules/filters.js';
import { sendForm, resetForm } from './modules/form.js';

const TIMEOUT_DELAY = 500;

nonActivePage(); // Блокируем формы
getMap();
mainMarkersCoordinates();

getData((markers) => {
  checkAllFilters(markers);
  changeFilters(debounce(() => checkAllFilters(markers), TIMEOUT_DELAY));
  activateFilters();
  sendForm(() => {
    clearMarker();
    checkAllFilters(markers);
  });
  resetForm(() => {
    clearMarker();
    checkAllFilters(markers);
  });
});

