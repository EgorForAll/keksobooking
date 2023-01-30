const template = document.querySelector('#card').content.querySelector('.popup');

const createBalloon = (element) => {
  let balloon = template.cloneNode(true);
  let featureList = balloon.querySelector('.popup__features');
  if (Object.keys(element.offer).includes('features')) {
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
    featureList.innerText = '';
  }
  balloon.querySelector('.popup__avatar').src = element.author.avatar;
  balloon.querySelector('.popup__title').textContent = element.offer.title;
  balloon.querySelector('.popup__text--price').textContent = `${element.offer.price} Руб/ночь`;
  balloon.querySelector('.popup__type').textContent = element.offer.type;
  balloon.querySelector('.popup__description').textContent = element.offer.description;
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
  balloon.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнат для ${element.offer.guests} гостей`;
  balloon.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin} выезд после ${element.offer.checkout}`;
  return balloon;
};

export {createBalloon};
