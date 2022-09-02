import { Meta } from './common';

interface TimeZone {
    value: string;
    offset: number;
    abbrev: string;
}

export interface AttributesUser {
    email: string;
    status: string;
    firstName: string;
    lastName: string;
    phone?: string;
    timezone?: TimeZone;
    avatarUrl?: string;
    password: string;
    bio?: string;
    setPassword: boolean;
}

export interface ShortCutAttributesUser {
    avatarUrl?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    _id: string;
}

export interface CurrentUser {
    id: string;
    attributes: AttributesUser;
}

export interface WorkspaceUser {
    _id: string;
    type: string;
    attributes: ShortCutAttributesUser;
}

export interface AttributesInviteUsers {
    message: string;
}

export interface InviteUserDataProps {
    attributes: AttributesInviteUsers;
    meta: Meta;
}

export interface UserInMessage {
    avatarUrl: string;
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    updatedAt: string;
    _id: string;
}
