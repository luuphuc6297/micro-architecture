import { AttributesUser } from '@micro-architecture-coaching-cloud/models';
import { getShortName, stringToColor } from '@micro-architecture-coaching-cloud/utils';
import { Avatar, styled, Typography } from '@mui/material';
import React from 'react';

export type AvatarConversationProps = Pick<AttributesUser, 'avatarUrl' | 'firstName' | 'lastName'>;

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const AvatarCustom = React.memo(({ firstName = '', lastName = '', avatarUrl }: AvatarConversationProps) => {

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
