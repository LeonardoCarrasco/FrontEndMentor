
const email = document.querySelector('#email');

const form = document.querySelector('#form')

const warning = document.querySelector('.warning');



form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!validateEmail.test(email.value)) {
        warning.setAttribute('id', 'error');
        warning.innerHTML = 'Please enter a valid email address';
        warning.style.display = 'block';
    }
    else{
        warning.setAttribute('id', 'success');
        warning.innerHTML = 'Success!'
        warning.style.display = 'block';

    }
})


