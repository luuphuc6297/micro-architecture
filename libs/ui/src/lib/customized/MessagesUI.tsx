import { SenderArea } from './SenderArea';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
// import { useConversationStore } from 'app/conversation-store';

const StyledMessageContentDetail = styled(Box)(({ theme }) => ({
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
}));

export const MessagesUI = () => {
    // const conversation = useConversationStore((state: ConversationSlice) => state.conversation);
    // const workspace = useStore((state: WorkSpaceSliceState | any) => state.workspace);

    // const messages = useConversationStore((state: MessageSlice) => state.messages);
    // const getDataMessages = useConversationStore((state: MessageSlice) => state.getDataMessages);
    // const updatePageNumber = useConversationStore((state: MessageSlice) => state.updatePageNumber);

    // const pageNumber = messages.meta.skip / messages.meta.limit;

    // React.useEffect(() => {
    //     const elmContent: any = document.getElementById(`scrollable-box`);
    //     if (elmContent) elmContent.scrollTop = elmContent.scrollHeight;
    // }, [conversation._id]);

    // const loadMessages = () => {
    //     if (messages.data.length >= 30) {
    //         const newPageNumber = pageNumber + 1;
    //         const allPromise = Promise.all([
    //             getDataMessages(workspace.id, conversation._id, newPageNumber),
    //             updatePageNumber(conversation._id, newPageNumber),
    //         ]);
    //         (async () => {
    //             await allPromise;
    //         })();
    //     }
    // };

    return (
        <SenderArea />
        // <StyledMessageContentDetail id={`${conversation._id}`}>
        // <MessagesArea>
        // {/* <LoadMoreMessages loadMessages={loadMessages} /> */}
        // </MessagesArea>
        // {/* <SenderArea /> */}
        // </StyledMessageContentDetail>
    );
};
