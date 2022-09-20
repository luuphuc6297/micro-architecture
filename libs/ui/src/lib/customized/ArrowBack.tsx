import { CLIENT_EVENT } from '@micro-architecture-coaching-cloud/utils';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

import { UniversalContext } from '@micro-architecture-coaching-cloud/common';

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
            const widgetEvent = new CustomEvent(CLIENT_EVENT.REDIRECT_UNIVERSAL, { isBack: true } as any);
            window.dispatchEvent(widgetEvent);
        }
    };

    return (
        <StyledBackIconBtn aria-label="menu" onClick={goBackEventTypes}>
            <ArrowBackIcon />
        </StyledBackIconBtn>
    );
};
