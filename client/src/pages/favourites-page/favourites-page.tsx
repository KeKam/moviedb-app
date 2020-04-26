import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieItem } from '../../components/movie-item/movie-item';
import { FavouritesPageStyles as S } from './favourites-page.styled';

export const FavouritesPage = (): JSX.Element => {
  const { state } = useAppState();
  const { favourites, movie } = state;

  return (
    <S.Container>
      <S.Favourites>
        {favourites.map((favourite, index) => {
          return <MovieItem key={index} movie={favourite} />;
        })}
      </S.Favourites>
    </S.Container>
  );
};
