const form = document.querySelector('form');
const FormElements = Array.from(form.elements);
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pwd = document.getElementById('password');
const confirmPwd = document.getElementById('confirm-password');

const emailErrMsg = document.querySelector('.error-email');
const countryErrMsg = document.querySelector('.error-country');
const zipErrMsg = document.querySelector('.error-zip');
const pwdErrMsg = document.querySelector('.error-pwd');
const confirmPwdErrMsg = document.querySelector('.error-confirm-pwd');



email.addEventListener('input',()=>{
    if(email.validity.valueMissing){
        emailErrMsg.textContent = "*Kindly fill your email";
    }else if(email.validity.typeMismatch){
        emailErrMsg.textContent = "*Kindly enter the correct format";
    }
    else{
        emailErrMsg.textContent = "";
    }
})

zip.addEventListener('input', ()=>{
    if(zip.validity.valueMissing){
        zipErrMsg.textContent = "*Kindly fill your zip code.";
    }else if(zip.validity.patternMismatch){
        zipErrMsg.textContent = "*Kindly match the correct pattern.";
    }else{
        zipErrMsg.textContent = "";
    }
})

country.addEventListener('input', ()=>{
    if(country.validity.valueMissing){
        countryErrMsg.textContent = "*Kindly enter your country's name.";
    }else{
        countryErrMsg.textContent = "";
    }
})

pwd.addEventListener('input',()=>{
    if(pwd.validity.valueMissing){
        pwdErrMsg.textContent = "*Kindly enter your password."
    }else if(pwd.validity.patternMismatch){
        pwdErrMsg.textContent = "*Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.";
    }
    else{
        pwdErrMsg.textContent = "";
    }
})

confirmPwd.addEventListener('input', ()=>{
    if(pwd.value !== confirmPwd.value){
        confirmPwdErrMsg.textContent = "Passwords do not match";
    }
    else{
        confirmPwdErrMsg.textContent = "";
    }
})

form.addEventListener('submit',(event)=>{
    const isValid = FormElements.every(element => element.checkValidity());
    console.log(isValid);
    if(!isValid){
        event.preventDefault();
    }
    form.reset();
})
