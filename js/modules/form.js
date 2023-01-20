/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { clearFields } from './utils.js';
import { TYPE } from './dates.js';

const canvas = document.querySelector('.map__canvas');
const popup = document.querySelector('.popup');

const nonActivePage = () => {
  canvas.removeChild(popup);
  popup.remove();
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.ad-form-header').setAttribute('disabled', '');
  document.querySelector('.map__filters').classList.add('ad-form--disabled');
  const formElements = document.querySelectorAll('.ad-form__element');
  formElements.forEach((element) => {
    element.setAttribute('disabled', ' ');
  });
};

const activePage = () => {
  canvas.appendChild(popup);
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelector('.ad-form-header').removeAttribute('disabled', '');
  document.querySelector('.map__filters').classList.remove('ad-form--disabled');
  const formElements = document.querySelectorAll('.ad-form__element');
  formElements.forEach((element) => {
    element.removeAttribute('disabled', ' ');
  });
};

const form = document.querySelector('.ad-form');

// Сообщение об успешном опубликовании объявления
const successTemplate = document.querySelector('#success');
const templateClone = successTemplate.cloneNode(true);
const successDiv = templateClone.content.querySelector('.success');

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const onSuccessPushClose = (evt) => {
  evt.preventDefault();
  document.querySelector('body').removeChild(successDiv);
};

const successPushOpened = () => {
  document.querySelector('body').appendChild(successDiv);
  document.addEventListener('keydown', onSuccessPushClose);
  document.addEventListener('click', onSuccessPushClose);
};

const successPushClosed = () => {
  document.removeEventListener('keydown', onSuccessPushClose);
  document.removeEventListener('click', onSuccessPushClose);
};

// Валидация формы
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

// Валидация заголовка

function validateNickname(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(form.querySelector('#title'),
  validateNickname,
  'от 30 символов до 100 символов'
);

// Валидация цены
const type = form.querySelector('#type');
const price = form.querySelector('#price');

function validatePrice() {
  if (type.value === TYPE[1]) {
    price.placeholder = 1000;
    return price.value >= 1000;
  } else if (type.value === TYPE[2]) {
    price.placeholder = 3000;
    return price.value >= 3000;
  } else if (type.value === TYPE[3]) {
    price.placeholder = 5000;
    return price.value >= 5000;
  } else if (type.value === TYPE[4]) {
    price.placeholder = 10000;
    return price.value >= 10000;
  } else {
    price.placeholder = 0;
  }
};

function errorMessage() {
  if (type.value === TYPE[1]) {
    return 'не менее 1000 руб.';
  } else if (type.value === TYPE[2]) {
    return 'не менее 3000 руб.';
  } else if (type.value === TYPE[3]) {
    return 'не менее 5000 руб.';
  } else if (type.value === TYPE[4]) {
    return 'не менее 10000 руб.';
  }
}

type.addEventListener('click', validatePrice);

pristine.addValidator(form.querySelector('#price'),
  validatePrice,
  errorMessage
);

// Валидация количества комнат
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const capacityAbility = {
  1: 1,
  2: 2,
  3: 3,
  100: 0
};

function validateCapacity() {
  return capacity.value <= capacityAbility[roomNumber.value];
};

pristine.addValidator(capacity,
  validateCapacity
);

// Валидация вресени заезда, выезда
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const timeInList = Array.from(timeIn.children);
const timeOutList = Array.from(timeOut.children);
const timeInArray = [];
const timeOutArray = [];
timeInList.forEach((item) => {
  timeInArray.push(item.value);
});

timeOutList.forEach((item) => {
  timeOutArray.push(item.value);
});

function validateTimeIn() {

  for (let i = 0; i < timeInArray.length; i++) {
    if (timeIn.value === timeInArray[i]) {
      timeOut.value = timeOutArray[i];
      return timeIn.value === timeOut.value;
    }
  }
}

function validateTimeOut() {

  for (let i = 0; i < timeOutArray.length; i++) {
    if (timeOut.value === timeOutArray[i]) {
      timeIn.value = timeInArray[i];
      return timeOut.value === timeIn.value;
    }
  }
}

pristine.addValidator(timeIn,
  validateTimeIn
);

pristine.addValidator(timeOut,
  validateTimeOut
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

