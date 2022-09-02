import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { grey } from '@mui/material/colors';

const SocialBtn = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    width: 262,
    height: 42,
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: 'white',
    color: grey[800],
    border: '.0625rem solid #c1c1c1',
    '&:hover': {
        border: '.0625rem solid #c1c1c1',
        backgroundColor: grey[300],
    },
}));

export const SocialButton = ({ children, startIcon, ...props }: any) => {
    return (
        <SocialBtn variant="outlined" startIcon={startIcon} {...props}>
            {children}
        </SocialBtn>
    );
};
