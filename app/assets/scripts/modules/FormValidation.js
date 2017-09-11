import $ from 'jquery';
import v from 'jquery-validation';

class FormValidation {
  constructor() {
    this.formElement = $(".form-layout");
    this.submitButton = $(".form-layout--button");
    this.events();
  }
  
  events() {
    this.submitButton.click(this.validate.bind(this));
  }
  
  validate() {
    this.formElement.validate({
      rules: {
        fullname: {
          required: true,
          minlength: 2,
          maxlength: 50,
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
        }
      },
      messages: {
        fullname: {
          required: "Please enter your name",
          minlength: "Minimum 2 characters long",
          maxlength: "Maximum 50 characters long",
        },
        email: "Please enter a valid email address",
        message: "Please enter the message"
      },
      submitHandler: function(form) 
      {
        form.submit();
      }
    });
  }
}

export default FormValidation;