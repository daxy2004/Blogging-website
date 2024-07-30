document.getElementById("search-btn").addEventListener("click", function () {
  const searchInput = document.getElementById("search-input");
  const goButton = document.getElementById("go-btn");

  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    searchInput.style.display = "inline-block";
    goButton.style.display = "inline-block";
    goButton.classList.add("highlight");
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
    goButton.style.display = "none";
    goButton.classList.remove("highlight");
  }
});

document.getElementById("go-btn").addEventListener("click", function () {
  const searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  if (!searchInput) {
    alert("Please enter a search query.");
  } else {
    let url;
    switch (searchInput) {
        case "home":
        url = "home.html";
        break;
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
      default:
        alert(`No results found for "${searchInput}".`);
        return;
    }
    window.location.href = url;
  }
});

function previewImage(event) {
  const imagePlaceholder = document.querySelector(".image-placeholder");
  imagePlaceholder.innerHTML = "";
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.onload = function () {
        const maxWidth = imagePlaceholder.offsetWidth;
        const maxHeight = imagePlaceholder.offsetHeight;
        const width = img.width;
        const height = img.height;
        let newWidth, newHeight;
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            newWidth = maxWidth;
            newHeight = (height / width) * maxWidth;
          } else {
            newHeight = maxHeight;
            newWidth = (width / height) * maxHeight;
          }
        } else {
          newWidth = width;
          newHeight = height;
        }
        img.width = newWidth;
        img.height = newHeight;
        adjustImagePlaceholder(); // Call adjustImagePlaceholder here
      };
      imagePlaceholder.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}

function addTag(tagName) {
  console.log(`Adding tag: ${tagName}`);
  const tagsContainer = document.querySelector(".tags-container");
  const tag = document.createElement("label");
  tag.textContent = `#${tagName}`;
  tagsContainer.appendChild(tag);
}

function addCustomTag() {
  console.log("addCustomTag called");
  const customTagInput = document.getElementById("custom-tag");
  const tagName = customTagInput.value.trim();
  if (tagName) {
    addTag(tagName);
    customTagInput.value = "";
  }
}
