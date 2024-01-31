const URL_POPULAR = "https://shift-backend.onrender.com/cinema/today";

requestMovies(URL_POPULAR);

async function requestMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const respData = await resp.json();
    displayMovies(respData);
}

function displayMovies(data) {
    const moviesEl = document.querySelector(".movies");

    data.films.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie_cover-inner">
                    <img src="${movie.img}"
                        class="movie_cover" />
                </div>
        `;
        moviesEl.appendChild(movieEl);
    })
}