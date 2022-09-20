import { CLIENT_EVENT, customEvent } from '@micro-architecture-coaching-cloud/utils';
import { Box, Button, List, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
// import { useConversationStore } from 'app/conversation-store';
// import { ConversationSlice } from 'app/slices';
import { isNull, take } from 'lodash';
import React from 'react';
import { ListItemLazy } from './ListItemLazy';

import { ItemResponse } from '@micro-architecture-coaching-cloud/models';
import { ConversationItem } from './ConversationItem';
// import './style.scss';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: 16,
    margin: 16,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const StyledSeeAllBtn = styled(Button)(({ theme }) => ({
    background: 'transparent',
    width: 80,
    height: 32,
    textTransform: 'initial',
}));

const StyledStartConversationBtn = styled(Button)(({ theme }) => ({
    fontWeight: 600,
}));

export const ConversationsUI = () => {
    // const conversations = useConversationStore((state: ConversationSlice) => state.conversations);

    // const loading = useConversationStore((state: ConversationSlice) => state.loading);

    const goToConversation = (id: string) => {
        customEvent.emit(CLIENT_EVENT.ID_CONVERSATION, id);
        customEvent.emit(CLIENT_EVENT.REDIRECT_UNIVERSAL, { route: '/conversations' });
    };

    const createConversation = () => {
        customEvent.emit(CLIENT_EVENT.REDIRECT_UNIVERSAL, { route: '/create-conversation' });
    };

    // const elmItem = take(conversations.data, 2).map((conversation: ItemResponse, index: number) => {
    //     return (
    //         <React.Fragment key={index}>
    //             {!isNull(conversation) && (
    //                 <ConversationItem
    //                     key={index}
    //                     index={index}
    //                     conversation={conversation}
    //                     handleListItemClick={goToConversation}
    //                 />
    //             )}
    //         </React.Fragment>
    //     );
    // });

    const loadingItem = [1, 2].map((item: number) => {
        return <ListItemLazy key={item} />;
    });

    return (
        <StyledPaper className="conversations">
            <StyledBox>
                <Typography variant="subtitle2">RECENT CONVERSATIONS</Typography>
                <StyledSeeAllBtn color="primary">See all</StyledSeeAllBtn>
            </StyledBox>
            <List component="nav" aria-label="communication">
                {/* {!loading ? elmItem : loadingItem} */}
            </List>
            <StyledStartConversationBtn variant="outlined" onClick={createConversation} color="primary">
                Start conversation
            </StyledStartConversationBtn>
        </StyledPaper>
    );
};
