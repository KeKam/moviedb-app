import React from 'react';

import { setPage } from '../../actions/movie.actions';
import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../movie-item/movie-item';
import { MoviesShowcaseStyles as S } from './movies-showcase.styled';

export const MoviesShowcase = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const { errorMessage, movies, loading, page } = state;

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.Button
          disabled={page === 1 || loading}
          onClick={() => dispatch(setPage(page - 1))}
        >
          Previous
        </S.Button>
        <S.Button
          disabled={loading}
          onClick={() => dispatch(setPage(page + 1))}
        >
          Next
        </S.Button>
      </S.ButtonsContainer>

      {loading ? (
        <S.LoadingOverlay>
          <S.LoadingText>Loading</S.LoadingText>
        </S.LoadingOverlay>
      ) : null}

      {movies && !errorMessage ? (
        <S.Movies>
          {movies.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />;
          })}
        </S.Movies>
      ) : errorMessage && page > 0 ? (
        <S.Error>{errorMessage}</S.Error>
      ) : null}
    </S.Container>
  );
};
