const userName = document.getElementById("Username");
const userPassword = document.getElementById("Password");
const loginButton = document.getElementById("login-button");

const handleLogin = async () => {
  let data;
  try {
    const response = await fetch(
      "https://644ffc29ba9f39c6ab718e4d.mockapi.io/users"
    );
    const results = await response.json();

    data = [...results];

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  for (let item of data) {
    item.userName == userName.value && item.password == userPassword.value
      ? console.log(
          "login berhasil"
        ) /*window.location.href='../../pages/homepage.html'*/
      : console.log("login gagal");
  }
};

loginButton.addEventListener("click", handleLogin);

handleLogin;
