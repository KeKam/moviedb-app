import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';
import { MoviesShowcaseStyles as S } from './movies-showcase.styled';

export const MoviesShowcase: React.FC = () => {
  const { state } = useAppState();
  const { loading, errorMessage, movies } = state;

  return (
    <S.Container>
      {loading && !errorMessage ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <S.Movies>
          {movies.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />;
          })}
        </S.Movies>
      )}
    </S.Container>
  );
};
