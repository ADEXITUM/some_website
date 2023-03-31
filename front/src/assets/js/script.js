const authmenu = document.querySelector('.authmenu');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    authmenu.classList.add('active');
});

loginLink.addEventListener('click', () => {
    authmenu.classList.remove('active');
});

