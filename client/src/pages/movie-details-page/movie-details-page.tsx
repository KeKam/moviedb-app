import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../hooks/useAppState';
import { ActionTypes } from '../../store/types';
import { Spinner } from '../../components/spinner/spinner';
import missingPoster from '../../images/missing-poster.png';
import { MovieDetailsPageStyles as S } from './movie-details-page.styled';

export const MovieDetailsPage = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const history = useHistory();
  const { movie, loading } = state;

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.goBack();
    dispatch({ type: ActionTypes.CLEAR_MOVIE_DETAILS });
  };

  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = missingPoster;
  };

  return (
    <S.Container>
      <S.Button onClick={handleOnClick}>
        <S.Arrow>&#8592;</S.Arrow> Go back
      </S.Button>
      {movie && !loading ? (
        <S.DetailsContainer>
          <S.Poster
            src={movie.Poster}
            onError={handleOnError}
            alt={`The movie: ${movie.Title}`}
          />
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
      ) : (
        <Spinner />
      )}
    </S.Container>
  );
};
