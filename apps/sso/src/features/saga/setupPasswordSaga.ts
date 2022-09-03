import { authApis } from '../../apis/authApis';
import { ResponseSetupPassword } from '@micro-architecture-coaching-cloud/models';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { put, takeLatest } from 'redux-saga/effects';
import { setupPasswordActions } from '../slices/setupPasswordSlice';

function* setupPassword({ payload }: PayloadAction<any>) {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const response: ResponseSetupPassword = yield authApis.setupPassword({
            password: payload?.formValues?.password,
        });
        if (response?.attributes) {
            yield put(setupPasswordActions.confirmPasswordSuccess(response));
            payload?.navigate('/update-profile');
            toast.success(`Setup password successful`);
        } else {
            toast.error(`${response?.message}`);
        }
    } catch (error: any) {
        yield put(setupPasswordActions.confirmPasswordFailed(error));
        toast.error(`${error?.message}`);
    }
}

export default function* setupPasswordSaga() {
    yield takeLatest(setupPasswordActions.confirmPassword, setupPassword);
}
