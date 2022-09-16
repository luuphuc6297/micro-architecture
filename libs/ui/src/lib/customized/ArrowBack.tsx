import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { CLIENT_EVENT } from 'utils';
import eb from 'utils/events';
import { UniversalContext } from '../..';

interface ArrowBackProps {
    eventTypeId?: string;
    onClick?: () => void;
}

export const StyledBackIconBtn = styled(IconButton)(({ theme }) => ({
    color: 'white',
    padding: 0,
    marginRight: 8,
    height: 40,
    width: 40,
}));

export const ArrowBack = ({ eventTypeId, onClick }: ArrowBackProps) => {
    const routes = React.useContext(UniversalContext);

    const goBackEventTypes = () => {
        if (routes.length > 1) {
            eb.emit(CLIENT_EVENT.REDIRECT_UNIVERSAL, { isBack: true });
        }
    };

    return (
        <StyledBackIconBtn aria-label="menu" onClick={goBackEventTypes}>
            <ArrowBackIcon />
        </StyledBackIconBtn>
    );
};
