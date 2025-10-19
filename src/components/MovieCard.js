import React from 'react';
import { getImageUrl } from '../services/tmdbAPI';

const MovieCard = ({ movie }) => {
  const imageUrl = getImageUrl(movie.poster_path);
  
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={imageUrl} 
          alt={movie.title}
          onError={(e) => {
            e.target.src = '/placeholder-movie.jpg';
          }}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
        </p>
        <div className="movie-rating">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </div>
        <p className="movie-overview">
          {movie.overview 
            ? (movie.overview.length > 150 
                ? movie.overview.substring(0, 150) + '...' 
                : movie.overview)
            : 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
