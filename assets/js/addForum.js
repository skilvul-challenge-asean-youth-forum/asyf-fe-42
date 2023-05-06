const containerUser = document.getElementById("user");
const dataTitle = document.getElementById("topic");
const dataThumbnail = document.getElementById("thumbnail");
const dataDescription = document.getElementById("description");
const addBtn = document.getElementById("add-button");
const form = document.getElementsByTagName("form")[0];

const handlePostData = async () => {
  if (
    dataTitle.value != "" &&
    dataThumbnail.value != "" &&
    dataDescription != ""
  ) {
    try {
      await fetch("https://644ffc29ba9f39c6ab718e4d.mockapi.io/forumData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: dataTitle.value,
          thumbnail: dataThumbnail.value,
          description: dataDescription.value,
        }),
      });
      form.reset();
      window.location.href = "./forum.html";
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("please enter correct data");
  }
};

addBtn.addEventListener("click", handlePostData);

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
