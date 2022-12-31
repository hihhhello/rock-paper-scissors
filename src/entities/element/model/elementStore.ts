import { createStore } from 'effector';

import { ELEMENT_STORE_DEFAULT_VALUE } from '@/entities/element/utils/elementConstants';
import { elementModel } from '@/entities/element';

export const $meElement = createStore(ELEMENT_STORE_DEFAULT_VALUE);

export const $hasOpponentChoseElement = createStore(false);

export const $opponentElement = createStore(ELEMENT_STORE_DEFAULT_VALUE);

$meElement
  .on(elementModel.meElementSelected, (_, element) => element)
  .on(elementModel.elementsCleared, () => ELEMENT_STORE_DEFAULT_VALUE);

$hasOpponentChoseElement
  .on(elementModel.opponentMadeChoice, (_, value) => value)
  .on(elementModel.elementsCleared, () => false);

$opponentElement
  .on(elementModel.opponentElementChanged, (_, element) => element)
  .on(elementModel.elementsCleared, () => ELEMENT_STORE_DEFAULT_VALUE);
