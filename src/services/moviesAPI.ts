import axios from 'axios';
import { MovieAPIResponse } from '../utils/interfaces';

const API_URL =
  process.env.API_URL || 'https://dock-challenge-express.herokuapp.com/api';

export const getPopularMovies = async (
  page: string = '1'
): Promise<MovieAPIResponse> => {
  try {
    const response = await axios.get(`${API_URL}/movies/popular?page=${page}`);
    const moviesResponse: MovieAPIResponse = response.data;

    return moviesResponse;
  } catch (error) {
    if (error.response && error.response.data && error.response.status >= 400) {
      return Promise.reject(error.response.data);
    } else {
      throw new Error('Unexpected error while fetching movies');
    }
  }
};

export const searchMovies = async (
  query: string,
  page: string = '1'
): Promise<MovieAPIResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/movies/search?query=${query}&page=${page}`
    );
    const moviesResponse: MovieAPIResponse = response.data;

    return moviesResponse;
  } catch (error) {
    if (error.response && error.response.data && error.response.status >= 400) {
      return Promise.reject(error.response.data);
    } else {
      throw new Error('Unexpected error while fetching movies');
    }
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/movies/details/${id}`);
    const moviesResponse: MovieAPIResponse = response.data;

    return moviesResponse;
  } catch (error) {
    if (error.response && error.response.data && error.response.status >= 400) {
      return Promise.reject(error.response.data);
    } else {
      throw new Error('Unexpected error while fetching movies');
    }
  }
};
