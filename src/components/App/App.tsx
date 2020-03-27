import React from 'react';

import { SearchBar } from '../search-bar/search-bar';
import { MoviesShowcase } from '../movies-showcase/movies-showcase';
import { AppStateProvider } from '../../contexts/app.context';

export const App = () => {
  return (
    <div>
      <AppStateProvider>
        <SearchBar />
        <MoviesShowcase />
      </AppStateProvider>
    </div>
  );
};
