import React from 'react';

import { useAppState } from '../../hooks/useAppState';
import { MovieDetails } from '../../components/movie-details/movie-details';
import { SearchBar } from '../../components/search-bar/search-bar';
import { MoviesShowcase } from '../../components/movies-showcase/movies-showcase';

export const HomePage = (): JSX.Element => {
  const { state } = useAppState();
  const { movie } = state;

  return (
    <div>
      <SearchBar />
      <MoviesShowcase />
      {movie ? (
        <div>
          <MovieDetails />
        </div>
      ) : null}
    </div>
  );
};
