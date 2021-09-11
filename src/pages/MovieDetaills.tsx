import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import MovieInfo from '../components/MovieInfo';
import useMovies from '../hooks/useMovies';
import { getMovieDetails } from '../services/moviesAPI';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { movies, setMovies, requestStatus, setReqStatus } = useMovies();

  useEffect(() => {
    setReqStatus({
      ...requestStatus,
      loading: true,
    });
    getMovieDetails(id)
      .then((movieResponse) => {
        setMovies(movieResponse.movies);
      })
      .catch((error) => {
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
      <div className="mt-2">
        <button
          className="text-sm md:text-base bg-indigo-400 rounded-md mx-1 p-2 w-2/6"
          onClick={() => history.goBack()}
        >
          {`< Go Back`}
        </button>
      </div>
      {movies[0] !== undefined ? (
        <>
          <h1 className="mx-2 mt-4 text-4xl text-indigo-500">
            {movies[0].title}
          </h1>
          <div className="p-4 md: p-none mt-2 flex md:flex-row flex-col w-full md:items-start">
            <div className="md:mx-2 md:mt-none m-2">
              <img
                className="rounded-md shadow-lg"
                src={`https://image.tmdb.org/t/p/w500/${movies[0].poster_path}`}
                alt=""
              />
            </div>
            <MovieInfo movie={movies[0]} />
          </div>
        </>
      ) : requestStatus.loading ? (
        <div className="flex flex-col justify-center h-screen items-center">
          <p className="animate-spin text-xl">loading...</p>
        </div>
      ) : null}
    </>
  );
};

export default MovieDetails;
