import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import * as authActions from '../../constants/actions/authActions';

export const authorize = (login, password) => ({
  type: authActions.AUTH_REQUEST,
  payload: { login, password }
});

const initialState = {
  token: localStorage.getItem('token'),
  error: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.AUTH_SUCCESS: {
      return { ...state, token: payload };
    }
    case authActions.AUTH_FAILURE: {
      return { ...state, error: payload }
    }
    default:
      return state;
  }
};

export default authReducer;