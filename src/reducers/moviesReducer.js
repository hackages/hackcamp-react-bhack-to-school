import {SET_MOVIES} from '../constants/actions';
export const initialState = [];

const reducer = {
  [SET_MOVIES]: (state, payload) => payload
};

export const moviesReducer = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
