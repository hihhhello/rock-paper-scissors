import { io } from 'socket.io-client';

import { rpsSocketApi } from '@/shared/api';

export const makeRPSSocketApi = (username: string) =>
  rpsSocketApi.coldRPSSocketApi(
    /**
     * TODO: can be moved to env file.
     */
    io('http://localhost:4000', {
      query: {
        username,
      },
    }),
  );
