import { createEvent } from 'effector';

import { RPSElement } from '@/shared/types/element';

export const meElementSelected = createEvent<RPSElement>();

export const opponentMadeChoice = createEvent<boolean>();

export const opponentElementChanged = createEvent<RPSElement | null>();

export const elementsCleared = createEvent();
