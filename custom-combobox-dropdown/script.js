const search = document.querySelector('input[type="search"]');
const label = document.querySelector("label");
const searchBox = document.querySelector(".search-box");
const dropDownList = document.createElement("div");
dropDownList.classList.add("dropdown-list");
const searchWrapper = document.querySelector(".search-wrapper");
const comboBox = document.querySelector(".combobox");
let listItems;
searchWrapper.addEventListener("click", () => {
    const movie = document.querySelector(".search-box .list-item");
    if (movie != null) {
        searchBox.removeChild(document.querySelector(".search-box .list-item"));
    }
    search.classList.remove("display-none");
    search.classList.add("display-inline-block");
    search.focus();
    label.classList.remove("display-inline-block");
    label.classList.add("display-none");
    dropDownList.innerHTML = "";
    getMovies();
    collapse = false;
});

search.addEventListener("focusout", () => {
    search.value = "";
    search.classList.add("display-none");
    search.classList.remove("display-inline-block");
    label.classList.remove("display-none");
    label.classList.add("display-inline-block");
    comboBox.removeChild(dropDownList);
    collapse = true;
});

async function getMovies() {
    const url = "/top-100-christmas-movies.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const movies = await response.json();
        populate(movies);
    } catch(error) {
        console.error(`Error: ${error.message}`);
    }

}

function removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

function populate(movies) {
    for (const movie of movies) {
        const div1 = document.createElement("div");
        div1.classList.add("list-item");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const span = document.createElement("span");

        img.src = movie.Image;
        img.alt = movie["Image Alt"];
        h1.textContent = movie.Title.replace(/\d+\./, "");
        span.textContent = movie.Year;
        div2.appendChild(img);
        div2.classList.add("image-container");
        div3.appendChild(h1);
        div3.appendChild(span);
        div3.classList.add("movie-info");
        div1.appendChild(div2);
        div1.appendChild(div3);
        dropDownList.appendChild(div1);
    }
    comboBox.appendChild(dropDownList);
    listItems = document.querySelectorAll(".dropdown-list > div");
    listItems.forEach((element) => {
        element.addEventListener("click", () => {
            search.classList.remove("display-inline-block");
            search.classList.add("display-none");
            searchBox.appendChild(element);
        });
    });
}
let movieName;
let count = 0;
let newCount = 0;
search.addEventListener("input", (event) => {
    movieName = event.target.value.toLowerCase();
    listItems = document.querySelectorAll(".dropdown-list > div");
    listItems.forEach((element) => {
        if (!element.lastChild.firstChild.textContent.toLowerCase().includes(movieName)) {
            dropDownList.removeChild(element);
        }
    });
  
    if (movieName === "" && dropDownList.innerHTML !== "") {
        console.log(dropDownList);
        removeAllChildren(dropDownList);
        getMovies();
    }
});
