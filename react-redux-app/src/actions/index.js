import axios from 'axios';

export const START = 'FETCH_PLANET_START';
export const SUCCESS = 'FETCH_PLANET_SUCCESS';
export const ERROR = 'FETCH_PLANET_ERROR';

// 3 action types for fetching, success, and error

export function fetchPlanets() {
  // thunk function
  return dispatch => {
    dispatch({ type: START});

    axios
      .get(`https://swapi.co/api/planets/`)
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