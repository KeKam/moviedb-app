import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { removeFromFavourites } from '../../store/actions';

export const FavouritesPage: React.FC = () => {
  const { state, dispatch } = useAppState();
  const { favourites, currentUser } = state;

  return (
    <div>
      {favourites.map((favourite) => (
        <div key={favourite.imdbID}>
          <img
            key={favourite.imdbID}
            src={favourite.Poster}
            alt={`The movie ${favourite.Title}`}
          />
          <button
            onClick={() =>
              removeFromFavourites(favourites, favourite, currentUser, dispatch)
            }
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
};
