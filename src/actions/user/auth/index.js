import axios from 'axios';
import * as actionTypes from '../../actionTypes';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const createAdminUser = (userDetails) => (dispatch) => {
  dispatch({ type: actionTypes.ADDING_USER_STARTED });
  return axios.post(`${apiBaseUrl}/users/admin`, userDetails)
    .then((response) => {
      dispatch({ type: actionTypes.ADDING_USER_RESOLVED, payload: response.data });
    })
    .catch((err) => {
      const error = err.response ? err.response.data : err.message;
      dispatch({ type: actionTypes.ADDING_USER_REJECTED, payload: error });
    });
};
