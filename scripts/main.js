const regForm = document.querySelector('.reg-form');
const loginForm = document.querySelector('.login-form');
const formToggleBtns = document.querySelectorAll('.form-toggle');

formToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleForm);
})

function toggleForm(e) {
    e.preventDefault();

    if(regForm.classList.contains('active')) {
        regForm.classList.toggle('active');
        loginForm.classList.toggle('active');
    } else {
        regForm.classList.toggle('active');
        loginForm.classList.toggle('active');
    }
}