import React from 'react';

import { useAppState } from '../../hooks/useAppState';

export const MovieDetails: React.FC = () => {
  const { state } = useAppState();
  const { movie } = state;

  return (
    <div>
      {movie ? (
        <div>
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <h4>Runtime: {movie.Runtime}</h4>
          <h4>Released: {movie.Released}</h4>
          <h4>Genre: {movie.Genre}</h4>
          <h4>Director: {movie.Director}</h4>
          <h4>Writers: {movie.Writer}</h4>
          <h4>Actors: {movie.Actors}</h4>
          <h4>Plot: {movie.Plot}</h4>
          <h4>Rating: {movie.imdbRating}</h4>
        </div>
      ) : (
        <h2>No movie</h2>
      )}
    </div>
  );
};
