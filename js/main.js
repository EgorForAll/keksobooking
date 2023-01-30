import './modules/form.js';
import './modules/map.js';
import './modules/filters.js';
import './modules/slider.js';
import './modules/api.js';
import { getData } from './modules/api.js';
import { renderMap } from './modules/map.js';

getData(renderMap);
