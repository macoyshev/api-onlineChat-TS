import { sendRequest } from './sendData.js';

let form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let user = {
    age: null,
    name: null,
    email: null,
  };

  for (let prop of form) {
    if (prop.type !== 'submit') {
      user[prop.name] = prop.value;
    }
  }

  console.log(await sendRequest('PUT', `/users/${user.id}`, user));
});
