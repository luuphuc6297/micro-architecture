import {
  getDurationMessage,
  getTimeLastMess,
  getTimeMess,
  renderTextInMessage
} from '@micro-architecture-coaching-cloud/utils';
import { Divider } from '@mui/material';
import React from 'react';

interface IDateMessageProps {
    createdAtMessage: string;
    createdAtLastMessage: string;
}

export const DateMessages = ({ createdAtMessage, createdAtLastMessage }: IDateMessageProps) => {
    const timeMess = getTimeMess(createdAtMessage);
    const timeLastMess = getTimeLastMess(createdAtLastMessage);
    const durationMessage = getDurationMessage(createdAtMessage);

    const renderText = renderTextInMessage(durationMessage, createdAtMessage);
    return <React.Fragment>{timeMess !== timeLastMess && <Divider>{renderText}</Divider>}</React.Fragment>;
};
