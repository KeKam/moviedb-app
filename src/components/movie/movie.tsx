import React from 'react';

export interface MovieProps {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img src={movie.Poster} alt='Poster' />
      </div>
      <span>{movie.Year}</span>
    </div>
  );
};
