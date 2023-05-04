const username = document.getElementById("Username");
const useremail = document.getElementById("Email");
const userpassword = document.getElementById("Password");
const formSignup = document.getElementsByTagName("form")[0];
const registerButton = document.getElementById("register");

const handleSignUp = async (e) => {
  e.preventDefault();
  if (
    username.value != "" &&
    useremail.value != "" &&
    userpassword.value != ""
  ) {
    try {
      await fetch("https://644ffc29ba9f39c6ab718e4d.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: username.value,
          email: useremail.value,
          password: userpassword.value,
        }),
      });
      formSignup.reset();
      window.location.href = "../../pages/login.html";
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please complete the form");
  }
};

registerButton.addEventListener("click", handleSignUp);
