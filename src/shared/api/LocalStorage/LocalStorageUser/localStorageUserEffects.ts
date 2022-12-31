import { createEffect } from 'effector';

import { localStorageApi } from '@/shared/api';

export const getUsernameFx = createEffect<void, string | null>(() =>
  localStorageApi.user.getUsername(),
);

export const setUsernameFx = createEffect<string, string>((username) => {
  localStorageApi.user.setUsername(username);
  return username;
});
