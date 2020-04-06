import React from 'react';

import { Movie } from '../../store/reducer';
import { fetchMovie, addToFavourites } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { MovieItemStyles as S } from './movie-item.styled';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { state, dispatch } = useAppState();
  const { imdbID, Poster } = movie;
  const { favourites } = state;

  return (
    <S.Container>
      <div onClick={() => fetchMovie(imdbID, dispatch)}>
        <S.Poster src={Poster} alt='Poster' />
      </div>
      <button onClick={() => addToFavourites(favourites, movie, dispatch)}>
        ADD TO FAVOURITES
      </button>
    </S.Container>
  );
};
