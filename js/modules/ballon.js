const template = document.querySelector('#card').content.querySelector('.popup');

const createBalloon = (element) => {
  let balloon = template.cloneNode(true);
  let featureList = balloon.querySelector('.popup__features');
  let featureListItem = balloon.querySelector('.popup__feature--' + element.offer.features);
  featureList.innerHTML = '';
  featureList.appendChild(featureListItem);
  balloon.querySelector('.popup__avatar').src = element.author;
  balloon.querySelector('.popup__title').textContent = element.offer.title;
  balloon.querySelector('.popup__text--price').textContent = element.offer.price;
  balloon.querySelector('.popup__type').textContent = element.offer.type;
  balloon.querySelector('.popup__description').textContent = element.offer.description;
  balloon.querySelector('.popup__photo').src = element.offer.photo;
  balloon.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнат для ${element.offer.guests} гостей`;
  balloon.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin} выезд после ${element.offer.checkout}`;
  return balloon;
};

export {createBalloon};
