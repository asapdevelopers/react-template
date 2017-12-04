import { call, put, takeLatest } from 'redux-saga/effects';
import * as authActions from '../../constants/actions/authActions';
import { fetchJSON, handleError } from './utils';
import { api } from '../../configuration';

function* authorize({ payload: { username, password } }) {
    const options = {
        body: JSON.stringify({ email: username, password }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const { token, email, first_name, last_name } = yield call(fetchJSON, api.userauth.authenticate, options);
        yield put({ type: authActions.AUTH_REQUEST_SUCCESS, payload: { token, email, first_name, last_name } });
        localStorage.setItem('auth', JSON.stringify({ token, email, first_name, last_name }));
    } catch (error) {
        let message = handleError(error.status);
        yield put({ type: authActions.AUTH_REQUEST_FAILURE, payload: message });
        localStorage.removeItem('token');
    }
}

function* register({ payload: { username, password, first_name, last_name } }) {
    const options = {
        body: JSON.stringify({ email: username, password, first_name, last_name }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        yield call(fetchJSON, api.userauth.register, options);
        yield put({ type: authActions.AUTH_REGISTER_SUCCESS });
    } catch (error) {
        let message = handleError(error.status);
        yield put({ type: authActions.AUTH_REGISTER_FAILURE, payload: message });
        localStorage.removeItem('token');
    }
}

function* AuthSaga() {
    yield [
        takeLatest(authActions.AUTH_REQUEST, authorize),
        takeLatest(authActions.AUTH_REGISTER, register)
    ]
}

export default AuthSaga;