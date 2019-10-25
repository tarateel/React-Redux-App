import { START, SUCCESS, ERROR } from '../actions/index';
// imported action types

const initialState = {
  species: null,
  isLoading: false,
  error: null
};

export function speciesReducer(state = initialState, action) {
  switch(action.type) {
    case START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        species: [
          ...state.species,
          ...action.payload
        ]
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  };
};