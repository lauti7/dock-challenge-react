import React from 'react';
import { Movie } from '../utils/interfaces';

const MovieInfo = ({ movie }: { movie: Movie }) => {
  return (
    <div className="p-3 mx-2 bg-gray-800 md:w-1/2 rounded-md shadow-lg">
      <p>
        <span className="text-indigo-500">Status: </span>
        {movie.status}
      </p>
      <p>
        <span className="text-indigo-500">Release date: </span>
        {movie.release_date}
      </p>
      <p>
        <span className="text-indigo-500">Overview: </span>
        {movie.overview}
      </p>
      <p>
        <span className="text-indigo-500">Genre: </span>
        {movie.genres && movie.genres[0].name}
      </p>
      <p>
        <span className="text-indigo-500">Duration: </span>
        {movie.genres && movie.runtime} mins
      </p>
      <p>
        <span className="text-indigo-500">Belongs to collection: </span>
        {movie.belongs_to_collection && movie.belongs_to_collection.name}
      </p>
      <p>
        <span className="text-indigo-500">Budget: </span>$
        {movie.budget && movie.budget}
      </p>
      <p>
        <span className="text-indigo-500">Revenue: </span>$
        {movie.budget && movie.revenue}
      </p>
    </div>
  );
};

export default MovieInfo;
