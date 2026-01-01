document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector('input[type="search"]');
    const label = document.querySelector("label");
    const searchBox = document.querySelector(".search-box");
    const dropDownList = document.querySelector(".dropdown-list")
    const searchWrapper = document.querySelector(".search-wrapper");
    const comboBox = document.querySelector(".combobox");

    let movieController;
    searchWrapper.addEventListener("click", () => {
        if (movieController) {
            movieController.abort();
        }
        const movie = searchBox.querySelector(".list-item");
        if (movie) {
            movie.remove();
        }
        search.classList.replace("display-none", "display-inline-block");
        search.focus();
        label.classList.replace("display-inline-block", "display-none");
        dropDownList.innerHTML = "";
        getMovies();
        dropDownList.classList.remove("display-none");
        dropDownList.classList.add("display-inline-block");
    });


    comboBox.addEventListener("focusout", () => {
        search.value = "";
        search.classList.replace("display-inline-block", "display-none");
        const hasMovie = searchBox.querySelector(".list-item");
        if (!hasMovie) {
            label.classList.replace("display-none", "display-inline-block");
        }
        dropDownList.innerHTML = "";
        dropDownList.classList.replace("display-inline-block", "display-none");
    })

    async function getMovies() {
        movieController = new AbortController();
        const signal = movieController.signal;
        const url = "/top-100-christmas-movies.json";
        try {
            const response = await fetch(url, { signal });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const movies = await response.json();
            populate(movies);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }

    }

    function checkImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }

    async function populate(movies) {
        for (const movie of movies) {
            const div1 = document.createElement("div");
            div1.classList.add("list-item");
            const div3 = document.createElement("div");
            const img = document.createElement("img");
            const h1 = document.createElement("h1");
            const span = document.createElement("span");
            const isValid = await checkImage(movie.Image);

            if (!isValid) {
                continue;
            }

            img.src = movie.Image;
            img.alt = movie["Image Alt"];
            h1.textContent = movie.Title.replace(/\d+\./, "");
            span.textContent = movie.Year;
            div3.appendChild(h1);
            div3.appendChild(span);
            div3.classList.add("movie-info");
            div1.appendChild(img);
            div1.appendChild(div3);
            div1.addEventListener("mousedown", (event) => {
                event.preventDefault();
                search.classList.add("display-none");
                search.classList.remove("display-inline-block");
                searchBox.appendChild(div1);

            }, { once: true });
            dropDownList.appendChild(div1);
        }
    }

    search.addEventListener("input", (event) => {
        let movieName = event.target.value.toLowerCase();

        let listItems = document.querySelectorAll(".dropdown-list > div");

        listItems.forEach((element) => {

            let title = element.textContent.toLowerCase();

            if (title.includes(movieName)) {
                element.style.display = "flex";
                element.style.borderBottom = "2px solid white";
                lastVisibleElement = element;
            } else {
                element.style.display = "none";
            }
        });

        if (lastVisibleElement) {
            lastVisibleElement.style.borderBottom = "none";
        }

    });
});
