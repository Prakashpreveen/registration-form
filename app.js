const form  = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(event) => {
    
    if (!validateInput()) {
        event.preventDefault();
    }
})

function validateInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    let isValid = true;

    if(usernameVal === '') {
        setError(username,'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email,'Email is required');
        isValid = false;
    }else if(!validateEmail(emailVal)) {
        setError(email,'Please enter the valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if(passwordVal === '') {
        setError(password,'Password is requried');
        isValid = false;
    } else if(passwordVal.length < 8) {
        setError(password,'Password must be atleast 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if(cpasswordVal === '') {
        setError(cpassword,'Confirm password requried');
        isValid = false;
    } else if(cpasswordVal !== passwordVal) {
        setError(cpassword,'Confirm password must be same as Password');
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    return isValid;
}



function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email).toLowerCase()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};
