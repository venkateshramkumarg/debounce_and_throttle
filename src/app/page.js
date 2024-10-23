"use client"

import React, { useState } from "react";
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function MovieSearch() {
  const [query, setQuery] = useState(""); 
  const [movies, setMovies] = useState([]); 
  const [error, setError] = useState(""); 


  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=34cccc56`)
      const data = await response.json();
      console.log(data);
      setMovies(data.Search || []);
    } catch (err) {
      setMovies([]);
      setError("Failed to fetch data. Please try again.");
    }
  };

  const debouncedFetchMovies = debounce(fetchMovies, 300); 

  const handleChange = (e) => {
    setQuery(e.target.value); 
    debouncedFetchMovies(e.target.value);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
        className="border px-2 py-1 rounded-md w-full"
      />
      
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="border-b py-2 flex items-center">
            <img src={movie.Poster} alt={movie.Title} className="w-12 h-16 object-cover mr-4" />
            <span>{movie.Title} ({movie.Year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
