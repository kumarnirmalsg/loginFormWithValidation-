const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  

}


//check Input value
function checkRequired(inputArray)
{
    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input)
        }
    });
}

//adding event listener in the 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username,email,password,password2])

    // if (username.value === '') {
    //     showError(username, 'Username is required')
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required')
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is required')
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'Password2 is required')
    // } else {
    //     showSuccess(password2);
    // }
})