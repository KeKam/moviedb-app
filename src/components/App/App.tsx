import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { SearchBar } from '../search-bar/search-bar';
import { MoviesShowcase } from '../movies-showcase/movies-showcase';
import { MovieDetails } from '../movie-details/movie-details';

export const App = () => {
  const { state } = useAppState();
  const { movie } = state;

  return (
    <div>
      {movie ? (
        <div>
          <MovieDetails />
          <SearchBar />
          <MoviesShowcase />
        </div>
      ) : (
        <div>
          <SearchBar />
          <MoviesShowcase />
        </div>
      )}
    </div>
  );
};
