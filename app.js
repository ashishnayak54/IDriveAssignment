// Hamburger Logic

function toggleMenu() {
    var menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('open');
}

// Form Validation

const handleFormClick = (event) => {
    const prevActiveEle = document.querySelector('.support-form_head .active');
    const targetEle = event.target;
    if (prevActiveEle) prevActiveEle.classList.remove('active');
    if (targetEle) targetEle.classList.add('active');
};

document.querySelectorAll('.support-form_head div').forEach(ele => {
    ele.addEventListener('click', handleFormClick);
});

// Input Fields Validation

const onChangeOfInputField = (e) => {
    const targetEle = e.target;
    const inputWrapper = targetEle.closest('.support-form__content_item');
    const inputError = inputWrapper.querySelector('.supprt-form__content_error');
    const invalidInput = inputWrapper.querySelector('.invalid-input');
    // validation of email
    if (targetEle.id === 'email' && targetEle.value && (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(targetEle.value))) {
        //handle valid e-mail
        if (invalidInput) invalidInput.setAttribute('hidden', '');
        console.log('valid email');
    } else if (targetEle.value) {
        //handle invalid e-mail
        if (invalidInput) invalidInput.removeAttribute('hidden');
        console.log('invalid email');
    }
    // if value exists in inp field hide error meesage if shown
    if (!inputError.hasAttribute('hidden')) inputError.setAttribute('hidden', '');
    else if (!targetEle.value) {
        inputError.removeAttribute('hidden');
        if (invalidInput) invalidInput.setAttribute('hidden', '');
    }
};

const fieldCheck = () => {
    const inputFields = document.querySelectorAll('.input_field');
    inputFields.forEach(ele => {
        const inputWrapper = ele.closest('.support-form__content_item');
        const inputError = inputWrapper.querySelector('.supprt-form__content_error');
        if (!(ele.value) || ele.value === 'Select') {
            if (inputError) inputError.removeAttribute('hidden');
        } else {
            if (inputError) inputError.setAttribute('hidden', '');
        }
    });
};

const supportBtnClick = (e) => {
    e.preventDefault();
    fieldCheck();
};

// Binding event on change of input field
document.querySelectorAll('.input_field').forEach(ele => {
    ele.addEventListener('input', onChangeOfInputField);
});
// Event binding on click of Report Tech Support button
document.querySelector('.support-form__button').addEventListener('click', supportBtnClick);