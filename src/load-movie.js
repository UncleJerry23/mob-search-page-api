export default function movieTemplate(movie) {
    const template = document.createElement('template');
    const year = movie.release_date.split('-');

    template.innerHTML = `
        <div class="movie">
            <h3>${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" alt="movie">
            <h4>${year[0]}</h4>
        </div>
    `;

    return template.content;
}

const movieContainer = document.getElementById('movie-container');

export function loadMovies(allMovies) {
    while(movieContainer.children.length > 0) {
        movieContainer.lastElementChild.remove();
    }


    allMovies.forEach(movie => {
        const dom = movieTemplate(movie);
        movieContainer.appendChild(dom);
    });
}