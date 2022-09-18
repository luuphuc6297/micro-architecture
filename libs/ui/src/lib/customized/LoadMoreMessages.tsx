import { AttributesUser, Message, UserSliceState } from '@micro-architecture-coaching-cloud/models';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
// import { useConversationStore } from 'app/conversation-store';
// import { ConversationSlice, MessageSlice, TypingSlice } from 'app/slices';
// import { useStore } from 'app/store';
import { chain, isEqual, keys, orderBy } from 'lodash';
import moment from 'moment';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BoxMessages } from './BoxMessages';
import { DateMessages } from './DataMessages';
import { TypingChat } from './TypingChat';

interface LoadMoreMessagesProps {
    loadMessages: () => void;
}

const StyledBoxLoadMore = styled(Box)(({ theme }) => ({
    height: 'calc(92vh - 64px - 64px - 16px - 16px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: 16,
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    marginTop: 16,
}));

export const LoadMoreMessages = ({ loadMessages }: LoadMoreMessagesProps) => {
    const [currentData, setCurrentData] = React.useState<Message[]>([]);
    const [oldData, setOldData] = React.useState<Message[]>([]);

    // const serverMessages = useConversationStore((state: ConversationSlice) => state.serverMessages);
    const messages = useConversationStore((state: MessageSlice) => state.messages);
    const typing = useConversationStore((state: TypingSlice) => state.typing);
    const currentUser = useStore((state: UserSliceState | any) => state.user);

    const setLoading = useConversationStore((state: ConversationSlice) => state.setLoading);

    const [more, setMore] = React.useState<boolean>(false);

    const elmContent: any = document.getElementById('scrollable-box');

    React.useEffect(() => {
        setLoading(false);
    }, []);

    React.useEffect(() => {
        const data = messages.data;
        setCurrentData(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages.data.length]);

    React.useEffect(() => {
        const count = messages.meta.count;

        if (!isEqual(currentData, oldData)) {
            if (currentData.length - oldData.length === 1) {
                elmContent.scrollTo({
                    top: elmContent.scrollHeight - elmContent.clientHeight,
                });
            }
            setOldData(currentData);
        } else {
            if (count !== 0 && count - currentData.length === 0 && more) {
                setMore(false);
            }
        }
    }, [currentData]);

    const renderMessageItem = () => {
        const groupByDate = chain(
            orderBy(
                currentData.map((i) => ({ ...i, createdAt: moment(i.meta.createdAt).format('YYYY-MM-DD') })),
                ['createdAt'],
                ['asc']
            )
        )
            .groupBy('createdAt')
            .value();

        return (
            <>
                {keys(groupByDate).map((date: string, index: number) => {
                    const messagesInDay = groupByDate[date].map((message: Message, index: number) => {
                        const lastMessage = index === groupByDate[date].length - 1 ? {} : groupByDate[date][index + 1];
                        return (
                            <Box key={message._id}>
                                <BoxMessages message={message} lastMessage={lastMessage} />
                            </Box>
                        );
                    });
                    return (
                        <Box key={`${date}${index}`}>
                            <DateMessages key={date} createdAtMessage={date} createdAtLastMessage={''} />
                            {messagesInDay}
                        </Box>
                    );
                })}
            </>
        );
    };

    return (
        <StyledBoxLoadMore id="scrollable-box">
            <InfiniteScroll
                dataLength={currentData.length}
                scrollableTarget="scrollable-box"
                next={loadMessages}
                hasMore={currentData.length < 30 ? false : more}
                loader={
                    <Box sx={{ textAlign: 'center' }}>
                        <StyledCircularProgress />
                    </Box>
                }
            >
                {renderMessageItem()}
                {typing.map((user: AttributesUser) => {
                    return user && user._id !== currentUser.id && <TypingChat user={user} />;
                })}
            </InfiniteScroll>
        </StyledBoxLoadMore>
    );
};
