import {
    ClientToServerEvents,
    Conversation,
    CreateConversationForm,
    ServerToClientEvents,
    WorkSpaceSliceState,
} from '@micro-architecture-coaching-cloud/models';
import { LazyLoadContainer } from '@micro-architecture-coaching-cloud/ui';
import { isEmpty } from 'lodash';
import React from 'react';
import { useStore } from '../../features/cc-zustand-store';
import { ConversationSlice } from '../../features/slices/conversations';

// import { RTCSocketContext } from '@micro-architecture-coaching-cloud/common';
import { CLIENT_EVENT, getTokenAuth } from '@micro-architecture-coaching-cloud/utils';

const CreateConversationContainer = () => {
    const token = getTokenAuth();

    const initialValues: CreateConversationForm = {
        title: '',
    } as CreateConversationForm;

    // const socket: Socket<ClientToServerEvents, ServerToClientEvents> | unknown | any =
    //     React.useContext(RTCSocketContext);

    const loading = useStore((state) => state.loading);
    const workspace = useStore((state: WorkSpaceSliceState | any) => state.workspace);
    const users = useStore((state) => state.users);

    const getUsers = useStore((state: ConversationSlice) => state.getUsers);
    const createNewConversation = useStore((state: ConversationSlice) => state.createNewConversation);
    const getConversationDetail = useStore((state: ConversationSlice) => state.getConversationDetail);
    const inviteUsers = useStore((state: ConversationSlice) => state.inviteUsers);
    const setLoading = useStore((state: ConversationSlice) => state.setLoading);

    const handleCreateConversation = async (formValues: CreateConversationForm) => {
        try {
            setLoading(true);
            const result: Conversation = await createNewConversation(workspace.id, formValues);

            const conversationId = result._id;

            const allPromise = Promise.all([
                getConversationDetail(workspace?.id, conversationId),
                inviteUsers(workspace.id, conversationId, formValues?.selectedId),
            ]);

            const resolve = await allPromise;

            if (resolve) {
                const widgetEvent = new CustomEvent(CLIENT_EVENT.REDIRECT_UNIVERSAL, { route: '/conversations' } as any);
                window.dispatchEvent(widgetEvent);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (workspace.id) {
            (async () => {
                await getUsers(workspace.id);
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workspace.id]);

    const renderCreateConversationPage = () => {
        if (!loading && !isEmpty(users.data)) {
            return <></>;
            // return <CreateConversation initialValues={initialValues} onSubmit={handleCreateConversation} />;
        } else {
            return <LazyLoadContainer width="100%" height="100%" />;
        }
    };

    return <React.Fragment>{renderCreateConversationPage()}</React.Fragment>;
};
export default CreateConversationContainer;
