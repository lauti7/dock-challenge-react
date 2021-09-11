import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/moviesAPI';
import { Movie, RequestStatus } from '../utils/interfaces';

interface Options {
  page?: string;
  query?: string;
}

const useMovies = (): {
  movies: Movie[];
  setMovies: Function;
  requestStatus: RequestStatus;
  setReqStatus: Function;
} => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [requestStatus, setReqStatus] = useState<RequestStatus>({
    loading: false,
    error: false,
    message: '',
  });

  return { movies, setMovies, requestStatus, setReqStatus };
};

export default useMovies;
