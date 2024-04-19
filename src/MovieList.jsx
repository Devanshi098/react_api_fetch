import React, { useState, useEffect } from 'react';
import './MovieList.css'; // Import CSS file for styling

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=e0d6bb05c55d0bb1f1f7e4e3bde00353&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <h1>BHUMI</h1>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div className="movie-card" key=
          {movie.id}>
            {movie.poster_path && (
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
      
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
