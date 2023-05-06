const userName = document.getElementById("Username");
const userPassword = document.getElementById("Password");
const loginButton = document.getElementById("login-button");
const warning = document.querySelector(".warning");

warning.innerHTML = "";
const handleLogin = async () => {
  try {
    const response = await fetch(
      ` https://644ffc29ba9f39c6ab718e4d.mockapi.io/users?userName=${userName.value}`
    );

    const results = await response.json();

    if (Object.keys(results.join(" ")).length > 0) {
      if (results[0].password == userPassword.value) {
        localStorage.setItem("users", JSON.stringify(results));
        window.location.href = "../../pages/homepage.html";
      } else {
        warning.innerHTML = "Invalid Email or Password";
      }
    } else {
      console.log("data empty");
    }
  } catch (error) {
    console.log(error);
  }
};

loginButton.addEventListener("click", handleLogin);

handleLogin;
