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

function validatePrice() {
  const type = form.querySelector('#type');
  const typeList = form.querySelector('#type').children;
  const price = form.querySelector('#price');
  if (type.value === TYPE[1]) {
    console.log('yes');
    price.placeholder = 1000;
  } else if (type.value === TYPE[2]) {
    price.placeholder = 3000;
  } else if (type.value === TYPE[3]) {
    price.placeholder = 5000;
  } else if (type.value === TYPE[4]) {
    price.placeholder = 10000;
  } else {
    price.placeholder = 0;
  }
};

pristine.addValidator(form.querySelector('#price'),
  validatePrice,
  'не более 100000'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

