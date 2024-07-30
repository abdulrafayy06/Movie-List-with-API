import React, {useEffect} from "react";
import "./App.css";
import "./MovieCard.jsx";
import SearchIcon from "./search.svg";


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>Movies Land</h1>
            <div className="search">
                <input onChange={()=> {}} placeholder="Search for movies"/>
                <img 
                src= {SearchIcon} 
                alt="search"
                onClick={() => {}}
                />
            </div>
        </div>
    );
    }

export default App;