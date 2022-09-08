import { ActionTypes } from "../constants/action_types";
const initialState = {
  movie: [],
  dislikedMovies: [],
};
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movie: payload };
    case ActionTypes.SET_DISLIKEDMOVIES:
      return { ...state, dislikedMovies: payload };
    default:
      return state;
  }
};
