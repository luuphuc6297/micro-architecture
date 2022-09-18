import { ShortCutAttributesUser } from '@micro-architecture-coaching-cloud/models';
import { getShortName, stringToColor } from '@micro-architecture-coaching-cloud/utils';
import { Avatar, styled, Typography } from '@mui/material';
import React from 'react';

interface AvatarConversationProps {
    user: ShortCutAttributesUser;
}

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 40,
    height: 40,
}));

export const AvatarConversation = React.memo(({ user }: AvatarConversationProps) => {
    const { firstName = '', lastName = '', avatarUrl } = user || {};

    const firstCharacter = getShortName(firstName);
    const secondCharacter = getShortName(lastName);
    const displayName = firstCharacter + secondCharacter;
    const backgroundColorAvatar = stringToColor(`${firstCharacter}${secondCharacter}`);

    const renderAvatar = () => {
        if (!avatarUrl) {
            return (
                <StyledAvatar sx={{ bgcolor: backgroundColorAvatar }} alt={displayName}>
                    <Typography sx={{ fontWeight: 600 }}>{displayName}</Typography>
                </StyledAvatar>
            );
        } else {
            return <StyledAvatar alt={displayName} src={avatarUrl} />;
        }
    };

    return <React.Fragment>{renderAvatar()}</React.Fragment>;
});
