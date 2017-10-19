import axios from 'axios';
import {SET_MOVIES} from '../constants/actions';
import {SERVER_URL} from '../constants/config';

/**
 * @param movies: array of movies
 */
export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
});

/**
 * Return an action that takes dispatch as a parameter
 * Your function should get the movies from SERVER_URL/movies
 * then dispatch the setMovies action with the response from the backend
 */
export const fetchMovies = () => {
  return (dispatch, getState) => {
    axios
      .get(`${SERVER_URL}/movies`)
      .then(movie => movie.data)
      .then(movies => {
        dispatch(setMovies(movies));
      });
  };
};
