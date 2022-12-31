import styled from '@emotion/styled';
import { useEvent, useStore } from 'effector-react';

import { Button } from '@/shared/ui';
import { elementModel } from '@/entities/element';
import { RPSElement } from '@/shared/types/element';
import { ELEMENT_TO_ELEMENT_LABEL_MAP } from '@/entities/element/utils/elementConstants';
import { userModel } from '@/entities/user';
import { rpsSocketModel } from '@/entities/rpsSocket';

export const SelectMeElement = () => {
  const selectedElement = useStore(elementModel.$meElement);
  const hasOpponentChoseElement = useStore(
    elementModel.$hasOpponentChoseElement,
  );
  const { username: opponentUsername } = useStore(userModel.$opponent);

  const rpsSocket = useStore(rpsSocketModel.$rpsSocket);

  const handleSelectMeElement = useEvent(elementModel.meElementSelected);

  const makeHandleSelectMeElement = (element: RPSElement) => () => {
    if (!rpsSocket) {
      return;
    }

    rpsSocket.emitChooseElement(element);
    handleSelectMeElement(element);
  };

  if (!opponentUsername) {
    return null;
  }

  if (hasOpponentChoseElement && selectedElement) {
    return (
      <ElementsButtonsWrapper>
        <Button>{ELEMENT_TO_ELEMENT_LABEL_MAP[selectedElement]}</Button>
      </ElementsButtonsWrapper>
    );
  }

  return (
    <ElementsButtonsWrapper>
      <Button
        onClick={makeHandleSelectMeElement('rock')}
        isDisabled={selectedElement !== 'rock'}
      >
        Rock
      </Button>

      <Button
        onClick={makeHandleSelectMeElement('paper')}
        isDisabled={selectedElement !== 'paper'}
      >
        Paper
      </Button>

      <Button
        onClick={makeHandleSelectMeElement('scissors')}
        isDisabled={selectedElement !== 'scissors'}
      >
        Scissors
      </Button>
    </ElementsButtonsWrapper>
  );
};

const ElementsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
