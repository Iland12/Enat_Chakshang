const search = document.querySelector(".material-icons");
const searchBar = document.querySelector("input");
const logo = document.querySelector("#one");

search.addEventListener("click", () => {
  logo.style.display = "none";
  searchBar.style.display = "block";
  search.style.display = "none";
});
