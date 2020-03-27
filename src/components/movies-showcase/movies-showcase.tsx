import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';

export const MoviesShowcase: React.FC = () => {
  const { state } = useAppState();
  const { loading, errorMessage, movies } = state;

  return (
    <div>
      {loading && !errorMessage ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        movies.map((movie, index) => {
          return <MovieItem key={index} movie={movie} />;
        })
      )}
    </div>
  );
};
