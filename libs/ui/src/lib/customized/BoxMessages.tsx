import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import { useStore } from 'app/store';
import { AvatarConversation, ServerMessages, TimeDisplayedConversation } from '@micro-architecture-coaching-cloud/ui';
import parse from 'html-react-parser';
import { get, isEqual } from 'lodash';
import { Message, UserSliceState } from '@micro-architecture-coaching-cloud/models';
import moment from 'moment';
import React from 'react';

interface BoxMessageProps {
    children?: React.ReactNode;
    message: Message;
    lastMessage: any;
}

const StyledBoxMessage = styled(Box)<{ render?: boolean }>(({ theme, render }) => ({
    display: 'flex',
    marginBottom: 20,
    flexDirection: render ? 'row-reverse' : 'row',
    gap: '10px',
}));

const StyledName = styled(Typography)(({ theme }) => ({
    color: theme.palette['primary'].main,
    fontSize: 14,
    marginRight: 16,
    fontWeight: 700,
}));

const StyledMessageEntry = styled(Box)(({ theme }) => ({
    backgroundColor: grey[100],
    padding: 12,
    borderRadius: 10,
    height: 'auto',
    maxWidth: 280,
    textAlign: 'left',
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
    color: 'black',
    wordBreak: 'break-word',
    '& > blockquote': {},
    '& > p': {
        fontSize: 14,
        margin: 0,
        wordBreak: 'break-word',
        '& > img': {
            width: '100%',
            objectFit: 'contain',
        },
    },
}));

const StyledInfoSender = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: 8,
}));

export const StyledWrapperAvatar = styled(Box)(({ theme }) => ({
    width: '40px',
    height: '40px',
}));

export const BoxMessage = ({ message, lastMessage }: BoxMessageProps) => {
    const currentUser = useStore((state: UserSliceState | any) => state.user);

    const createdAtLastMessage = get(lastMessage, 'meta.createdAt', '');

    const {
        meta: { createdAt },
        attributes: { content = '', generator },
    } = message;

    const userIdMess = get(message, 'attributes.user._id', '');

    const userIdLastMess = get(lastMessage, 'attributes.user._id', '');

    const diff = moment(createdAt).diff(moment(createdAtLastMessage), 'minutes');

    const showImage = userIdMess !== userIdLastMess || (diff > 5 && diff < 1440);

    const { firstName = '', lastName = '' } = get(message, 'attributes.user', {});

    const name = `${firstName} ${lastName}`;

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <React.Fragment>
            {generator === 'User' ? (
                <StyledBoxMessage render={isEqual(message.attributes.user._id, currentUser.id)}>
                    <StyledWrapperAvatar>
                        {showImage && <AvatarConversation user={message.attributes.user} />}
                    </StyledWrapperAvatar>
                    <StyledMessageEntry>
                        <React.Fragment>
                            <StyledInfoSender>
                                <StyledName>{name}</StyledName>
                                <TimeDisplayedConversation time={createdAt} />
                            </StyledInfoSender>

                            <StyledContentBox>{parse(`${content}`)}</StyledContentBox>
                        </React.Fragment>
                    </StyledMessageEntry>
                </StyledBoxMessage>
            ) : (
                <ServerMessages id={`server-message-${userIdMess}`} content={content} />
            )}
        </React.Fragment>
    );
};
