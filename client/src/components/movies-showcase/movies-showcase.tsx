import React from 'react';

import { setPage } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';
import { Spinner } from '../spinner/spinner';
import { MoviesShowcaseStyles as S } from './movies-showcase.styled';

export const MoviesShowcase = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const { errorMessage, movies, loading, page } = state;

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.Button
          disabled={page === 0 || page === 1 || loading}
          onClick={() => setPage(page, 'previous', dispatch)}
        >
          Previous
        </S.Button>
        <S.Button
          disabled={page === 0 || loading}
          onClick={() => setPage(page, 'next', dispatch)}
        >
          Next
        </S.Button>
      </S.ButtonsContainer>
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
