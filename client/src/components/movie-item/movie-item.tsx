import React, { MouseEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Movie } from '../../reducers/reducer';
import { startFetchMovie } from '../../actions/movie.actions';
import {
  startAddToFavourites,
  startRemoveFromFavourites,
} from '../../actions/user.actions';
import { useAppState } from '../../hooks/useAppState';
import { CustomButton } from '../custom-button/custom-button';
import missingPoster from '../../images/missing-poster.png';
import { MovieItemStyles as S } from './movie-item.styled';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieProps): JSX.Element => {
  const { state, dispatch } = useAppState();
  const history = useHistory();
  const { imdbID, Poster, Title } = movie;
  const { favourites, currentUser } = state;

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    startFetchMovie(imdbID, dispatch);

    if (history.location.pathname === '/favourites') {
      history.push(`/favourites/details/${imdbID}`);
    } else {
      history.push(`/details/${imdbID}`);
    }
  };

  const handleOnError = (e: SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = missingPoster;
  };

  return (
    <S.Container>
      <S.Poster
        src={Poster}
        onError={handleOnError}
        alt={`Poster for the movie ${Title}`}
      />

      {currentUser ? (
        <S.ButtonsContainer>
          {favourites.find((favourite) => favourite.imdbID === movie.imdbID) ? (
            <CustomButton
              removeFromFavourites
              onClick={() =>
                startRemoveFromFavourites(
                  favourites,
                  movie,
                  currentUser,
                  dispatch
                )
              }
            >
              ★
            </CustomButton>
          ) : (
            <CustomButton
              addToFavourites
              onClick={() =>
                startAddToFavourites(favourites, movie, currentUser, dispatch)
              }
            >
              ☆
            </CustomButton>
          )}
          <CustomButton onClick={handleOnClick}>Details</CustomButton>
        </S.ButtonsContainer>
      ) : (
        <S.ButtonsContainer>
          <CustomButton onClick={handleOnClick}>Details</CustomButton>
        </S.ButtonsContainer>
      )}
    </S.Container>
  );
};
