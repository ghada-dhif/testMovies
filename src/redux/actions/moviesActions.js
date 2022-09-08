import { ActionTypes } from "../constants/action_types";
export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};
export const setDislikedMovies = (movies) => {
  return {
    type: ActionTypes.SET_DISLIKEDMOVIES,
    payload: movies,
  };
};
