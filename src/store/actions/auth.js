import * as authActions from '../../constants/actions/authActions';

export const authorize = (username, password) => ({ type: authActions.AUTH_REQUEST, payload: { username, password } });

export const register = (username, password, first_name, last_name) => ({ type: authActions.AUTH_REGISTER, payload: { username, password, first_name, last_name } });

export const logout = () => ({ type: authActions.AUTH_LOGOUT });