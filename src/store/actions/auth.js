import * as authActions from '../../constants/actions/authActions';

export const authorize = (username, password) => ({ type: authActions.AUTH_REQUEST, username, password });