import { clearFields } from './utils.js';

// Сообщение об ошибке получение данных
function openGetDataError() {
  const errorElement = document.createElement('div');
  errorElement.classList.add('get-data-error');
  errorElement.style.position = 'fixed';
  errorElement.style.zIndex = 1000;
  errorElement.style.top = 0;
  errorElement.style.right = 0;
  errorElement.style.left = 0;
  errorElement.style.paddingTop = '3px';
  errorElement.style.paddingBottom = '3px';
  errorElement.style.backgroundColor = 'tomato';
  errorElement.textContent = 'Не удалось загрузить данные с сервера. Пожалуйста, попробуйте еще раз.';
  errorElement.style.textAlign = 'center';
  errorElement.style.color = 'white';
  document.querySelector('body').prepend(errorElement);
  const mapFilters = document.querySelector('.map__filters');
  Array.from(mapFilters.children).forEach(element => {
    element.disabled = true;
  });
}

//Сообщение об успешной отправке данных

function openSuccessModal() {
  const template = document.querySelector('#success').content.querySelector('.success');
  document.querySelector('body').appendChild(template);
  const onClickModal = () => document.querySelector('body').removeChild(template);
  document.addEventListener('click', onClickModal, {once: true});
  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
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
    if (evt.key === 'Escape') {
      document.querySelector('body').removeChild(template);
    }
  },
  {once: true}
  );
}

export {openSuccessModal, openErrorModal, openGetDataError };
