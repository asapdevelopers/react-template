import * as authActions from '../../constants/actions/authActions';

export const authorize = (username, password) => ({ type: authActions.AUTH_REQUEST, payload: { username, password } });
export const logout = () => ({ type: authActions.AUTH_LOGOUT });