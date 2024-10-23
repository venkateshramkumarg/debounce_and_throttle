"use client"

import React, { useState } from "react";

function throttle(func, delay) {
    let shouldWait = false;
    return (...args) => {
        if (shouldWait) {
            return;
        }
        func(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
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
            const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=34cccc56`);
            const data = await response.json();
            console.log(data);
            setMovies(data.Search || []);
        } catch (err) {
            setMovies([]);
            setError("Failed to fetch data. Please try again.");
        }
    };

    const throttledFetchMovies = throttle(fetchMovies, 500);

    const handleChange = (e) => {
        setQuery(e.target.value);
        throttledFetchMovies(e.target.value);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className=" text-center text-2xl  mb-4 font-bold text-red-300">Search for your Movies...</h1>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search movies..."
                className="border px-4 py-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ul className="mt-4 space-y-4">
                {movies.map((movie) => (
                    <li key={movie.imdbID} className="flex items-center space-x-4 border-b pb-4">
                        <img src={movie.Poster} alt={movie.Title} className="w-16 h-24 object-cover rounded-md shadow-sm" />
                        <div>
                            <h3 className="text-lg font-semibold">{movie.Title}</h3>
                            <p className="text-gray-500">{movie.Year}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieSearch;