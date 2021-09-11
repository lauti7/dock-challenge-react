import React, { useEffect, useState } from 'react';
import useMovies from '../hooks/useMovies';
import MoviesLayout from '../components/MoviesLayout';
import SearchMovies from '../components/SearchMovies';
import { getPopularMovies } from '../services/moviesAPI';
import { Movie } from '../utils/interfaces';

const Home = (): JSX.Element => {
  const { movies, setMovies, requestStatus, setReqStatus } = useMovies();

  useEffect(() => {
    setReqStatus({
      ...requestStatus,
      loading: true,
    });
    getPopularMovies()
      .then((moviesResponse) => {
        setReqStatus({ ...requestStatus, loading: false });
        setMovies([...moviesResponse.movies]);
      })
      .catch((error) => {
        //determine if it is unexpected error or server error
        if (error.movies && error.error && error.message) {
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
      });
  }, []);

  return (
    <>
      <SearchMovies />
      {requestStatus.loading ? (
        <div className="flex flex-col justify-center h-screen items-center">
          <p className="animate-spin text-xl">loading...</p>
        </div>
      ) : (
        <MoviesLayout movies={movies} title="Popular Movies" />
      )}
    </>
  );
};

export default Home;
