function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Ganti dengan username dan password yang kamu inginkan
    const validUsername = "reno123";
    const validPassword = "12345678";

    if (username === validUsername && password === validPassword) {
        window.location.href = "success.html";
    } else {
        errorMsg.textContent = "Username atau password salah!";
    }
}
