const username = document.getElementById ("username");
const email = document.getElementById ("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const createAccount = document.querySelector("#createAccount");

createAccount.addEventListener("submit", e => {
  e.preventDefault();
  validateForm();
});

const setMessageError = (element, message ) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form__input-message-error");
  
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");

}

const setMessageSuccess =  element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form__input-message-error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const isValidEmail = email => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(string(email).toLowercase());
}

const validateForm = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


  if (usernameValue === "") {
    setMessageError(username, "Username is required");
  } else{
    setMessageSuccess(username);
  }

  if (emailValue === "") {
    setMessageError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setMessageError(email, "Provide a valid email");
  } else {
    setMessageSuccess(email);
  }

  if (passwordValue === "") {
    setMessageError(password, "Password is required");
  } else if (passwordValue.length < 8 ){
    setMessageError(password, "Password must be at least 8 characters");
  } else {
    setMessageSuccess(password)
  }

  if (password2Value === ""){
    setMessageError(password2, "Confirm password");
  } else if (passwordValue !== password2Value) {
    setMessageError(password2, "Passwords does not matched");
  } else {
    setMessageSuccess(password2);
  }
}