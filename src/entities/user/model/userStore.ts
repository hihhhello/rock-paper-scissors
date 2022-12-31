import { createStore } from 'effector';

import { USER_STORE_DEFAULT_VALUES } from '@/entities/user/utils/userConstants';
import { localStorageApi } from '@/shared/api';
import { userModel } from '@/entities/user';

export const $user = createStore(USER_STORE_DEFAULT_VALUES);

export const $usernameInput = createStore('');

/**
 * TODO: can be moved to sessionStore. But created here just for convenience.
 */
export const $opponent = createStore(USER_STORE_DEFAULT_VALUES);

$user
  .on(localStorageApi.user.setUsernameFx.doneData, (_, username) => ({
    username,
  }))
  .on(localStorageApi.user.getUsernameFx.doneData, (_, username) => ({
    username,
  }));

$usernameInput.on(userModel.usernameInputChanged, (_, username) => username);

$opponent.on(userModel.opponentUsernameSet, (_, username) => ({
  username,
}));
