import './modules/form.js';
import './modules/map.js';
import './modules/filters.js';
import './modules/slider.js';
import './modules/api.js';
import './modules/photo.js';
import { getData } from './modules/api.js';
import { getMarkers } from './modules/map.js';
import { setUserFormSubmit } from './modules/form.js';
import { openSuccessModal } from './modules/modal-windows.js';

getData(getMarkers);

setUserFormSubmit(openSuccessModal);

