function login(username, password) {
    const validUser = "admin";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password.");
    }
}
