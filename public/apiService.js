let apiKey = 'ad65f3f346cc7869630deac544b0f1f7';
let baseURL = 'https://api.themoviedb.org/3/';
let detailsURL = 'movie/{movie_id}';
let searchURL = 'search/';
let topRatedURL = 'movie/top_rated';
let searchResults = [];
let index = 0;

// Step 1
let section = document.querySelector('.movieSection');



let buildSearchURL = (searchQuery) => {
    
    return encodeURI(`${baseURL}${searchURL}movie?api_key=${apiKey}&query=${searchQuery}`);
   
} ;
//console.log(buildSearchURL('the room'));

// https://api.themoviedb.org/3/search/movie?api_key=ad65f3f346cc7869630deac544b0f1f7&query=the room

let getMoviesBySearchTerm = (searchTerm) => {
    // Step 2.
    let xhttp = new XMLHttpRequest();
    // Step 3.
    xhttp.open("GET", buildSearchURL(searchTerm));
    // Step 4.
    xhttp.responseType = 'json';
    xhttp.send();
    // Step 5.
    xhttp.onload = function () {
        const movieResult = xhttp.response;
        console.log(movieResult);
        showMovie(movieResult);
    }

    function showMovie(obj) {
        const movie = obj.results
        console.log(movie);
        for (let i = 0; i < movie.length; i++) {
            const article = document.createElement('article');
            const h2 = document.createElement('h2');
            //const img = document.createElement('img');
            const summary = document.createElement('p');
            const release = document.createElement('p');
            const rating = document.createElement('p');

            h2.textContent = movie[i].title;
            summary.textContent = `Summary: ${movie[i].overview}`;
            release.textContent = `Release Date: ${movie[i].release_date}`;
            rating.textContent = `Rating: ${movie[i].popularity }`

            article.appendChild(h2);
            article.appendChild(summary);
            article.appendChild(release);
            article.appendChild(rating);

            section.appendChild(article);
        }


        
    }




    // xhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    //    searchResults = JSON.parse(xhttp.responseText); 
    //    console.log(searchResults);    
    //    if (searchResults.results.length === 0) {
    //         displayNoResultsFound();
    //    } else {
    //         displayCurrentMovie(searchResults);
    //    }
    // }
    // };
    
    
};

// buildSearchURL('the rock');
// getMoviesBySearchTerm('the rock');

let goNext = () => {
    index++; 
    displayCurrentMovie();
};

// let displayCurrentMovie = () => {
//     let movieTitle = document.getElementById('movieTitle');     //
//     movieTitle.innerHTML = searchResults.results[index].title;
//     let releaseDate = document.getElementById('releaseDate');
//     releaseDate.innerHTML = searchResults.results[index].release_date; //innerHTML sets text on webset
// };

let search = () => {
    let movieSearch = document.getElementById('search');  //text box
    index = 0;
    getMoviesBySearchTerm(movieSearch.value);
}

// let displayNoResultsFound = () => {
//     let movieTitle = document.getElementById('movieTitle');
//     movieTitle.innerHTML = 'No results found.'; 
// }
// let getMoviesByDetails()
