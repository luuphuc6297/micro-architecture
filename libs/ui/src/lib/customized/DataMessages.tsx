import { Divider } from '@mui/material';
import moment from 'moment';
import React from 'react';

interface IDateMessageProps {
    createdAtMessage: string;
    createdAtLastMessage: string;
}

export const DateMessage = ({ createdAtMessage, createdAtLastMessage }: IDateMessageProps) => {
    const timeMess = moment(createdAtMessage).format('DD MM YYYY');
    const timeLastMess = createdAtLastMessage ? moment(createdAtLastMessage).format('DD MM YYYY') : '';
    const durationMessage = moment(createdAtMessage).fromNow();

    const renderTextInMessage = () => {
        if (
            durationMessage.indexOf('hour') !== -1 ||
            durationMessage.indexOf('minute') !== -1 ||
            durationMessage.indexOf('second') !== -1
        ) {
            return 'Today';
        } else if (durationMessage === 'a day ago') {
            return 'Yesterday';
        } else {
            return moment(createdAtMessage).format('DD MMM YYYY');
        }
    };

    return <React.Fragment>{timeMess !== timeLastMess && <Divider>{renderTextInMessage()}</Divider>}</React.Fragment>;
};
