import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';
import { MoviesShowcaseStyles as S } from './movies-showcase.styled';

export const MoviesShowcase = (): JSX.Element => {
  const { state } = useAppState();
  const { errorMessage, movies } = state;
  console.log('rendered');

  return (
    <S.Container>
      {movies.length >= 0 && !errorMessage ? (
        <S.Movies>
          {movies.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />;
          })}
        </S.Movies>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>Loading...</div>
      )}
    </S.Container>
  );
};
