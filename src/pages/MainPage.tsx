/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';

import { SelectMeElement } from '@/features/SelectMeElement/SelectMeElement';
import { userModel } from '@/entities/user';
import { elementModel } from '@/entities/element';
import { OpponentPreview } from '@/entities/user/ui/OpponentPreview';
import { ScorePreview } from '@/features/ScorePreview';

export const MainPage = () => {
  const { username: opponentUsername } = useStore(userModel.$opponent);
  const opponentElement = useStore(elementModel.$opponentElement);
  const hasOpponentChoseElement = useStore(
    elementModel.$hasOpponentChoseElement,
  );

  return (
    <MainPageLayout>
      <GameWrapper>
        {opponentUsername ? (
          <>
            <OpponentPreview
              username={opponentUsername}
              element={opponentElement}
              hasChose={hasOpponentChoseElement}
            />

            <ScorePreview />
          </>
        ) : (
          <NoOpponentPlaceholder>No opponent yet</NoOpponentPlaceholder>
        )}
      </GameWrapper>

      <SelectMeElement />
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const NoOpponentPlaceholder = styled.span``;
