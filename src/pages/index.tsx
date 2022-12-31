import { useEvent, useStore } from 'effector-react';
import { useMount } from 'react-use';

import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
import { userModel } from '@/entities/user';

/**
 * TODO: user react-router-dom for multipage.
 */
export const Router = () => {
  const { username } = useStore(userModel.$user);

  const handleUserInitialLoad = useEvent(userModel.userInitiallyLoaded);

  useMount(() => {
    handleUserInitialLoad();
  });

  /**
   * TODO: handle user initial load with loading page.
   */
  if (!username) {
    return <LoginPage />;
  }

  return <MainPage />;
};
