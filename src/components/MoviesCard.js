import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from './fav';
import axios from 'axios';
import { getReleaseDate } from './MovieInfo';


function MoviesCard({ movie }) {
  console.log('Movie data:', movie);
  const [isFavorite, setIsFavorite] = useState(false);
  const [genres, setGenres] = useState([]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list',
          {
            params: {
              api_key: '6a8aba6c223aa4c5c79fbc541531685e',
            },
          }
        );
        setGenres(res.data.genres);
      } catch (error) {
        console.error('Error when fetching genre:', error);
      }
    }

    fetchGenres();
  }, []);

  const getGenreNames = () => {
    return movie.genre_ids.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
  };

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            data-testid="movie-poster"
          />
          <div className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
            <HeartIcon />
          </div>
        </div>
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">{getReleaseDate(movie)}</p>
        <p className="movie-genres">{getGenreNames().join(', ')}</p>
      </Link>
    </div>
  );
}

export default MoviesCard;