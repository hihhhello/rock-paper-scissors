import { Socket } from 'socket.io-client';

import {
  OnGameFinishedCb,
  OnSocketConnectionStatusCb,
} from './utils/rpsSocketApiTypes';
import { RPSElement } from '@/shared/types/element';

export const coldRPSSocketApi = (socketIo: Socket) => ({
  onConnected: (cb: OnSocketConnectionStatusCb) => socketIo.on('connected', cb),
  onDisconnected: (cb: OnSocketConnectionStatusCb) =>
    socketIo.on('disconnected', cb),
  onOpponentMadeChoice: (cb: () => void) =>
    socketIo.on('opponent_made_choice', cb),
  onPlayersReceived: (cb: (players: string[]) => void) =>
    socketIo.on('players_received', cb),
  onGameFinished: (cb: OnGameFinishedCb) => socketIo.on('game_finished', cb),
  emitGetPlayers: () => socketIo.emit('get_players'),
  emitChooseElement: (element: RPSElement) => socketIo.emit('choose', element),
});

export type RPSSocketApi = ReturnType<typeof coldRPSSocketApi>;
