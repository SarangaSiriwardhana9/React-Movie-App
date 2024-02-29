import React from "react";  
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// Movie api key = e8db7598

const API_URL = 'http://www.omdbapi.com/?apikey=e8db7598'; 

const movie1 ={
    "Title": "The Matrix Reloaded",
    "Year": "2003",
    "imdbID": "tt0234215",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}


const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Matrix');
        
    }, []);
  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">

            <input type="text" 
            placeholder="Search for a movie..."
            value="Superman"
            onChange={(e) => {}}
            
            />
         </div>
            <img src={SearchIcon} 
            alt="Search" 
            onClick={() => {}}
            />
            <div className="container">
                <MovieCard movie1={movie1} />
        </div>
      
    </div>
  );
}

export default App;