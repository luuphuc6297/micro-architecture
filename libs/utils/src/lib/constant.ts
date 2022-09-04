import { blue, cyan, deepPurple, green, grey, indigo, lightBlue, teal } from '@mui/material/colors';

export const TINY_MCE_KEY = '6hcownlou0x604gjtu5fy0d35zhd2osurzojn0n5eemutva8';

export const ENDPOINTS = {
    CONVERSATIONS: '/conversations',
    GET_USERS: '/users',
    INVITE_USERS: '/invite-users',
    MESSAGES: '/messages',
    START_TYPING: '/typing/start',
    STOP_TYPING: '/typing/stop',
    LINKS: '/links',

    // BOOKING SERVICES
    ATTENDEE_EVENTS: '/my/attend_events',
    ATTENDEE_HOSTS: '/my/hosts',
    ATTENDEE_EVENT_TYPES: `/event_types`,
    ATTENDEE_FREE_BLOCKS_EVENT_TYPE: `/group_availabilities`,
};

export const USER_STATUS = {
    PENDING: 'pending',
    NEWBIE: 'newbie',
    ACTIVE: 'active',
};

export const CLIENT_EVENT = {
    REDIRECT_UNIVERSAL: 'REDIRECT_UNIVERSAL',
    ID_CONVERSATION: 'ID_CONVERSATION',
    CHECK_AUTHEN: 'CHECK_AUTHEN',
    ON_OFF_MODAL: 'ON_OFF_MODAL',
};

export const Colors = [
    blue[300],
    blue[500],
    blue[700],
    indigo[300],
    indigo[500],
    indigo[700],
    green[300],
    green[500],
    green[700],
    grey[500],
    teal[300],
    teal[500],
    teal[700],
    cyan[300],
    cyan[500],
    cyan[700],
    lightBlue[500],
    deepPurple[500],
];
