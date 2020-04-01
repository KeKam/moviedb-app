import React from 'react';

import { Movie } from '../../store/reducer';
import { fetchMovie } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { MovieItemStyles as S } from './movie-item.styled';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { dispatch } = useAppState();
  const { imdbID, Poster } = movie;

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    fetchMovie(imdbID, dispatch);
  };

  return (
    <S.Container onClick={handleOnClick}>
      <S.Poster src={Poster} alt='Poster' />
    </S.Container>
  );
};
