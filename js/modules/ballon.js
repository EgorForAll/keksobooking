const template = document.querySelector('#card').content.querySelector('.popup');

const rusEngType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const getRoomsEnding = (roomCount) => {
  switch (roomCount) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};

const getGuestsEnding = (guestCount) => {
  if (guestCount === 0) {
    return 'не для гостей';
  }
  if (guestCount > 1) {
    return `для ${guestCount} гостей`;
  }
  return `для ${guestCount} гостя`;
};

// Создаем попап метки
const createBalloon = (element) => {
  let balloon = template.cloneNode(true);
  let featureList = balloon.querySelector('.popup__features');
  if (element.offer.features !== undefined) {
    let arr = element.offer.features;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let featureListItem = featureList.querySelector('.popup__feature--' + arr[i]);
      newArr.push(featureListItem);
    };
    featureList.innerHTML = '';
    newArr.forEach(item => {
      featureList.appendChild(item);
    });
  } else {
    featureList.style.display = 'none';
  }
  balloon.querySelector('.popup__text--address').textContent = element.offer.address || '';
  balloon.querySelector('.popup__avatar').src = element.author.avatar || '';
  balloon.querySelector('.popup__title').textContent = element.offer.title || '';
  const price = balloon.querySelector('.popup__text--price');
  const priceSpan = price.querySelector('span');
  price.innerHTML = (!element.offer.price) ? '' : `${element.offer.price}` + ' ' + `${priceSpan.outerHTML}`;
  balloon.querySelector('.popup__type').textContent = rusEngType[element.offer.type] || '';
  balloon.querySelector('.popup__description').textContent = element.offer.description || '';
  balloon.querySelector('.popup__photos').innerHTML = '';
  if (Object.keys(element.offer).includes('photos')) {
    Array.from(element.offer.photos).forEach(item => {
      let img = document.createElement('img');
      img.classList.add('popup__photo');
      img.setAttribute('width', 45);
      img.setAttribute('height', 40);
      img.src = item;
      balloon.querySelector('.popup__photos').appendChild(img);
    });
  }
  balloon.querySelector('.popup__text--capacity').textContent = (!element.offer.rooms || !Number.isInteger(element.offer.guests)) ? '' : `${element.offer.rooms} ${getRoomsEnding(element.offer.rooms)} ${getGuestsEnding(element.offer.guests)}`;
  balloon.querySelector('.popup__text--time').textContent = (!element.offer.checkin || !element.offer.checkout) ? '' : `Заезд после ${element.offer.checkin} выезд после ${element.offer.checkout}`;
  return balloon;
};

export {createBalloon};
