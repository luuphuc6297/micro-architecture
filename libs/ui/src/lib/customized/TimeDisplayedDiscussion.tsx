import { ItemFormat } from '@micro-architecture-coaching-cloud/models';
import { formatDistance, formatTime } from '@micro-architecture-coaching-cloud/utils';
import { Tooltip, Typography } from '@mui/material';

interface ITimeDisplayedDiscussionProps {
    time: string;
}

const TimeDisplayedDiscussion = ({ time }: ITimeDisplayedDiscussionProps) => {
    const fullFormat: ItemFormat = formatTime(time);

    const { fullDate, fullTime } = fullFormat;

    const formatTiming = formatDistance(time);

    return (
        <Tooltip title={`${fullDate} at ${fullTime}`}>
            <Typography>{formatTiming}</Typography>
        </Tooltip>
    );
};

export default TimeDisplayedDiscussion;
