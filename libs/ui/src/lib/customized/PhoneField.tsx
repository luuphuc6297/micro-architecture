import { FormControl } from '@mui/material';
import { styled } from '@mui/system';

import MuiPhoneNumber from 'material-ui-phone-number-2';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import { Error, TextFiledLabel } from '../ui';

export interface PhoneFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: any;
    htmlFor?: any;
}

const CustomPhoneFiled = styled(MuiPhoneNumber)({});

const CustomFormControl = styled(FormControl)({
    marginTop: 0,
});

export const PhoneFiled = ({ name, control, label, htmlFor }: PhoneFieldProps) => {
    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <TextFiledLabel htmlFor={htmlFor}>{label}</TextFiledLabel>
            <CustomFormControl error={invalid} variant="outlined" fullWidth margin="normal" size="small">
                <CustomPhoneFiled
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultCountry="vg"
                    variant="outlined"
                    size="small"
                />
                <Error error={true}>{error?.message}</Error>
            </CustomFormControl>
        </>
    );
};
