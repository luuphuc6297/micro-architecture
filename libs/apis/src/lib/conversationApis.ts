import { Conversation, ItemResponse, ListResponse } from '../../../models/src/lib/models';
import axiosRTC from './clients/axiosRTC';

interface CreateConversationDataProps {
    title?: string;
    color?: string;
}

export interface InviteUserDataProps {
    userIdArray: string[];
    conversationId: string;
    isEmit: boolean;
}
export interface IDataUsersConversation {
    [id: string]: ItemResponse;
}

export const conversationApis = {
    getListConversation: (workspaceId: string): Promise<ListResponse> => {
        const url = `/${workspaceId}/api/conversations`;
        return axiosRTC.get(url);
    },
    getConversationDetail: (workspaceId: string, conversationId: string): Promise<Conversation> => {
        const url = `/${workspaceId}/api/conversations/${conversationId}`;

        return axiosRTC.get(url);
    },
    getListUser: (workspaceId: string): Promise<ListResponse> => {
        const url = `/${workspaceId}/api/users`;
        return axiosRTC.get(url);
    },
    getUsersConversation: (workspaceId: string, conversationId: string): Promise<ListResponse> => {
        const url = `/${workspaceId}/api/conversations/${conversationId}/users`;
        return axiosRTC.get(url);
    },
    getLinksConversation: (workspaceId: string, conversationId: string): Promise<ListResponse> => {
        const url = `/${workspaceId}/api/links/${conversationId}`;
        return axiosRTC.get(url);
    },
    createConversation(workspaceId: string, data: CreateConversationDataProps): Promise<Conversation> {
        const url = `/${workspaceId}/api/conversations`;
        return axiosRTC.post(url, data);
    },
    inviteManyUser: (workspaceId: string, data: InviteUserDataProps): Promise<any> => {
        const url = `/${workspaceId}/api/conversations/${data.conversationId}/invite-users`;
        return axiosRTC.post(url, data);
    },
    removeConversation: (workspaceId: string, conversationId: string) => {
        const url = `/${workspaceId}/api/conversations/${conversationId}`;
        return axiosRTC.delete(url);
    },
    updateConversation: (workspaceId: string, conversationId: string, data: any) => {
        const url = `/${workspaceId}/api/conversations/${conversationId}`;
        return axiosRTC.patch(url, data);
    },
};
