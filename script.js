const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// const parallax = document.querySelector('.parallax')
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');
// const text = document.getElementById('text');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    // parallax.classList.add('active-popup');
});

btnClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    // parallax.classList.remove('active-popup');
});

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginBottom = value * 2.5 + 'px';
// });