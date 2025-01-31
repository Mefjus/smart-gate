import * as dotenv from 'dotenv';
import socketClient from 'socket.io-client';

import { onInit, onOpen } from './hooks';

dotenv.config();
onInit();

const socket = socketClient(process.env.API_URL ?? '', {
  auth: {
    ticket: process.env.AUTH_TICKET,
  },
});

enum WebSocketEvent {
  CHECK_DEVICE_CONNECTION = 'checkDeviceConnection',
  TOGGLE_GATE = 'toggleGate',
}

socket.on('message', (eventType: WebSocketEvent) => {
  console.log('New message with eventType:', eventType);
  switch (eventType) {
    case WebSocketEvent.TOGGLE_GATE: {
      onOpen();
      break;
    }
    default: {
      console.log('Unsupported event type:', eventType);
      break;
    }
  }
});

socket.on('connect', () => {
  console.log('connected');
});

socket.on('disconnect', () => {
  console.log('disconnect');
});
