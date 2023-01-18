import {AVATAR, TYPE, PHOTOS, FEATURES, CHECKIN, CHECKOUT, TITLE, DESCRIPTION} from './dates.js';
import {getRandomArrayElement} from './utils.js';
import { getRandomPositiveInteger } from './utils.js';
import {getRandomPositiveFloat} from './utils.js';

const getAuthor = () => {
  const avatar = getRandomArrayElement(AVATAR);
  return avatar;
};

const getOffer = () => ({
  title: getRandomArrayElement(TITLE),
  type: getRandomArrayElement(TYPE),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getRandomArrayElement(FEATURES),
  photo: getRandomArrayElement(PHOTOS),
  price: `${getRandomPositiveInteger(0, 10000)  }` + ' ' + 'Pуб/ночь',
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 10),
  description: getRandomArrayElement(DESCRIPTION),
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

const similarObjects = Array.from({length: 1}, generalObject);

export {similarObjects};

