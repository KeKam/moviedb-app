import React from 'react';

import { useAppState } from '../../contexts/app.context';
import { MovieItem } from '../../components/movie-item/movie-item';
import { FavouritesPageStyles as S } from './favourites-page.styled';

export const FavouritesPage = () => {
  const { favourites } = useAppState();

  return (
    <S.Container>
      <S.Title>Favourites</S.Title>
      <S.Favourites>
        {favourites.map((favourite) => {
          return <MovieItem key={favourite.imdbID} movie={favourite} />;
        })}
      </S.Favourites>
    </S.Container>
  );
};
