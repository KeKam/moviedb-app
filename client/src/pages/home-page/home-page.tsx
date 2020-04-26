import React from 'react';

import { SearchBar } from '../../components/search-bar/search-bar';
import { MoviesShowcase } from '../../components/movies-showcase/movies-showcase';

export const HomePage = (): JSX.Element => {
  return (
    <div>
      <SearchBar />
      <MoviesShowcase />
    </div>
  );
};
