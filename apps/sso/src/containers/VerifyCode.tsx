import { CustomizedSnackbar, Notify } from '@micro-architecture-coaching-cloud/ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authApis } from '../apis/authApis';
import { selectCurrentUser } from '../features/slices/verifyEmailSlice';
import { VerifyCodePage } from '../pages';
import { useAppSelector } from '../store/hooks';

const VerifyCodeContainer = () => {
    const [notify, setNotify] = React.useState<Notify>({
        open: false,
        severity: 'success',
        message: '',
    });

    const currentUser = useAppSelector(selectCurrentUser);
    const navigate = useNavigate();

    const onResendEmail = async () => {
        try {
            if (currentUser?.attributes) {
                await authApis.sendEmail({ email: currentUser.attributes.email });
                setNotify({
                    open: true,
                    message: 'We have resend code to your email',
                });
            }
        } catch (error) {
            setNotify({
                open: true,
                severity: 'error',
                message: 'We have resend code to your email',
            });
        }
    };

    React.useEffect(() => {
        if (!currentUser) {
            navigate('/register');
        }
    }, [currentUser, navigate]);

    return (
        <>
            <VerifyCodePage currentUser={currentUser} onResendEmail={onResendEmail} />
            <CustomizedSnackbar notify={notify} setNotify={setNotify} />
        </>
    );
};

export default VerifyCodeContainer;
