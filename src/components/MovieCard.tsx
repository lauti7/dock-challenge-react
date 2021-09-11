import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../utils/interfaces';

const MovieCard = ({ movie }: { movie: Movie }): JSX.Element => {
  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-md p-2 w-3/4 mx-auto md:w-full md:mx-none">
      <div className="w-full rounded-md bg-white bg-opacity-10 flex flex-col justify-center items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="object-scale-down md:h-3/4 md:w-full"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="">
          {movie.title.length >= 34
            ? `${movie.title.slice(1, 20)}...`
            : movie.title}
        </p>
        <p className="p-1 rounded bg-indigo-500 bg-opacity-50 text-indigo-200 font-bold">
          {movie.vote_average}
        </p>
      </div>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
      <div className="flex items-center justify-between w-full mt-2">
        <Link
          to={`/dock-challenge-react/movie/${movie.id}`}
          className="underline text-sm"
        >
          Go to
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
