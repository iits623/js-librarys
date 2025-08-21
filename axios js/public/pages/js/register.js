const $ = document

const usernameInput = $.querySelector('#username-input')
const emailInput = $.querySelector('#email-input')
const passwordInput = $.querySelector('#password-input')
const signUpBtn = $.querySelector('#submit-btn')
signUpBtn.addEventListener('click', (event) => {
    axios.post('https://axios-library-6f6b8-default-rtdb.firebaseio.com/user.json', {
        name: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    })
        .then(res => console.log(res))
        .catch(res => console.log(res));
})