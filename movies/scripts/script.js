const API_KEY = "e4710dd1a8d41bc97a816668b0b33341";
const BASE_URL = `https://api.themoviedb.org/3`;

const movies_container = document.getElementById("moviesContainer");

async function getData() {
    try {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX`;
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;
        console.log(movies);

        displayMovies(movies);
    } catch (error) {
        console.log("Error finding data: ", error);
    }
}

function displayMovies(movies) {
    for(movi in movies){
            console.log();
            //Create a container for the movie information
            const movieContainer = document.createElement("div")
            movieContainer.className = "movie-container";

            movies_container.appendChild(movieContainer);
            //The tittle of the movie
            const title = document.createElement("h2");
            title.textContent = movies[movi].original_title;

            //The image
            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w500${movies[movi].poster_path}`;
            image.alt = movies[movi].original_title;

            //Release Date
            const date = document.createElement("p");
            date.textContent = movies[movi].release_date;

            //Description
            const description = document.createElement("p");
            description.textContent = movies[movi].overview;


            //append the elements
            movieContainer.appendChild(title);
            movieContainer.appendChild(image);
            movieContainer.appendChild(date);
            movieContainer.appendChild(description);
        }
}

getData();