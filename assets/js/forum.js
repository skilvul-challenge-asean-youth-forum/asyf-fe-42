const url = "https://644ffc29ba9f39c6ab718e4d.mockapi.io/forumData";

const cardLists = document.getElementById("card-list");

const getDataForum = async () => {
  try {
    const response = await fetch(url);
    const results = await response.json();

    results.forEach((el) => {
      cardLists.innerHTML += ` <section class="col-12 col-md-6 col-lg-4 grid-card">
      <div class="card h-100">
        <figure class="image-container">
          <img
          src=${el.thumbnail}
          class="card-img-top"
          alt=${el.title}
        />
        </figure>
        <div class="card-body">
          <h5 class="card-title text-black fw-bold">
            ${el.title}
          </h5>
          <p class="card-text">
            ${el.description}
          </p>
          <a href="#" class="text-decoration-none text-primary mt-auto">See More<span><i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </section>`;
    });
  } catch (error) {
    console.log(error);
  }
};

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
getDataForum();
