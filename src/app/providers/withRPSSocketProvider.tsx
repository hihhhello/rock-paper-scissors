import { useCallback, useEffect } from 'react';
import { useEvent, useStore } from 'effector-react';

import { userModel } from '@/entities/user';
import { elementModel } from '@/entities/element';
import { scoreModel } from '@/entities/score';
import { rpsSocketModel } from '@/entities/rpsSocket';
import { useMount } from 'react-use';

export const withRPSSocketProvider =
  (component: () => React.ReactNode) => () => {
    const { username } = useStore(userModel.$user);
    const { username: opponentUsername } = useStore(userModel.$opponent);
    const rpsSocket = useStore(rpsSocketModel.$rpsSocket);

    const handlePageMount = useEvent(rpsSocketModel.pageMounted);

    const initRpsSocketApi = useCallback(() => {
      if (rpsSocket) {
        rpsSocket.emitGetPlayers();

        rpsSocket.onOpponentMadeChoice(() =>
          elementModel.opponentMadeChoice(true),
        );

        rpsSocket.onDisconnected(() => {
          userModel.opponentUsernameSet(null);
          elementModel.elementsCleared();
          scoreModel.scoreCleared();
          scoreModel.hasGameOverChanged(false);
        });

        rpsSocket.onConnected(
          (payload) =>
            payload.username !== username &&
            userModel.opponentUsernameSet(payload.username),
        );

        rpsSocket.onPlayersReceived(
          (players) =>
            players.length === 2 &&
            userModel.opponentUsernameSet(
              players.filter(
                (playerUsername) => playerUsername !== username,
              )[0],
            ),
        );

        rpsSocket.onGameFinished(({ results }) => {
          const me = results.find((result) => result.username === username);
          const opponent = results.find(
            (result) => result.username === opponentUsername,
          );

          if (!me || !opponent) {
            return;
          }

          if (me.choice === opponent.choice) {
            elementModel.elementsCleared();
            elementModel.opponentMadeChoice(false);

            return;
          }

          elementModel.elementsCleared();
          elementModel.opponentMadeChoice(false);

          if (
            (me.choice === 'rock' && opponent.choice === 'scissors') ||
            (me.choice === 'scissors' && opponent.choice === 'paper') ||
            (me.choice === 'paper' && opponent.choice === 'rock')
          ) {
            return scoreModel.meWon();
          }

          return scoreModel.opponentWon();
        });
      }
    }, [opponentUsername, rpsSocket, username]);

    useMount(() => handlePageMount());

    useEffect(() => {
      if (rpsSocket) {
        initRpsSocketApi();
      }
    }, [initRpsSocketApi, rpsSocket]);

    return component();
  };
