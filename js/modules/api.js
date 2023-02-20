import { openGetDataError } from './modal-windows.js';

/* eslint-disable no-undef */
const DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch(() => {
      openGetDataError();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
