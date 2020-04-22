import React, { MouseEvent } from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieDetailsStyles as S } from './movie-details.styled';
import { ActionTypes } from '../../store/types';

export const MovieDetails = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const { movie } = state;

  const handleOnClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    dispatch({ type: ActionTypes.TOGGLE_DETAILS_POPUP });
  };

  return (
    <S.Container onClick={handleOnClick}>
      {movie ? (
        <S.DetailsContainer>
          <S.Poster src={movie.Poster} alt={`The movie: ${movie.Title}`} />
          <S.Details>
            <S.Title>
              {movie.Title} ({movie.Year})
            </S.Title>
            <h4>Runtime: {movie.Runtime}</h4>
            <h4>Released: {movie.Released}</h4>
            <h4>Genre: {movie.Genre}</h4>
            <h4>Director: {movie.Director}</h4>
            <h4>Writers: {movie.Writer}</h4>
            <h4>Actors: {movie.Actors}</h4>
            <h4>Plot: {movie.Plot}</h4>
            <h4>Rating: {movie.imdbRating}</h4>
          </S.Details>
        </S.DetailsContainer>
      ) : null}
    </S.Container>
  );
};
