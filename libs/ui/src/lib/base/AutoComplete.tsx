import { Autocomplete, Box, FormControl, FormHelperText, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Control, useController } from 'react-hook-form';

export interface SelectFieldProps {
    name: string;
    control: Control<any>;
    label?: string;
    disabled?: boolean;
    options: MemberOptionType[];
}

export interface MemberOptionType {
    id: string;
    name: string;
    avatar: any;
}

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
    marginBottom: 16,
}));

export const AutoCompleteFiled = ({ name, control, label, disabled, options }: SelectFieldProps) => {
    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <FormControl fullWidth variant="filled" margin="normal" size="small" disabled={disabled} error={invalid}>
            <StyledAutoComplete
                onBlur={onBlur}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                onChange={(_, data: MemberOptionType[]) => {
                    const selected: string[] = data.map((item: MemberOptionType) => item['id']);
                    onChange(selected);
                }}
                multiple
                size="small"
                value={value}
                id="tags-outlined"
                options={options}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                getOptionLabel={(option: MemberOptionType) => option.name}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                renderOption={(props, { name, avatar, id }: MemberOptionType) => (
                    <Box key={id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {avatar}
                        <Typography variant="body2">{name}</Typography>
                    </Box>
                )}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} label={label} variant="filled" />}
            />

            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    );
};
