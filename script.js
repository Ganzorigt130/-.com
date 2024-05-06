const loginForm = document.getElementByld('loginFont');
const signupForm = document.getElementByld('signuoForm');
const showSignupBtn = document.getElementByld('showSignup');
const showLogibBtn = document.getElementByld('showLogin');


// event listener to switch to signup form when the sign up button is clicked
showSignupBtn.addEventListener('click', ()=> {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});


// event listener to swich to login from when the sign in button is clicked
showLogibBtn.addEventListener('click', ()=> {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});