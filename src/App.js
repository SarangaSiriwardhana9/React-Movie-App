import React from "react";  
import { useEffect } from "react";
// Movie api key = e8db7598

const API_URL = 'http://www.omdbapi.com/?apikey=e8db7598'; 

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
    <div>
      <h1>Movie App</h1>
    </div>
  );
}

export default App;