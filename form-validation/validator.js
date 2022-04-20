

function Validator(options) {
  var formElement =document.querySelector(`#${options.form}`)
  if(formElement) {
    options.rules.forEach(function(rule){
      var inputElement = formElement.querySelector(rule.selector)
      if(inputElement) {
        inputElement.onblur = function(){
          var errorMessage = rule.test(inputElement.value)
          var errorElement =             inputElement.parentElement.querySelector('.form-message')
          if(errorMessage) {
            errorElement.innerText = errorMessage
          } else {
            errorElement.innerText = ''
          }
        }
      }
    })
  }
}

Validator.isRequired = function(selector) {
  return {
    selector,
    test (value) {
      return value.trim() ? undefined : 'Vui lòng nhập trường này.'
    }
  }
}

Validator.isEmail = function(selector) {
  return {
    selector,
    test (value) {

    }
  }
}