import { useState } from 'react';

const useMovies = (): {
  movies: IMovie[];
  setMovies: Function;
  requestStatus: IRequestStatus;
  setReqStatus: Function;
} => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [requestStatus, setReqStatus] = useState<IRequestStatus>({
    loading: false,
    error: false,
    message: '',
  });

  return { movies, setMovies, requestStatus, setReqStatus };
};

export default useMovies;
