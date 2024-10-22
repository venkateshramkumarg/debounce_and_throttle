"use client"

import React, { useState } from "react";

function throttle(func,delay)
{
    let shouldWait=false;
    return(...args)=>{
        if(shouldWait)
        {
            return;
        }
        func(...args);
        shouldWait=true;
        setTimeout(()=>{
            shouldWait=false;
        },delay)
    }
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
    }

    const throttledFetchMovies = throttle(fetchMovies, 500);

    const handleChange=(e)=>{
        setQuery(e.target.value);
        throttledFetchMovies(e.target.value);
    }

    return(
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search movies..."
                className="border px-2 py-1 rounded-md w-80"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ul className="mt-4">
                {movies.map((movie) => (
                    <li key={movie.imdbID} className="border-b py-2">
                        <img src={movie.Poster} alt={movie.Title} className="w-12 inline-block mr-4" />
                        <span>{movie.Title} ({movie.Year})</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieSearch;