
document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if (!name || !email || !phone || !dob || !gender ||
        !address || !password || !confirmPassword) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match.";
        return;
    }

    if (new Date(dob) >= new Date()) {
        message.style.color = "red";
        message.textContent = "Please enter a valid date of birth.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration form validated successfully!";

    document.getElementById("patientForm").reset();

});
