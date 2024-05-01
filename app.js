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
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (targetEle.id === 'phone') targetEle.value = targetEle.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    // validation of email and phone num
    if ((targetEle.id === 'email' && targetEle.value && (emailRegex.test(targetEle.value))) || targetEle.id === 'phone' && targetEle.value && targetEle.value.match(phoneRegex)) {
        //handle valid e-mail and phone num
        if (invalidInput) invalidInput.setAttribute('hidden', '');
        targetEle.classList.remove('error');
    } else if ((targetEle.id === 'email' || targetEle.id === 'phone') && targetEle.value) {
        //handle invalid e-mail and phone num
        if (invalidInput) invalidInput.removeAttribute('hidden');
        targetEle.classList.add('error');
    }
    // if value exists in inp field hide error meesage if shown
    if (targetEle.value && !inputError.hasAttribute('hidden')) {
        inputError.setAttribute('hidden', '');
        targetEle.classList.remove('error');
    } else if (!targetEle.value) {
        inputError.removeAttribute('hidden');
        targetEle.classList.add('error');
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
            ele.classList.add('error');
        } else {
            if (inputError) inputError.setAttribute('hidden', '');
            ele.classList.remove('error');
        }
    });
};

const supportBtnClick = (e) => {
    e.preventDefault();
    fieldCheck();
    // hit BE API to store data
};

// Binding event on change of input field
document.querySelectorAll('.input_field').forEach(ele => {
    ele.addEventListener('input', onChangeOfInputField);
});
// Event binding on click of Report Tech Support button
document.querySelector('.support-form__button').addEventListener('click', supportBtnClick);

// footer accordion js
document.addEventListener("DOMContentLoaded", () => {
    var accordions = document.getElementsByClassName("accordion");
    Array.from(accordions).forEach((accordion) => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});