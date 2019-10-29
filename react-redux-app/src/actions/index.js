import axios from 'axios';

export const START = 'FETCH_SPECIES_START';
export const SUCCESS = 'FETCH_SPECIES_SUCCESS';
export const ERROR = 'FETCH_SPECIES_ERROR';

// 3 action types for fetching, success, and error

export function fetchSpecies() {
  // thunk function
  return dispatch => {
    dispatch({ type: START});

    axios
      .get(`https://swapi.co/api/species/`)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        });
      });
  };
};