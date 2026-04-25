// REGISTER
function register() {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (email === "" || password === "") {
        alert("Fill all fields!");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registered Successfully!");
    window.location.href = "index.html";
}

// LOGIN
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials!");
    }
}

// CHECK AUTH
function checkAuth() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}