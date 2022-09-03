import { Login, ResponseUser, WorkSpaces } from '@micro-architecture-coaching-cloud/models';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authApis } from '../apis/authApis';
import { authActions } from '../features/slices/authSlice';
import { LoginPage } from '../pages';
import { useAppDispatch } from '../store/hooks';
// import { useStore } from 'shell/zustand';
import { USER_STATUS } from '@micro-architecture-coaching-cloud/utils';

const LoginContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialValues: Login = {
        email: '',
        password: '',
    } as Login;

    // const { storeUser, storeWorkSpace, storeWorkSpaces } = useStore();

    const handleLogin = async (formValues: Login) => {
        try {
            const { email, password } = formValues;
            const response: ResponseUser = await authApis.login({ email, password });

            const {
                token,
                payload: { id, workspaces, ...infoUser },
            } = response;

            if (token) {
                localStorage.setItem('access_token', response.token);
                // const user: CurrentUser = { id, attributes: { ...infoUser } };
                // user.attributes?.token = token;
                // storeUser(user);

                if (workspaces && workspaces.length > 0) {
                    const mappingWorkSpace = workspaces.map((item: WorkSpaces) => {
                        const { id, ...infoWorkSpace } = item;

                        return { id: '38647fbd-20a8-40ab-8292-b4828d636d29', attributes: { ...infoWorkSpace } };
                    });

                    // storeWorkSpace(first(mappingWorkSpace));

                    // storeWorkSpaces(mappingWorkSpace);
                }
                dispatch(authActions.loginSuccess(response));

                switch (response?.payload.status) {
                    case USER_STATUS.ACTIVE:
                        navigate('/home');
                        toast.success('Login successful');
                        break;
                    case USER_STATUS.NEWBIE:
                        navigate('/update-profile');
                        break;
                }
            }
        } catch (error: any) {
            if (error?.response?.status === 401) {
                dispatch(authActions.loginFailed('Email or password is incorrect'));
            } else {
                toast.error(error.message);
            }
        }
    };

    return <LoginPage initialValues={initialValues} onSubmit={handleLogin} />;
};

export default LoginContainer;
