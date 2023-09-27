var phone = document.forms['form']['phone']
var password = document.forms['form']['pass']

var number_error = document.getElementById('num_error');
var password_error = document.getElementById('pass_error');

phone.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);

function validated(){
    if (phone.value !== '7755458567') {
        phone.style.border = "1px solid red";
        number_error.style.display = 'block'
        phone.focus();
        return false;
    }
    if (password.value !== 'Newell' ) {
        password.style.border = "1px solid red";
        password_error.style.display = 'block'
        password.focus();
        return false;
    }

}

function emailVerify() {
    if (phone.value === '7755458567') {
        phone.style.border = "1px solid rgb(59,130,248)";
        number_error.style.display = 'none'
        return true;
    }
}

function passVerify() {
    if (password.value == 'Newell') {
        password.style.border = "1px solid rgb(59,130,248)";
        password_error.style.display = 'none'
        return true;
    }
}