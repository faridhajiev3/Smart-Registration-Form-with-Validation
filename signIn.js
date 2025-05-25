
const loginBtn = document.getElementById("logIn");
const nameInput2 = document.getElementById("inputName");
const passwordInput2 = document.getElementById("inputPassword");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = nameInput2.value;
    const password = passwordInput2.value;

    if (name === "" || password === "") {
        alert("Zəhmət olmasa ad və şifrəni doldurun");
    } else {
        alert(`Xoş gəldiniz, ${name}!`);
    }

    nameInput2.value = "";
    passwordInput2.value = "";
});