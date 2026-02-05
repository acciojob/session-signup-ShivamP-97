//your JS code here. If required.

let signup_form = document.getElementById("signup-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");


signup_form.addEventListener("submit", (e) => {
    e.preventDefault();

    let pass = password.value.trim();
    let pass2 = confirm_password.value.trim();

    if (pass === pass2) {
        sessionStorage.setItem("name", name.value.trim());
        sessionStorage.setItem("email", email.value.trim());
        sessionStorage.setItem("password", pass);

        alert("Sign up successful!");
		signup_form.reset();
    } else {
        alert("Passwords do not match");
    }
});