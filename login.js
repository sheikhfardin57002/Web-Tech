document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let message = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please enter email and password.";
        return;
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login form validation successful!";

});