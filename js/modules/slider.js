const priceSlider = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');

// Добавляем слайдер на страницу
// eslint-disable-next-line no-undef
noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000
  },
  step: 100,
  connect: 'lower',
  start: 0,
  format: {
    to: function(value) {
      if (Number.isInteger(value)) {
        return parseInt(value, 10).toFixed(0);
      }
      return parseInt(value, 10).toFixed(0);
    },
    from: function(value) {
      return parseFloat(value);
    }
  }

});

priceSlider.noUiSlider.on('update', (...rest) => {
  priceElement.value = priceSlider.noUiSlider.get();
});

export {priceSlider};
