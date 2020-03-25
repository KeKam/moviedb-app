import React from 'react';

import { Movie } from '../movie/movie';

export interface MoviesShowCaseProps {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
  errorMessage: null | string;
  loading: boolean;
}

export const MoviesShowcase: React.FC<MoviesShowCaseProps> = ({
  movies,
  errorMessage,
  loading
}) => {
  return (
    <div>
      {loading && !errorMessage ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        movies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })
      )}
      {}
    </div>
  );
};
