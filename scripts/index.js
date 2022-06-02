const $name = document.querySelector('.name')
const $password = document.querySelector('.password')
const $confirmPassword = document.querySelector('.confirm-password')
const $registerButton = document.querySelector('.submit-button')



function requestName() {
  let nome = document.getElementById('full-name').value
  if (nome.length < 3) {
    alert('Nome necessita de mais de 3 caracteres')
  }

  let password = document.getElementById('password-field').value
  let confirmPassword = document.getElementById('confirm-password-field').value

  if(password.length != confirmPassword.length) {
    alert('Senha e confirmar senha precisam ser iguais')
  }
}

function samePassword() {
    let password = document.getElementById('password-field').value
    let confirmPassword = document.getElementById('confirm-password-field').value
    
    if(password != confirmPassword)  
    {   
      alert("senha e confirmar senha não são os mesmos");  
    }
  }

  
  $registerButton.addEventListener('click', function() {
    requestName()
    samePassword()
  })