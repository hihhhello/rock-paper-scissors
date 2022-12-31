import { createEvent } from 'effector';

export const meWon = createEvent();

export const opponentWon = createEvent();

export const scoreCleared = createEvent();

export const hasGameOverChanged = createEvent<boolean>();
