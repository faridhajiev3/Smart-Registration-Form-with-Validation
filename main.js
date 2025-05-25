const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("small").innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    if (input.value.includes("@")) {
        showSuccess(input);
        return true;
    } else {
        showError(input, "Email düzgün formatda deyil");
        return false;
    }
}


function checkPasswordsMatch(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        showError(pass2, "Şifrələr uyğun gəlmir");
        return false;
    } else {
        showSuccess(pass2);
        return true;
    }
}

function validateForm() {
    const emailValid = checkEmail(emailInput);
    const passwordsMatch = checkPasswordsMatch(passwordInput, confirmPasswordInput);
    return emailValid && passwordsMatch;
}

form.addEventListener("input", () => {
    submitBtn.disabled = !validateForm();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        alert("Qeydiyyat uğurla tamamlandı!");
        submitBtn.disabled = true;
    }
});


