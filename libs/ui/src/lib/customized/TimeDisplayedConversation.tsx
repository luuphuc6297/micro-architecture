import { ItemFormat } from '@micro-architecture-coaching-cloud/models';
import { formatTime } from '@micro-architecture-coaching-cloud/utils';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface TimeDisplayedConversationProps {
    time: string;
}

const StyledDisplayTime = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    fontStyle: 'italic',
}));

export const TimeDisplayedConversation = ({ time }: TimeDisplayedConversationProps) => {
    const fullFormat: ItemFormat = formatTime(time);

    const { fullDate, fullTime } = fullFormat;

    return (
        <Tooltip title={`${fullDate} at ${fullTime}`}>
            <StyledDisplayTime>{fullTime}</StyledDisplayTime>
        </Tooltip>
    );
};
