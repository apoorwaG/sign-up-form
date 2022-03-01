const password = document.querySelector("input#password");
const conf_password = document.querySelector("input#conf_password");
const password_mismatch = document.querySelector(".passwordMessage");
const submit_button = document.querySelector("button[type='submit']");

conf_password.addEventListener("input", checkMatch);
password.addEventListener("input", checkMatch);

function checkMatch(event) {
    if (conf_password.value !== password.value){
        password_mismatch.textContent = "* Passwords do not match!";
        submit_button.disabled = true;
    } else {
        password_mismatch.textContent = "";
        submit_button.disabled = false;
    }
}

function verifyPasswordMatch(event) {
    if (conf_password.value !== password.value){
        password.setCustomValidity("Passwords do not match!");
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
}