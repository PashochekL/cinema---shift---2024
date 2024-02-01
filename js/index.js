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
        <div class="movie__cover-inner">
                    <img src="${movie.img}"
                    class="movie__cover" 
                    />
                    <div class="movie__category">
                        <div class="name__category"></div>
                        <div class="details__category">${movie.releaseDate}</div>
                    </div>
                </div>
                <div class="movie__info">
                    <div class="movie__title">${movie.name}</div>
                    <div class="movie__subtitle">${movie.originalName}</div>
                    <div class="rating" data-total-value="4">
                        <div class="rating__item" data-item-value="5">★</div>
                        <div class="rating__item" data-item-value="4">★</div>
                        <div class="rating__item" data-item-value="3">★</div>
                        <div class="rating__item" data-item-value="2">★</div>
                        <div class="rating__item" data-item-value="1">★</div>
                        </div>
                    <div class="movie__cinemaSerch">kinopoisk - ${movie.userRatings.kinopoisk}</div>
                    <a><button class="button__button">Подробнее</button></a>
                </div>
        `;
        moviesEl.appendChild(movieEl);
    })
}
