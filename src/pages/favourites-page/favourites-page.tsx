import React from 'react';

import { useAppState } from '../../hooks/useAppState';

export const FavouritesPage: React.FC = () => {
  const { state } = useAppState();
  const { favourites } = state;

  return (
    <div>
      <div>Test</div>
      {favourites.map((favourite) => (
        <img
          key={favourite.imdbID}
          src={favourite.Poster}
          alt={`The movie ${favourite.Title}`}
        />
      ))}
    </div>
  );
};
