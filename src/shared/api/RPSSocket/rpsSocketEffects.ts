import { createEffect } from 'effector';

import { rpsSocketApi, localStorageApi } from '@/shared/api';

export const initRPSSocketFx = createEffect<string, rpsSocketApi.RPSSocketApi>(
  (username: string) => rpsSocketApi.makeRPSSocketApi(username),
);

export const initLocalStorageSocketFx = createEffect(() => {
  const username = localStorageApi.user.getUsername();

  if (!username) {
    throw new Error('No username found in LocalStorage');
  }

  return rpsSocketApi.makeRPSSocketApi(username);
});
