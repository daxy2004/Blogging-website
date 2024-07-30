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
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  let url;
  switch (query) {
    case 'foodhub':
      url = 'food.html';
      break;
    case 'fitness':
    case 'health':
    case 'fitness & health':
      url = 'fitness.html';
      break;
    case 'techhub':
      url = 'tech.html';
      break;
    case 'moneyhub':
      url = 'money.html';
      break;
    default:
      alert('No results found for "' + query + '".');
      return;
  }
  window.location.href = url;
}
