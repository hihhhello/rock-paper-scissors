import { createStore } from 'effector';

import { SCORE_STORE_DEFAULT_VALUES } from '@/entities/score/utils/scoreConstants';
import {
  hasGameOverChanged,
  meWon,
  opponentWon,
  scoreCleared,
} from '@/entities/score/model/scoreEvents';

export const $score = createStore(SCORE_STORE_DEFAULT_VALUES);

export const $hasGameOver = createStore(false);

$score
  .on(meWon, (scoreStore) => ({
    ...scoreStore,
    me: scoreStore.me + 1,
  }))
  .on(opponentWon, (scoreStore) => ({
    ...scoreStore,
    opponent: scoreStore.opponent + 1,
  }))
  .on(scoreCleared, () => SCORE_STORE_DEFAULT_VALUES);

$hasGameOver.on(hasGameOverChanged, (_, value) => value);
