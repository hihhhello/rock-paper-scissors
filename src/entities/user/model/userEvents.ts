import { createEvent, sample } from 'effector';

import { localStorageApi, rpsSocketApi } from '@/shared/api';

export const userUsernameSet = createEvent<string>();

export const usernameInputChanged = createEvent<string>();

export const userInitiallyLoaded = createEvent();

export const opponentUsernameSet = createEvent<string | null>();

sample({
  clock: userUsernameSet,
  target: [localStorageApi.user.setUsernameFx, rpsSocketApi.initRPSSocketFx],
});

sample({
  clock: userInitiallyLoaded,
  target: localStorageApi.user.getUsernameFx,
});
