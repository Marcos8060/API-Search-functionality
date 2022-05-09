const searchInput = document.getElementById("searchUser");
const user = document.getElementById("user");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userText = searchInput.value;

  const updatedName = userText.split(" ").join("");

  axios.get(`https://api.github.com/users/${updatedName}`).then((response) => {
    user.innerHTML += `
        <div class="col-md-7">
                <div class="card">
                    <img src=${response.data.avatar_url} class="img-fluid profile__img" alt="">
                    <a href=${response.data.html_url} class="btn btn-primary m-4">View Profile</a>
                    <p>${response.data.bio}</p>
                </div>
            </div>
        `;
  });
});
