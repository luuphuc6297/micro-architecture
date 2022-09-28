import { ClientToServerEvents, ServerToClientEvents } from '@micro-architecture-coaching-cloud/models';
import React from 'react';
import io from 'socket.io-client';

console.log(io('https://dev-rtc-api.coachingworkspace.com', { transports: ['websocket'] }));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const RTCSocketContext = React.createContext();
