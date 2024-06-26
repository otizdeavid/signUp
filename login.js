class Login{
  constructor (form, fields) {
    
    this.form = form;
    this.fields = fields;
    this.validatorSubmit();

  }

  validatorSubmit () {
    let self = this;

    this.form.addEventListener("submit", e => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
           // console.log(input.value);

        if (self.validateField(input) === false) {
          error++;
        } if (error === 0){
        
        }
       
      });
    });
  }
  validateField (field){
    if(field.value.trim() === ""){
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} 
        cannot be blank`,
        "error"
      );
      return false;
    }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".form__input-message-error");
    if(status === "error") {
      errorMessage.innerText = message;
      field.classList.add("error");
      
    }
  }
}
const form = document.querySelector("#login");
if (form) {
  const fields = ["username", "password"];
  const validator = new Login(form,fields);
}