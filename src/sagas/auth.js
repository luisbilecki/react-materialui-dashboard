import {
  all, takeEvery, put, fork,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function* (/* { payload } */) {
    // const { username, password } = payload.userInfo;

    // TODO: add your login logic here!
    yield put({
      type: 'LOGIN_SUCCESS',
      accessToken: '<ACCESS TOKEN HERE>',
    });
  });
}

export function* logout() {
  yield takeEvery('LOGOUT', function* () {
    // Clear token info stored in local storage

    // Redirect to dashboard
    yield put(push('/'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(logout),
  ]);
}
