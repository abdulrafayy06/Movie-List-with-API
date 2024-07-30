import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./search.svg";


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const movie = {
        "Title": "The Amazing Spiderman 2 Webb Cut",
        "Year": "2021",
        "imdbID": "tt18351128",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
    }


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>Movies Land</h1>
            <div className="search">
            <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <h2>No movies found</h2>
                )}
        </div>
    );
}

export default App;