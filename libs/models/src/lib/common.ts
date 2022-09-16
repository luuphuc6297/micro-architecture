import { AttributesConversation } from './conversation';
import { Message } from './messages';
import { AttributesUser } from './user';

export interface MetaParams {
    limit: number;
    count: number;
    totalPages: number;
    skip: number;
}

export interface Meta {
    createdAt: string;
    respondedAt: string;
    updatedAt: string;
}

export interface ItemResponse {
    attributes: AttributesUser & AttributesConversation;
    meta: Meta;
    type: string;
    _id: string;
    isCreated?: boolean;
}

export interface ListResponse {
    meta: MetaParams;
    data: ItemResponse[] & Message[];
}

export interface ItemFormat {
    fullDate: string;
    fullTime: string;
}
