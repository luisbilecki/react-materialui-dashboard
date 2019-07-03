import {
  all, takeEvery, put, fork,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from '../actions/auth';

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* () {
    // Clear token info stored in local storage

    // Redirect to dashboard
    yield put(push('/'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(logout),
  ]);
}
