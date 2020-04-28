import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Movie } from '../../store/reducer';
import {
  fetchMovie,
  addToFavourites,
  removeFromFavourites,
} from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { CustomButton } from '../custom-button/custom-button';
import { MovieItemStyles as S } from './movie-item.styled';

export interface MovieProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieProps): JSX.Element => {
  const { state, dispatch } = useAppState();
  const history = useHistory();
  const { imdbID, Poster, Title } = movie;
  const { favourites, currentUser } = state;

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchMovie(imdbID, dispatch);

    if (history.location.pathname === '/favourites') {
      history.push(`/favourites/details/${imdbID}`);
    } else {
      history.push(`/details/${imdbID}`);
    }
  };

  return (
    <S.Container>
      <div>
        <S.Poster src={Poster} alt={`Poster for the movie ${Title}`} />
      </div>
      <S.Title>{Title}</S.Title>
      {currentUser ? (
        <S.ButtonsContainer>
          {favourites.find((favourite) => favourite.imdbID === movie.imdbID) ? (
            <CustomButton
              removeFromFavourites
              onClick={() =>
                removeFromFavourites(favourites, movie, currentUser, dispatch)
              }
            >
              ★
            </CustomButton>
          ) : (
            <CustomButton
              addToFavourites
              onClick={() =>
                addToFavourites(favourites, movie, currentUser, dispatch)
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
