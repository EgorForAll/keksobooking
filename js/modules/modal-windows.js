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
  document.body.prepend(errorElement);
  const mapFilters = document.querySelector('.map__filters');
  Array.from(mapFilters.children).forEach(element => {
    element.disabled = true;
  });
}

//Сообщение об успешной отправке данных
function openSuccessModal() {
  const template = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.appendChild(template);

  const onClickModal = () => {
    document.body.removeChild(template);
    document.removeEventListener('keydown', onEsc, {once: true});
  };

  const onEsc = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.body.removeChild(template);
      document.removeEventListener('click', onClickModal, {once: true});
    }
  };

  document.addEventListener('keydown', onEsc, {once: true});
  document.addEventListener('click', onClickModal, {once: true});
  clearFields();
}

// Сообщение об ошибке отправки данных
function openErrorModal() {
  const template = document.querySelector('#error');
  const errorBlock = template.content.querySelector('.error').cloneNode(true);
  document.body.appendChild(errorBlock);
  const errorButton = errorBlock.querySelector('.error__button');

  const outOfErrorWindow = () => {
    document.body.removeChild(errorBlock);
    document.removeEventListener('keydown', onEsc, {once: true});
  };

  const onEsc = (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(errorBlock);
      document.removeEventListener('click', outOfErrorWindow, {once: true});
    }
  };

  errorButton.addEventListener('click', outOfErrorWindow, {once: true});
  document.addEventListener('click', outOfErrorWindow, {once: true});
  document.addEventListener('keydown', onEsc, {once: true});
}

export {openSuccessModal, openErrorModal, openGetDataError };
