import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../movieInfo.css';
import { Link, useLocation } from 'react-router-dom';

export function getReleaseDate(movie) {
  let releaseDate = '';
  if (movie && movie.release_date) {
    releaseDate = new Date(movie.release_date).toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return releaseDate;
}

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieInfo() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: '6a8aba6c223aa4c5c79fbc541531685e',
            },
          }
        );
        setMovie(res.data);
      } catch (error) {
        console.error('Error fetching movie info:', error);
      }
    }

    fetchMovieInfo();
  }, [id]);

  return (
    <div className="movie-info-container">
      <div className="nabar">
        <div className="logo"><h2>Geof is the best!!</h2></div>
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/movies/:id" className={location.pathname.includes('/movies/') ? 'active-link' : ''}>
          <i className="fas fa-film"></i> Movies
        </Link>
        <Link to="/tv-series">
          <i className="fas fa-tv"></i> TV Series
        </Link>
        <Link to="/upcoming">
          <i className="fas fa-calendar"></i> Upcoming
        </Link>
      </div>
      
      <div className='content'>
        {movie ? (
          <div>
            <div
              className="her-section"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              }}
            >
              <a
                href={`https://www.youtube.com/watch?v=${movie.trailer_key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-trailer-button"
                
              >
                <i className="fas fa-play fa-2x play"></i>
                Watch Trailer
              </a>
            </div>

            <h1 className="movie-title" data-testid="movie-title">{movie.title}</h1>
            <p className="movie-release-date" data-testid="movie-release-date">{getReleaseDate(movie)}</p>
            <p className="movie-runtime" data-testid="movie-runtime">{movie.runtime} minutes</p>
            <p className="movie-overview" data-testid="movie-overview">{movie.overview}</p>

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MovieInfo;