async function showMovies(){
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let json = await response.json();
    let movies = document.getElementById("movies-section");

    for(i in json){
        let movie = json[i];
        movies.append(getMovie(movie));
    }
}

function getMovie(movie){
    let movieSection = document.createElement("div");
    movieSection.classList.add("movie");

    //Picture
    let imgElem = document.createElement("img");
    let imageLink = "https://portiaportia.github.io/csce242/json/";
    imgElem.src= imageLink + movie.img;
    movieSection.append(imgElem);

    //Title
    let title = document.createElement("h3");
    title.innerText = movie.title;
    movieSection.append(title);

    //Director
    let director = document.createElement("p");
    let directorStr = document.createElement("h4")
    directorStr.innerText = "Director: ";
    movieSection.append(directorStr);
    director.innerText =  movie.director;
    movieSection.append(director);
    let newline = document.createElement("br");
    movieSection.append(newline);

    //Actors
    let actors = document.createElement("p");
    let actorsStr = document.createElement("h4")
    actorsStr.innerText = "Actors: ";
    movieSection.append(actorsStr);
    actors.innerText = movie.actors;
    movieSection.append(actors);
    let newline1 = document.createElement("br");
    movieSection.append(newline1);

    //Year Released
    let year = document.createElement("p");
    let yearStr = document.createElement("h4")
    yearStr.innerText = "Year Released: ";
    movieSection.append(yearStr);
    year.innerText = movie.year;
    movieSection.append(year);
    let newline2 = document.createElement("br");
    movieSection.append(newline2);

    //Genres
    let genres = document.createElement("p");
    let genresStr = document.createElement("h4")
    genresStr.innerText = "Genres: ";
    movieSection.append(genresStr);
    genres.innerText = movie.genres;
    movieSection.append(genres);
    let newline3 = document.createElement("br");
    movieSection.append(newline3);

    //Description
    let description = document.createElement("p");
    description.innerText = movie.description;
    movieSection.append(description);

    return movieSection;
}

window.onload = function(){
    this.showMovies();
}