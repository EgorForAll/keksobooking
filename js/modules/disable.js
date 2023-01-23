const nonActivePage = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.ad-form-header').setAttribute('disabled', '');
  document.querySelector('.map__filters').classList.add('ad-form--disabled');
  const formElements = document.querySelectorAll('.ad-form__element');
  formElements.forEach((element) => {
    element.setAttribute('disabled', ' ');
  });
};

const activePage = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelector('.ad-form-header').removeAttribute('disabled', '');
  document.querySelector('.map__filters').classList.remove('ad-form--disabled');
  const formElements = document.querySelectorAll('.ad-form__element');
  formElements.forEach((element) => {
    element.removeAttribute('disabled', ' ');
  });
};

export {activePage, nonActivePage};
