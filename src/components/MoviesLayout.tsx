import React from 'react';
import { Movie } from '../utils/interfaces';
import MovieCard from './MovieCard';

const MoviesLayout = ({
  movies,
  title,
}: {
  movies: Movie[];
  title: string;
}): JSX.Element => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl">{movies.length > 0 && title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 grid-flow-row auto-rows-fr mt-2">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : null}
      </div>
    </div>
  );
};

export default MoviesLayout;
