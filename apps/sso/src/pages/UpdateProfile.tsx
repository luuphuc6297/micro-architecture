import { yupResolver } from '@hookform/resolvers/yup';
import { Box, CircularProgress, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {
    CustomCaption,
    InputField,
    PhoneFiled,
    SmallCaption,
    SubmitButton,
    TextFiledLabel,
    TimeZoneField,
    UploadAvatar,
} from '@micro-architecture-coaching-cloud/ui';

import { UpdateProfile } from '@micro-architecture-coaching-cloud/models';
import { getToken } from '@micro-architecture-coaching-cloud/utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAttributes, selectPercent } from '../features/slices/updateProfileSlice';
import { SSO } from '../layouts';
import { UpdateProfileScheme } from './validation';

export interface UpdateProfileProps {
    initialValues?: UpdateProfile;
    onSubmit?: (formValues: UpdateProfile) => void;
}

const CustomSmallCaption = styled(SmallCaption)({
    marginTop: 16,
    marginBottom: 24,
    opacity: 0.5,
});

const CustomTextFiledLabel = styled(TextFiledLabel)({
    marginBottom: 8,
});

const UpdateProfilePage = ({ initialValues, onSubmit }: UpdateProfileProps) => {
    const percent = useSelector(selectPercent);
    const attributes = useSelector(selectAttributes);
    const [error, setError] = React.useState<string>('');
    const navigate = useNavigate();
    const token = getToken();

    React.useEffect(() => {
        if (!token) {
            navigate('/register');
        }
    }, [navigate, token]);

    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting },
    } = useForm<UpdateProfile>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(UpdateProfileScheme),
    });

    const handleFormSubmit = async (formValues: UpdateProfile) => {
        try {
            await onSubmit?.(formValues);
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <SSO title="Update your profile">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <CustomCaption>Tell us detail about you.</CustomCaption>

                <CustomTextFiledLabel htmlFor="avatar">Photo</CustomTextFiledLabel>

                <UploadAvatar avatarUrl={attributes?.avatarUrl} percent={percent} />

                <CustomSmallCaption>At least 128 x 128px PNG or JPG file.</CustomSmallCaption>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid>
                        <InputField name="firstName" label="First name" control={control} />
                    </Grid>
                    <Grid item>
                        <InputField name="lastName" label="Last name" control={control} />
                    </Grid>
                </Box>
                <Box>
                    <PhoneFiled name="phone" control={control} label="Phone number" htmlFor="phoneNumber" />
                </Box>
                <Box>
                    <TimeZoneField
                        name="timezone"
                        control={control}
                        label="Time zone"
                        htmlFor="timeZone"
                        defaultValues={initialValues}
                    />
                </Box>
                <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting && <CircularProgress size={16} color="primary" />}
                    &nbsp;Submit
                </SubmitButton>
            </form>
        </SSO>
    );
};

export default UpdateProfilePage;
