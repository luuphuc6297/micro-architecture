import { CurrentUser, Login, ResponseUser, WorkSpace, WorkSpaces } from '@micro-architecture-coaching-cloud/models';
import { CLIENT_EVENT, USER_STATUS } from '@micro-architecture-coaching-cloud/utils';
import { first } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authApis } from '../apis/authApis';
import { authActions } from '../features/slices/authSlice';
import { LoginPage } from '../pages';
import { useAppDispatch } from '../store/hooks';

const LoginContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialValues: Login = {
        email: '',
        password: '',
    } as Login;

    const handleLogin = async (formValues: Login) => {
        try {
            const { email, password } = formValues;
            const response: ResponseUser = await authApis.login({ email, password });

            const {
                token,
                payload: { id, workspaces, ...infoUser },
            } = response;

            if (token) {
                let mappingWorkSpace: WorkSpace[] = [];
                localStorage.setItem('access_token', response.token);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                const user: CurrentUser = { id, attributes: { ...infoUser } };
                user.attributes.token = token;
                // storeUser(user);

                if (workspaces && workspaces.length > 0) {
                    mappingWorkSpace = workspaces.map((item: WorkSpaces) => {
                        const { id, ...infoWorkSpace } = item;

                        return { id: '38647fbd-20a8-40ab-8292-b4828d636d29', attributes: { ...infoWorkSpace } };
                    }) as any;

                    // storeWorkSpace(first(mappingWorkSpace));

                    // storeWorkSpaces(mappingWorkSpace);
                }

                const widgetEvent = new CustomEvent(CLIENT_EVENT.SYNC_DATA, {
                    user,
                    workspace: first(mappingWorkSpace),
                    workspaces: mappingWorkSpace,
                } as any);

                window.dispatchEvent(widgetEvent);

                dispatch(authActions.loginSuccess(response));

                switch (response?.payload.status) {
                    case USER_STATUS.ACTIVE:
                        navigate('/workspace');
                        toast.success('Login successful');
                        break;
                    case USER_STATUS.NEWBIE:
                        navigate('/sso/update-profile');
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
