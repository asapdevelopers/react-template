import { call, put, takeLatest } from "redux-saga/effects";
import * as githubActions from "../../constants/actions/githubActions";
import { fetchJSON, handleError } from "./utils";
import { configuration } from "../../configuration";

function* list() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  try {
    const githubList = yield call(
      fetchJSON,
      configuration.api.github.list,
      options
    );
    yield put({
      type: githubActions.GITHUB_GET_LIST_SUCCESS,
      payload: githubList
    });
  } catch (error) {
    let message = handleError(error.status);
    yield put({
      type: githubActions.GITHUB_GET_LIST_FAILURE,
      payload: message
    });
  }
}

function* GithubSaga() {
  yield takeLatest(githubActions.GITHUB_GET_LIST, list);
}

export default GithubSaga;
