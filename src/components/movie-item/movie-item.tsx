import React from 'react';

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

export const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { state, dispatch } = useAppState();
  const { imdbID, Poster, Title } = movie;
  const { favourites, currentUser } = state;

  return (
    <S.Container>
      <div>
        <S.Poster src={Poster} alt={`Poster for the movie ${Title}`} />
        <h2>{Title}</h2>
      </div>
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

        <CustomButton onClick={() => fetchMovie(imdbID, dispatch)}>
          Movie Details
        </CustomButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};
