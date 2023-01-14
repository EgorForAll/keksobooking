import {AVATAR, TYPE, PHOTOS, FEATURES, CHECKIN, CHECKOUT} from './modules/dates.js';
import {getRandomArrayElement} from './modules/utils.js';
import { getRandomPositiveInteger } from './modules/utils.js';
import {getRandomPositiveFloat} from './modules/utils.js';

const getAuthor = () => {
  const avatar = getRandomArrayElement(AVATAR);
  return avatar;
};

const getOffer = () => ({
  title: 'Добро пожаловать в',
  type: getRandomArrayElement(TYPE),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getRandomArrayElement(FEATURES),
  photo: getRandomArrayElement(PHOTOS),
  price: getRandomPositiveInteger(0, 1000000),
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 10),
  description: 'Лучшее место для вашего отдыха',
});

const getAddress = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000),
  lng: getRandomPositiveFloat(139.70000, 139.80000)
});

const generalObject = function () {
  return {
    author: getAuthor(),
    offer: getOffer(),
    address: getAddress()
  };
};

const similarObjects = Array.from({length: 10}, generalObject);

