import React, { useRef } from 'react';
import useMovies from '../hooks/useMovies';
import { searchMovies } from '../services/moviesAPI';
import MoviesLayout from './MoviesLayout';

const SearchMovies = (): JSX.Element => {
  const queryInputRef = useRef<HTMLInputElement>(null);
  const { movies, setMovies, requestStatus, setReqStatus } = useMovies();

  const handleSearch = async () => {
    if (queryInputRef.current) {
      setReqStatus({
        ...requestStatus,
        loading: true,
      });
      try {
        const moviesResponse = await searchMovies(queryInputRef.current.value);

        setMovies([...moviesResponse.movies]);
        setReqStatus({
          ...requestStatus,
          loading: false,
        });
      } catch (error) {
        if (error.movies && error.error && error.message) {
          setMovies([]);
          setReqStatus({
            loading: false,
            error: true,
            message: error.message,
          });
        } else {
          setReqStatus({
            loading: false,
            error: true,
            message: error.message,
          });
        }
      }
    }
  };

  return (
    <>
      <div className="md:w-1/2 md:mx-auto bg-indigo-500 rounded-md pb-2 px-1 mt-4">
        <h2 className="md:text-lg text-center text-black">Look for a movie</h2>
        <div className="md:w-3/4 mx-auto flex">
          <input
            type="text"
            className="text-sm md:text-base text-gray-800 w-full rounded-md p-2 mx-1 focus:ring-2 focus:ring-indigo-500"
            placeholder="enter a keyword"
            name="weburl"
            ref={queryInputRef}
          />
          <button
            className="text-sm md:text-base bg-gray-800 rounded-md mx-1 p-2 w-1/6"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {requestStatus.loading ? (
        <div className="flex flex-col justify-center h-screen items-center">
          <p className="animate-spin text-xl">loading...</p>
        </div>
      ) : (
        <MoviesLayout movies={movies} title="Search" />
      )}
    </>
  );
};

export default SearchMovies;
