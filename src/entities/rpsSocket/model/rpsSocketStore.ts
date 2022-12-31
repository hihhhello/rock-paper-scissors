import { createEvent, createStore, sample } from 'effector';

import { rpsSocketApi } from '@/shared/api';
import { RPSSocketApi } from '@/shared/api/RPSSocket';

export const $rpsSocket = createStore<RPSSocketApi | null>(null);

export const pageMounted = createEvent();

$rpsSocket
  .on(rpsSocketApi.initRPSSocketFx.doneData, (_, socket) => socket)
  .on(rpsSocketApi.initLocalStorageSocketFx.doneData, (_, socket) => socket);

sample({
  clock: pageMounted,
  target: rpsSocketApi.initLocalStorageSocketFx,
});
