import styled from '@emotion/styled';
import { useStore } from 'effector-react';

import { userModel } from '@/entities/user';
import { scoreModel } from '@/entities/score';

export const ScorePreview = () => {
  const { username } = useStore(userModel.$opponent);
  const { me, opponent } = useStore(scoreModel.$score);

  if (!username) {
    return null;
  }

  return (
    <div>
      <MeScore>{me}</MeScore>

      <Typography>:</Typography>

      <Typography>{opponent}</Typography>
    </div>
  );
};

const Typography = styled.span`
  position: relative;
  font-weight: 500;
  font-size: 32px;
  margin-left: 64px;
  :first-of-type {
    margin-left: 0;
  }
`;

const MeScore = styled(Typography)`
  ::after {
    content: '(You)';
    font-size: 16px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: grey;
  }
`;
