const formlogin = document.getElementById("formlogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

formlogin.addEventListener('sumbit', (e) => {
    e.preventDefault();

    document.querySelector(`.${email.name}-error`).classList.add('d-none');
    document.querySelector(`.${password.name}-error`).classList.add('d-none');
    if (email.value.trim() == '') {
        document.querySelector(`.${email.name}-error`).classList.remove('d-none');

    }
    if (password.value.trim() == '') {
        document.querySelector(`.${password.name}-error`).classList.remove('d-none');

    }
    if (email.value != '' && password.value != '') {
        window.alert('SUCCESSFULLY COMPlETE');
        formlogin.onsubmit();
    }

})