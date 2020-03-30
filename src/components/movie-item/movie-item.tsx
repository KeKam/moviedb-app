import React from 'react';

import { Movie } from '../../store/reducer';
import { fetchMovie } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { dispatch } = useAppState();
  const { imdbID, Title, Poster, Year } = movie;

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    fetchMovie(imdbID, dispatch);
  };

  return (
    <div onClick={handleOnClick}>
      <h2>{Title}</h2>
      <div>
        <img src={Poster} alt='Poster' />
      </div>
      <span>{Year}</span>
    </div>
  );
};
