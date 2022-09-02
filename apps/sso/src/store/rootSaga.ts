import { all } from 'redux-saga/effects';
import authSaga from '../features/saga/authSaga';
import setupPasswordSaga from '../features/saga/setupPasswordSaga';
import updateProfileSaga from '../features/saga/updateProfileSaga';
import verifyEmailSaga from '../features/saga/verifyEmailSaga';

export default function* rootSaga() {
    yield all([authSaga, setupPasswordSaga, updateProfileSaga, verifyEmailSaga]);
}
