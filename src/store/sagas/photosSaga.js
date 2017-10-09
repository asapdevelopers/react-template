import { call, put, takeLatest } from 'redux-saga/effects';
import * as photoActions from '../../constants/actions/photoActions';
import { fetchJSON, handleError } from './utils';
import { api } from '../../configuration';

function* list() {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const photoList = yield call(fetchJSON, api.photos.list, options);
        yield put({ type: photoActions.PHOTO_GET_LIST_SUCCESS, payload: photoList });
    } catch (error) {
        let message = handleError(error.status);
        yield put({ type: photoActions.PHOTO_GET_LIST_FAILURE, payload: message });
    }
}

function* PhotosSaga() {
    yield takeLatest(photoActions.PHOTO_GET_LIST, list);
}

export default PhotosSaga;