import { IResponseSocketItem, ItemResponse, ListResponse, Message } from '@micro-architecture-coaching-cloud/models';
import { flattenDeep, keyBy, orderBy } from 'lodash';
import { StateCreator } from 'zustand';
import { messageApis } from '../../apis/messageApis';

export interface MessageSlice {
    loading: boolean;
    messages: ListResponse;
    message: Message;
    getDataMessages: (workspaceId: string, conversationId: string, pageNumber: number) => void;
    createMessage: (workspaceId: string, conversationId: string, content: string) => void;
    updateMessagesFromSocket: (data: IResponseSocketItem) => void;
    updatePageNumber: (conversationId: string, pageNumber: number) => void;
    updateLastMessageOfConversationInList: (data: IResponseSocketItem) => void;
    updateLastMessageOfConversationInListWhenDelete: (
        messageId: string,
        conversationId: string,
        lastMessage: string
    ) => void;
    clearMessage: () => void;
}

const initMessages = {
    meta: {
        limit: 0,
        count: 0,
        totalPages: 0,
        skip: 0,
    },
    data: [],
};

const initMessage = {
    _id: '',
    type: 'Message',
    attributes: {
        _id: '',
        content: '',
        contentType: '',
        conversationId: '',
        generator: '',
        user: {
            avatarUrl: '',
            createdAt: '',
            email: '',
            firstName: '',
            lastName: '',
            updatedAt: '',
            _id: '',
        },
    },
    meta: {
        createdAt: '',
        respondedAt: '',
        updatedAt: '',
    },
};

const clearDuplicateMessage = (messages: ItemResponse[] & Message[]) => {
    return orderBy(flattenDeep(Object.values(keyBy(flattenDeep(messages), '_id'))), ['meta.createdAt'], ['asc']);
}

export const createMessageSlice: StateCreator<
    MessageSlice,
    [['zustand/devtools', never], ['zustand/persist', never]],
    []
> = (set, get) => ({
    loading: false,
    messages: initMessages,
    message: initMessage,
    getDataMessages: async (workspaceId: string, conversationId: string, pageNumber: number) => {
        let result: ListResponse;
        try {
            const response: ListResponse = await messageApis.getMessages(workspaceId, conversationId, pageNumber);
            result = response;
        } catch (e) {
            result = initMessages;
        }

        const messages = get().messages;
        console.log("messages: ", messages);
        const data = clearDuplicateMessage([...messages.data, ...result.data]);
        set(() => ({ messages: { meta: result.meta, data: data.filter((i: any) => i.attributes.conversationId === conversationId), }, loading: false }));
    },
    clearMessage: () => {
        set({ messages: initMessages, message: initMessage });
    },
    createMessage: async (workspaceId: string, conversationId: string, content: string) => {
        const result: any = await messageApis.createMessage(workspaceId, conversationId, content);

        const messages = get().messages;
        const data = clearDuplicateMessage([...messages.data, result]);

        set(() => ({ message: result }));

        set(() => ({ messages: { meta: messages.meta, data: data }, loading: false }));
    },
    updateMessagesFromSocket: async (data: IResponseSocketItem) => {
        const messages = get().messages as any;
        const newMessages = clearDuplicateMessage([...messages.data, data]);
        set(() => ({
            messages: { ...messages, data: newMessages },
            loading: false,
        }));
    },
    updatePageNumber: (conversationId: string, pageNumber: number) => {
        const messages = get().messages;
        messages.meta.skip = pageNumber * Number(messages.meta.limit);

        set(() => ({ messages, loading: false }));
    },
    updateLastMessageOfConversationInList: async (data: IResponseSocketItem) => {
        const messages = get().messages;

        const id = data.attributes.conversationId;

        const cloneData: any = messages.data || [];
        const index = cloneData.findIndex((item: ItemResponse) => item._id === id);

        if (index !== -1) {
            cloneData[index].attributes = {
                ...cloneData[index].attributes,
                ...{ lastMessage: data.attributes },
            };
            const newMessages = clearDuplicateMessage([...cloneData]);
            messages.data = newMessages;
            set(() => ({ messages, loading: false }));
        }
    },
    updateLastMessageOfConversationInListWhenDelete: async (
        messageId: string,
        conversationId: string,
        lastMessage: string
    ) => {
        const messages = get().messages;

        const cloneData: any = messages.data || [];

        const index = cloneData.findIndex((item: ItemResponse) => item._id === conversationId);

        if (index !== -1) {
            cloneData[index].attributes = {
                ...cloneData[index].attributes,
                ...{ lastMessage },
            };
            const newMessages = clearDuplicateMessage([...cloneData]);
            messages.data = newMessages;
            set(() => ({ messages: { ...messages, ...{ data: newMessages } }, loading: false }));
        }
    },
});
