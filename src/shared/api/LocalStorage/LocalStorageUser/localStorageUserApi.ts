import { LOCAL_STORAGE_USERNAME_KEY } from '@/shared/api/LocalStorage/utils/localStorageConstants';

export const getUsername = () =>
  localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY);

export const setUsername = (username: string) =>
  localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, username);
