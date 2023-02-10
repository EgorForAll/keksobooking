import './modules/form.js';
import './modules/map.js';
import './modules/filters.js';
import './modules/slider.js';
import './modules/photo.js';
import { getData } from './modules/api.js';
import { getMarkers } from './modules/map.js';
import { setUserFormSubmit } from './modules/form.js';
import { openSuccessModal, openGetDataError } from './modules/modal-windows.js';

// Получение данных с сервера
getData(getMarkers, openGetDataError);

// Отправка формы на сервер
setUserFormSubmit(openSuccessModal);

