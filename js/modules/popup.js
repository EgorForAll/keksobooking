import { similarObjects } from './app.js';

const randomObject = similarObjects;
const canvas = document.querySelector('#map-canvas');
const popup = document.querySelector('#card').content.querySelector('.popup');

const similarFragment = document.createDocumentFragment();

randomObject.forEach((object) => {
  const clonePopup = popup.cloneNode(true);
  clonePopup.querySelector('.popup__avatar').src = object.author;
  clonePopup.querySelector('.popup__title').textContent = object.offer.title;
  clonePopup.querySelector('.popup__text--address').textContent = `${object.address.lat}` + ',' + ' ' + `${object.address.lng}`;
  clonePopup.querySelector('.popup__text--price').textContent = object.offer.price;
  clonePopup.querySelector('.popup__type').textContent = object.offer.type;
  clonePopup.querySelector('.popup__text--time').textContent = `Заезд после ${  object.offer.checkin  },` + ' ' + ` выезда после ${  object.offer.checkout  }.`;
  clonePopup.querySelector('.popup__feature').textContent = object.offer.features;
  clonePopup.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms  } ` + 'комнаты для' + ` ${  object.offer.guests  } ` + 'гостей' + '.';
  clonePopup.querySelector('.popup__description').textContent = object.offer.description;
  clonePopup.querySelector('.popup__photo').src = object.offer.photo;
  const featureList = clonePopup.querySelector('.popup__features');
  const featureListItem = featureList.querySelector(`.popup__feature--${  object.offer.features}`);
  featureList.innerHTML = '';
  featureList.appendChild(featureListItem);
  similarFragment.appendChild(clonePopup);
});


canvas.appendChild(similarFragment);

