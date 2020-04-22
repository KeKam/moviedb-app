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
      {!movies ? (
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
