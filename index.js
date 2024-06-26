
// function setInputForm (formElement, type, message) {
//   const messageElement = formElement.querySelector('.form__message');


//   messageElement.textContent= message;
//   messageElement.classList.remove('form__message--success','form__message--error');
//   messageElement.classList.add(`form__message ${type}`);
// }
// setInputForm(login,'Success', 'You are now login');


document.addEventListener('DOMContentLoaded', () => {
  const login = document.querySelector('#login');
  const createAccount = document.querySelector('#createAccount');

  document.querySelector('#linkCreateAccount'). addEventListener('click', e =>{
    e.preventDefault();
    login.classList.add('form--hidden');
    createAccount.classList.remove('form--hidden');
  })

  document.querySelector('#linkLogin').addEventListener('click', e => {
    e.preventDefault();
    login.classList.remove('form--hidden');
    createAccount.classList.add('form--hidden');
  })
});