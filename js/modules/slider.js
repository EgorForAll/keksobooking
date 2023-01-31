const priceSlider = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');

// eslint-disable-next-line no-undef
noUiSlider.create(priceSlider, {
  range: {
    min: 1000,
    max: 100000
  },
  step: 100,
  connect: 'lower',
  start: 1000,
  format: {
    to: function(value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
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
