import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieDetailsPageStyles as S } from './movie-details-page.styled';

export const MovieDetailsPage = (): JSX.Element => {
  const { state } = useAppState();
  const { movie } = state;

  return (
    <S.Container>
      {movie ? (
        <div>
          <S.DetailsContainer>
            <S.Poster src={movie.Poster} alt={`The movie: ${movie.Title}`} />
            <S.Details>
              <S.Title>
                {movie.Title} ({movie.Year})
              </S.Title>
              <S.Text>Runtime: {movie.Runtime}</S.Text>
              <S.Text>Released: {movie.Released}</S.Text>
              <S.Text>Genre: {movie.Genre}</S.Text>
              <S.Text>Director: {movie.Director}</S.Text>
              <S.Text>Writers: {movie.Writer}</S.Text>
              <S.Text>Actors: {movie.Actors}</S.Text>
              <S.Text>Plot: {movie.Plot}</S.Text>
              <S.Text>Rating: {movie.imdbRating}</S.Text>
            </S.Details>
          </S.DetailsContainer>
        </div>
      ) : null}
    </S.Container>
  );
};
