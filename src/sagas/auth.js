import {
  all, takeEvery, put, fork,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { setAccessToken, clearAccessToken } from '../helpers/utility';

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

export function* loginSuccess() {
  yield takeEvery('LOGIN_SUCCESS', function* (payload) {
    yield setAccessToken(payload.accessToken);

    yield put(push('/dashboard'));
  });
}
export function* logout() {
  yield takeEvery('LOGOUT', function* () {
    yield clearAccessToken();

    // Redirect to dashboard
    yield put(push('/'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(logout),
  ]);
}
