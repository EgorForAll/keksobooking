const AVATAR = [
  '../img/avatars/user01.png',
  '../img/avatars/user02.png',
  '../img/avatars/user03.png',
  '../img/avatars/user04.png',
  '../img/avatars/user05.png',
  '../img/avatars/user06.png',
  '../img/avatars/user07.png',
  '../img/avatars/user08.png',
  '../img/avatars/user09.png',
  '../img/avatars/user10.png',
  '../img/avatars/user11.png',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const LOCATION = [
  getRandomPositiveFloat(35.65000, 35.70000),
  getRandomPositiveFloat(139.70000, 139.80000),
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// Случайное целое число
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Случайное целое число с плавающей точкой
function getRandomPositiveFloat (a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const author = getRandomArrayElement(AVATAR);

const offer = {
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
};
const address = {
  lat: LOCATION[0],
  lng: LOCATION[1]
};

const generalObject = () => ({
  author,
  offer,
  address,
});

const similarObjects = Array.from({length: 10}, generalObject);

console.log(similarObjects);

