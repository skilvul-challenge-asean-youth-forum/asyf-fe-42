const containerUser = document.getElementById("user");

const isLogin = () => {
  if (localStorage.getItem("users") != null) {
    containerUser.innerHTML = `<a href="#" id="btn-logout" class="nav-link mx-3 text-white fs-5 ps-3 ms-auto"
    >Logout</a
  >`;
    const btnLogout = document.getElementById("btn-logout");
    btnLogout.addEventListener("click", logout);
  }
};

const logout = () => {
  localStorage.removeItem("users");
  window.location.href = "./login.html";
};

isLogin();
