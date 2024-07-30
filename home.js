function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "center-section") {
    i.className += " responsive";
  } else {
    i.className = "center-section";
  }
}

document.getElementById("search-input").addEventListener("input", function () {
  var searchBtn = document.getElementById("search-btn");
  if (this.value.trim() !== "") {
    searchBtn.style.display = "block";
  } else {
    searchBtn.style.display = "none";
  }
});

document.getElementById("search-btn").addEventListener("click", function () {
  var searchInput = document.getElementById("search-input").value;
  if (searchInput.trim() === "") {
    alert("Please enter a search term.");
  } else {
    redirectToSearch();
  }
});

const searchButton = document.querySelector(".search-container button");
const searchInput = document.querySelector(".search-container input");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("expanded");
  if (searchInput.classList.contains("expanded")) {
    searchInput.focus(); // Focus the input field when expanded
  }
});

function redirectToSearch() {
  const query = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  let url;
  switch (query) {
    case "foodhub":
      url = "food.html";
      break;
    case "fitness":
    case "health":
    case "fitness & health":
      url = "fitness.html";
      break;
    case "techhub":
      url = "tech.html";
      break;
    case "moneyhub":
      url = "money.html";
      break;
    case "writeblog":
      url = "writeblog.html";
      break;
    default:
      alert('No results found for "' + query + '".');
      return;
  }
  window.location.href = url;
}

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 2000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function (event) {
  reloadSlider();
};
