let input = prompt('enter the email : ')

let resule = document.querySelector('.result')
resule.innerHTML += validator.isEmail(input)
