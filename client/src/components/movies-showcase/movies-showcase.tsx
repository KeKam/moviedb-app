import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';
import { Spinner } from '../spinner/spinner';
import { MoviesShowcaseStyles as S } from './movies-showcase.styled';

export const MoviesShowcase = (): JSX.Element => {
  const { state } = useAppState();
  const { errorMessage, movies, loading, page } = state;

  return (
    <S.Container>
      {movies && !errorMessage ? (
        <S.Movies>
          {movies.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />;
          })}
        </S.Movies>
      ) : errorMessage && page > 0 ? (
        <S.Error>{errorMessage}</S.Error>
      ) : loading && !movies ? (
        <Spinner />
      ) : null}
    </S.Container>
  );
};
