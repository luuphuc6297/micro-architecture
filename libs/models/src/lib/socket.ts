import { AttributesConversation } from './conversation';
import { MessageAttributes } from './messages';
import { AttributesUser } from './user';
import { Meta } from './common';

export interface SocketData {
    name: string;
    age: number;
}

export interface ResponseSocketItem {
    _id: string;
    attributes: AttributesConversation & MessageAttributes;
    meta: Meta;
    type: string;
}

export interface IResponseSocket {
    attributes: ISystemNotification & IAttributesTyping;
    meta: Meta;
}

export interface IResponseSocketItem {
    attributes: AttributesConversation & MessageAttributes;
    meta: Meta;
    type: string;
    _id: string;
}

export interface ISystemNotification {
    conversationId: string;
    message: string;
    requestType: 'REQUEST_DELETE_CONVERSATION' | string;
}

export interface IAttributesTyping {
    conversationId: string;
    user: AttributesUser;
}
