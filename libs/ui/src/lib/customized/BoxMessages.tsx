import { CurrentUser, LastMessage, Message } from '@micro-architecture-coaching-cloud/models';
import {
    getCreatedAtLastMessage,
    getFullName,
    getUserIdFormLastMessage,
    getUserIdFormMessage,
} from '@micro-architecture-coaching-cloud/utils';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import parse from 'html-react-parser';
import { isEqual } from 'lodash';
import moment from 'moment';
import React from 'react';
import { AvatarConversation } from './AvatarConversation';
import { ServerMessages } from './ServerMessages';
import { TimeDisplayedConversation } from './TimeDisplayedConversation';
interface BoxMessageProps {
    currentUser: CurrentUser;
    children?: React.ReactNode;
    message: Message;
    lastMessage: LastMessage;
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

export const BoxMessages = ({ currentUser, message, lastMessage }: BoxMessageProps) => {
    const createdAtLastMessage = getCreatedAtLastMessage(lastMessage);

    const {
        meta: { createdAt },
        attributes: { content = '', generator },
    } = message;

    const userIdMess = getUserIdFormMessage(message);

    const userIdLastMess = getUserIdFormLastMessage(lastMessage);

    const diff = moment(createdAt).diff(moment(createdAtLastMessage), 'minutes');

    const showImage = userIdMess !== userIdLastMess || (diff > 5 && diff < 1440);

    const name = getFullName(message);

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
