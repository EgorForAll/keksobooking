import { clearFields, isEscapeKey } from './utils.js';

//Сообщение об успешной отправке данных

function openSuccessModal() {
  const template = document.querySelector('#success').content.querySelector('.success');
  document.querySelector('body').appendChild(template);
  const onClickModal = () => document.querySelector('body').removeChild(template);
  document.addEventListener('click', onClickModal, {once: true});
  document.addEventListener('keydown', function(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      onClickModal();
    }
  }
  , {once: true});
  clearFields();
}
// Сообщение об ошибке отправки данных

function openErrorModal() {
  const template = document.querySelector('#error').content.querySelector('.error');
  document.querySelector('body').appendChild(template);
  const errorButton = template.querySelector('.error__button');
  errorButton.addEventListener('click', function() {
    document.querySelector('body').removeChild(template);
  },
  {once: true});
  document.addEventListener('click', function() {
    document.querySelector('body').removeChild(template);
  },
  {once: true});
  document.addEventListener('keydown', function(evt) {
    if (isEscapeKey(evt)) {
      document.querySelector('body').removeChild(template);
    }
  },
  {once: true}
  );
}

export {openSuccessModal, openErrorModal };
