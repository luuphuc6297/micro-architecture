import io from 'socket.io-client';

export const socketConnection = io('http://192.168.0.11:1337');
