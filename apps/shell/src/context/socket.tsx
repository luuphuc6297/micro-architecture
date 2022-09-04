import React from 'react';
import io, { Socket } from 'socket.io-client';

export const socket: Socket<any, any> = io('https://dev-rtc-api.coachingworkspace.com', { transports: ['websocket'] });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const SocketContext = React.createContext();
