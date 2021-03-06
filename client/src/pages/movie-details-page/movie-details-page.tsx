import React, { MouseEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState, useAppDispatch } from '../../contexts/app.context';
import { clearMovieDetails } from '../../actions/movie.actions';
import { Spinner } from '../../components/spinner/spinner';
import missingPoster from '../../images/missing-poster.png';
import { MovieDetailsPageStyles as S } from './movie-details-page.styled';

export const MovieDetailsPage = () => {
  const { movie, loading } = useAppState();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.goBack();
    dispatch(clearMovieDetails());
  };

  const handleOnError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = missingPoster;
  };

  return (
    <S.Container>
      <S.Button onClick={handleOnClick}>
        <S.Arrow>&#8592;</S.Arrow> Go back
      </S.Button>
      {movie && !loading ? (
        <>
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
        </>
      ) : (
        <Spinner />
      )}
    </S.Container>
  );
};
