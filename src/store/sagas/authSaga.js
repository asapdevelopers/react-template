import { call, put, takeLatest } from 'redux-saga/effects';
import * as authActions from '../../constants/actions/authActions';
import { fetchJSON } from './utils';
import { api } from '../../configuration';

function* authorize({ payload: { username, password } }) {
    const options = {
        body: JSON.stringify({ email: username, password }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const { token } = yield call(fetchJSON, api.userauth.authenticate, options);
        yield put({ type: authActions.AUTH_SUCCESS, payload: token });
        localStorage.setItem('token', token);
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            case 403:
                message = 'Invalid credentials';
                break;
            default:
                message = 'Something went wrong';
        }
        yield put({ type: authActions.AUTH_FAILURE, payload: message });
        localStorage.removeItem('token');
    }
}

function* AuthSaga() {
    yield takeLatest(authActions.AUTH_REQUEST, authorize);
}

export default AuthSaga;