/* eslint-disable no-undef */
// Случайное целое число
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Случайное целое число с плавающей точкой
function getRandomPositiveFloat(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Очистка полей формы

const clearFields = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#price').value = '';
  document.querySelector('#description').value = '';
  document.querySelector('#type').selectedIndex = 1;
  document.querySelector('#timein').selectedIndex = 0;
  document.querySelector('#timeout').selectedIndex = 0;
  document.querySelector('#room_number').selectedIndex = 0;
  document.querySelector('#capacity').selectedIndex = 0;
  document.querySelector('#feature-wifi').checked = false;
  document.querySelector('#feature-dishwasher').checked = false;
  document.querySelector('#feature-washer').checked = false;
  document.querySelector('#feature-parking').checked = false;
  document.querySelector('#feature-elevator').checked = false;
  document.querySelector('#feature-conditioner').checked = false;
  document.querySelector('#address').value = '35.68596, 139.729518';
};

// Модальный окна
const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

export {getRandomArrayElement};
export {getRandomPositiveFloat, getRandomPositiveInteger};
export {clearFields, isEnterKey, isEscapeKey};
