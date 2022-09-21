import { FormControl } from '@mui/material';
import { styled } from '@mui/system';
import { Error } from './Error';
import { TextFiledLabel } from './TextFiledLabel';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import TimezoneSelect from 'react-timezone-select';

export interface TimeZoneFiledProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: any;
    htmlFor?: any;
    defaultValues?: any;
}

const CustomFormControl = styled(FormControl)({
    marginTop: 0,
});

export const TimeZoneField = ({ name, control, label, htmlFor, defaultValues }: TimeZoneFiledProps) => {
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
                <TimezoneSelect value={value || defaultValues} onChange={onChange} onBlur={onBlur} />
                <Error error={true}>{error?.message}</Error>
            </CustomFormControl>
        </>
    );
};
