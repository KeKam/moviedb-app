import React from 'react';

import { Movie } from '../../store/reducer';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img src={movie.Poster} alt='Poster' />
      </div>
      <span>{movie.Year}</span>
    </div>
  );
};
