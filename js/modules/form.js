import { sendData } from './api.js';
import { clearFields } from './utils.js';
import { openSuccessModal, openErrorModal } from './modal-windows.js';

const COORDINATE_ROUND = 5;
const capacityAbility = {
  1: 1,
  2: 2,
  3: 3,
  100: 0
};

const MIN_PRICE_OF_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');
const type = form.querySelector('#type');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

// Передача координат главной метки в поле "Адрес (координаты)"
address.setAttribute('readonly', '');
const getAddressCoordinates = (coordinates) => {
  address.value = `${(coordinates.lat).toFixed(COORDINATE_ROUND)}, ${(coordinates.lng).toFixed(COORDINATE_ROUND)}`;
};

// Валидация формы
// eslint-disable-next-line no-undef
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

// Валидация заголовка
const validateNickname = (value) => {
  return value.length >= 30 && value.length <= 100;
};

pristine.addValidator(form.querySelector('#title'),
  validateNickname,
  'от 30 символов до 100 символов'
);

// Валидация цены
function validatePrice() {
  const intValue = parseInt(price.value, 10);
  return intValue > MIN_PRICE_OF_TYPE[type.value] && intValue <= 100000;
};

const getPriceErrorMsg = () => {
  if (price.value > 100000) {
    return 'не более 100000 рублей';
  }
  switch (type.value) {
    case 'flat': return 'не менее 1000 рублей';
    case 'hotel': return 'не менее 3000 рублей';
    case 'house': return 'не менee 5000 рублей';
    case 'palace': return 'не менее 10000 рублей';
  }
};

pristine.addValidator(price, validatePrice, getPriceErrorMsg);

// Валидация количества комнат
const validateCapacity = () => {
  return capacity.value <= capacityAbility[roomNumber.value];
};

const getCapacityErrorMsg = () => {
  switch (roomNumber.value) {
    case '3': return 'не более трех человек';
    case '2': return 'не более двух человек';
    case '1': return 'не более одного человека';
    case '100': return 'не для гостей';
  }
};

pristine.addValidator(capacity, validateCapacity, getCapacityErrorMsg);

// Валидация времени заезда, выезда
timeIn.addEventListener('change', () => { timeOut.value = timeIn.value; });
timeOut.addEventListener('change', () => { timeIn.value = timeOut.value; });

// Отправка формы
const sendForm = (cb) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.querySelector('.ad-form__submit').setAttribute('disabled', 'disabled');
    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => {
          openSuccessModal();
          clearFields();

          cb();
        },
        openErrorModal,
        // eslint-disable-next-line no-undef
        new FormData(evt.target)
      );
    }
    document.querySelector('.ad-form__submit').removeAttribute('disabled', 'disabled');
  }
  );
};

// Сброс полей
const resetForm = (cb) => {
  document.querySelector('.ad-form__reset').addEventListener('click', function(evt) {
    evt.preventDefault();
    clearFields();
    cb();
  });
};

export {getAddressCoordinates, sendForm, resetForm};
