/* eslint-disable no-undef */
const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((markers) => {
      onSuccess(markers);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      mode: 'cors',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
