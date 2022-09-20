import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
} from '@mui/material';
// import { useConversationStore } from 'app/conversation-store';
// import { ConversationSlice } from 'app/slices';
// import { useStore } from 'app/store';
import { get, truncate } from 'lodash';
import { ItemResponse, UserSliceState, WorkSpaceSliceState } from '@micro-architecture-coaching-cloud/models';
import { CLIENT_EVENT, extractContent, timeout } from '@micro-architecture-coaching-cloud/utils';
import { AvatarCustom } from './AvatarCustom';
import { StyledWrapperAvatar } from './BoxMessages';

interface IConversationItemProps {
    conversation: ItemResponse;
    index: number;
    handleListItemClick: (id: string) => void;
}

export const ConversationItem = ({ conversation, handleListItemClick }: IConversationItemProps) => {
    // const currentUser = useStore((state: UserSliceState | any) => state.user);
    // const deleteConversation = useConversationStore((state: ConversationSlice) => state.deleteConversation);
    // const workspace = useStore((state: WorkSpaceSliceState | any) => state.workspace);
    const [hidden, setHidden] = React.useState<boolean>(true);

    const { title = '', lastMessage, user } = get(conversation, 'attributes', {} as any);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // const idCurrentUser = currentUser.id;
    const dataUser = conversation.attributes.recentActivities;
    // const dataCurrentUser = dataUser.find((el: any) => el._id === idCurrentUser);

    // const avatarUrl = get(dataCurrentUser, 'avatarUrl', '');
    // const firstName = get(dataCurrentUser, 'firstName', '');
    // const lastName = get(dataCurrentUser, 'lastName', '');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = async () => {
        setOpen(true);
        handleCloseMenu();
        const el = document.getElementById('mess-universal');
        if (!el) return;
        const settings = el.querySelector('.MuiBox-root .conversations');
        if (!settings) return;
        await timeout(500);
        const dialogRemoveConversation: any = document.getElementById('dialog-remove-conversation');
        settings.appendChild(dialogRemoveConversation);
        const widgetEvent = new CustomEvent(CLIENT_EVENT.ON_OFF_MODAL, false as any);
        window.dispatchEvent(widgetEvent);
    };

    const handleClose = () => {
        setHidden(true);
        const el = document.getElementById('dialog-remove-conversation');
        if (!el) return;
        document.body.appendChild(el);
        setOpen(false);
    };

    const onArchiveCommunication = async () => {
        handleClose();
        // deleteConversation(workspace.id, conversation._id);
    };

    // const renderLastMessage = () => {
    //     if (!lastMessage) return;
    //     const { type = '', content = '' } = lastMessage;
    //     const messDetail = content.indexOf('wrapper') !== -1 ? 'Send a file' : extractContent(content);

    //     if (type === 'Server') {
    //         return truncate(extractContent(content), { length: 40 });
    //     } else {
    //         if (user._id !== currentUser.id) {
    //             return `${truncate(`${user.firstName}: ${messDetail}`, { length: 40 })}`;
    //         } else {
    //             return `${truncate(`You: ${messDetail}`, { length: 40 })}`;
    //         }
    //     }
    // };

    const loadModal = (value: any) => {
        setHidden(value);
    };

    React.useEffect(() => {
        window.addEventListener(CLIENT_EVENT.ON_OFF_MODAL, loadModal);
        return () => {
            window.removeEventListener(CLIENT_EVENT.ON_OFF_MODAL, loadModal);
        };
    });

    return (
        <React.Fragment>
            <ListItem button onClick={(event) => handleListItemClick(conversation._id)}>
                <ListItemAvatar>
                    <StyledWrapperAvatar>
                        {/* <AvatarCustom {...{ firstName, lastName, avatarUrl }} /> */}
                    </StyledWrapperAvatar>
                </ListItemAvatar>
                {/* <ListItemText primary={truncate(title, { length: 20 })} secondary={renderLastMessage()} /> */}
                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="more"
                        aria-controls="delete-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem onClick={handleClickOpen} className="remove-conversation">
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    Remove conversation
                </MenuItem>
            </Menu>

            {/* Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={`${hidden ? 'd-none' : 'd-block'}`}
                id="dialog-remove-conversation"
            >
                <DialogTitle id="alert-dialog-title">{'Remove conversation'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to remove this conversation? It cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onArchiveCommunication} variant="contained" color="primary" autoFocus>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
